/**
 * Comutatoare pentru conținut pregătit, dar încă ascuns.
 * Schimbați în `true` când materialele sunt gata — secțiunile apar automat.
 */
export const FEATURES = {
  // Recomandări de la clienți (vezi src/data/testimonials.js)
  SHOW_TESTIMONIALS: false,

  // Aplicația PROSECURE (software). Momentan se prezintă doar serviciul de consultanță.
  // Textul aplicației este în src/data/prosecure.js -> app
  SHOW_PROSECURE_APP: false,

  // Certificatul ISO 9001 — completați datele în src/data/company.js -> certifications.iso9001
  SHOW_ISO9001: false,

  // Analytics — scriptul se adaugă în index.html (vezi comentariul de acolo)
  ANALYTICS_ENABLED: false,
}

// Unde trimite formularul. Pe Vercel rămâne "/api/contact".
// Pe CyberFolks (cPanel) setați VITE_CONTACT_ENDPOINT=/contact.php la build.
export const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact'
