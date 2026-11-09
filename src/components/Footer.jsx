import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { COMPANY, CERTIFICATIONS, FOUNDED } from '../data/company'
import { PRODUCTS } from '../data/products'
import { FEATURES } from '../config/features'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-graphite text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
            Software pentru spitale și instituții medicale din {FOUNDED}. Aplicațiile, implementarea și suportul vin de
            la aceeași echipă.
          </p>
          <div className="mt-6 space-y-1 text-[15px]">
            <p>
              <a href={COMPANY.phoneHref} className="text-white hover:text-crimson-light">
                {COMPANY.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-crimson-light">
                {COMPANY.email}
              </a>
            </p>
            <p>{COMPANY.address}</p>
            <p>{COMPANY.hours}</p>
          </div>
        </div>

        <div>
          <h2 className="text-[15px] font-semibold text-white">Aplicații</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[15px]">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to={p.page ? `/solutii/${p.slug}` : `/solutii#${p.slug}`} className="hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/securitate-cibernetica" className="hover:text-white">
                PROSECURE
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[15px] font-semibold text-white">Firma</h2>
          <ul className="mt-4 space-y-2 text-[15px]">
            <li><Link to="/#cum-lucram" className="hover:text-white">Cum lucrăm</Link></li>
            <li><Link to="/#achizitie" className="hover:text-white">Achiziție prin SEAP</Link></li>
            <li><Link to="/#certificari" className="hover:text-white">Certificări</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/confidentialitate" className="hover:text-white">Politica de confidențialitate</Link></li>
          </ul>
          <p className="mt-6 text-[14px] leading-relaxed">
            Certificat {CERTIFICATIONS.iso27001.name}, nr. {CERTIFICATIONS.iso27001.number}
            {FEATURES.SHOW_ISO9001 && <> și {CERTIFICATIONS.iso9001.name}</>}. Aplicații înregistrate la ORDA.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-[13px] text-white/50 md:flex-row md:justify-between">
          <p>
            © {year} {COMPANY.legalName}, CUI {COMPANY.cui}, Reg. Com. {COMPANY.regCom}
          </p>
          <p>Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
