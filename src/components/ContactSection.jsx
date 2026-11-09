import ContactForm from './ContactForm'
import { COMPANY } from '../data/company'

export default function ContactSection({
  title = 'Spuneți-ne ce vă lipsește acum. Vă sunăm noi.',
  text = 'Completați formularul în două minute. Un coleg vă sună, de regulă în aceeași zi lucrătoare, ca să înțelegem situația și să stabilim o prezentare la sediul dvs.',
}) {
  return (
    <section id="contact" className="bg-graphite py-20 text-white md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <h2 className="text-[32px] font-semibold md:text-[42px]">{title}</h2>
          <p className="mt-5 max-w-md text-white/70">{text}</p>
          <ol className="mt-10 space-y-5 border-l border-white/15 pl-6">
            {[
              ['Vă sunăm', 'ca să aflăm ce aplicații folosiți și ce nu funcționează.'],
              ['Venim la dvs.', 'și prezentăm aplicațiile pe cazurile instituției.'],
              ['Primiți oferta', 'tehnico-economică, pentru achiziția din catalogul SEAP.'],
            ].map(([a, b], i) => (
              <li key={a} className="relative">
                <span className="absolute top-0.5 -left-[35px] grid h-[22px] w-[22px] place-items-center rounded-full bg-crimson font-display text-[12px] font-bold">
                  {i + 1}
                </span>
                <span className="font-semibold text-white">{a}</span>{' '}
                <span className="text-white/65">{b}</span>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[15px] text-white/60">
            Preferați telefonul?{' '}
            <a href={COMPANY.phoneHref} className="font-semibold text-white hover:text-crimson-light">
              {COMPANY.phone}
            </a>
            <br />
            {COMPANY.hours}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-graphite-2/60 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
