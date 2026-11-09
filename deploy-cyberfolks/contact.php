<?php
/**
 * Varianta pentru găzduire CyberFolks / cPanel (PHP), în locul funcției Vercel.
 * 1. Copiați fișierul config.example.php ca config.php și completați cheile.
 * 2. Urcați contact.php și config.php în public_html, lângă index.html.
 * 3. La build, setați VITE_CONTACT_ENDPOINT=/contact.php (vezi README).
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'method_not_allowed']);
  exit;
}

$config = require __DIR__ . '/config.php';
$body = json_decode(file_get_contents('php://input'), true) ?: [];

if (!empty($body['website'])) { echo json_encode(['ok' => true]); exit; }

function clip($v, $n) { return mb_substr(trim((string)($v ?? '')), 0, $n); }

$d = [
  'institution'     => clip($body['institution'] ?? '', 200),
  'institutionType' => clip($body['institutionType'] ?? '', 100),
  'role'            => clip($body['role'] ?? '', 100),
  'name'            => clip($body['name'] ?? '', 120),
  'phone'           => clip($body['phone'] ?? '', 40),
  'email'           => clip($body['email'] ?? '', 160),
  'modules'         => is_array($body['modules'] ?? null) ? array_map(fn($m) => clip($m, 80), array_slice($body['modules'], 0, 15)) : [],
  'problems'        => clip($body['problems'] ?? '', 4000),
  'timing'          => clip($body['timing'] ?? '', 60),
  'consent'         => ($body['consent'] ?? '') === 'da',
];

if (!$d['institution'] || !$d['name'] || !$d['phone'] || !filter_var($d['email'], FILTER_VALIDATE_EMAIL) || !$d['consent']) {
  http_response_code(400);
  echo json_encode(['error' => 'invalid']);
  exit;
}

$tz = new DateTimeZone('Europe/Bucharest');
$when = (new DateTime('now', $tz))->format('d.m.Y H:i');
$rows = [
  'Instituția' => $d['institution'], 'Tip instituție' => $d['institutionType'], 'Persoana' => $d['name'],
  'Departament' => $d['role'], 'Telefon' => $d['phone'], 'Email' => $d['email'],
  'Interes' => implode(', ', $d['modules']) ?: '—', 'Termen dorit' => $d['timing'] ?: '—',
  'Probleme / nevoi' => $d['problems'] ?: '—', 'Primită la' => $when,
];

$html = '<div style="font-family:Arial,sans-serif;font-size:15px"><h2 style="color:#AC0016">Solicitare nouă de pe sxs.ro</h2><table cellpadding="8">';
$text = '';
foreach ($rows as $k => $v) {
  $html .= '<tr><td style="color:#5b565e;vertical-align:top">' . $k . '</td><td style="white-space:pre-wrap">' . htmlspecialchars($v) . '</td></tr>';
  $text .= "$k: $v\n";
}
$html .= '</table></div>';

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $config['RESEND_API_KEY'], 'Content-Type: application/json'],
  CURLOPT_POSTFIELDS => json_encode([
    'from' => $config['CONTACT_FROM'], 'to' => [$config['CONTACT_TO']], 'reply_to' => $d['email'],
    'subject' => 'Solicitare prezentare: ' . $d['institution'], 'html' => $html, 'text' => $text,
  ]),
]);
curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($status < 200 || $status >= 300) {
  http_response_code(502);
  echo json_encode(['error' => 'send_failed']);
  exit;
}

if (!empty($config['SHEETS_WEBHOOK_URL'])) {
  $payload = $d; $payload['modules'] = implode(', ', $d['modules']); $payload['receivedAt'] = $when;
  $s = curl_init($config['SHEETS_WEBHOOK_URL']);
  curl_setopt_array($s, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'], CURLOPT_POSTFIELDS => json_encode($payload), CURLOPT_TIMEOUT => 8]);
  curl_exec($s);
  curl_close($s);
}

echo json_encode(['ok' => true]);
