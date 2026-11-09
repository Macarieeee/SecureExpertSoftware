export default function CheckList({ items, dark = false, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((it) => (
        <li key={it} className="grid grid-cols-[18px_1fr] gap-3">
          <svg viewBox="0 0 18 18" className="mt-[5px] h-[18px] w-[18px]" aria-hidden="true">
            <path
              d="M3.5 9.5 L7.5 13 L14.5 5"
              fill="none"
              stroke={dark ? '#E5485D' : '#AC0016'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={dark ? 'text-white/85' : 'text-ink/85'}>{it}</span>
        </li>
      ))}
    </ul>
  )
}
