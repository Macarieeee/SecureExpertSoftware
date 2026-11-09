import { TESTIMONIALS } from '../data/testimonials'

// Se afișează doar când FEATURES.SHOW_TESTIMONIALS = true
export default function Testimonials() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="container-x">
        <h2 className="text-[28px] font-semibold md:text-[36px]">Ce spun clienții</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.person + t.institution} className="border-l-2 border-crimson pl-6">
              <blockquote className="font-display text-[21px] leading-snug text-ink">„{t.quote}”</blockquote>
              <figcaption className="mt-4 text-[15px] text-muted">
                <span className="font-semibold text-ink">{t.person}</span>, {t.role}, {t.institution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
