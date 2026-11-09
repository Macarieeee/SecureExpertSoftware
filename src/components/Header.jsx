import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { PRODUCTS } from '../data/products'
import { COMPANY } from '../data/company'

const productLink = (p) => (p.page ? `/solutii/${p.slug}` : `/solutii#${p.slug}`)

export default function Header() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const { pathname, hash } = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {
    setOpen(false)
    setMenu(false)
  }, [pathname, hash])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setOpen(false), setMenu(false))
    const onClick = (e) => menuRef.current && !menuRef.current.contains(e.target) && setMenu(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const link = 'text-[15px] text-white/75 hover:text-white transition-colors'

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite/90 backdrop-blur-md">
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="Secure eXpert Software, pagina principală">
          <Logo tone="dark" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigare principală">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className={`${link} inline-flex items-center gap-1.5`}
              aria-expanded={menu}
              aria-haspopup="true"
              onClick={() => setMenu((v) => !v)}
            >
              Aplicații
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={`transition-transform ${menu ? 'rotate-180' : ''}`}>
                <path d="M1 3.5 L5 7 L9 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {menu && (
              <div className="absolute top-full left-1/2 mt-4 w-[560px] -translate-x-1/2 rounded-lg border border-white/10 bg-graphite-2 p-3 shadow-2xl shadow-black/40">
                <div className="grid grid-cols-2 gap-1">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      to={productLink(p)}
                      className="rounded-md px-3 py-2.5 hover:bg-white/5"
                    >
                      <span className="block font-display text-[15px] font-semibold text-white">{p.name}</span>
                      <span className="block text-[13px] text-white/55">{p.area}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/solutii"
                  className="mt-2 block border-t border-white/10 px-3 pt-3 pb-1 text-[14px] text-crimson-light hover:text-white"
                >
                  Toate aplicațiile și serviciile
                </Link>
              </div>
            )}
          </div>
          <NavLink to="/securitate-cibernetica" className={link}>
            Securitate cibernetică
          </NavLink>
          <Link to="/#cum-lucram" className={link}>
            Cum lucrăm
          </Link>
          <Link to="/#achizitie" className={link}>
            Achiziție prin SEAP
          </Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={COMPANY.phoneHref} className="text-[15px] font-medium text-white/85 hover:text-white">
            {COMPANY.phone}
          </a>
          <Link to="/contact" className="btn-primary !py-2.5">
            Solicitați o prezentare
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-white lg:hidden"
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            {open ? (
              <path d="M6 6 L20 20 M20 6 L6 20" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M4 8 H22 M4 13 H22 M4 18 H22" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-graphite lg:hidden">
          <nav className="container-x py-6" aria-label="Navigare mobil">
            <p className="mb-2 text-[13px] text-white/45">Aplicații</p>
            <div className="grid grid-cols-2 gap-x-4">
              {PRODUCTS.map((p) => (
                <Link key={p.slug} to={productLink(p)} className="py-2.5 font-display text-[17px] font-semibold text-white">
                  {p.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col border-t border-white/10 pt-4">
              {[
                ['/securitate-cibernetica', 'Securitate cibernetică'],
                ['/solutii', 'Toate aplicațiile și serviciile'],
                ['/#cum-lucram', 'Cum lucrăm'],
                ['/#achizitie', 'Achiziție prin SEAP'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="py-3 text-[18px] text-white">
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/contact" className="btn-primary">
                Solicitați o prezentare
              </Link>
              <a href={COMPANY.phoneHref} className="btn-ghost-dark">
                Sunați: {COMPANY.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
