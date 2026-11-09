import ContactForm from '../components/ContactForm'
import useMeta from '../hooks/useMeta'
import { COMPANY } from '../data/company'

export default function Contact() {
  useMeta('Contact', 'Solicitați o prezentare a aplicațiilor SXS. Vă sunăm de regulă în aceeași zi lucrătoare.')
  return (
    <section className="bg-graphite text-white">
      <div className="container-x grid gap-12 pt-14 pb-20 md:pt-20 md:pb-28 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <h1 className="text-[38px] font-semibold md:text-[52px]">Solicitați o prezentare</h1>
          <p className="mt-5 max-w-md text-white/70">
            Spuneți-ne ce instituție reprezentați și ce vă lipsește acum. Un coleg vă sună, de regulă în aceeași zi
            lucrătoare, și stabilim o prezentare la sediul dvs.
          </p>
          <dl className="mt-10 space-y-5 text-[16px]">
            <div>
              <dt className="text-[14px] text-white/50">Telefon</dt>
              <dd><a href={COMPANY.phoneHref} className="font-display text-[26px] font-semibold hover:text-crimson-light">{COMPANY.phone}</a></dd>
              <dd className="text-white/60">{COMPANY.hours}</dd>
            </div>
            <div>
              <dt className="text-[14px] text-white/50">Email</dt>
              <dd><a href={`mailto:${COMPANY.email}`} className="hover:text-crimson-light">{COMPANY.email}</a></dd>
            </div>
            <div>
              <dt className="text-[14px] text-white/50">Sediu</dt>
              <dd>{COMPANY.address}</dd>
            </div>
            <div>
              <dt className="text-[14px] text-white/50">Date firmă</dt>
              <dd>{COMPANY.legalName}</dd>
              <dd className="text-white/60">CUI {COMPANY.cui}, Reg. Com. {COMPANY.regCom}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-xl border border-white/10 bg-graphite-2/60 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
