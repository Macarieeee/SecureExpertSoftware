import { Link, Navigate, useParams } from 'react-router-dom'
import { getProduct } from '../data/products'
import { PROOF } from '../data/company'
import CheckList from '../components/CheckList'
import ContactSection from '../components/ContactSection'
import useMeta from '../hooks/useMeta'

export default function ProductPage() {
  const { slug } = useParams()
  const p = getProduct(slug)
  useMeta(p ? `${p.name}, ${p.area.toLowerCase()}` : 'Aplicații', p?.outcome)

  if (!p) return <Navigate to="/solutii" replace />
  if (!p.page) return <Navigate to={`/solutii#${p.slug}`} replace />

  return (
    <>
      <section className="relative overflow-hidden bg-graphite text-white">
        <div className="container-x relative pt-14 pb-16 md:pt-20 md:pb-24">
          <nav className="text-[14px] text-white/50" aria-label="Breadcrumb">
            <Link to="/solutii" className="hover:text-white">Aplicații</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{p.name}</span>
          </nav>
          <p
            className="outline-type mt-8 font-display text-[64px] leading-[0.9] font-bold outline-dark sm:text-[110px] md:text-[150px]"
            aria-hidden="true"
          >
            {p.name}
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="text-[15px] text-white/60">{p.name}, {p.area.toLowerCase()}</p>
              <h1 className="mt-3 text-[32px] font-semibold md:text-[46px]">{p.outcome}</h1>
              <p className="mt-5 max-w-[60ch] text-white/75">{p.intro}</p>
            </div>
            <div className="space-y-5 lg:pb-2">
              <div className="border-l-2 border-crimson-light pl-5">
                <p className="text-[14px] text-white/50">Pentru</p>
                <p className="text-white/90">{p.users}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link to={`/contact?modul=${p.slug}`} className="btn-primary">
                  Solicitați o prezentare {p.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <h2 className="text-[28px] font-semibold md:text-[36px]">Vă sună cunoscut?</h2>
          <ul className="divide-y divide-line border-y border-line">
            {p.pains.map((x) => (
              <li key={x} className="py-5 font-display text-[20px] leading-snug text-ink">„{x}”</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-[24ch] text-[32px] font-semibold md:text-[44px]">Ce face {p.name} pentru compartimentul dvs.</h2>
          <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
            {p.groups.map((g) => (
              <div key={g.title}>
                <h3 className="border-b border-line pb-3 text-[22px] font-semibold">{g.title}</h3>
                <CheckList items={g.items} className="mt-5" />
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 rounded-xl border border-line p-7 md:flex-row md:items-center md:justify-between md:p-9">
            <div>
              <h3 className="text-[20px] font-semibold">Lucrează împreună cu</h3>
              <p className="mt-1 text-[15px] text-muted">Datele trec automat, fără să le introduceți din nou.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.connects.map((c) => (
                <span key={c} className="rounded-md border border-crimson/40 px-3 py-1.5 font-display text-[15px] font-semibold text-crimson">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-3">
          {[
            [`${PROOF.implementationDays} de zile`, 'Implementare orientativă', 'Ne dați datele inițiale, iar noi le preluăm, configurăm aplicația pe nomenclatoarele dvs. și instruim colegii.'],
            [`${PROOF.responseHours} ore`, 'Timp maxim de răspuns', 'Între 08 și 17 un specialist preia orice solicitare. Implementatorii pot fi sunați oricând în situații excepționale.'],
            ['La cerere', 'Raportări noi', 'Când vi se cere o situație care nu există încă, o construim în aplicația dvs.'],
          ].map(([n, t, d]) => (
            <div key={t}>
              <p className="font-display text-[40px] font-semibold text-crimson">{n}</p>
              <h3 className="mt-1 text-[19px] font-semibold">{t}</h3>
              <p className="mt-2 text-ink/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection title={`Vreți să vedeți ${p.name} pe datele instituției dvs.?`} />
    </>
  )
}
