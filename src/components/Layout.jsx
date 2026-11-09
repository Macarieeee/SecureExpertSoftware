import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // așteaptă randarea paginii, apoi derulează la ancoră
      const id = decodeURIComponent(hash.slice(1))
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }), 40)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  const { pathname, search } = useLocation()
  return (
    <>
      <Link
        to={{ pathname, search, hash: '#continut' }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Sari la conținut
      </Link>
      <ScrollManager />
      <Header />
      <main id="continut">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
