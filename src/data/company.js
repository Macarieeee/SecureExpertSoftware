export const FOUNDED = 2008
export const yearsActive = () => new Date().getFullYear() - FOUNDED

export const COMPANY = {
  brand: 'Secure eXpert Software',
  short: 'SXS',
  legalName: 'SC Secure Expert Software SRL',
  cui: 'RO24167740',
  regCom: 'J2008011909408',
  address: 'Intrarea Platon nr. 5, etaj 1, Sector 3, București',
  phone: '0724 801 020',
  phoneHref: 'tel:+40724801020',
  email: 'office@sxs.ro',
  hours: 'Luni–vineri, 08:00–17:00',
}

// Cifre confirmate de firmă
export const PROOF = {
  seapContracts: 988,
  institutions: 'peste 20',
  responseHours: 4,
  implementationDays: '60–90',
}

// Prag achiziție directă produse/servicii (art. 7 alin. (5) din Legea 98/2016).
// Verificați valoarea înainte de lansare dacă legea se modifică.
export const DIRECT_PURCHASE_THRESHOLD = '270.120 lei fără TVA'

export const CERTIFICATIONS = {
  iso27001: {
    name: 'ISO/IEC 27001',
    title: 'Sistem de management al securității informației',
    standard: 'SR EN ISO/IEC 27001:2023 / ISO/IEC 27001:2022',
    issuer: 'CERTIND SA (acreditat RENAR, membru IAF)',
    number: '51246/158-40-SI',
    initial: '06.06.2024',
    validUntil: '05.06.2027',
    scope:
      'Proiectare, realizare, implementare, mentenanță și optimizare aplicații, sisteme informatice și rețele aferente de transmisie date.',
  },
  // PLACEHOLDER — se afișează doar când FEATURES.SHOW_ISO9001 = true
  iso9001: {
    name: 'ISO 9001',
    title: 'Sistem de management al calității',
    standard: 'SR EN ISO 9001:2015',
    issuer: '[organism de certificare]',
    number: '[număr certificat]',
    initial: '[data certificării]',
    validUntil: '[data expirării]',
    scope: '[domeniul de certificare]',
  },
  orda: {
    name: 'ORDA',
    title: 'Programe înregistrate',
    text: 'Toate aplicațiile SXS sunt înregistrate în Registrul Național al Programelor pentru Calculator (ORDA).',
  },
}

// Clienți confirmați pentru afișare publică (doar numele, fără sigle)
export const CLIENTS = [
  { name: 'Institutul Național de Diabet, Nutriție și Boli Metabolice „Prof. Dr. N. Paulescu”', short: 'Institutul „N. Paulescu”' },
  { name: 'Direcția de Sănătate Publică București', short: 'DSP București' },
  { name: 'Serviciul de Ambulanță București-Ilfov', short: 'Ambulanța București-Ilfov' },
  { name: 'Spitalul Clinic de Chirurgie Oro-Maxilo-Facială „Prof. Dr. Dan Theodorescu”', short: 'Spitalul OMF „Prof. Dr. Dan Theodorescu”' },
  { name: 'Spitalul Clinic de Copii „Dr. Victor Gomoiu”', short: 'Spitalul de Copii „Dr. Victor Gomoiu”' },
  { name: 'Clinica Medicală Hipocrat 2000', short: 'Clinica Hipocrat 2000' },
  { name: 'Clinica Medicală Nicomed', short: 'Clinica Nicomed' },
  { name: 'Puls Medica', short: 'Puls Medica' },
  { name: 'Savier Medical', short: 'Savier Medical' },
]

// Platforme externe cu care aplicațiile schimbă date
export const INTEGRATIONS = [
  { name: 'Forexebug', what: 'raportări financiare ale instituțiilor publice' },
  { name: 'RO e-Factura', what: 'facturi electronice ANAF' },
  { name: 'SIUI', what: 'raportări către CNAS' },
  { name: 'DRG', what: 'grupele de diagnostice' },
  { name: 'SIPE', what: 'rețeta electronică' },
  { name: 'DES', what: 'Dosarul Electronic de Sănătate' },
  { name: 'OPFV', what: 'ordine de plată către Trezorerie' },
  { name: 'D112', what: 'declarația salarială ANAF' },
]
