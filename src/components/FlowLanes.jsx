/**
 * Cum circulă datele între aplicații: trei trasee reale dintr-un spital.
 * Liniile punctate animate arată că informația merge mai departe singură.
 */
const LANES = [
  {
    title: 'Pacientul',
    modules: 'PROMEDIC, PROFARM',
    steps: ['Camera de gardă sau UPU', 'Internare pe secție', 'Medicație din farmacie', 'Externare și decont'],
    out: ['SIUI', 'DRG', 'DES'],
  },
  {
    title: 'Materialele și banii',
    modules: 'PROGEST, PROCONT',
    steps: ['Comandă', 'Recepție și factură', 'Notă contabilă', 'Ordonanțare și plată'],
    out: ['Forexebug', 'OPFV', 'e-Factura'],
  },
  {
    title: 'Personalul',
    modules: 'PROSAL',
    steps: ['Pontaj', 'Gărzi și ore suplimentare', 'Stat de plată', 'Virament pe card'],
    out: ['D112', 'Bănci'],
  },
]

function Connector() {
  return (
    <>
      <svg className="hidden h-3 w-6 shrink-0 md:block lg:w-8" viewBox="0 0 32 12" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="6" x2="32" y2="6" stroke="#E5485D" strokeWidth="2" className="flow-line" />
      </svg>
      <svg className="ml-5 block h-5 w-3 md:hidden" viewBox="0 0 12 20" aria-hidden="true">
        <line x1="6" y1="0" x2="6" y2="20" stroke="#E5485D" strokeWidth="2" className="flow-line" />
      </svg>
    </>
  )
}

export default function FlowLanes() {
  return (
    <div className="space-y-10 md:space-y-6">
      {LANES.map((lane) => (
        <div key={lane.title} className="grid gap-4 md:grid-cols-[170px_1fr] md:items-center md:gap-6">
          <div>
            <h3 className="text-[19px] font-semibold text-white">{lane.title}</h3>
            <p className="text-[14px] text-white/50">{lane.modules}</p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-[repeat(4,minmax(0,1fr))_200px] md:items-center">
            {lane.steps.map((s) => (
              <div key={s} className="flex flex-col md:flex-row md:items-center">
                <div className="flex min-h-[50px] flex-1 items-center rounded-md border border-white/12 bg-graphite-2 px-3.5 py-2.5 text-[14px] leading-tight text-white/90">
                  {s}
                </div>
                <Connector />
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5">
              {lane.out.map((o) => (
                <span
                  key={o}
                  className="rounded-md border border-crimson-light/60 px-2.5 py-2 font-display text-[13px] font-semibold text-crimson-light"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
