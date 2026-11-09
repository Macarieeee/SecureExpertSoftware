/**
 * Funcție Vercel: primește formularul și îl trimite pe email prin Resend.
 * Opțional, salvează fiecare solicitare și într-un Google Sheet (baza de date a cererilor).
 *
 * Variabile de mediu (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY      cheia API din resend.com (obligatoriu)
 *   CONTACT_TO          unde ajung solicitările, implicit office@sxs.ro
 *   CONTACT_FROM        expeditorul, pe domeniul verificat în Resend, ex. "Site SXS <site@sxs.ro>"
 *   SHEETS_WEBHOOK_URL  (opțional) URL-ul Google Apps Script care adaugă un rând în tabel
 */

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const clip = (s, n) => String(s ?? '').trim().slice(0, n)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}

  // capcana pentru roboți
  if (body.website) return res.status(200).json({ ok: true })

  const d = {
    institution: clip(body.institution, 200),
    institutionType: clip(body.institutionType, 100),
    role: clip(body.role, 100),
    name: clip(body.name, 120),
    phone: clip(body.phone, 40),
    email: clip(body.email, 160),
    modules: Array.isArray(body.modules) ? body.modules.slice(0, 15).map((m) => clip(m, 80)) : [],
    problems: clip(body.problems, 4000),
    timing: clip(body.timing, 60),
    consent: body.consent === 'da',
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)
  if (!d.institution || !d.name || !d.phone || !emailOk || !d.consent) {
    return res.status(400).json({ error: 'invalid' })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(500).json({ error: 'not_configured' })

  const to = process.env.CONTACT_TO || 'office@sxs.ro'
  const from = process.env.CONTACT_FROM || 'Site SXS <site@sxs.ro>'
  const when = new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' })

  const rows = [
    ['Instituția', d.institution],
    ['Tip instituție', d.institutionType],
    ['Persoana', d.name],
    ['Departament', d.role],
    ['Telefon', d.phone],
    ['Email', d.email],
    ['Interes', d.modules.join(', ') || '—'],
    ['Termen dorit', d.timing || '—'],
    ['Probleme / nevoi', d.problems || '—'],
    ['Primită la', when],
  ]

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#1b1a1d">
      <h2 style="color:#AC0016;margin:0 0 12px">Solicitare nouă de pe sxs.ro</h2>
      <p style="margin:0 0 16px">Sunați persoana de contact în aceeași zi lucrătoare.</p>
      <table cellpadding="8" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="border-bottom:1px solid #eee;color:#5b565e;vertical-align:top;white-space:nowrap">${k}</td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${esc(v)}</td></tr>`,
          )
          .join('')}
      </table>
    </div>`

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: d.email,
        subject: `Solicitare prezentare: ${d.institution}`,
        html,
        text,
      }),
    })
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text())
      return res.status(502).json({ error: 'send_failed' })
    }
  } catch (e) {
    console.error('Resend exception', e)
    return res.status(502).json({ error: 'send_failed' })
  }

  // Opțional: un rând nou în Google Sheet. O eroare aici nu blochează trimiterea.
  if (process.env.SHEETS_WEBHOOK_URL) {
    try {
      await fetch(process.env.SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, modules: d.modules.join(', '), receivedAt: when }),
      })
    } catch (e) {
      console.error('Sheets webhook failed', e)
    }
  }

  return res.status(200).json({ ok: true })
}
