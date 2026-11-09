# sxs.ro — site Secure eXpert Software

React + Vite + Tailwind CSS. Doar în română, fără panou de administrare: textele se modifică direct în fișierele de date.

## Pornire locală

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # versiunea de producție, în dist/
```

## Publicare pe GitHub Pages

Repository: https://github.com/Macarieeee/SecureExpertSoftware

```bash
npm install
npm run deploy
```

Comanda construiește site-ul și actualizează automat ramura `gh-pages` folosind autentificarea Git pentru GitHub. Site: https://Macarieeee.github.io/SecureExpertSoftware/

În Settings → Pages, sursa trebuie să fie „Deploy from a branch”, ramura `gh-pages`, folderul `/ (root)`.

Build-ul pentru Pages folosește baza `/SecureExpertSoftware/` și rute cu `#`, astfel încât paginile interne să funcționeze și la reîncărcare. `npm run build` păstrează configurația pentru Vercel/CyberFolks.

`npm run deploy` publică site-ul compilat; modificările surselor se salvează separat cu `git add`, `git commit` și `git push origin main`.

GitHub Pages nu execută `api/contact.js` sau PHP. Pentru formular este necesar un backend extern; setați `VITE_CONTACT_ENDPOINT` în `.env.local` la URL-ul complet al acestuia înainte de deploy și permiteți originea site-ului în configurația CORS a backend-ului. Nu puneți chei secrete în variabile `VITE_*`.

## Unde se modifică ce

| Ce vreți să schimbați | Fișier |
|---|---|
| Date firmă, telefon, adresă, cifre (988 contracte etc.), clienți, certificări | `src/data/company.js` |
| Textele aplicațiilor (PROCONT, PROGEST, PROSAL…) și serviciile | `src/data/products.js` |
| Securitate cibernetică (PROSECURE) | `src/data/prosecure.js` |
| Întrebări frecvente | `src/data/faq.jsx` |
| Recomandări de la clienți | `src/data/testimonials.js` |
| Politica de confidențialitate | `src/pages/Privacy.jsx` |
| Culori și fonturi | `src/index.css` (blocul `@theme`) |

Anii de activitate se calculează automat din 2008.

## Conținut pregătit, dar ascuns

În `src/config/features.js` puneți `true` când materialele sunt gata:

- `SHOW_TESTIMONIALS`: recomandările clienților (completați întâi `src/data/testimonials.js`)
- `SHOW_PROSECURE_APP`: aplicația PROSECURE (completați `src/data/prosecure.js` → `app`)
- `SHOW_ISO9001`: certificatul ISO 9001 (completați `src/data/company.js` → `CERTIFICATIONS.iso9001`)
- `ANALYTICS_ENABLED`: vedeți și comentariul din `index.html`

## Formularul de contact (Resend)

Formularul trimite solicitarea pe email la office@sxs.ro prin Resend și, opțional, o salvează ca rând nou într-un Google Sheet.

**Pregătire Resend (o singură dată):**
1. Cont pe resend.com → Domains → Add domain → `sxs.ro`.
2. Adăugați în DNS-ul domeniului înregistrările afișate de Resend (SPF, DKIM). Până nu sunt verificate, emailurile nu pleacă.
3. API Keys → Create API key (permisiune „Sending access”).

### Varianta A: Vercel (recomandată)

1. Urcați proiectul pe GitHub și importați-l în Vercel (framework detectat automat: Vite).
2. Settings → Environment Variables:
   - `RESEND_API_KEY` = cheia de la Resend
   - `CONTACT_TO` = `office@sxs.ro`
   - `CONTACT_FROM` = `Site SXS <site@sxs.ro>`
   - `SHEETS_WEBHOOK_URL` = (opțional, vezi mai jos)
3. Deploy. Funcția din `api/contact.js` rulează automat.
4. Settings → Domains → adăugați `sxs.ro` și `www.sxs.ro` și urmați instrucțiunile DNS.

### Varianta B: CyberFolks (cPanel, PHP)

1. Build cu endpoint-ul PHP: `VITE_CONTACT_ENDPOINT=/contact.php npm run build`
2. Urcați **conținutul** folderului `dist/` în `public_html` (inclusiv `.htaccess`).
3. Copiați `deploy-cyberfolks/config.example.php` ca `config.php`, completați cheile și urcați `contact.php` + `config.php` în `public_html`.

### Baza de date a solicitărilor (opțional)

Instrucțiunile sunt în `docs/google-sheets-apps-script.js`: un Google Sheet primește fiecare solicitare ca rând nou, cu o coloană „Status” pe care o puteți actualiza după ce sunați.

## Înainte de lansare

- Verificați pragul achiziției directe din `src/data/company.js` (acum 270.120 lei fără TVA).
- Treceți politica de confidențialitate prin responsabilul GDPR.
- Testați formularul o dată după publicare.
