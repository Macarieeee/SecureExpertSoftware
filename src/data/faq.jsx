import { Link } from 'react-router-dom'
import { DIRECT_PURCHASE_THRESHOLD, PROOF } from './company'

export const HOME_FAQ = [
  {
    q: 'Putem începe cu o singură aplicație și să adăugăm altele mai târziu?',
    a: 'Da. Fiecare aplicație funcționează și separat. Puteți începe, de exemplu, doar cu PROCONT, iar când adăugați PROGEST sau PROSAL, datele încep să circule automat între ele.',
  },
  {
    q: 'Cât durează implementarea și ce trebuie să pregătim?',
    a: `Orientativ, ${PROOF.implementationDays} de zile. Dvs. ne puneți la dispoziție datele inițiale: soldurile din contabilitate, stocurile din gestiune și, pentru partea medicală, datele pacienților. De restul se ocupă implementatorii noștri.`,
  },
  {
    q: 'Personalul nostru nu are pregătire IT. Se vor descurca?',
    a: 'Instruirea o fac chiar implementatorii care v-au configurat aplicațiile, pe fluxurile instituției dvs. După lansare, colegii dvs. ne pot suna oricând au o întrebare, pe toată durata contractului.',
  },
  {
    q: 'Ce se întâmplă când ministerul ne cere o raportare nouă?',
    a: 'Ne spuneți ce vi se cere, iar noi o construim în aplicație. Tot ce există deja în program e standard; ce vă trebuie în plus dezvoltăm pentru dvs.',
  },
  {
    q: 'Cum cumpărăm aplicațiile prin SEAP?',
    a: `După prezentare, primiți o ofertă tehnico-economică. Dacă hotărâți să mergeți mai departe, achiziționați aplicația, serviciul sau contractul de mentenanță direct din catalogul nostru din SEAP. Pentru valori sub pragul legal (în prezent ${DIRECT_PURCHASE_THRESHOLD}), achiziția poate fi directă.`,
  },
  {
    q: 'Aplicațiile rulează pe serverele noastre sau în cloud?',
    a: 'Ambele variante sunt posibile. Le instalăm pe infrastructura instituției sau în cloud, în funcție de ce preferați.',
  },
  {
    q: 'Ce înseamnă concret „răspuns în maximum 4 ore”?',
    a: 'Pentru orice tip de solicitare, între 08:00 și 17:00, un specialist preia problema în cel mult 4 ore. Cât durează rezolvarea depinde de natura problemei. În situații excepționale, implementatorii pot fi sunați la orice oră.',
  },
  {
    q: 'De ce nu afișați prețuri?',
    a: (
      <>
        Fiecare instituție are alte compartimente, alt număr de utilizatori și alte raportări. Oferta se face după ce
        vedem ce vă trebuie. <Link to="/contact" className="font-semibold text-crimson underline underline-offset-4">Solicitați o prezentare</Link> și
        o primiți pe măsura instituției.
      </>
    ),
  },
]

export const SECURITY_FAQ = [
  {
    q: 'Instituția noastră intră sub NIS2?',
    a: 'Sănătatea este unul dintre sectoarele de importanță critică din OUG 155/2024. Dacă instituția intră sau nu sub incidența legii, și ca entitate esențială ori importantă, depinde de activitate și de mărime. Acesta este primul lucru pe care îl stabilim împreună.',
  },
  {
    q: 'Ne certificați voi?',
    a: 'Nu. Certificarea ISO o emite un organism de certificare acreditat. Noi vă pregătim complet pentru audit: analiză, documentație, implementare, instruire. La fel am procedat și pentru propria certificare ISO 27001.',
  },
  {
    q: 'Trebuie să folosim aplicațiile SXS ca să lucrăm cu voi pe securitate?',
    a: 'Nu. Serviciul de securitate cibernetică este independent de aplicațiile noastre.',
  },
]
