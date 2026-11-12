import { Link } from 'react-router-dom'
import { PRODUCTS, SERVICES } from '../data/products'
import CheckList from '../components/CheckList'
import ContactSection from '../components/ContactSection'
import useMeta from '../hooks/useMeta'

export default function Solutions() {
  useMeta(
    'Aplicații și servicii',
    'PROCONT, PROGEST, PROSAL, PROMEDIC, PROFARM, PROREG, PROFAZ, PROMANAGEMENT și securitate cibernetică PROSECURE pentru spitale și instituții medicale.',
  )
  const priority = PRODUCTS.filter((p) => p.page)
  const others = PRODUCTS.filter((p) => !p.page)

  return (
    <>
      <section className="bg-graphite text-white">
        <div className="container-x pt-14 pb-16 md:pt-20 md:pb-20">
          <h1 className="max-w-[20ch] text-[38px] font-semibold md:text-[56px]">Aplicații și servicii pentru instituții medicale</h1>
          <p className="mt-5 max-w-[60ch] text-white/70">
            Fiecare aplicație funcționează separat sau împreună cu celelalte. Tot ce vedeți mai jos e standard; ce vă
            lipsește dezvoltăm pentru instituția dvs.
          </p>
          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Aplicații">
            {[...priority.map((p) => [p.name, `/solutii/${p.slug}`]), ['PROSECURE', '/securitate-cibernetica'], ...others.map((p) => [p.name, `#${p.slug}`]), ['Servicii', '#servicii']].map(([n, to]) =>
              to.startsWith('#') ? (
                <Link key={n} to={{ pathname: '/solutii', hash: to }} className="rounded-md border border-white/20 px-3 py-1.5 font-display text-[14px] font-semibold text-white/85 hover:border-white/60">{n}</Link>
              ) : (
                <Link key={n} to={to} className="rounded-md border border-crimson-light/60 px-3 py-1.5 font-display text-[14px] font-semibold text-crimson-light hover:border-crimson-light">{n}</Link>
              ),
            )}
          </nav>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <h2 className="text-[26px] font-semibold md:text-[32px]">Aplicațiile principale</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
            {[...priority, { slug: 'prosecure', name: 'PROSECURE', area: 'Securitate cibernetica', tagline: 'Conformitate NIS2 si pregatire ISO 27001 pentru institutii medicale - evaluare, documentatie, testare, audit intern si mentenanta continua.', href: '/securitate-cibernetica' }].map((p) => (
              <Link key={p.slug} to={p.href || `/solutii/${p.slug}`} className="group bg-white p-7 hover:bg-mist">
                <span className="outline-type font-display text-[40px] leading-none font-bold outline-light group-hover:[--ofill:var(--color-mist)]">{p.name}</span>
                <span className="mt-4 block text-[14px] text-muted">{p.area}</span>
                <span className="mt-1 block text-[17px] text-ink">{p.tagline}</span>
                <span className="mt-6 block text-[15px] font-semibold text-crimson group-hover:underline group-hover:underline-offset-4">Detalii despre {p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="container-x divide-y divide-line border-t border-line">
          {others.map((p) => (
            <article id={p.slug} key={p.slug} className="grid gap-8 py-14 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
              <div>
                <h2 className="outline-type font-display text-[34px] leading-none font-bold break-words outline-light sm:text-[48px] md:text-[60px]">{p.name}</h2>
                <p className="mt-4 text-[14px] font-medium text-muted">{p.area}</p>
                <p className="mt-2 text-[21px] leading-snug font-medium text-ink">{p.tagline}</p>
                <p className="mt-4 text-ink/70">{p.intro}</p>
                <p className="mt-5 text-[14px] text-muted">
                  <span className="font-semibold text-ink">Pentru:</span> {p.users}
                </p>
                <Link to={`/contact?modul=${p.slug}`} className="btn-ghost-light mt-6">
                  Solicitați o prezentare {p.name}
                </Link>
              </div>
              <div>
                <CheckList items={p.items} />
                {p.sub && (
                  <div className="mt-8 rounded-xl bg-mist p-6">
                    <h3 className="font-display text-[20px] font-bold">{p.sub.name}</h3>
                    <p className="text-[14px] text-muted">{p.sub.area}</p>
                    <CheckList items={p.sub.items} className="mt-4" />
                  </div>
                )}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-[14px] text-muted">Se leagă de</span>
                  {p.connects.map((c) => (
                    <span key={c} className="rounded-md border border-line px-2.5 py-1 font-display text-[13px] font-semibold text-ink/80">{c}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="servicii" className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-[24ch] text-[32px] font-semibold md:text-[44px]">Servicii IT pentru instituții medicale</h2>
          <p className="mt-5 max-w-[60ch] text-ink/70">
            Pe lângă aplicații, ne ocupăm de tot ce le ține în funcțiune. Implementarea fiecărui proiect e coordonată de un
            manager de proiect care răspunde pentru calitate.
          </p>
          <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="border-t border-ink/15 pt-5">
                <dt className="text-[20px] font-semibold">{s.title}</dt>
                <dd className="mt-2 text-ink/70">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
