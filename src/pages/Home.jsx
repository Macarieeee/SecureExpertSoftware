import { Link } from 'react-router-dom'
import DotVortex from '../components/DotVortex'
import ClientMarquee from '../components/ClientMarquee'
import FlowLanes from '../components/FlowLanes'
import Faq from '../components/Faq'
import ContactSection from '../components/ContactSection'
import CheckList from '../components/CheckList'
import Certifications from '../components/Certifications'
import Testimonials from '../components/Testimonials'
import useMeta from '../hooks/useMeta'
import { PRODUCTS } from '../data/products'
import { PROOF, yearsActive, DIRECT_PURCHASE_THRESHOLD, FOUNDED } from '../data/company'
import { HOME_FAQ } from '../data/faq'
import { FEATURES } from '../config/features'

const PROBLEMS = [
  {
    pain: 'Ministerul ne cere o situație nouă, iar programul nu o poate scoate.',
    fix: 'Construim raportarea în aplicația dvs. Ce nu există încă în program dezvoltăm la cerere, pentru instituția dvs.',
  },
  {
    pain: 'Când avem o problemă, nu avem pe cine suna.',
    fix: 'Aveți oameni dedicați instituției dvs. Între 08 și 17 preiau orice solicitare în cel mult 4 ore, iar în situații excepționale îi puteți suna oricând.',
  },
  {
    pain: 'Descoperim greșeli în contabilitate abia după câteva luni.',
    fix: 'Vă răspund specialiști care sunt și economiști. Nu vă trimit doar un manual, ci discută cazul cu dvs. și îl corectați împreună.',
  },
  {
    pain: 'Avem mai multe programe care nu comunică între ele.',
    fix: 'Aplicațiile SXS își transmit datele automat. Le puteți folosi împreună sau pe rând, fără să reintroduceți nimic.',
  },
]

const STEPS = [
  ['Ne scrieți sau ne sunați', 'Un coleg vă sună, de regulă în aceeași zi lucrătoare, ca să afle ce folosiți acum și ce vă lipsește.'],
  ['Prezentare la sediul dvs.', 'Venim și arătăm aplicațiile pe situațiile instituției, celor care le vor folosi și celor care decid.'],
  ['Ofertă tehnico-economică', 'Primiți configurația potrivită și costul, fără pachete standard care nu vi se potrivesc.'],
  ['Achiziție din catalogul SEAP', 'Cumpărați aplicația, serviciul sau contractul de mentenanță direct din catalogul nostru.'],
  ['Implementare și instruire', `În ${PROOF.implementationDays} de zile preluăm datele inițiale, configurăm aplicațiile și instruim personalul.`],
  ['Suport pe toată durata contractului', 'Aceiași oameni care v-au implementat rămân la telefon pentru orice întrebare.'],
]

export default function Home() {
  useMeta(
    null,
    'Software pentru spitale din 2008: contabilitate bugetară, gestiune, salarizare, management medical și securitate cibernetică ISO 27001 / NIS2. 988 de contracte câștigate în SEAP.',
  )

  const priority = ['procont', 'progest'].map((s) => PRODUCTS.find((p) => p.slug === s))
  const others = PRODUCTS.filter((p) => !p.page)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-graphite text-white">
        <DotVortex className="absolute inset-0 h-full w-full opacity-55 md:left-[30%] md:w-[70%] md:opacity-100" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-graphite via-graphite/80 to-transparent md:via-graphite/60" />
        <div className="container-x relative pt-16 pb-14 md:pt-28 md:pb-20">
          <div className="max-w-[680px]">
            <p className="text-[15px] text-white/60">Pentru spitale și instituții medicale, din {FOUNDED}</p>
            <h1 className="mt-4 text-[40px] font-semibold sm:text-[52px] md:text-[62px]">
              Software pentru spitale, susținut de oameni care vă răspund la telefon.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] text-white/75">
              Contabilitate bugetară, gestiune, salarizare și management medical, în aplicații care își transmit datele
              între ele. Iar când apare o problemă, vorbiți cu un specialist care înțelege și partea economică.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Solicitați o prezentare
              </Link>
              <Link to="/solutii" className="btn-ghost-dark">
                Vedeți aplicațiile
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-white/15 pt-8 md:mt-24 md:grid-cols-4">
            {[
              [PROOF.seapContracts, 'contracte câștigate în SEAP'],
              [`${yearsActive()} ani`, `de activitate, din ${FOUNDED}`],
              ['Peste 20', 'de instituții folosesc aplicațiile'],
              [`${PROOF.responseHours} ore`, 'maxim până vă preia un specialist solicitarea'],
            ].map(([n, l], i) => (
              <div key={l} className={`pr-4 ${i % 2 === 1 ? 'pl-4 md:pl-6' : ''} ${i > 0 ? 'md:border-l md:border-white/15 md:pl-6' : ''} ${i % 2 === 1 ? 'border-l border-white/15' : ''}`}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-[34px] font-semibold md:text-[42px]">{n}</dd>
                <dd className="mt-1 text-[14px] leading-snug text-white/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative border-t border-white/10 py-6">
          <p className="container-x mb-4 text-[14px] text-white/45">Aplicațiile SXS sunt folosite, printre altele, de:</p>
          <ClientMarquee />
        </div>
      </section>

      {/* PROBLEME */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-[22ch] text-[32px] font-semibold md:text-[44px]">Ce ne spun spitalele înainte să lucrăm împreună</h2>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {PROBLEMS.map((p) => (
              <div key={p.pain} className="grid gap-3 py-7 md:grid-cols-2 md:gap-12">
                <p className="font-display text-[21px] leading-snug font-medium text-ink md:text-[23px]">„{p.pain}”</p>
                <p className="text-ink/75 md:pt-1">{p.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLUXURI */}
      <section className="bg-graphite py-20 text-white md:py-28">
        <div className="container-x">
          <div className="max-w-[62ch]">
            <h2 className="text-[32px] font-semibold md:text-[44px]">Datele introduse o dată ajung singure unde trebuie.</h2>
            <p className="mt-5 text-white/70">
              Recepția din magazie devine notă contabilă. Medicația dată pe secție scade din stocul farmaciei. Gărzile din
              pontaj ajung în statul de plată și în D112. Așa arată trei trasee obișnuite dintr-un spital care folosește
              aplicațiile SXS împreună.
            </p>
          </div>
          <div className="mt-14">
            <FlowLanes />
          </div>
        </div>
      </section>

      {/* APLICATII */}
      <section id="aplicatii" className="bg-white py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-[24ch] text-[32px] font-semibold md:text-[44px]">O aplicație pentru fiecare compartiment</h2>
          <p className="mt-5 max-w-[60ch] text-ink/70">
            Începeți cu ce vă trebuie acum. Fiecare aplicație funcționează și separat, iar când le adăugați pe celelalte,
            se leagă între ele.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-3">
            {[...priority, { slug: 'prosecure', name: 'PROSECURE', area: 'Securitate cibernetică', tagline: 'Pregătire pentru ISO 27001, ISO 9001 și NIS2, de la analiză până la auditul de certificare.', href: '/securitate-cibernetica' }].map((p) => (
              <Link
                key={p.slug}
                to={p.href || `/solutii/${p.slug}`}
                className="group flex flex-col bg-white p-7 transition-colors hover:bg-mist md:p-9"
              >
                <span className="outline-type font-display text-[44px] leading-none font-bold outline-light group-hover:[--ofill:var(--color-mist)] md:text-[52px]">{p.name}</span>
                <span className="mt-5 text-[14px] font-medium text-muted">{p.area}</span>
                <span className="mt-2 text-[19px] leading-snug font-medium text-ink">{p.tagline}</span>
                <span className="mt-auto pt-8 text-[15px] font-semibold text-crimson group-hover:underline group-hover:underline-offset-4">
                  Detalii despre {p.name}
                </span>
              </Link>
            ))}
          </div>

          <ul className="mt-12 grid gap-x-12 md:grid-cols-2">
            {others.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link to={`/solutii#${p.slug}`} className="group grid grid-cols-[150px_1fr] gap-4 py-5 sm:grid-cols-[170px_1fr]">
                  <span>
                    <span className="block font-display text-[18px] font-bold text-ink group-hover:text-crimson">{p.name}</span>
                    <span className="block text-[13px] text-muted">{p.area}</span>
                  </span>
                  <span className="text-[15px] text-ink/75">{p.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] text-muted">
            Oferim și consultanță software, proiectare de baze de date, licențiere și echipamente IT.{' '}
            <Link to="/solutii#servicii" className="font-semibold text-crimson underline-offset-4 hover:underline">
              Vedeți toate serviciile
            </Link>
          </p>
        </div>
      </section>

      {/* SUPORT */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-[32px] font-semibold md:text-[44px]">Când sunați, vă răspunde cineva care vă cunoaște instituția.</h2>
            <p className="mt-6 max-w-[56ch] text-ink/75">
              Multe firme de software lasă clientul singur după instalare. La noi, fiecare instituție are oameni dedicați,
              iar suportul îl dau specialiști care sunt și economiști. Când nu iese o balanță sau ministerul schimbă un
              raport, discutați cu cineva care înțelege problema, nu doar programul.
            </p>
          </div>
          <CheckList
            className="lg:pt-3"
            items={[
              'Oameni dedicați fiecărei instituții, care îi cunosc fluxurile',
              'Orice solicitare preluată în maximum 4 ore, luni–vineri, 08–17',
              'În situații excepționale, implementatorii pot fi sunați la orice oră',
              'Ajutor pe toată durata contractului, nu doar în perioada de garanție',
              'Instruire făcută de cei care v-au configurat aplicațiile',
            ]}
          />
        </div>
      </section>

      {/* STUDIU DE CAZ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <p className="text-[15px] font-medium text-crimson">Studiu de caz</p>
          <h2 className="mt-3 max-w-[30ch] text-[32px] font-semibold md:text-[44px]">
            Institutul Național de Diabet, Nutriție și Boli Metabolice „Prof. Dr. N. Paulescu”
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
            <div className="md:pr-10">
              <h3 className="text-[18px] font-semibold text-muted">Înainte</h3>
              <p className="mt-3 text-ink/80">
                Institutul lucra cu mai multe aplicații care nu comunicau între ele. Aceleași date se introduceau de mai
                multe ori, în compartimente diferite.
              </p>
            </div>
            <div className="md:px-10">
              <h3 className="text-[18px] font-semibold text-muted">Ce am implementat</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['PROMEDIC', 'PROCONT', 'PROGEST', 'PROSAL'].map((n) => (
                  <span key={n} className="rounded-md border border-crimson/40 px-3 py-1.5 font-display text-[15px] font-semibold text-crimson">
                    {n}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-ink/80">O singură soluție integrată, pentru partea medicală și cea economică.</p>
            </div>
            <div className="md:pl-10">
              <h3 className="text-[18px] font-semibold text-muted">După</h3>
              <p className="mt-3 text-ink/80">
                Timpii de lucru au scăzut și personalul se ocupă mai mult de pacienți decât de raportări. Echipa
                institutului ne-a transmis că este foarte mulțumită de rezultat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {FEATURES.SHOW_TESTIMONIALS && <Testimonials />}

      {/* CUM LUCRAM + SEAP */}
      <section id="cum-lucram" className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-[24ch] text-[32px] font-semibold md:text-[44px]">De la primul telefon la aplicația care funcționează</h2>
          <ol className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-ink pt-5">
                <span className="font-display text-[15px] font-semibold text-crimson">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-[21px] font-semibold">{t}</h3>
                <p className="mt-2 text-ink/70">{d}</p>
              </li>
            ))}
          </ol>

          <div id="achizitie" className="mt-20 grid gap-10 rounded-xl bg-white p-7 md:grid-cols-[1fr_1.2fr] md:p-12">
            <div>
              <h2 className="text-[28px] font-semibold md:text-[36px]">Achiziția prin SEAP, fără complicații</h2>
              <p className="mt-4 font-display text-[64px] leading-none font-semibold text-crimson md:text-[80px]">{PROOF.seapContracts}</p>
              <p className="mt-2 text-ink/70">contracte câștigate în SEAP până acum</p>
            </div>
            <div className="space-y-4 text-ink/80">
              <p>
                Toate aplicațiile, serviciile și contractele de mentenanță SXS se cumpără din catalogul nostru din SEAP.
                Pentru valori sub pragul legal al achiziției directe, în prezent {DIRECT_PURCHASE_THRESHOLD}, instituția
                poate cumpăra direct, fără licitație.
              </p>
              <p>
                Oferta tehnico-economică o pregătim după prezentare, pe compartimentele și numărul de utilizatori ai
                instituției. Serviciul de achiziții primește tot ce îi trebuie, inclusiv certificatele noastre ISO.
              </p>
              <Link to="/contact" className="btn-primary mt-2">
                Solicitați o ofertă
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITATE */}
      <section className="relative overflow-hidden bg-graphite py-20 text-white md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div>
            <p className="font-display text-[54px] leading-none font-semibold whitespace-nowrap text-crimson-light sm:text-[80px] lg:text-[96px]">26 de spitale</p>
            <h2 className="mt-6 max-w-[30ch] text-[28px] font-semibold md:text-[38px]">
              au fost afectate de un singur incident cibernetic, în primul trimestru din 2024.
            </h2>
            <p className="mt-5 max-w-[58ch] text-white/70">
              Cazul este menționat chiar în OUG 155/2024, actul care aplică directiva NIS2 în România. De atunci,
              instituțiile medicale vizate trebuie să se înregistreze la DNSC, să raporteze incidentele și să treacă prin
              audituri de securitate. Conducerea răspunde direct.
            </p>
          </div>
          <div className="border-l-2 border-crimson-light pl-6">
            <p className="text-white/80">
              SXS este certificată ISO 27001. Vă pregătim pentru ISO 27001, ISO 9001 și NIS2 cu același proces prin care
              am trecut noi.
            </p>
            <Link to="/securitate-cibernetica" className="btn-ghost-dark mt-6">
              Despre securitatea cibernetică
            </Link>
          </div>
        </div>
      </section>

      <Certifications />

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <h2 className="text-[32px] font-semibold md:text-[44px]">Întrebări frecvente</h2>
          <Faq items={HOME_FAQ} />
        </div>
      </section>

      <ContactSection />
    </>
  )
}
