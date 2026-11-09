import { CERTIFICATIONS } from '../data/company'
import { FEATURES } from '../config/features'

function IsoCard({ c }) {
  return (
    <div className="flex flex-col rounded-xl border border-line bg-white p-7">
      <p className="font-display text-[30px] font-bold text-ink">{c.name}</p>
      <p className="text-[15px] text-muted">{c.title}</p>
      <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 text-[15px]">
        <dt className="text-muted">Standard</dt>
        <dd className="text-ink">{c.standard}</dd>
        <dt className="text-muted">Emis de</dt>
        <dd className="text-ink">{c.issuer}</dd>
        <dt className="text-muted">Nr. certificat</dt>
        <dd className="text-ink">{c.number}</dd>
        <dt className="text-muted">Valabil până la</dt>
        <dd className="text-ink">{c.validUntil}</dd>
      </dl>
      <p className="mt-5 border-t border-line pt-4 text-[14px] text-ink/70">{c.scope}</p>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certificari" className="bg-mist py-20 md:py-24">
      <div className="container-x">
        <h2 className="max-w-[26ch] text-[32px] font-semibold md:text-[44px]">Certificări pe care le puteți verifica</h2>
        <p className="mt-5 max-w-[60ch] text-ink/70">
          Copiile certificatelor le primiți împreună cu oferta, pentru dosarul de achiziție.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <IsoCard c={CERTIFICATIONS.iso27001} />
          {FEATURES.SHOW_ISO9001 && <IsoCard c={CERTIFICATIONS.iso9001} />}
          <div className="flex flex-col rounded-xl border border-line bg-white p-7">
            <p className="font-display text-[30px] font-bold text-ink">{CERTIFICATIONS.orda.name}</p>
            <p className="text-[15px] text-muted">{CERTIFICATIONS.orda.title}</p>
            <p className="mt-6 text-ink/80">{CERTIFICATIONS.orda.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
