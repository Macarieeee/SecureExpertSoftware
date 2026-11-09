import { useId } from 'react'

/**
 * Logo SXS redesenat vectorial după prezentarea firmei:
 * literele "s" conturate + "X" roșu conturat.
 * tone="dark"  -> pentru fundal închis (litere deschise)
 * tone="light" -> pentru fundal deschis (litere închise)
 */
const S_PATH = 'M98 14 H30 A16 16 0 0 0 30 46 H80 A16 16 0 0 1 80 78 H12'
const X_PATH = 'M0 0 L66 110 M66 0 L0 110'

export function LogoMark({ tone = 'dark', className = '', title = 'SXS' }) {
  const id = useId().replace(/:/g, '')
  const letter = tone === 'dark' ? '#F4F2F3' : '#231F20'
  const red = tone === 'dark' ? '#E5485D' : '#AC0016'

  const outline = (d, mid) => (
    <mask id={mid} maskUnits="userSpaceOnUse" x="-10" y="-10" width="330" height="140">
      <path d={d} fill="none" stroke="#fff" strokeWidth="13" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="#000" strokeWidth="5.5" strokeLinejoin="round" />
    </mask>
  )

  return (
    <svg viewBox="-4 -2 312 124" className={className} role="img" aria-label={title}>
      <defs>
        {outline(S_PATH, `s-${id}`)}
        {outline(X_PATH, `x-${id}`)}
      </defs>
      <g transform="translate(0 26)">
        <rect x="-10" y="-10" width="130" height="110" fill={letter} mask={`url(#s-${id})`} />
      </g>
      <g transform="translate(117 5)">
        <rect x="-10" y="-10" width="90" height="135" fill={red} mask={`url(#x-${id})`} />
      </g>
      <g transform="translate(196 26)">
        <rect x="-10" y="-10" width="130" height="110" fill={letter} mask={`url(#s-${id})`} />
      </g>
    </svg>
  )
}

export function Logo({ tone = 'dark', className = '' }) {
  const word = tone === 'dark' ? 'text-white' : 'text-ink'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className="h-8 w-auto" title="SXS" />
      <span className={`font-display text-[13px] leading-[1.15] font-medium ${word}`}>
        Secure e<span className={tone === 'dark' ? 'text-crimson-light' : 'text-crimson'}>X</span>pert
        <br />
        Software
      </span>
    </span>
  )
}
