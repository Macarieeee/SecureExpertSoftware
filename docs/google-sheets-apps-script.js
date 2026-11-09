/**
 * Baza de date a solicitărilor, într-un Google Sheet (opțional).
 *
 * 1. Creați un Google Sheet nou, de ex. „Solicitări site SXS”.
 * 2. Extensions → Apps Script, ștergeți codul existent și lipiți acest fișier.
 * 3. Deploy → New deployment → tip „Web app”
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Copiați URL-ul primit și puneți-l în variabila SHEETS_WEBHOOK_URL
 *    (Vercel → Settings → Environment Variables, sau în config.php pe CyberFolks).
 */
const HEADERS = [
  'Primită la', 'Instituția', 'Tip instituție', 'Persoana', 'Departament',
  'Telefon', 'Email', 'Interes', 'Termen dorit', 'Probleme / nevoi', 'Status',
]

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS)
  const d = JSON.parse(e.postData.contents)
  sheet.appendRow([
    d.receivedAt, d.institution, d.institutionType, d.name, d.role,
    d.phone, d.email, d.modules, d.timing, d.problems, 'Nou',
  ])
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON)
}
