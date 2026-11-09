/**
 * Conținutul aplicațiilor SXS.
 * `page: true` = aplicație prioritară, are pagină proprie (/solutii/<slug>).
 * Restul apar pe pagina /solutii, fiecare cu ancoră (#<slug>).
 */

export const PRODUCTS = [
  {
    slug: 'procont',
    name: 'PROCONT',
    page: true,
    area: 'Contabilitate bugetară',
    users: 'Director economic, contabil-șef, control financiar preventiv',
    tagline: 'Execuția bugetară urmărită de la propunere până la ordinul de plată.',
    outcome:
      'Execuția bugetară, de la propunere până la ordinul de plată, fără să introduceți aceleași date de două ori.',
    intro:
      'PROCONT informatizează compartimentul de contabilitate al unei unități bugetare, în concordanță cu normele legale în vigoare. Îl configurăm pe nomenclatoarele instituției dvs., iar interfața rămâne simplă pentru cine lucrează zilnic în ea.',
    pains: [
      'Ministerul sau ordonatorul principal cere o situație nouă, iar programul actual nu o poate genera.',
      'Erorile ies la iveală abia la închiderea lunii sau a trimestrului.',
      'Aceleași sume se introduc de mai multe ori, în documente diferite.',
    ],
    groups: [
      {
        title: 'Ciclul bugetar complet',
        items: [
          'Urmărirea propunerilor și a angajamentelor bugetare',
          'Comenzi către furnizori generate conform angajamentelor încheiate',
          'Ordonanțări pe fiecare buget, cu soldurile conturilor bancare verificate înainte',
          'Suplimentări bugetare introduse de la o anumită dată, pe fiecare buget',
          'Ordine de plată pentru bănci și Trezorerie, generate în programul OPFV',
        ],
      },
      {
        title: 'Contabilitate fără muncă dublă',
        items: [
          'Note contabile predefinite, în număr nelimitat: introduceți doar sumele',
          'Datele trec automat de la un tip de document la altul',
          'Plan de conturi flexibil, cu analitice nelimitate',
          'Închiderea automată a conturilor, trimestrial și anual',
        ],
      },
      {
        title: 'Situații gata atunci când vi le cer',
        items: [
          'Balanță sintetică și analitică, cu subtotaluri pe clase',
          'Bilanț trimestrial și cont de rezultat patrimonial',
          'Jurnale de operații filtrabile, registru de casă și de bancă, cartea mare, registru inventar',
          'Oglinda conturilor pe cele 12 luni',
          'Urmărirea fiecărei facturi și lista facturilor scadente într-o perioadă',
        ],
      },
      {
        title: 'Pentru instituții cu mai multe unități',
        items: [
          'Număr nelimitat de unități în aceeași aplicație',
          'Raportări către Forexebug și facturi prin RO e-Factura',
        ],
      },
    ],
    connects: ['PROGEST', 'PROSAL', 'Forexebug', 'RO e-Factura', 'OPFV'],
  },
  {
    slug: 'progest',
    name: 'PROGEST',
    page: true,
    area: 'Gestiune și magazii',
    users: 'Gestionari, director administrativ, serviciul achiziții, contabilitate',
    tagline: 'Știți oricând ce aveți în magazie, cât a costat și când se termină.',
    outcome: 'Știți oricând ce aveți în magazie, la ce preț a intrat și când se termină.',
    intro:
      'PROGEST informatizează magaziile gestionarilor. Fiecare mișcare de stoc devine un document numerotat automat, iar contabilitatea primește datele deja contate, fără să mai fie introduse a doua oară.',
    pains: [
      'Stocul real nu se potrivește cu cel din evidență și nimeni nu știe de unde vine diferența.',
      'Facturile se introduc manual, deși comanda există deja în sistem.',
      'Necesarul se estimează din experiență, iar unele produse se termină pe neașteptate.',
    ],
    groups: [
      {
        title: 'Stocuri urmărite exact',
        items: [
          'Fiecare produs urmărit pe fiecare gestiune și pe fiecare preț de intrare',
          'Rapoarte de stoc și de mișcare, pe document, furnizor, gestiune sau grupă de produse',
          'Grupe de produse configurate pentru transferul în contabilitate',
        ],
      },
      {
        title: 'Documente fără reintroducere',
        items: [
          'Orice document de mișcare: recepții, consumuri, transferuri, predări, facturi și avize',
          'Numerotare automată a documentelor',
          'Factura preia automat detaliile din comanda pe baza căreia a fost emisă și se poate corecta dacă diferă',
        ],
      },
      {
        title: 'Necesarul calculat, nu ghicit',
        items: [
          'Necesarul pentru fiecare produs, la nivel de unitate',
          'Estimarea perioadei până la epuizarea stocului',
          'Necesarul de produse stabilit pentru fiecare departament',
        ],
      },
      {
        title: 'Legat direct de contabilitate',
        items: [
          'Contare flexibilă a documentelor, în format contabil',
          'Vedeți modul de contare pe fiecare document înainte să ajungă în contabilitate',
          'Fiecare utilizator lucrează doar pe gestiunile și grupele de furnizori pe care le are permise',
        ],
      },
    ],
    connects: ['PROCONT', 'PROFARM', 'RO e-Factura'],
  },
  {
    slug: 'prosal',
    name: 'PROSAL',
    area: 'Salarizare și resurse umane',
    users: 'Serviciul RUNOS, director economic',
    tagline: 'Salarii, gărzi și declarații pentru unități bugetare, actualizate la fiecare schimbare de lege.',
    intro:
      'PROSAL informatizează compartimentul de salarizare al unei unități bugetare și generează toate raportările cerute de forurile superioare.',
    items: [
      'Calcul automat pentru gărzi, ore suplimentare și ore de noapte',
      'Fișe de pontaj care marchează sărbătorile legale și zilele nelucrătoare',
      'Peste 100 de modele de rapoarte pentru compartimentele RUNOS',
      'Declarația 112 și toate declarațiile lunare și semestriale, exportate direct',
      'Rețineri de sindicat și cele din contractul colectiv de muncă, calculate automat',
      'Contracte de muncă, adeverințe, recapitulații, state de plată și fluturași',
      'Export către bănci pentru virarea salariilor pe card',
      'Indexare automată a salariilor și istoricul fiecărui angajat',
    ],
    connects: ['PROCONT', 'D112'],
  },
  {
    slug: 'promedic',
    name: 'PROMEDIC',
    area: 'Management medical spitalicesc',
    users: 'Medici, asistenți, UPU și camera de gardă, biroul de statistică',
    tagline: 'Traseul pacientului, de la camera de gardă până la externare, într-o singură aplicație.',
    intro:
      'Sistemul integrat de management medical PROMEDIC acoperă activitatea spitalului pe toată durata internării, pentru întreg personalul și în concordanță cu normele legale în vigoare.',
    items: [
      'Înregistrare rapidă a pacienților în UPU sau camera de gardă și generarea Foii de Observație Clinică Generală',
      'Preluarea, transferul și repartizarea pacienților pe secții',
      'Date clinice pentru toate specialitățile și istoricul pacientului disponibil oricând',
      'Rezultatele de laborator preluate automat în foaia de observație și în biletul de ieșire',
      'Foaia zilnică de mișcare, biletul de ieșire, scrisoarea medicală și decontul pe pacient, generate automat',
      'Rapoarte complexe pentru biroul de statistică, cu export XLS',
      'Raportări SIUI și DRG, rețetă electronică (SIPE) și Dosarul Electronic de Sănătate',
    ],
    sub: {
      name: 'Clinic Manager',
      area: 'Modulul de ambulatoriu',
      items: [
        'Date clinice pentru consultațiile din ambulatoriu și istoricul pacientului',
        'Rețete compensate și formulare terapeutice',
        'Import și actualizare a listei de medicamente CNAS',
        'Rapoarte de activitate pe cabinete și export în formatele agreate de CNAS',
      ],
    },
    connects: ['PROFARM', 'SIUI', 'DRG', 'SIPE', 'DES'],
  },
  {
    slug: 'profarm',
    name: 'PROFARM',
    area: 'Farmacii cu circuit închis',
    users: 'Farmacist-șef, director medical',
    tagline: 'Fiecare medicament urmărit în toate gestiunile, până la pacient.',
    intro:
      'PROFARM este făcut pentru farmaciile cu circuit închis din unitățile sanitare. Interfața e organizată pe ce aveți de făcut, nu pe meniuri: nomenclatoare, documente, rapoarte.',
    items: [
      'Nomenclator unic: fiecare articol urmărit individual în toate gestiunile',
      'Import și actualizare a listei de medicamente transmise de CNAS',
      'Consumuri pe condici de medicație și rețete, cantitativ și valoric',
      'Rapoarte de consum pe medic, secție, gestiune și pacient',
      'Export în formatele cerute de CNAS, CASJ și Ministerul Sănătății (XML, XLS)',
      'Stocuri la zi, la o dată anume sau pe interval: balanță cantitativ-valorică, fișă de magazie, listă de inventar',
    ],
    connects: ['PROMEDIC', 'PROGEST'],
  },
  {
    slug: 'proreg',
    name: 'PROREG',
    area: 'Registratură',
    users: 'Secretariat, registratură, conducere',
    tagline: 'Registrul documentelor de intrare și ieșire, cu numere alocate automat.',
    intro:
      'PROREG gestionează registrul documentelor de intrare și ieșire ale instituției. Datele sunt validate chiar în momentul introducerii, iar aplicația vă arată exact unde e o neconcordanță.',
    items: [
      'Numere de înregistrare alocate automat, consecutiv și unic la nivelul anului',
      'Documente înregistrate pe departamente, cu emitent și persoană de execuție',
      'Stadiul fiecărui document în circuitul său',
      'Scanarea și arhivarea documentelor introduse',
      'Centralizator pe perioada aleasă și export în Excel',
      'Număr nelimitat de unități și filtrare după orice criteriu',
    ],
    connects: ['PROMANAGEMENT'],
  },
  {
    slug: 'profaz',
    name: 'PROFAZ',
    area: 'Parc auto și ambulanțe',
    users: 'Servicii de ambulanță, șef parc auto, director administrativ',
    tagline: 'Foi de parcurs și consum de combustibil, conform Ordinului nr. 14/1982.',
    intro:
      'PROFAZ ține evidența consumului de combustibil și ulei pentru parcul auto. Funcționează și pe calculatoare care nu sunt conectate la rețea, iar datele se transferă ulterior pe sistemul central.',
    items: [
      'Evidența autovehiculelor și a șoferilor, pe schimburi de zi și de noapte',
      'Calculul și recalculul foilor de parcurs',
      'Kilometri la bord, înainte și după fiecare alimentare',
      'Bonurile valorice BVCA, primite de șofer și alimentate',
      'Prețurile combustibililor urmărite după evoluția pieței',
      'Revizii, schimburi de ulei și filtre, cu normare',
      'Fișa activității zilnice (F.A.Z.)',
    ],
    connects: ['PROCONT'],
  },
  {
    slug: 'promanagement',
    name: 'PROMANAGEMENT',
    area: 'Direcții de Sănătate Publică',
    users: 'DSP: avizare, inspecție sanitară de stat, igiena radiațiilor',
    tagline: 'Avize, autorizări și inspecții pentru DSP, într-o bază de date comună tuturor sediilor.',
    intro:
      'PROMANAGEMENT este construit pentru Direcțiile de Sănătate Publică. Toate sediile lucrează în aceeași bază de date centrală.',
    items: [
      'Modulul Avize și autorizări',
      'Modulul Igiena radiațiilor',
      'Modulul Inspecția sanitară de stat',
      'Evidența solicitărilor primite de la petenți și a actelor emise',
      'Import automat al firmelor nou înființate, transmise de Registrul Comerțului, pentru verificarea declarațiilor pe proprie răspundere',
    ],
    connects: ['PROREG'],
  },
]

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug)

export const SERVICES = [
  {
    title: 'Consultanță software',
    text: 'Analizăm sistemul informatic existent și vă spunem ce merită păstrat, ce trebuie optimizat și ce lipsește.',
  },
  {
    title: 'Proiectare baze de date',
    text: 'Analiză de sistem, modelare de date și dezvoltare adaptată specificului instituției.',
  },
  {
    title: 'Dezvoltare la cerere',
    text: 'Când aveți nevoie de o funcție sau o raportare nouă, o construim în aplicația dvs.',
  },
  {
    title: 'Servicii IT de securitate',
    text: 'Strategie de backup și protecție a datelor, audit informatic și raport de audit.',
  },
  {
    title: 'Licențiere software',
    text: 'Vă ajutăm să legalizați licențele de sistem și de baze de date, în acord cu producătorii.',
  },
  {
    title: 'Echipamente IT',
    text: 'Furnizare și mentenanță de echipamente IT, echipamente multifuncționale și consumabile.',
  },
]
