import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CONTACT_ENDPOINT } from '../config/features'
import { COMPANY } from '../data/company'

const INSTITUTION_TYPES = [
  'Spital public',
  'Institut național sau centru de specialitate',
  'Serviciu de ambulanță',
  'Direcție de Sănătate Publică',
  'Clinică privată',
  'Altă instituție publică',
]

const ROLES = ['Management', 'Achiziții', 'Contabilitate / economic', 'RUNOS', 'IT', 'Personal medical', 'Altul']

const MODULES = [
  ['procont', 'PROCONT, contabilitate'],
  ['progest', 'PROGEST, gestiune'],
  ['prosecure', 'Securitate cibernetică (ISO 27001, NIS2)'],
  ['prosal', 'PROSAL, salarizare'],
  ['promedic', 'PROMEDIC, medical'],
  ['profarm', 'PROFARM, farmacie'],
  ['proreg', 'PROREG, registratură'],
  ['profaz', 'PROFAZ, parc auto'],
  ['promanagement', 'PROMANAGEMENT, DSP'],
  ['hardware', 'Echipamente IT'],
  ['nesigur', 'Nu știu încă, vreau o recomandare'],
]

const TIMING = ['Cât mai curând', 'În 1–3 luni', 'În 3–6 luni', 'Deocamdată mă informez']

const SECURITY_TYPES = ['Spital judetean de urgenta', 'Spital judetean', 'Spital municipal', 'Spital clinic', 'Institut national', 'Ambulatoriu de specialitate', 'Alta institutie medicala']
const COUNTIES = ['Alba', 'Arad', 'Arges', 'Bacau', 'Bihor', 'Bistrita-Nasaud', 'Botosani', 'Braila', 'Brasov', 'Bucuresti', 'Buzau', 'Calarasi', 'Caras-Severin', 'Cluj', 'Constanta', 'Covasna', 'Dambovita', 'Dolj', 'Galati', 'Giurgiu', 'Gorj', 'Harghita', 'Hunedoara', 'Ialomita', 'Iasi', 'Ilfov', 'Maramures', 'Mehedinti', 'Mures', 'Neamt', 'Olt', 'Prahova', 'Salaj', 'Satu Mare', 'Sibiu', 'Suceava', 'Teleorman', 'Timis', 'Tulcea', 'Valcea', 'Vaslui', 'Vrancea']

export default function ContactForm({ security = false }) {
  const [params] = useSearchParams()
  const pre = security ? 'prosecure' : params.get('modul')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const [modules, setModules] = useState(pre ? [pre] : [])

  const toggle = (id) => setModules((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]))

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    data.modules = MODULES.filter(([id]) => security ? id === 'prosecure' : modules.includes(id)).map(([, label]) => label)
    if (security) data.problems = `Judet: ${data.county || '-'}\n${data.problems || ''}`

    setStatus('sending')
    setError('')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'send_failed')
      }
      setStatus('sent')
      form.reset()
      setModules([])
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg border border-white/12 bg-graphite-2 p-8" role="status">
        <h3 className="text-[24px] font-semibold text-white">Solicitarea a fost trimisă.</h3>
        <p className="mt-3 text-white/75">
          {security ? 'Un coleg vă va contacta pentru analiza de conformitate.' : 'Un coleg vă sună, de regulă în aceeași zi lucrătoare, ca să stabilim prezentarea.'} Dacă e urgent, ne găsiți
          direct la{' '}
          <a href={COMPANY.phoneHref} className="font-semibold text-white underline decoration-crimson-light underline-offset-4">
            {COMPANY.phone}
          </a>
          .
        </p>
      </div>
    )
  }

  const label = 'mb-1.5 block text-[14px] font-medium text-white/80'

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      {/* capcană pentru roboți: rămâne goală la oameni */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="institution" className={label}>Instituția</label>
          <input id="institution" name="institution" required className="field" placeholder="ex. Spitalul Județean de Urgență…" />
        </div>
        <div>
          <label htmlFor="institutionType" className={label}>Tipul instituției</label>
          <select id="institutionType" name="institutionType" required className="field" defaultValue="">
            <option value="" disabled>Alegeți</option>
            {(security ? SECURITY_TYPES : INSTITUTION_TYPES).map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        {security ? (
          <div>
            <label htmlFor="county" className={label}>Judetul</label>
            <select id="county" name="county" className="field" defaultValue="">
              <option value="" disabled>Alegeti</option>
              {COUNTIES.map((county) => <option key={county}>{county}</option>)}
            </select>
          </div>
        ) : (
        <div>
          <label htmlFor="role" className={label}>Departamentul dvs.</label>
          <select id="role" name="role" required className="field" defaultValue="">
            <option value="" disabled>Alegeți</option>
            {ROLES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        )}
        <div className="sm:col-span-2">
          <label htmlFor="name" className={label}>{security ? 'Numele si functia dvs.' : 'Numele dvs.'}</label>
          <input id="name" name="name" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Telefon</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className="field" />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
      </div>

      {!security && <fieldset>
        <legend className={label}>Ce vă interesează</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {MODULES.map(([id, text]) => {
            const on = modules.includes(id)
            return (
              <label
                key={id}
                className={`cursor-pointer rounded-md border px-3 py-2 text-[14px] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-crimson-light ${
                  on ? 'border-crimson-light bg-crimson/20 text-white' : 'border-graphite-3 text-white/70 hover:border-white/40'
                }`}
              >
                <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(id)} />
                {text}
              </label>
            )
          })}
        </div>
      </fieldset>}

      <div>
        <label htmlFor="problems" className={label}>{security ? 'Observatii (optional)' : 'Ce probleme aveți acum și ce ar trebui să rezolve soluția?'}</label>
        <textarea
          id="problems"
          name="problems"
          rows={4}
          className="field resize-y"
          placeholder={security ? undefined : 'ex. Ministerul ne cere o raportare pe care programul actual nu o scoate; nu avem suport când apare o problemă…'}
        />
      </div>

      {!security && <div>
        <label htmlFor="timing" className={label}>Când ați vrea să fie implementată?</label>
        <select id="timing" name="timing" className="field" defaultValue="">
          <option value="" disabled>Alegeți</option>
          {TIMING.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>}

      <label className="flex gap-3 text-[14px] text-white/70">
        <input type="checkbox" name="consent" value="da" required className="mt-1 h-4 w-4 shrink-0 accent-crimson" />
        <span>
          {security ? 'Sunt de acord ca SXS sa utilizeze aceste date pentru a ma contacta. Detalii in' : 'Sunt de acord ca SXS să folosească aceste date pentru a mă contacta în legătură cu solicitarea mea. Detalii în'}{' '}
          <Link to="/confidentialitate" className="text-white underline underline-offset-4">
            politica de confidențialitate
          </Link>
          .
        </span>
      </label>

      {status === 'error' && (
        <p className="rounded-md border border-crimson-light/50 bg-crimson/15 px-4 py-3 text-[15px] text-white" role="alert">
          {error === 'invalid'
            ? 'Completați instituția, numele, telefonul și emailul, apoi trimiteți din nou.'
            : <>Solicitarea nu a putut fi trimisă. Încercați din nou sau sunați-ne la <a className="font-semibold underline" href={COMPANY.phoneHref}>{COMPANY.phone}</a>.</>}
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Se trimite…' : 'Trimiteți solicitarea'}
      </button>
    </form>
  )
}
