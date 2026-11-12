import CheckList from '../components/CheckList'
import Faq from '../components/Faq'
import ContactForm from '../components/ContactForm'
import useMeta from '../hooks/useMeta'
import content from '../data/prosecure-page.json'

function Paragraphs({ items }) {
  return items.map((text) => <p key={text} className="mt-5 leading-relaxed">{text}</p>)
}

function SectionHeading({ label, title, children }) {
  return <div>
    <p className="mb-3 font-display text-[13px] font-semibold tracking-[0.12em] text-crimson uppercase">{label}</p>
    <h2 className="max-w-[24ch] text-[28px] font-semibold md:text-[36px]">{title}</h2>
    {children}
  </div>
}

function More({ children, label = 'Cititi detaliile' }) {
  return <details className="group mt-5 border-t border-line pt-4">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-semibold text-crimson [&::-webkit-details-marker]:hidden">
      {label}<span aria-hidden="true" className="text-[22px] group-open:rotate-45">+</span>
    </summary>
    <div className="mt-4 text-[15px] leading-relaxed text-ink/75">{children}</div>
  </details>
}

export default function Security() {
  useMeta('PROSECURE - Securitate cibernetica, NIS2 si ISO 27001', 'Conformitate NIS2 si pregatire ISO 27001 pentru institutii medicale - evaluare, documentatie, testare, audit intern si mentenanta continua.')
  const obligations = content.obligations.slice(2)
  const phases = content.methodology.slice(1, -1)

  return (
    <>
      <section className="overflow-hidden bg-graphite text-white">
        <div className="container-x py-8 md:py-12">
          <p className="outline-type font-display text-[44px] leading-none font-bold outline-dark sm:text-[72px] md:text-[100px]">{content.name}</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
            <div>
              <p className="text-[15px] text-white/60">{content.area}</p>
              <h1 className="mt-2 text-[28px] leading-tight font-semibold sm:text-[36px] md:text-[42px]">{content.hero[0]}</h1>
              <div className="mt-4 max-w-[65ch] text-[16px] leading-relaxed text-white/75">
                {content.hero.slice(1, -1).map((text) => <p key={text}>{text}</p>)}
              </div>
            </div>
            <div><a href="#contact" className="btn-primary">{content.hero.at(-1).replace('[CTA] ', '')}</a></div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-mist py-12 md:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="font-display text-[80px] leading-none font-semibold text-crimson md:text-[104px]">26</p>
            <p className="mt-3 font-display text-[22px] font-semibold">de spitale afectate</p>
            <p className="mt-1 text-[14px] text-muted">Un singur atac. Romania, 2024.</p>
          </div>
          <div className="self-center">
            <h2 className="text-[28px] font-semibold md:text-[36px]">{content.context[0]}</h2>
            <p className="mt-4 text-[16px] text-ink/75">{content.context[1]}</p>
            <More label="Ce a aratat acest incident"><p>{content.context[2]}</p></More>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeading label="Obligatii NIS2" title={content.obligations[0]}>
            <p className="mt-5 text-[15px] text-muted">{content.obligations[1]}</p>
          </SectionHeading>
          <div className="divide-y divide-line border-y border-line">
            {obligations.map((text, i) => i % 2 === 0 && <details key={text} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-[14px] font-semibold text-crimson">{String(i / 2 + 1).padStart(2, '0')}</span>
                <h3 className="flex-1 text-[21px] font-semibold">{text}</h3>
                <span aria-hidden="true" className="text-[24px] text-crimson group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 pl-8 text-[16px] text-ink/75">{obligations[i + 1]}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <div className="container-x">
          <SectionHeading label="Doua obiective, un program" title={content.comparison[0]} />
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {[
              ['NIS2', 'Obligatie legala', ['Masuri de securitate si gestionarea riscurilor', 'Inregistrare si raportari catre DNSC', 'Termene si responsabilitatea conducerii'], content.comparison[2]],
              ['ISO 27001', 'Certificare voluntara', ['Managementul securitatii informatiei', 'Certificare printr-un organism acreditat', 'Audituri de supraveghere anuale'], content.comparison[3]],
            ].map(([name, label, items, detail]) => <article key={name} className="bg-white p-6 md:p-9">
              <p className="text-[13px] font-semibold text-muted">{label}</p>
              <h3 className="mt-2 font-display text-[36px] font-semibold text-crimson">{name}</h3>
              <CheckList items={items} className="mt-6 text-[16px]" />
              <More><p>{detail}</p></More>
            </article>)}
          </div>
          <div className="mt-6 grid gap-5 border-l-2 border-crimson pl-5 md:grid-cols-2 md:gap-10">
            <div><p className="font-semibold">{content.comparison[1]}</p><More label="De ce ISO nu acopera toate cerintele NIS2"><p>{content.comparison[4]}</p></More></div>
            <p className="text-[16px] text-ink/75">{content.comparison[5]}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <SectionHeading label="Echipa si responsabilitati" title="Un singur interlocutor. Roluri clare." />
            <div><h3 className="text-[22px] font-semibold">{content.partnership[0]}</h3><More label="Cum lucram impreuna"><Paragraphs items={content.partnership.slice(1, 3)} /></More></div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {['SXS', 'Echipa de securitate', 'Echipa IT a institutiei'].map((title, i) => <article key={title}>
              <p className="font-display text-[40px] leading-none font-semibold text-crimson">0{i + 1}</p>
              <h3 className="mt-4 border-b border-line pb-3 text-[22px] font-semibold">{title}</h3>
              <p className="mt-4 text-[15px] text-ink/75">{content.partnership[i + 4]}</p>
            </article>)}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-xl border border-line p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium">{content.partnership[7]}</p>
            <span className="w-fit shrink-0 rounded-md border border-crimson/40 px-3 py-1.5 font-display text-[15px] font-semibold text-crimson">SEAP</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <SectionHeading label="Servicii PROSECURE" title={content.servicesTitle} />
          <div className="mt-10 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service, i) => (
              <details key={service.title} className="group rounded-xl border border-line p-6 open:bg-mist">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between font-display text-[14px] font-semibold text-crimson">{String(i + 1).padStart(2, '0')}<span aria-hidden="true" className="text-[24px] group-open:rotate-45">+</span></span>
                  <h3 className="mt-4 min-h-[3.4em] text-[20px] font-semibold">{service.title}</h3>
                  <span className="mt-4 block text-[13px] font-medium text-muted">Descriere si livrabil</span>
                </summary>
                <div className="mt-5 text-[15px] text-ink/75">
                  <p>{service.paragraphs[0]}</p>
                  {service.paragraphs.length > 1 && <CheckList items={service.paragraphs.slice(1)} className="mt-4" />}
                </div>
                <p className="mt-5 border-t border-line pt-5 text-[15px] font-medium">{service.deliverable}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section aria-label="Etapele colaborarii" tabIndex={0} className="max-h-[calc(100dvh-73px)] overflow-y-auto bg-mist py-6 md:py-8">
        <div className="container-x grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <SectionHeading label="Etapele colaborarii" title={content.methodology[0]}>
            <p className="mt-5 text-[15px] text-muted">{content.methodology.at(-1)}</p>
          </SectionHeading>
          <ol className="divide-y divide-line border-y border-line">
            {phases.map((text, i) => i % 2 === 0 && <li key={text} className="grid grid-cols-[36px_1fr] gap-4 py-3 md:py-4">
              <span className="font-display text-[32px] leading-none font-semibold text-crimson">0{i / 2 + 1}</span>
              <div><h3 className="text-[20px] font-semibold">{text.replace(/^Faza \d - /, '')}</h3><p className="mt-2 text-[15px] leading-snug text-ink/75">{phases[i + 1]}</p></div>
            </li>)}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <SectionHeading label="Experienta SXS" title={content.why[0]} />
          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {content.why.slice(1).map((text, i) => {
              const split = text.indexOf('. ')
              return <article key={text} className="rounded-xl border border-line bg-mist p-6 md:p-7">
                <p className="font-display text-[32px] font-semibold text-crimson">{['15 ani', 'Specialisti', 'Un contract', 'ISO 27001', 'SEAP'][i]}</p>
                <h3 className="mt-2 text-[20px] font-semibold">{text.slice(0, split)}</h3>
                <More><p>{text.slice(split + 2)}</p></More>
              </article>
            })}
          </div>
        </div>
      </section>
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-[30px] font-semibold md:text-[42px]">{content.faqTitle}</h2>
          <Faq items={content.faq} />
        </div>
      </section>
      <section id="contact" className="bg-graphite py-16 text-white md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.35fr]">
          <div>
            <h2 className="text-[32px] font-semibold md:text-[42px]">{content.contactTitle}</h2>
            <div className="mt-10 text-[15px] text-white/70"><Paragraphs items={content.footer} /></div>
          </div>
          <div className="rounded-xl border border-white/10 bg-graphite-2/60 p-6 sm:p-8"><ContactForm security /></div>
        </div>
      </section>
    </>
  )
}
