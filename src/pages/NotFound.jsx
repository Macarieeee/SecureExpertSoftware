import { Link } from 'react-router-dom'
import useMeta from '../hooks/useMeta'

export default function NotFound() {
  useMeta('Pagina nu există')
  return (
    <section className="bg-graphite text-white">
      <div className="container-x py-28">
        <p className="outline-type font-display text-[120px] leading-none font-bold outline-dark">404</p>
        <h1 className="mt-6 text-[32px] font-semibold">Pagina căutată nu există.</h1>
        <p className="mt-3 text-white/70">Poate a fost mutată. Porniți de la pagina principală sau de la lista de aplicații.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">Pagina principală</Link>
          <Link to="/solutii" className="btn-ghost-dark">Aplicații</Link>
        </div>
      </div>
    </section>
  )
}
