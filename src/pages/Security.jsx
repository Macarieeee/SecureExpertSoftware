import { Link } from 'react-router-dom'
import { PROSECURE } from '../data/prosecure'
import { CERTIFICATIONS } from '../data/company'
import { SECURITY_FAQ } from '../data/faq'
import { FEATURES } from '../config/features'
import CheckList from '../components/CheckList'
import Faq from '../components/Faq'
import ContactSection from '../components/ContactSection'
import useMeta from '../hooks/useMeta'

const OBLIGATIONS = [
  'Notificarea și înregistrarea la Directoratul Național de Securitate Cibernetică (DNSC)',
  'Măsuri de gestionare a riscurilor, tehnice și organizatorice',
  'Raportarea fără întârziere a incidentelor cu impact semnificativ',
  'Audituri de securitate cibernetică, cu periodicitatea stabilită de DNSC',
  'Conducerea aprobă măsurile, le supraveghează și urmează cursuri de formare',
]

export default function Security() {
  const iso = CERTIFICATIONS.iso27001
  useMeta(
    'Securitate cibernetică: ISO 27001, ISO 9001 și NIS2',
    'PROSECURE: pregătire pentru ISO 27001, ISO 9001 și NIS2 (OUG 155/2024) pentru spitale și instituții medicale, de la o firmă certificată ISO 27001.',
  )

  return (
    <>
      <section className="relative overflow-hidden bg-graphite text-white">
        <div className="container-x pt-14 pb-16 md:pt-20 md:pb-24">
          <p className="outline-type font-display text-[60px] leading-[0.9] font-bold outline-dark sm:text-[100px] md:text-[140px]" aria-hidden="true">
            {PROSECURE.name}
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="text-[15px] text-white/60">Securitate cibernetică pentru instituții medicale</p>
              <h1 className="mt-3 text-[32px] font-semibold md:text-[46px]">{PROSECURE.outcome}</h1>
              <p className="mt-5 max-w-[60ch] text-white/75">
                De la analiza de conformitate până la auditul de certificare și raportările către DNSC. Le facem împreună
                cu echipa dvs. IT și cu conducerea instituției.
              </p>
            </div>
            <div className="lg:pb-2">
              <Link to="/contact?modul=prosecure" className="btn-primary">
                Solicitați o analiză de conformitate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-display text-[64px] leading-none font-semibold text-crimson md:text-[88px]">26 de spitale</p>
            <h2 className="mt-5 text-[26px] font-semibold md:text-[34px]">
              afectate de un singur incident cibernetic, în primul trimestru din 2024.
            </h2>
            <p className="mt-5 text-ink/75">
              Episodul e citat în preambulul OUG 155/2024, actul prin care directiva europeană NIS2 se aplică în România
              (aprobat prin Legea 124/2025). Sănătatea este printre sectoarele de importanță critică: în funcție de
              activitate și mărime, o instituție medicală devine entitate esențială sau importantă.
            </p>
          </div>
          <div className="rounded-xl bg-mist p-7 md:p-9">
            <h3 className="text-[22px] font-semibold">Ce le cere legea instituțiilor vizate</h3>
            <CheckList items={OBLIGATIONS} className="mt-6" />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-[24ch] text-[32px] font-semibold md:text-[44px]">Cum vă pregătim, pas cu pas</h2>
          <ol className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {PROSECURE.steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5">
                <span className="font-display text-[15px] font-semibold text-crimson">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-[21px] font-semibold">{s.title}</h3>
                <p className="mt-2 text-ink/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-graphite py-20 text-white md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-[32px] font-semibold md:text-[42px]">Am trecut noi înșine prin certificarea pe care v-o pregătim.</h2>
            <p className="mt-5 max-w-[56ch] text-white/70">
              Secure eXpert Software deține certificatul {iso.name} pentru proiectarea, implementarea și mentenanța
              aplicațiilor și sistemelor informatice. Știm din interior ce verifică un auditor și ce documente vă trebuie.
            </p>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 self-center border-l-2 border-crimson-light pl-6 text-[15px]">
            <dt className="text-white/50">Standard</dt>
            <dd>{iso.standard}</dd>
            <dt className="text-white/50">Emis de</dt>
            <dd>{iso.issuer}</dd>
            <dt className="text-white/50">Nr. certificat</dt>
            <dd>{iso.number}</dd>
            <dt className="text-white/50">Valabil până la</dt>
            <dd>{iso.validUntil}</dd>
          </dl>
        </div>
      </section>

      {FEATURES.SHOW_PROSECURE_APP && (
        <section className="bg-white py-20 md:py-28">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-[32px] font-semibold md:text-[44px]">{PROSECURE.app.title}</h2>
              <p className="mt-5 text-ink/75">{PROSECURE.app.text}</p>
            </div>
            <CheckList items={PROSECURE.app.items} />
          </div>
        </section>
      )}

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <h2 className="text-[32px] font-semibold md:text-[44px]">Întrebări despre securitate</h2>
          <Faq items={SECURITY_FAQ} />
        </div>
      </section>

      <ContactSection
        title="Aflați în ce situație e instituția dvs. față de NIS2."
        text="Completați formularul și vă sunăm, de regulă în aceeași zi lucrătoare. Prima discuție ne ajută să vedem dacă instituția intră sub incidența legii și ce pași urmează."
      />
    </>
  )
}
