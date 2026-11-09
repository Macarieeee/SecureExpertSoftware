import useMeta from '../hooks/useMeta'
import { COMPANY } from '../data/company'

/**
 * Variantă de bază a politicii de confidențialitate.
 * Recomandare: verificați textul cu responsabilul GDPR / juristul firmei înainte de lansare.
 */
const UPDATED = '30 octombrie 2026'

const H = ({ children }) => <h2 className="mt-12 text-[24px] font-semibold">{children}</h2>

export default function Privacy() {
  useMeta('Politica de confidențialitate', 'Cum prelucrează Secure eXpert Software datele trimise prin site.')
  return (
    <>
      <section className="bg-graphite text-white">
        <div className="container-x pt-14 pb-14 md:pt-20">
          <h1 className="text-[36px] font-semibold md:text-[48px]">Politica de confidențialitate</h1>
          <p className="mt-3 text-white/60">Ultima actualizare: {UPDATED}</p>
        </div>
      </section>
      <section className="bg-white py-14 md:py-20">
        <div className="container-x max-w-[760px] space-y-4 text-ink/85 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
          <p>
            Această pagină explică ce date personale colectăm prin site-ul sxs.ro, de ce le colectăm și ce drepturi aveți,
            conform Regulamentului (UE) 2016/679 (GDPR).
          </p>

          <H>Cine prelucrează datele</H>
          <p>
            Operatorul este {COMPANY.legalName}, CUI {COMPANY.cui}, Reg. Com. {COMPANY.regCom}, cu sediul în{' '}
            {COMPANY.address}. Ne puteți scrie oricând la{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-crimson underline">{COMPANY.email}</a> sau ne puteți suna la{' '}
            {COMPANY.phone}.
          </p>

          <H>Ce date colectăm</H>
          <p>Doar datele pe care ni le trimiteți prin formularul de contact:</p>
          <ul>
            <li>numele dvs., telefonul și adresa de email;</li>
            <li>instituția, tipul acesteia și departamentul în care lucrați;</li>
            <li>aplicațiile care vă interesează, problemele descrise și termenul dorit.</li>
          </ul>
          <p>Vă rugăm să nu includeți în formular date despre pacienți sau alte date sensibile.</p>

          <H>De ce le folosim și pe ce temei</H>
          <ul>
            <li>
              ca să vă contactăm și să răspundem solicitării, să organizăm prezentarea și să pregătim oferta (art. 6 alin. (1)
              lit. b) GDPR, demersuri făcute la cererea dvs. înainte de încheierea unui contract);
            </li>
            <li>
              ca să ținem evidența solicitărilor primite (art. 6 alin. (1) lit. f), interesul nostru legitim de a gestiona
              relația cu instituțiile care ne contactează).
            </li>
          </ul>
          <p>Nu folosim datele pentru marketing automat și nu le vindem.</p>

          <H>Cine mai are acces la date</H>
          <ul>
            <li>colegii din SXS care se ocupă de solicitarea dvs.;</li>
            <li>furnizorul de găzduire al site-ului și furnizorul serviciului care transmite mesajele din formular pe email (Resend);</li>
            <li>autoritățile publice, doar dacă legea ne obligă.</li>
          </ul>
          <p>
            Unii dintre acești furnizori pot prelucra date și în afara Spațiului Economic European. În aceste cazuri,
            transferul se face cu garanțiile prevăzute de GDPR, de regulă clauzele contractuale standard aprobate de Comisia
            Europeană.
          </p>

          <H>Cât timp păstrăm datele</H>
          <p>
            Păstrăm solicitările cel mult 24 de luni de la ultimul contact. Dacă devenim parteneri contractuali, datele se
            păstrează pe durata contractului și apoi cât cere legislația financiar-contabilă.
          </p>

          <H>Drepturile dvs.</H>
          <p>Aveți dreptul să cereți:</p>
          <ul>
            <li>accesul la datele dvs. și o copie a lor;</li>
            <li>corectarea datelor greșite sau incomplete;</li>
            <li>ștergerea datelor ori restricționarea prelucrării;</li>
            <li>portabilitatea datelor;</li>
            <li>să vă opuneți prelucrării bazate pe interesul legitim.</li>
          </ul>
          <p>
            Scrieți-ne la <a href={`mailto:${COMPANY.email}`} className="text-crimson underline">{COMPANY.email}</a> și vă
            răspundem în cel mult o lună. Puteți depune și o plângere la Autoritatea Națională de Supraveghere a Prelucrării
            Datelor cu Caracter Personal (ANSPDCP), www.dataprotection.ro.
          </p>

          <H>Cookie-uri</H>
          <p>
            Site-ul nu folosește cookie-uri de analiză sau de marketing. Fonturile sunt găzduite pe propriul server, deci nu
            transmitem adresa IP către servicii terțe când încărcați pagina. Dacă vom introduce un instrument de analiză,
            actualizăm această pagină înainte.
          </p>
        </div>
      </section>
    </>
  )
}
