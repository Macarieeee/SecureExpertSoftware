import { CLIENTS } from '../data/company'

export default function ClientMarquee() {
  const row = [...CLIENTS, ...CLIENTS]
  return (
    <div className="marquee relative overflow-hidden" aria-label="Instituții care folosesc aplicațiile SXS">
      {/* listă accesibilă, fără duplicate */}
      <ul className="sr-only">
        {CLIENTS.map((c) => (
          <li key={c.name}>{c.name}</li>
        ))}
      </ul>
      <div className="marquee-track flex w-max items-center" aria-hidden="true">
        {row.map((c, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-7 font-display text-[18px] font-medium text-white/70">{c.short}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-light/70" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-graphite to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-graphite to-transparent" />
    </div>
  )
}
