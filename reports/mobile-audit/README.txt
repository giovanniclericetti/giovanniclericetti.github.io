AUDIT E OTTIMIZZAZIONE MOBILE — 16 novembre 2026

Ambito: repository locale Nuxt 2 / Vue 2 del portfolio Giovanni Clericetti.
Implementazione completata e build statica generata. Nessun deploy effettuato.
Le modifiche non salvate già presenti all'inizio sono state conservate.
Questo report aggiorna le verifiche riportate nel precedente RESPONSIVE-AUDIT.txt.

SCELTE DI DESIGN E REFERENCE
Sono state consultate le pagine dei progetti di Instrument e Pentagram,
anche nel browser a 390 px. Pattern adottati: progetti come unità di lettura
complete, immagini ampie, titolo/descrizione sempre disponibili senza hover,
spazio regolare tra contenuti, azioni riconoscibili e controllo della riproduzione.
Non sono stati copiati palette, font o composizioni delle reference.
- https://www.instrument.com/work
- https://www.pentagram.com/work
- Apple: https://developer.apple.com/design/tips/
- Apple HIG: https://developer.apple.com/design/human-interface-guidelines/accessibility
- Material / Android: https://support.google.com/accessibility/android/answer/7101858
- WCAG reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- WCAG target size: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
Studio Freight è stato consultato ma non usato come riferimento operativo:
la lettura web restituisce soprattutto il fallback che richiede JavaScript.

PROBLEMI RISOLTI
- Home: l'adattamento JS dei testi poteva comprimere tutti i titoli e le etichette
  per farli stare su una sola riga. Sotto 992 px ora i titoli restano a 21 px,
  le etichette a 13 px e vanno a capo. Il fitting desktop resta invariato.
- Card: altezza minima con possibilità di crescita, interlinea leggibile,
  spaziature regolari e fondo sfumato neutro per separare testo e immagini.
- Art direction: ancoraggio alto per le card Commercial Decks e Cara Chioggia,
  evitando di tagliare lo stemma e la mappa presenti nella parte alta delle immagini.
- Introduzioni: scala tipografica fluida, uso della larghezza disponibile,
  ritmo coerente tra header, introduzione e progetti.
- About: Areas of Expertise prima assente su telefono, ora presente con tutte
  le informazioni in tre pannelli compatti. Ritratto proporzionato, testi
  secondari più contrastati, nessuna animazione di apparizione sui telefoni.
- Navigazione: collegamenti diretti Home/About/Contact mantenuti. Non esisteva
  un hamburger da correggere e non ne è stato aggiunto uno per due destinazioni.
  Aree principali di almeno 48 CSS px, nomi accessibili, focus visibile e skip link.
- Accordion: mantenuti i sei pannelli e lo stato iniziale; rimossi i ruoli tablist
  impropri. Verificati click/tap, Space e aria-expanded.
- Progetti: sottotitoli come paragrafi, tag a capo, testo corrente a 16 px sui
  telefoni, immagini di galleria con rapporto intrinseco anziché crop a quote fisse.
  Le coppie di immagini e la griglia desktop conservano i breakpoint esistenti.
- Cover: niente contenitore mobile rigido di 300 px; eager/high priority per le
  immagini iniziali. Audiovisual Identity usava per errore la cover di Referto:
  ora usa la propria immagine già presente per il desktop, senza nuovi contenuti.
- Progetto successivo: titolo visibile su telefono, immagine a piena area,
  testo leggibile e destinazione verificata. Rimossa una spaziatura che colpiva
  per errore anche il livello immagine della card.
- Video locali: componente ProjectMotion, controlli nativi, playsinline,
  riproduzione su richiesta per touch/mobile, pausa fuori schermo, rispetto
  di reduced-motion. preload=none e poster derivati dagli stessi video.
  Riservate le dimensioni corrette: i video feature di Bottleneck hanno SAR
  1827:2096 e rapporto di visualizzazione 203:131, diverso dal raster 1920x1080.
- Vimeo: iframe lazy con titolo accessibile; rimossi gli script del player inutilizzati
  dai template Vue. Non è stata modificata la sorgente dei video.
- Immagini: aggiunte descrizioni basate sull'ispezione delle immagini originali.
  Le immagini di sfondo usano aria-label/role=img senza mostrare testo sopra l'opera.
- CSS: corretti i blocchi annidati dichiarati come CSS normale. La minificazione
  della build statica perdeva regole e applicava regole mobile al desktop.
  I blocchi interessati passano esplicitamente dal compilatore Sass già installato.
- Performance: import selettivo dei componenti e delle cinque icone Bootstrap
  effettivamente usati; bundle vendors/app da circa 1,29 MiB a 355 KiB (-73%).
  Nessuna dipendenza runtime aggiunta. DM Sans è ora locale: stesso file/font,
  con licenza OFL, preload dei font e rimozione della richiesta CSS a Google Fonts.
- Tre derivati WebP dedicati al mobile per la prima card Events & Matchday,
  il ritratto About e la cover Events & Matchday. Stesse immagini e composizione,
  originali e sorgenti desktop conservati. Peso dei tre file: 135436, 265470,
  178146 byte. Rigenerazione: node scripts/optimize-mobile-heroes.cjs.
- Responsive: breakpoint già adottati dal sito (768 e 992 px), margini fluidi,
  safe area laterali e inferiori, nessuna altezza di pagina vincolata a 100vh.

INVENTARIO PAGINE VERIFICATE
/                       Introduzione, 10 card visibili, navigazione, footer.
/about                  Ritratto, social/CV, expertise, 6 accordion, footer.
/acmilan                Cover, riservatezza/contatto, descrizione, next project.
/acm-partner-visibility  Tutte le sezioni e gallerie, crediti, next project.
/acmilan3               Eventi, attivazioni, produzione matchday, gallerie, crediti.
/audiovisualidentity    Cover corretta, tesi, piattaforma, presentazione.
/bottleneck             Ricerca, interfaccia, 4 video locali, design system.
/carachioggia           Storytelling, mappe, ricerca, illustrazioni, materiali fisici.
/disruptive             Interfacce, narrazione digitale, mostra fisica.
/previewpretest         Identità, sito, attività e materiali didattici.
/referto                Impaginati, fotografie, video locale, piattaforma digitale.
/sourdata               Identità, prodotti, piattaforma, making of.

VERIFICHE ESEGUITE
- npm run generate: riuscito, tutte le 12 route generate.
- Matrice Chromium: 12 pagine x 11 viewport = 132 combinazioni.
  Larghezze: 320, 360, 375, 390, 414, 430, 600, 768, 844, 1024, 1440 px.
  Altezza 900 px, eccetto 844x390 per landscape.
  Nessun overflow orizzontale della pagina, nessuna immagine locale rotta,
  nessun controllo visibile privo di nome nei controlli eseguiti,
  nessun errore JavaScript. Le immagini di sfondo sono controllate dopo scrolling.
- Screenshot completi a 320, 390, 768, 1024 e 1440 px; ispezione visiva di tutte
  le pagine a 390 px, confronto con il riferimento iniziale a 1440 px.
- Nuovo test delle due pagine video a tutte le 11 larghezze dopo la correzione SAR.
- Nuovo test di Home, About e ACM Events alle 11 larghezze dopo i derivati mobile.
- Verifica finale delle anteprime next project a 320, 390, 768 e 1440 px.
- Desktop: geometria dei principali elementi invariata nelle 11 pagine diverse
  da About. In About le differenze di misura sono riconducibili alla trasformazione
  di reveal (24 px) e alla card musicale casuale preesistente; tipografia e
  composizione desktop mantenute. I controlli video costituiscono una correzione
  funzionale intenzionale e sono visibili anche su desktop.
- Test funzionali con touch emulato: card, link About, tutti gli accordion,
  next project, riproduzione/pausa video, rotazione, reduced-motion.
- Tastiera: skip link e Space sugli accordion. Indietro ripristina la posizione
  della home (1860 px prima e dopo nel test registrato).
- Verifica immagini: 229 hash delle sorgenti correnti verificati, 1003 derivati decodificati,
  58 WebP alla risoluzione nativa identici pixel per pixel agli originali.
  Poster modificati e tre nuovi derivati mobile controllati nuovamente.
- git diff --check: superato.
- Test axe WCAG 2 A/AA, 2.1 AA, 2.2 AA su tutte le 12 pagine a 390 px.
  Nessuna violazione automatica rilevata in 7 pagine. Rimangono segnalazioni
  color-contrast in ACM Commercial Decks, Audiovisual Identity, Disruptive,
  Preview & Pretest e SourData. Non si dichiara conformità WCAG completa.

LIMITI E RISULTATI DA NON SOVRAINTERPRETARE
- I colori di accento originali di alcuni testi/tag non raggiungono i rapporti
  WCAG AA. Non sono stati sostituiti con una nuova palette. La correzione
  completa richiederebbe una decisione visiva sui colori o sul loro uso nei testi.
- Vimeo restituisce nel browser di test: “We couldn't verify the security of your
  connection. Access to this content has been restricted.” La riproduzione esterna
  non è quindi verificabile qui; i riquadri possono apparire bianchi negli screenshot.
  Nessun tentativo di aggirare la restrizione. I video locali sono stati testati.
- Chrome desktop con emulazione touch non equivale a Safari iOS o Chrome Android
  su hardware reale. Il motore WebKit non è installato; nessun test WebKit eseguito.
  Restano da provare barre dinamiche, modalità risparmio energetico e safe area
  su dispositivi fisici. Non è stata svolta una sessione con screen reader reale.
- Lighthouse è una misura di laboratorio locale, non un dato CrUX né una misura
  INP sul campo. Le prove finali usano compressione gzip, come normale su hosting
  di produzione. I risultati del server locale non certificano i Core Web Vitals
  del sito pubblicato. Vedere performance.json per i valori e la configurazione.
- Nessun commit, push o deploy. Il sito pubblico non è stato aggiornato.

ARTEFATTI E RIPRODUCIBILITÀ
responsive-results.json: matrice, geometrie, font e anomalie osservate.
interactions.json: esiti delle interazioni.
accessibility.json: segnalazioni axe e selettori dei nodi coinvolti.
navigation-media.json: misure delle anteprime next project.
media-limits.json: risposta Vimeo e indisponibilità WebKit.
performance.json: riepilogo Lighthouse finale.
screenshots/: screenshot completi a 390 px, compressi WebP per la consegna.
I PNG originali alle cinque larghezze restano in /tmp/portfolio-mobile-final.

Per ripetere la matrice, servire dist dopo npm run generate, quindi:
PLAYWRIGHT_MODULE=/percorso/al/modulo/playwright \
AUDIT_URL=http://127.0.0.1:PORTA \
AUDIT_OUT=/tmp/portfolio-responsive node scripts/verify-responsive.cjs
Il modulo Playwright è solo uno strumento di test e non è una dipendenza del sito.
AUDIT_ROUTES=bottleneck,referto permette una verifica mirata.

LIGHTHOUSE FINALE (MOBILE, LABORATORIO LOCALE)
Route         Performance  Accessibility   LCP     CLS   TBT
/                  79            98       5,0 s    0     20 ms
/about             76            98       5,3 s    0      0 ms
/acmilan3          88            98       3,6 s    0     20 ms
/bottleneck        84            98       4,2 s    0     20 ms

La stabilità visiva e il tempo di blocco sono buoni nella prova. Il LCP rimane
oltre la soglia di 2,5 s nella simulazione mobile: non si dichiara superato il
requisito Core Web Vitals. I derivati mobile hanno ridotto il LCP delle tre
pagine interessate rispetto al test immediatamente precedente (8,6 -> 5,0 s
home; 7,1 -> 5,3 s About; 5,7 -> 3,6 s Events), sullo stesso server con gzip.
Sono singole osservazioni di laboratorio, non medie statistiche né dati utenti.
I JSON Lighthouse integrali restano in /tmp/portfolio-mobile-final.

AGGIORNAMENTO — 17 novembre 2026
Su richiesta, ridotta la tipografia dei titoli delle card mobile/tablet da 21
a 18 px, con interlinea 1,3 e distanza dalla descrizione di 8 px. Il titolo
della card next project su telefono passa da 24 a 18 px. Descrizioni a 14 px
e introduzioni a 20–24 px conservate. Desktop invariato. Gli screenshot e
la matrice di audit sopra riportati precedono questa correzione tipografica.

AGGIORNAMENTO PILLS E DESCRIZIONI — 17 novembre 2026
Pills delle card mobile/tablet a 12 px (11,9 px a 320 px), padding orizzontale
6 px, gap 4 px e adattamento condiviso alla riga più lunga. Titoli invariati.
Descrizioni con text-wrap: balance per distribuire le parole in righe di
lunghezza simile senza riscrivere o giustificare il testo.
Verifica Chromium sulle 10 card a 320, 360, 375, 390, 414, 430, 600, 768,
844, 991 e 1440 px: pills su una sola riga senza overflow in tutti i casi;
a capo bilanciati attivi su mobile/tablet. Desktop mantiene pills a 14 px
nel viewport di riferimento. Screenshot di controllo: /tmp/card-pills-390.png.
