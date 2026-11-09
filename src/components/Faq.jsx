export default function Faq({ items }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(({ q, a }) => (
        <details key={q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="text-[19px] font-semibold text-ink">{q}</h3>
            <span
              className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-transform group-open:rotate-45"
              aria-hidden="true"
            >
              <svg width="10" height="10" viewBox="0 0 10 10">
                <path d="M5 0 V10 M0 5 H10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </summary>
          <div className="max-w-[68ch] pb-6 text-ink/80">{a}</div>
        </details>
      ))}
    </div>
  )
}
