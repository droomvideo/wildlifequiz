// =====================================================
// WILDLIFE QUIZ - script.js
// Dit bestand bevat alle gegevens (gebieden, dieren, badges)
// en de logica: wat er gebeurt als je ergens op klikt.
//
// De site bestaat uit één HTML-pagina met drie "weergaven":
//   - het overzicht met alle gebieden      (adres eindigt op #)
//   - de pagina van één gebied             (bijv. #gebied/savanne)
//   - de pagina van één dier               (bijv. #dier/ijsbeer)
// Het stukje na de # heet de "hash". JavaScript kijkt naar de hash
// en laat de juiste weergave zien. Dat werkt ook als je het bestand
// gewoon dubbelklikt (file://) of op GitHub Pages zet.
// =====================================================


// =====================================================
// 1. GEBIEDEN
// =====================================================
// Elk gebied heeft:
//   id    = korte code zonder spaties (komt in de link: #gebied/savanne)
//   naam  = de naam die je op de pagina ziet
//   tekst = korte beschrijving
//   foto  = de foto op de gebiedskaart
//
// Nieuw gebied? Voeg een regel toe en geef dieren hetzelfde gebied-id.
const gebieden = [
  { id: "pool",       naam: "Poolgebieden", tekst: "IJs, sneeuw en extreme kou",             foto: "fotos/ijsbeer.jpg" },
  { id: "savanne",    naam: "Savanne",      tekst: "Eindeloze graslanden in Afrika",         foto: "fotos/zebra.jpg" },
  { id: "oceaan",     naam: "Oceaan",       tekst: "Leven onder het wateroppervlak",         foto: "fotos/zeeschildpad.jpg" },
  { id: "jungle",     naam: "Regenwoud",    tekst: "Warm, nat en vol leven",                 foto: "fotos/ara.jpg" },
  { id: "bos",        naam: "Bos",          tekst: "Bomen, bladeren en verborgen bewoners",  foto: "fotos/eekhoorn.jpg" },
  { id: "insecten",   naam: "Insecten",     tekst: "Klein, slim en overal te vinden",        foto: "fotos/koninginnenpage.jpg" },
  { id: "boerderij",  naam: "Boerderij",    tekst: "Dieren die met mensen samenleven",       foto: "fotos/paard.jpg" },
  { id: "huisdieren", naam: "Huisdieren",   tekst: "Je beste vrienden thuis",                foto: "fotos/hond.jpg" },
  { id: "woestijn",   naam: "Woestijn",     tekst: "Hitte, zand en weinig water",            foto: "fotos/dromedaris.jpg" },
  { id: "rivier",     naam: "Rivier & Meer", tekst: "Leven in en rond zoet water",           foto: "fotos/nijlpaard.jpg" },
  { id: "australie",  naam: "Australië",    tekst: "Buideldieren en bijzondere vogels",      foto: "fotos/koala.jpg" },
  { id: "bergen",     naam: "Bergen",       tekst: "Hoog, steil en ijskoud",                 foto: "fotos/sneeuwluipaard.jpg" }
];


// =====================================================
// 2. DIEREN
// =====================================================
// Elk dier is één blok tussen { en }. Een dier heeft:
//   id        = korte naam zonder spaties of hoofdletters (komt in de link: #dier/ijsbeer)
//   naam      = de naam die je op de pagina ziet
//   gebied    = de id van het gebied waar het dier bij hoort
//   emoji     = reserveplaatje als een foto niet laadt
//   foto      = foto van een volwassen dier (in de map "fotos")
//   jongFoto  = foto van een jong dier
//   jongNaam  = hoe een jong heet (welp, kalf, kuiken...)
//   weetjes   = een lijst met 4 tot 6 feiten
//   vragen    = drie vragen. Elke vraag heeft:
//                 vraag, antwoorden (4 stuks),
//                 goed (welk antwoord klopt, tellen vanaf 0: 0 t/m 3)
//                 en uitleg (die je ziet na het antwoorden)
//
// ZELF EEN DIER TOEVOEGEN?
// 1. Zet twee foto's in de map "fotos", bijvoorbeeld das.jpg en das-jong.jpg.
// 2. Kopieer een compleet dier-blok (van { tot en met },) en plak het in de lijst.
// 3. Verander id, naam, gebied, foto's, weetjes en vragen.
// 4. Klaar! De site maakt automatisch een kaart en een eigen pagina (#dier/das) en een snelkoppeling op het startscherm.
const dieren = [

  // ===== Poolgebieden =====
  {
    id: "ijsbeer", naam: "IJsbeer", gebied: "pool", emoji: "🐻‍❄️",
    foto: "fotos/ijsbeer.jpg", jongFoto: "fotos/ijsbeer-jong.jpg", jongNaam: "welp",
    weetjes: [
      "De ijsbeer is het grootste roofdier dat op het land leeft. Mannetjes kunnen meer dan 500 kilo wegen.",
      "Onder zijn vacht heeft een ijsbeer een zwarte huid. Zijn haren zijn doorzichtig en hol.",
      "IJsberen zijn sterke zwemmers en kunnen tientallen kilometers achter elkaar zwemmen.",
      "Welpen worden midden in de winter geboren in een hol in de sneeuw. Ze wegen dan nog geen kilo.",
      "IJsberen hebben het zee-ijs nodig om op te jagen. Door klimaatverandering smelt dat ijs steeds sneller."
    ],
    vragen: [
      { vraag: "Welke kleur heeft de huid onder de vacht van een ijsbeer?",
        antwoorden: ["Wit", "Roze", "Zwart", "Lichtblauw"], goed: 2,
        uitleg: "De huid is zwart. De haren lijken wit doordat ze licht weerkaatsen." },
      { vraag: "Waar worden ijsbeerwelpen geboren?",
        antwoorden: ["Op een drijvende ijsschots", "In een hol in de sneeuw", "In het water", "In een grot in het bos"], goed: 1,
        uitleg: "De moeder graaft een hol in de sneeuw. Daar blijft ze maanden met haar welpen tot het lente wordt." },
      { vraag: "Waarom wordt het leven voor ijsberen steeds moeilijker?",
        antwoorden: ["Er zijn te veel pinguïns", "Het zee-ijs smelt door klimaatverandering", "Ze kunnen niet meer zwemmen", "Het wordt te donker"], goed: 1,
        uitleg: "Zonder zee-ijs kunnen ijsberen moeilijk aan voedsel komen." }
    ]
  },
  {
    id: "poolvos", naam: "Poolvos", gebied: "pool", emoji: "🦊",
    foto: "fotos/poolvos.jpg", jongFoto: "fotos/poolvos-jong.jpg", jongNaam: "welp",
    weetjes: [
      "Een poolvos kan temperaturen van min 50 graden overleven.",
      "Zelfs onder zijn voeten heeft een poolvos haar. Zo krijgt hij geen koude poten op het ijs.",
      "Met zijn dikke, pluizige staart dekt hij zich toe als hij slaapt.",
      "In de winter is de vacht meestal wit, in de zomer bruin of grijs.",
      "Een poolvos kan muizen onder de sneeuw horen en duikt er dan met een sprong bovenop."
    ],
    vragen: [
      { vraag: "Wat gebeurt er met de vacht van een poolvos in de zomer?",
        antwoorden: ["Die wordt bruin of grijs", "Die valt helemaal uit", "Die wordt felrood", "Er verandert niets"], goed: 0,
        uitleg: "Zo valt hij het hele jaar weinig op: wit in de sneeuw, bruin tussen rotsen en mos." },
      { vraag: "Wat is bijzonder aan de voetzolen van een poolvos?",
        antwoorden: ["Ze zijn kaal en roze", "Ze zijn behaard", "Ze hebben zuignappen", "Ze zijn van hoorn"], goed: 1,
        uitleg: "Het haar onder zijn voeten houdt hem warm en geeft grip op ijs." },
      { vraag: "Waarvoor gebruikt een poolvos zijn dikke staart?",
        antwoorden: ["Om mee te zwemmen", "Als warme deken bij het slapen", "Om sneeuw weg te vegen", "Om vissen te vangen"], goed: 1,
        uitleg: "Hij krult zich op en legt zijn staart over zijn neus en poten." }
    ]
  },
  {
    id: "keizerspinguin", naam: "Keizerspinguïn", gebied: "pool", emoji: "🐧",
    foto: "fotos/keizerspinguin.jpg", jongFoto: "fotos/keizerspinguin-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "De keizerspinguïn is de grootste pinguïn: ruim een meter lang en tot ongeveer 40 kilo zwaar.",
      "Hij kan meer dan 500 meter diep duiken.",
      "In ijzige stormen staan honderden pinguïns dicht tegen elkaar aan. Ze wisselen steeds van plek, zodat iedereen eens in het warme midden staat.",
      "Het mannetje houdt het ei ongeveer twee maanden warm op zijn voeten, en eet in die tijd niets.",
      "Pinguïns leven op het zuidelijk halfrond en ijsberen op het noordelijk. In het wild komen ze elkaar dus nooit tegen."
    ],
    vragen: [
      { vraag: "Wie houdt bij keizerspinguïns het ei warm tot het uitkomt?",
        antwoorden: ["Het vrouwtje", "Het mannetje", "De hele groep om de beurt", "Niemand, het ei ligt in de sneeuw"], goed: 1,
        uitleg: "Het mannetje doet dat midden in de Antarctische winter, terwijl het vrouwtje op zee eten zoekt." },
      { vraag: "Hoe houden keizerspinguïns zich warm in een storm?",
        antwoorden: ["Ze graven een hol", "Ze staan in grote groepen dicht tegen elkaar", "Ze gaan in het water liggen", "Ze vliegen naar het noorden"], goed: 1,
        uitleg: "Zo'n groep heet een 'huddle'. In het midden kan het behoorlijk warm worden." },
      { vraag: "Hoe diep kan een keizerspinguïn ongeveer duiken?",
        antwoorden: ["5 meter", "50 meter", "Meer dan 500 meter", "5 kilometer"], goed: 2,
        uitleg: "Daarmee is hij een van de diepst duikende vogels ter wereld." }
    ]
  },
  {
    id: "walrus", naam: "Walrus", gebied: "pool", emoji: "🦭",
    foto: "fotos/walrus.jpg", jongFoto: "fotos/walrus-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "Zowel mannetjes als vrouwtjes hebben slagtanden. Die kunnen bijna een meter lang worden.",
      "Een walrus heeft honderden gevoelige snorharen om schelpdieren op de zeebodem te vinden.",
      "Grote mannetjes wegen meer dan 1000 kilo.",
      "Een dikke speklaag (blubber) houdt een walrus warm in ijskoud water.",
      "Een kalf blijft ongeveer twee jaar bij zijn moeder."
    ],
    vragen: [
      { vraag: "Waarvoor gebruikt een walrus onder andere zijn lange slagtanden?",
        antwoorden: ["Om te graven naar water", "Om vis te spietsen", "Om zich op het ijs omhoog te trekken", "Om nesten te bouwen"], goed: 2,
        uitleg: "Ze gebruiken hun slagtanden als haken op het ijs, en om indruk te maken op andere walrussen." },
      { vraag: "Waarmee vindt een walrus schelpdieren op de donkere zeebodem?",
        antwoorden: ["Met zijn ogen", "Met zijn snorharen", "Met echolocatie", "Met zijn staart"], goed: 1,
        uitleg: "Zijn snorharen zijn zo gevoelig dat hij er de vorm van een schelp mee kan voelen." },
      { vraag: "Waarom kan een walrus soms roze kleuren?",
        antwoorden: ["Door zijn eten", "Als hij het warm heeft, stroomt er meer bloed naar zijn huid", "Omdat hij verbrandt in de zon", "Hij verandert van kleur om te camoufleren"], goed: 1,
        uitleg: "In koud water gaat het bloed juist weg uit de huid. Dan ziet een walrus er bleker uit." }
    ]
  },
  {
    id: "sneeuwuil", naam: "Sneeuwuil", gebied: "pool", emoji: "🦉",
    foto: "fotos/sneeuwuil.jpg", jongFoto: "fotos/sneeuwuil-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "Sneeuwuilen zijn ook overdag actief. In de poolzomer gaat de zon soms wekenlang niet onder.",
      "Volwassen mannetjes zijn bijna helemaal wit. Vrouwtjes en jonge uilen hebben meer donkere vlekken.",
      "Ook hun poten zijn bedekt met veren, als warme sokken.",
      "Ze maken hun nest gewoon op de grond in de toendra.",
      "Kuikens zijn eerst bedekt met grijs dons. Pas later krijgen ze hun witte veren."
    ],
    vragen: [
      { vraag: "Wat is bijzonder aan sneeuwuilen vergeleken met de meeste andere uilen?",
        antwoorden: ["Ze kunnen niet vliegen", "Ze zijn ook overdag actief", "Ze leven onder water", "Ze eten alleen bessen"], goed: 1,
        uitleg: "Een uil die alleen 's nachts actief is, heeft weinig aan een zomer zonder nacht." },
      { vraag: "Hoe kun je een volwassen mannetje en vrouwtje vaak uit elkaar houden?",
        antwoorden: ["Het mannetje is witter", "Het vrouwtje is helemaal zwart", "Het mannetje heeft een kuif", "Je ziet geen verschil"], goed: 0,
        uitleg: "Vrouwtjes hebben meer donkere vlekjes en strepen. Dat helpt ze te camoufleren op het nest." },
      { vraag: "Waar maakt een sneeuwuil zijn nest?",
        antwoorden: ["Hoog in een boom", "In een kerktoren", "Op de grond in de toendra", "In een ijsgrot"], goed: 2,
        uitleg: "In de toendra groeien bijna geen bomen. Een kleine heuvel is genoeg." }
    ]
  },
  {
    id: "rendier", naam: "Rendier", gebied: "pool", emoji: "🦌",
    foto: "fotos/rendier.jpg", jongFoto: "fotos/rendier-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "Het rendier is het enige hertensoort waarbij ook de vrouwtjes een gewei hebben.",
      "Elk jaar valt het gewei af en groeit er een nieuw. Tijdens het groeien is het bedekt met zacht 'bastvel'.",
      "In de winter eten rendieren vooral rendiermos, een korstmos dat ze onder de sneeuw vandaan graven met hun hoeven.",
      "Hun brede hoeven werken als sneeuwschoenen, zodat ze niet diep wegzakken.",
      "Sommige groepen rendieren trekken elk jaar duizenden kilometers: een van de langste tochten van alle landdieren.",
      "Een kalf kan al binnen een paar uur na de geboorte lopen en de kudde volgen."
    ],
    vragen: [
      { vraag: "Wat is bijzonder aan het gewei van rendieren?",
        antwoorden: ["Het valt nooit af", "Ook vrouwtjes hebben een gewei", "Het is van haar gemaakt", "Alleen kalveren hebben er een"], goed: 1,
        uitleg: "Bij alle andere hertensoorten hebben alleen de mannetjes een gewei." },
      { vraag: "Wat eten rendieren in de winter vooral?",
        antwoorden: ["Vis", "Dennenappels", "Rendiermos (korstmos)", "Bessen"], goed: 2,
        uitleg: "Ze ruiken het korstmos zelfs onder een dikke laag sneeuw." },
      { vraag: "Hoe snel kan een rendierkalf lopen na de geboorte?",
        antwoorden: ["Binnen een paar uur", "Na een week", "Na een maand", "Pas na een half jaar"], goed: 0,
        uitleg: "Dat is belangrijk, want de kudde trekt steeds verder." }
    ]
  },
  {
    id: "zeehond", naam: "Zadelrob", gebied: "pool", emoji: "🦭",
    foto: "fotos/zeehond.jpg", jongFoto: "fotos/zeehond-jong.jpg", jongNaam: "pup",
    weetjes: [
      "De zadelrob leeft in het noorden van de Atlantische Oceaan en de Noordelijke IJszee.",
      "Volwassen dieren hebben een donkere vlek op hun rug die lijkt op een zadel. Daar komt de naam vandaan.",
      "Pups worden geboren op het zee-ijs en hebben de eerste dagen een spierwitte vacht.",
      "Moedermelk van een zadelrob is erg vet. Een pup wordt daardoor in ongeveer twaalf dagen drie keer zo zwaar.",
      "Na ongeveer twee weken stopt de moeder met zogen en moet de pup zelf leren zwemmen en eten.",
      "Zadelrobben kunnen tot wel 15 minuten onder water blijven."
    ],
    vragen: [
      { vraag: "Waar komt de naam 'zadelrob' vandaan?",
        antwoorden: ["Mensen reden er vroeger op", "De donkere vlek op de rug lijkt op een zadel", "Ze slapen op een zadel van ijs", "Ze maken een geluid als een paard"], goed: 1,
        uitleg: "Vooral bij volwassen mannetjes is de zadelvorm goed te zien." },
      { vraag: "Welke kleur vacht heeft een pasgeboren pup?",
        antwoorden: ["Zwart", "Grijs met vlekken", "Spierwit", "Bruin"], goed: 2,
        uitleg: "De witte vacht verdwijnt na een paar weken; daarna wordt hij zilvergrijs met vlekjes." },
      { vraag: "Hoe lang zoogt een zadelrobmoeder haar pup ongeveer?",
        antwoorden: ["Twee dagen", "Ongeveer twaalf dagen", "Een half jaar", "Twee jaar"], goed: 1,
        uitleg: "Dat is een van de kortste zoogperiodes van alle zoogdieren." }
    ]
  },

  // ===== Savanne =====
  {
    id: "olifant", naam: "Olifant", gebied: "savanne", emoji: "🐘",
    foto: "fotos/olifant.jpg", jongFoto: "fotos/olifant-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "De Afrikaanse olifant is het grootste landdier. Grote mannetjes wegen tot wel 6000 kilo.",
      "Een olifant is ongeveer 22 maanden zwanger, langer dan elk ander zoogdier.",
      "Een pasgeboren kalf weegt ongeveer 100 kilo.",
      "Met hun grote oren koelen olifanten af: het bloed in de oren geeft warmte af.",
      "Olifanten 'praten' met zware, lage geluiden die kilometers ver reiken. Een deel ervan is te laag voor mensen om te horen."
    ],
    vragen: [
      { vraag: "Waaruit bestaat de slurf van een olifant eigenlijk?",
        antwoorden: ["Een extra arm", "De neus en de bovenlip samen", "Een lange tong", "De onderkaak"], goed: 1,
        uitleg: "Een slurf heeft tienduizenden spierbundels en geen botten." },
      { vraag: "Waarvoor gebruiken Afrikaanse olifanten vooral hun grote oren?",
        antwoorden: ["Om te vliegen", "Om af te koelen", "Om water op te slaan", "Om vliegen te vangen"], goed: 1,
        uitleg: "Door met hun oren te wapperen koelt het bloed in de oren af." },
      { vraag: "Hoeveel weegt een pasgeboren olifantenkalf ongeveer?",
        antwoorden: ["5 kilo", "25 kilo", "100 kilo", "500 kilo"], goed: 2,
        uitleg: "Zo zwaar als een volwassen man! Binnen een uur kan het kalf al staan." }
    ]
  },
  {
    id: "leeuw", naam: "Leeuw", gebied: "savanne", emoji: "🦁",
    foto: "fotos/leeuw.jpg", jongFoto: "fotos/leeuw-jong.jpg", jongNaam: "welp",
    weetjes: [
      "Leeuwen zijn de enige katachtigen die echt in groepen leven. Zo'n groep heet een troep.",
      "Vaak jagen de leeuwinnen samen, als een team.",
      "Leeuwen rusten of slapen zo'n 16 tot 20 uur per dag.",
      "Het brullen van een leeuw is tot ongeveer 8 kilometer ver te horen.",
      "Jonge welpen hebben vlekjes in hun vacht. Die verdwijnen als ze ouder worden."
    ],
    vragen: [
      { vraag: "Tot hoe ver kun je het brullen van een leeuw ongeveer horen?",
        antwoorden: ["500 meter", "2 kilometer", "8 kilometer", "50 kilometer"], goed: 2,
        uitleg: "Leeuwen brullen om hun gebied af te bakenen en elkaar te laten weten waar ze zijn." },
      { vraag: "Wie doet bij leeuwen meestal het jagen?",
        antwoorden: ["De leeuwinnen", "De mannetjes", "De welpen", "Niemand, ze eten gras"], goed: 0,
        uitleg: "Leeuwinnen werken samen. De mannetjes beschermen vooral het gebied van de troep." },
      { vraag: "Wat hebben jonge leeuwenwelpen dat volwassen leeuwen meestal niet meer hebben?",
        antwoorden: ["Strepen", "Vlekjes in hun vacht", "Blauwe tanden", "Manen"], goed: 1,
        uitleg: "De vlekjes helpen kleine welpen om niet op te vallen in het gras." }
    ]
  },
  {
    id: "giraffe", naam: "Giraffe", gebied: "savanne", emoji: "🦒",
    foto: "fotos/giraffe.jpg", jongFoto: "fotos/giraffe-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "De giraffe is het hoogste dier ter wereld: tot bijna 6 meter.",
      "Een giraffe heeft 7 nekwervels, net als jij. Ze zijn alleen veel groter.",
      "Zijn tong is ongeveer 45 centimeter lang en donker van kleur.",
      "Een giraffe wordt staand geboren: het kalf valt bijna 2 meter naar beneden. Binnen een uur staat het al.",
      "Om bloed tot in zijn hoofd te pompen heeft een giraffe een groot en sterk hart van zo'n 11 kilo."
    ],
    vragen: [
      { vraag: "Hoe lang is de tong van een giraffe ongeveer?",
        antwoorden: ["5 centimeter", "15 centimeter", "45 centimeter", "2 meter"], goed: 2,
        uitleg: "Wetenschappers denken dat de donkere kleur de tong beschermt tegen verbranden in de zon." },
      { vraag: "Hoeveel nekwervels heeft een giraffe?",
        antwoorden: ["2", "7", "25", "100"], goed: 1,
        uitleg: "Bijna alle zoogdieren hebben er 7, ook mensen en muizen." },
      { vraag: "Wat gebeurt er als een giraffenkalf geboren wordt?",
        antwoorden: ["Het komt uit een ei", "Het valt bijna 2 meter naar beneden", "Het wordt in het water geboren", "Het blijft een week liggen"], goed: 1,
        uitleg: "De moeder staat tijdens de geboorte. Het kalf kan die val prima hebben." }
    ]
  },
  {
    id: "zebra", naam: "Zebra", gebied: "savanne", emoji: "🦓",
    foto: "fotos/zebra.jpg", jongFoto: "fotos/zebra-jong.jpg", jongNaam: "veulen",
    weetjes: [
      "Elke zebra heeft een eigen, uniek streeppatroon, net als een vingerafdruk.",
      "Onderzoek laat zien dat steekvliegen moeite hebben om op de strepen te landen.",
      "Onder de vacht is de huid van een zebra donker.",
      "Een veulen leert de eerste dagen de strepen, geur en stem van zijn moeder kennen.",
      "Zebra's leven in kuddes en kunnen ruim 60 kilometer per uur rennen."
    ],
    vragen: [
      { vraag: "Wat is volgens veel onderzoek een belangrijke reden voor de strepen van een zebra?",
        antwoorden: ["Ze houden bijtende vliegen weg", "Ze maken zebra's sneller", "Ze helpen bij het zwemmen", "Ze lokken andere dieren"], goed: 0,
        uitleg: "Proeven lieten zien dat steekvliegen gestreepte vlakken vaak missen bij het landen." },
      { vraag: "Welke kleur heeft de huid onder de vacht van een zebra?",
        antwoorden: ["Wit", "Donker", "Geel", "Gestreept"], goed: 1,
        uitleg: "Een zebra is dus eigenlijk een donker dier met witte strepen." },
      { vraag: "Wat is waar over de strepen van zebra's?",
        antwoorden: ["Alle zebra's hebben precies dezelfde strepen", "Elke zebra heeft een eigen patroon", "De strepen verdwijnen in de winter", "Alleen mannetjes hebben strepen"], goed: 1,
        uitleg: "Onderzoekers kunnen zebra's herkennen aan hun strepen." }
    ]
  },
  {
    id: "cheeta", naam: "Cheeta", gebied: "savanne", emoji: "🐆",
    foto: "fotos/cheeta.jpg", jongFoto: "fotos/cheeta-jong.jpg", jongNaam: "welp",
    weetjes: [
      "De cheeta is het snelste landdier: ongeveer 100 kilometer per uur.",
      "Die topsnelheid houdt hij maar een paar honderd meter vol.",
      "Een cheeta kan niet brullen, maar wel spinnen en hoge piepgeluiden maken.",
      "Zijn lange staart werkt als een roer, zodat hij snel kan draaien.",
      "Jonge welpen hebben een lange, grijze 'mantel' van haren op hun rug."
    ],
    vragen: [
      { vraag: "Hoe snel kan een cheeta ongeveer sprinten?",
        antwoorden: ["40 km/u", "70 km/u", "100 km/u", "200 km/u"], goed: 2,
        uitleg: "Net zo snel als een auto overdag op de Nederlandse snelweg mag rijden." },
      { vraag: "Welk geluid kan een cheeta NIET maken?",
        antwoorden: ["Spinnen", "Brullen", "Piepen", "Blazen"], goed: 1,
        uitleg: "Grote katten als leeuwen en tijgers kunnen brullen, maar de cheeta niet." },
      { vraag: "Waarvoor gebruikt een cheeta zijn lange staart bij het rennen?",
        antwoorden: ["Als roer voor balans in bochten", "Om vliegen te verjagen", "Om sneller te ademen", "Nergens voor"], goed: 0,
        uitleg: "Met zijn staart houdt hij zijn evenwicht als hij op hoge snelheid van richting verandert." }
    ]
  },
  {
    id: "neushoorn", naam: "Witte neushoorn", gebied: "savanne", emoji: "🦏",
    foto: "fotos/neushoorn.jpg", jongFoto: "fotos/neushoorn-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "De witte neushoorn is na de olifant een van de zwaarste landdieren: hij kan meer dan 2000 kilo wegen.",
      "Hij is niet wit maar grijs. De naam komt waarschijnlijk van een verkeerd begrepen woord voor 'breed', vanwege zijn brede bek.",
      "Met die brede, platte lippen graast hij gras, net als een grasmaaier.",
      "De hoorns zijn gemaakt van keratine, hetzelfde materiaal als jouw haar en nagels.",
      "Neushoorns zien slecht, maar ruiken en horen heel goed.",
      "Een kalf blijft twee tot drie jaar bij zijn moeder."
    ],
    vragen: [
      { vraag: "Waarvan zijn de hoorns van een neushoorn gemaakt?",
        antwoorden: ["Bot", "Ivoor", "Keratine", "Kalk"], goed: 2,
        uitleg: "Keratine zit ook in je haren en nagels. Toch wordt er helaas veel op neushoorns gestroopt." },
      { vraag: "Welke kleur heeft een witte neushoorn echt?",
        antwoorden: ["Grijs", "Spierwit", "Roze", "Zwart"], goed: 0,
        uitleg: "Witte en zwarte neushoorns zijn allebei grijs. Je herkent ze aan de vorm van hun bek." },
      { vraag: "Wat eet een witte neushoorn vooral?",
        antwoorden: ["Bladeren van hoge bomen", "Gras", "Vruchten", "Insecten"], goed: 1,
        uitleg: "Met zijn brede bek graast hij gras dicht bij de grond." }
    ]
  },
  {
    id: "struisvogel", naam: "Struisvogel", gebied: "savanne", emoji: "🐦",
    foto: "fotos/struisvogel.jpg", jongFoto: "fotos/struisvogel-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "De struisvogel is de grootste en zwaarste vogel ter wereld. Hij kan zo'n 2,5 meter hoog worden.",
      "Hij kan niet vliegen, maar wel heel hard rennen: ongeveer 70 kilometer per uur.",
      "Struisvogels leggen de grootste eieren van alle levende vogels. Eén ei weegt ongeveer 1,5 kilo.",
      "Hun ogen zijn groter dan hun hersenen.",
      "Struisvogels hebben maar twee tenen aan elke poot. Dat helpt bij het rennen.",
      "Dat struisvogels hun kop in het zand steken is een fabel. Ze leggen hun kop soms plat op de grond om niet op te vallen."
    ],
    vragen: [
      { vraag: "Hoe hard kan een struisvogel ongeveer rennen?",
        antwoorden: ["20 km per uur", "40 km per uur", "70 km per uur", "120 km per uur"], goed: 2,
        uitleg: "Daarmee is hij de snelste vogel op het land." },
      { vraag: "Hoeveel tenen heeft een struisvogel aan elke poot?",
        antwoorden: ["Eén", "Twee", "Drie", "Vier"], goed: 1,
        uitleg: "De meeste vogels hebben er drie of vier. Twee tenen werkt beter bij snel rennen." },
      { vraag: "Klopt het dat struisvogels hun kop in het zand steken?",
        antwoorden: ["Ja, als ze bang zijn", "Ja, om te slapen", "Nee, dat is een fabel", "Alleen de kuikens"], goed: 2,
        uitleg: "Van een afstand lijkt het soms zo als ze met hun kop laag bij de grond zijn of hun eieren keren." }
    ]
  },
  {
    id: "wrattenzwijn", naam: "Knobbelzwijn", gebied: "savanne", emoji: "🐗",
    foto: "fotos/wrattenzwijn.jpg", jongFoto: "fotos/wrattenzwijn-jong.jpg", jongNaam: "big",
    weetjes: [
      "Het knobbelzwijn (ook wrattenzwijn genoemd) heeft dikke bulten op zijn kop. Dat zijn geen wratten, maar huidknobbels.",
      "Knobbelzwijnen eten vooral gras. Ze gaan daarvoor vaak op hun 'knieën' zitten.",
      "Als ze rennen steken ze hun staart recht omhoog, als een antenne.",
      "Ze slapen in holen in de grond, vaak oude holen van aardvarkens.",
      "Een knobbelzwijn heeft vier slagtanden die uit zijn bek steken.",
      "Ze nemen graag een modderbad om af te koelen en insecten weg te houden."
    ],
    vragen: [
      { vraag: "Hoe eet een knobbelzwijn meestal gras?",
        antwoorden: ["Staand op zijn achterpoten", "Geknield op zijn voorpoten", "Liggend op zijn rug", "Al zwemmend"], goed: 1,
        uitleg: "Ze hebben zelfs eeltplekken op hun 'knieën' (eigenlijk polsen)." },
      { vraag: "Wat doet een knobbelzwijn met zijn staart als hij rent?",
        antwoorden: ["Hij krult hem op", "Hij sleept hem over de grond", "Hij steekt hem recht omhoog", "Hij stopt hem tussen zijn poten"], goed: 2,
        uitleg: "Zo kunnen de jongen in hoog gras hun moeder volgen." },
      { vraag: "Waar slapen knobbelzwijnen?",
        antwoorden: ["In bomen", "In holen in de grond", "In het water", "Gewoon in het open gras"], goed: 1,
        uitleg: "Vaak gebruiken ze een hol dat een aardvarken eerder gegraven heeft." }
    ]
  },

  // ===== Oceaan =====
  {
    id: "bultrug", naam: "Bultrug", gebied: "oceaan", emoji: "🐳",
    foto: "fotos/bultrug.jpg", jongFoto: "fotos/bultrug-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "Mannetjes zingen lange liederen die ze steeds herhalen.",
      "Bultruggen hebben de langste borstvinnen van alle walvissen: tot ongeveer 5 meter.",
      "Elk jaar trekken ze duizenden kilometers tussen koude zeeën (eten) en warme zeeën (jongen krijgen).",
      "Een pasgeboren kalf is al ongeveer 4 meter lang.",
      "Het patroon op de onderkant van de staart is bij elke bultrug anders."
    ],
    vragen: [
      { vraag: "Waar staan bultrugwalvissen om bekend?",
        antwoorden: ["Ze kunnen op het land lopen", "De mannetjes zingen lange liederen", "Ze leggen eieren", "Ze slapen nooit"], goed: 1,
        uitleg: "Zo'n lied kan een kwartier of langer duren en reist kilometers ver door het water." },
      { vraag: "Hoe herkennen onderzoekers individuele bultruggen?",
        antwoorden: ["Aan hun stem", "Aan het patroon op de onderkant van hun staart", "Aan hun kleur ogen", "Dat kan niet"], goed: 1,
        uitleg: "Foto's van staarten worden verzameld, zodat je een walvis jaren kunt volgen." },
      { vraag: "Wat is een 'bellennet'?",
        antwoorden: ["Een visnet van vissers", "Een gordijn van luchtbellen waarmee bultruggen visjes bij elkaar drijven", "Een soort kwal", "Een speeltje in een dierentuin"], goed: 1,
        uitleg: "Ze blazen bellen in een cirkel. De visjes en krill blijven binnen die cirkel." }
    ]
  },
  {
    id: "dolfijn", naam: "Dolfijn", gebied: "oceaan", emoji: "🐬",
    foto: "fotos/dolfijn.jpg", jongFoto: "fotos/dolfijn-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "Dit is een tuimelaar, de bekendste soort dolfijn.",
      "Dolfijnen 'zien' met geluid: ze maken klikjes en luisteren naar de echo. Dat heet echolocatie.",
      "Elke tuimelaar heeft een eigen fluitgeluid, een beetje zoals een naam.",
      "Een dolfijn slaapt met de helft van zijn hersenen tegelijk, zodat hij kan blijven ademen.",
      "Dolfijnen zijn zoogdieren: het kalf drinkt melk bij zijn moeder."
    ],
    vragen: [
      { vraag: "Hoe vinden dolfijnen hun weg in donker of troebel water?",
        antwoorden: ["Met echolocatie", "Met hun snorharen", "Met hun reukvermogen", "Ze volgen de maan"], goed: 0,
        uitleg: "Net als vleermuizen gebruiken ze de echo van hun eigen geluid." },
      { vraag: "Hoe slaapt een dolfijn?",
        antwoorden: ["Op de bodem van de zee", "Met de helft van zijn hersenen tegelijk", "Op het strand", "Hij slaapt nooit"], goed: 1,
        uitleg: "De andere helft blijft wakker, zodat hij naar boven kan om te ademen." },
      { vraag: "Wat hebben tuimelaars dat een beetje op een naam lijkt?",
        antwoorden: ["Een eigen fluitgeluid", "Een tatoeage", "Een gekleurde vin", "Een speciale dans"], goed: 0,
        uitleg: "Andere dolfijnen kunnen dat fluitje nadoen om elkaar te 'roepen'." }
    ]
  },
  {
    id: "octopus", naam: "Octopus", gebied: "oceaan", emoji: "🐙",
    foto: "fotos/octopus.jpg", jongFoto: "fotos/octopus-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Een octopus heeft drie harten en blauw bloed.",
      "Hij kan in een fractie van een seconde van kleur én van huidstructuur veranderen.",
      "Ongeveer twee derde van zijn zenuwcellen zit in zijn armen.",
      "Hij heeft geen botten. Alleen zijn snavel is hard, dus hij past door piepkleine openingen.",
      "Bij gevaar spuit een octopus een wolk inkt en schiet hij weg."
    ],
    vragen: [
      { vraag: "Welke kleur heeft het bloed van een octopus?",
        antwoorden: ["Rood", "Groen", "Geel", "Blauw"], goed: 3,
        uitleg: "Octopusbloed bevat koper in plaats van ijzer. Daardoor is het blauw." },
      { vraag: "Waar zitten de meeste zenuwcellen van een octopus?",
        antwoorden: ["In zijn hoofd", "In zijn armen", "In zijn harten", "In zijn ogen"], goed: 1,
        uitleg: "Daardoor kunnen zijn armen een beetje zelf 'denken' en voelen." },
      { vraag: "Waarom kan een octopus door heel kleine gaatjes kruipen?",
        antwoorden: ["Hij kan krimpen", "Hij heeft geen botten, alleen een harde snavel", "Hij smelt een beetje", "Hij kan zijn armen afdoen"], goed: 1,
        uitleg: "Als zijn snavel erdoor past, past de rest van zijn lichaam er ook door." }
    ]
  },
  {
    id: "zeeschildpad", naam: "Zeeschildpad", gebied: "oceaan", emoji: "🐢",
    foto: "fotos/zeeschildpad.jpg", jongFoto: "fotos/zeeschildpad-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Dit is een groene zeeschildpad. Volwassen exemplaren eten vooral zeegras en algen.",
      "De naam 'groen' komt van de groene kleur van zijn vet, niet van zijn schild.",
      "De temperatuur van het zand bepaalt of een jong een mannetje of vrouwtje wordt.",
      "Vrouwtjes keren vaak terug naar het strand waar ze zelf geboren zijn om eieren te leggen.",
      "Als hij rust, kan een zeeschildpad uren onder water blijven."
    ],
    vragen: [
      { vraag: "Wat bepaalt of een babyzeeschildpad een mannetje of vrouwtje wordt?",
        antwoorden: ["Het toeval", "De temperatuur van het zand", "Hoe diep het ei in zee ligt", "De maand waarin het ei is gelegd"], goed: 1,
        uitleg: "In warm zand komen vooral vrouwtjes uit, in koeler zand vooral mannetjes." },
      { vraag: "Wat eet een volwassen groene zeeschildpad vooral?",
        antwoorden: ["Haaien", "Zeegras en algen", "Plastic", "Krabben"], goed: 1,
        uitleg: "Daarmee is hij een van de weinige zeeschildpadden die vooral planten eet." },
      { vraag: "Waar komt de naam 'groene' zeeschildpad vandaan?",
        antwoorden: ["Van zijn groene schild", "Van de groene kleur van zijn vet", "Van zijn groene ogen", "Hij is ontdekt in Groenland"], goed: 1,
        uitleg: "Die kleur komt door de planten die hij eet." }
    ]
  },
  {
    id: "zeepaardje", naam: "Zeepaardje", gebied: "oceaan", emoji: "🐠",
    foto: "fotos/zeepaardje.jpg", jongFoto: "fotos/zeepaardje-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Dit is een langsnuitzeepaardje. Het leeft ook in Europese zeeën.",
      "Een zeepaardje is gewoon een vis en ademt met kieuwen.",
      "Bij zeepaardjes dragen de mannetjes de eitjes in een buidel tot ze uitkomen.",
      "Met zijn staart houdt een zeepaardje zich vast aan zeegras of koraal.",
      "Zijn ogen kunnen los van elkaar bewegen: met het ene oog kijkt hij naar voren, met het andere opzij."
    ],
    vragen: [
      { vraag: "Wat is bijzonder aan de voortplanting van zeepaardjes?",
        antwoorden: ["De mannetjes dragen de eitjes", "Ze leggen eieren op het strand", "De jongen groeien in een schelp", "Ze krijgen maar één jong"], goed: 0,
        uitleg: "Het vrouwtje legt de eitjes in de buidel van het mannetje. Hij 'bevalt' van de jongen." },
      { vraag: "Een zeepaardje is eigenlijk een...",
        antwoorden: ["Zoogdier", "Vis", "Insect", "Kwal"], goed: 1,
        uitleg: "Ook al lijkt hij op een paardje, het is echt een vis met kieuwen en vinnen." },
      { vraag: "Waarvoor gebruikt een zeepaardje zijn staart?",
        antwoorden: ["Om snel te zwemmen", "Om zich vast te houden aan zeegras of koraal", "Om eten te vangen", "Om te communiceren"], goed: 1,
        uitleg: "Zeepaardjes zijn slechte zwemmers. Vasthouden voorkomt dat ze wegdrijven." }
    ]
  },
  {
    id: "orka", naam: "Orka", gebied: "oceaan", emoji: "🐋",
    foto: "fotos/orka.jpg", jongFoto: "fotos/orka-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "De orka wordt ook wel zwaardwalvis genoemd, maar hij is eigenlijk de grootste soort dolfijn.",
      "Een volwassen mannetje kan 8 tot 9 meter lang worden. Zijn rugvin kan bijna 2 meter hoog zijn.",
      "Orka's leven in hechte familiegroepen, die vaak geleid worden door de oudste moeder.",
      "Elke groep heeft eigen 'dialecten': klikjes en fluitjes die alleen die familie gebruikt.",
      "Orka's komen voor in alle oceanen, van de poolzeeën tot warme kustwateren.",
      "Een kalf zwemt de eerste tijd vlak naast zijn moeder en drinkt melk onder water."
    ],
    vragen: [
      { vraag: "Tot welke diergroep hoort de orka eigenlijk?",
        antwoorden: ["Haaien", "Dolfijnen", "Zeehonden", "Vissen"], goed: 1,
        uitleg: "De orka is de grootste dolfijnensoort ter wereld." },
      { vraag: "Wie leidt meestal een orkafamilie?",
        antwoorden: ["Het grootste mannetje", "Het jongste kalf", "De oudste moeder", "Niemand"], goed: 2,
        uitleg: "Oudere vrouwtjes weten waar en wanneer er voedsel te vinden is." },
      { vraag: "Wat is bijzonder aan de geluiden van orka's?",
        antwoorden: ["Ze maken geen geluid", "Elke familie heeft een eigen 'dialect'", "Ze kunnen alleen boven water roepen", "Ze zingen precies hetzelfde lied als bultruggen"], goed: 1,
        uitleg: "Onderzoekers kunnen families herkennen aan hun geluiden." }
    ]
  },
  {
    id: "zeeotter", naam: "Zeeotter", gebied: "oceaan", emoji: "🦦",
    foto: "fotos/zeeotter.jpg", jongFoto: "fotos/zeeotter-jong.jpg", jongNaam: "pup",
    weetjes: [
      "De zeeotter heeft de dichtste vacht van alle dieren: tot ongeveer 150.000 haren per vierkante centimeter.",
      "Hij heeft geen speklaag zoals zeehonden. Zijn vacht houdt hem warm door een laagje lucht tussen de haren.",
      "Zeeotters gebruiken stenen als gereedschap om schelpen en zee-egels open te tikken op hun buik.",
      "Om niet weg te drijven terwijl ze slapen, wikkelen ze zich soms in zeewier of houden ze elkaars poot vast.",
      "Een moeder draagt haar pup op haar buik terwijl ze op haar rug drijft.",
      "Zeeotters helpen kelpwouden gezond te houden, omdat ze zee-egels eten die het kelp opvreten."
    ],
    vragen: [
      { vraag: "Hoe blijft een zeeotter warm in koud water?",
        antwoorden: ["Met een dikke speklaag", "Met een superdichte vacht met lucht ertussen", "Door steeds te rennen", "Hij zwemt alleen in warm water"], goed: 1,
        uitleg: "Daarom poetsen zeeotters hun vacht urenlang per dag." },
      { vraag: "Waarvoor gebruiken zeeotters stenen?",
        antwoorden: ["Om schelpen open te tikken", "Om nesten te bouwen", "Om mee te spelen", "Als anker"], goed: 0,
        uitleg: "Het is een van de weinige zoogdieren die gereedschap gebruiken." },
      { vraag: "Hoe zorgen zeeotters dat ze niet wegdrijven tijdens het slapen?",
        antwoorden: ["Ze slapen op het strand", "Ze wikkelen zich in zeewier of houden pootjes vast", "Ze slapen nooit", "Ze bijten in een rots"], goed: 1,
        uitleg: "Een groep slapende zeeotters heet een 'raft' (vlot)." }
    ]
  },
  {
    id: "zeeleeuw", naam: "Californische zeeleeuw", gebied: "oceaan", emoji: "🦭",
    foto: "fotos/zeeleeuw.jpg", jongFoto: "fotos/zeeleeuw-jong.jpg", jongNaam: "pup",
    weetjes: [
      "Zeeleeuwen hebben kleine oorschelpen aan de buitenkant. Echte zeehonden hebben alleen gaatjes.",
      "Ze kunnen hun achterflippers onder hun lichaam draaien en daardoor op het land 'lopen'.",
      "Zeeleeuwen zijn erg luidruchtig: ze blaffen bijna als honden.",
      "Ze zwemmen vooral met hun grote voorflippers, alsof ze onder water vliegen.",
      "Een moeder herkent haar pup tussen honderden andere aan zijn geluid en geur.",
      "De Californische zeeleeuw leeft langs de westkust van Noord-Amerika."
    ],
    vragen: [
      { vraag: "Hoe zie je het verschil tussen een zeeleeuw en een zeehond?",
        antwoorden: ["Zeeleeuwen hebben kleine oorschelpen", "Zeeleeuwen hebben een staart als een vis", "Zeehonden hebben manen", "Er is geen verschil"], goed: 0,
        uitleg: "Ook kunnen zeeleeuwen op hun flippers lopen; zeehonden schuiven op hun buik." },
      { vraag: "Met welke flippers zwemt een zeeleeuw vooral?",
        antwoorden: ["Met zijn achterflippers", "Met zijn voorflippers", "Met zijn staart", "Hij zwemt niet"], goed: 1,
        uitleg: "Zeehonden zwemmen juist vooral met hun achterflippers." },
      { vraag: "Hoe vindt een moeder haar pup terug in een drukke kolonie?",
        antwoorden: ["Aan de kleur", "Aan zijn geluid en geur", "Ze vindt hem niet", "Aan zijn naam"], goed: 1,
        uitleg: "Moeder en pup leren elkaars roep al vlak na de geboorte." }
    ]
  },

  // ===== Regenwoud =====
  {
    id: "tijger", naam: "Tijger", gebied: "jungle", emoji: "🐯",
    foto: "fotos/tijger.jpg", jongFoto: "fotos/tijger-jong.jpg", jongNaam: "welp",
    weetjes: [
      "De tijger is de grootste katachtige ter wereld.",
      "Tijgers zwemmen graag en koelen af in rivieren en meren.",
      "De strepen zitten niet alleen op de vacht, maar ook op de huid. Elk patroon is uniek.",
      "Op de achterkant van hun oren hebben tijgers witte vlekken.",
      "Volwassen tijgers leven meestal alleen. Welpen blijven ongeveer twee jaar bij hun moeder."
    ],
    vragen: [
      { vraag: "Wat doen tijgers, anders dan veel andere katachtigen, graag?",
        antwoorden: ["In bomen slapen", "In grote groepen leven", "Zwemmen", "Planten eten"], goed: 2,
        uitleg: "Tijgers zijn sterke zwemmers en kunnen grote rivieren overzwemmen." },
      { vraag: "Wat is de grootste katachtige ter wereld?",
        antwoorden: ["De leeuw", "De tijger", "De jaguar", "De cheeta"], goed: 1,
        uitleg: "Vooral de Siberische tijger kan erg groot en zwaar worden." },
      { vraag: "Hoe leven volwassen tijgers meestal?",
        antwoorden: ["In een troep", "Alleen, in een eigen gebied", "In paren", "In kuddes met zebra's"], goed: 1,
        uitleg: "Alleen een moeder met welpen trekt een tijd samen op." }
    ]
  },
  {
    id: "ara", naam: "Ara", gebied: "jungle", emoji: "🦜",
    foto: "fotos/ara.jpg", jongFoto: "fotos/ara-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "Dit is een geelvleugelara, een grote papegaai uit Midden- en Zuid-Amerika.",
      "Ara's kunnen meer dan 50 jaar oud worden.",
      "Met hun sterke snavel kraken ze harde noten en zaden.",
      "Ze hebben twee tenen naar voren en twee naar achteren. Zo kunnen ze goed klimmen en eten vasthouden.",
      "Ara's blijven vaak hun hele leven bij dezelfde partner.",
      "In het Amazonegebied eten ze soms klei van rivieroevers."
    ],
    vragen: [
      { vraag: "Hoe oud kan een grote ara ongeveer worden?",
        antwoorden: ["5 jaar", "15 jaar", "Meer dan 50 jaar", "200 jaar"], goed: 2,
        uitleg: "Sommige ara's in gevangenschap worden zelfs ouder dan 70." },
      { vraag: "Wat doen ara's in het Amazonegebied soms op rivieroevers?",
        antwoorden: ["Zwemmen", "Klei eten", "Eieren leggen in het zand", "Vissen vangen"], goed: 1,
        uitleg: "Waarom precies, onderzoeken wetenschappers nog. Mogelijk halen ze er zout uit." },
      { vraag: "Hoe staan de tenen van een ara?",
        antwoorden: ["Alle vier naar voren", "Twee naar voren en twee naar achteren", "Drie naar achteren", "Ara's hebben geen tenen"], goed: 1,
        uitleg: "Daardoor kan een ara zijn poot gebruiken als een soort hand." }
    ]
  },
  {
    id: "gorilla", naam: "Gorilla", gebied: "jungle", emoji: "🦍",
    foto: "fotos/gorilla.jpg", jongFoto: "fotos/gorilla-jong.jpg", jongNaam: "jong",
    weetjes: [
      "De gorilla is de grootste mensaap ter wereld.",
      "Een volwassen mannetje heet een zilverrug, naar de grijze haren op zijn rug.",
      "Gorilla's eten vooral planten: bladeren, stengels en vruchten.",
      "Bijna elke avond bouwen ze een nieuw slaapnest van bladeren en takken.",
      "Een jonge gorilla klampt zich eerst vast aan de buik van zijn moeder en rijdt later op haar rug mee."
    ],
    vragen: [
      { vraag: "Wat maken gorilla's bijna elke avond?",
        antwoorden: ["Een vuurtje", "Een nieuw slaapnest van bladeren", "Een hol onder de grond", "Een toren van stenen"], goed: 1,
        uitleg: "Zo'n nest maken ze op de grond of laag in een boom." },
      { vraag: "Hoe heet een volwassen gorillamannetje?",
        antwoorden: ["Zilverrug", "Grijskop", "Bergkoning", "Zwartpoot"], goed: 0,
        uitleg: "De zilverrug leidt de groep en beschermt die." },
      { vraag: "Wat eten gorilla's vooral?",
        antwoorden: ["Vlees", "Vis", "Planten", "Insecten"], goed: 2,
        uitleg: "Een volwassen mannetje eet tientallen kilo's planten per dag." }
    ]
  },
  {
    id: "luiaard", naam: "Luiaard", gebied: "jungle", emoji: "🦥",
    foto: "fotos/luiaard.jpg", jongFoto: "fotos/luiaard-jong.jpg", jongNaam: "jong",
    weetjes: [
      "In de vacht van een luiaard groeien algen. Daardoor ziet hij er soms groen uit.",
      "Ongeveer één keer per week komt hij uit de boom om zijn behoefte te doen.",
      "Luiaards zijn verrassend goede zwemmers.",
      "Hij verteert zijn eten heel langzaam: dat kan weken duren.",
      "Een jong klampt zich maandenlang vast aan de buik van zijn moeder."
    ],
    vragen: [
      { vraag: "Waarom ziet de vacht van een luiaard er soms groen uit?",
        antwoorden: ["Hij verft zichzelf met bladeren", "Er groeien algen in", "Hij is ziek", "Hij eet veel spinazie"], goed: 1,
        uitleg: "Die groene kleur helpt hem te camoufleren tussen de bladeren." },
      { vraag: "Hoe vaak komt een luiaard ongeveer uit de boom om zijn behoefte te doen?",
        antwoorden: ["Elk uur", "Elke dag", "Ongeveer één keer per week", "Nooit"], goed: 2,
        uitleg: "Doordat hij zo langzaam verteert, hoeft dat maar weinig." },
      { vraag: "Wat kan een luiaard verrassend goed?",
        antwoorden: ["Rennen", "Zwemmen", "Springen", "Vliegen"], goed: 1,
        uitleg: "In het water is hij sneller dan op de grond." }
    ]
  },
  {
    id: "pijlgifkikker", naam: "Pijlgifkikker", gebied: "jungle", emoji: "🐸",
    foto: "fotos/pijlgifkikker.jpg", jongFoto: "fotos/pijlgifkikker-jong.jpg", jongNaam: "kikkervisjes",
    weetjes: [
      "Dit is een aardbeikikker, een pijlgifkikker van maar ongeveer 2 centimeter.",
      "Zijn felle kleur is een waarschuwing: 'Pas op, ik ben giftig!'",
      "Het gif komt uit hun eten in het wild, zoals kleine mijten en mieren.",
      "De moeder draagt haar kikkervisjes één voor één op haar rug naar kleine plasjes water in planten.",
      "Daar voert ze haar kikkervisjes met onbevruchte eitjes.",
      "Van sommige andere soorten werd het gif gebruikt voor pijlpunten. Daar komt de naam vandaan."
    ],
    vragen: [
      { vraag: "Waarom heeft een pijlgifkikker zulke felle kleuren?",
        antwoorden: ["Om partners te lokken in het donker", "Als waarschuwing: ik ben giftig", "Om warmte op te nemen", "Om op bloemen te lijken"], goed: 1,
        uitleg: "Vogels en andere dieren leren dat felle kleuren 'niet eten' betekenen." },
      { vraag: "Waar brengt een aardbeikikker-moeder haar kikkervisjes naartoe?",
        antwoorden: ["Naar een grote rivier", "Naar kleine plasjes water in planten", "Naar de zee", "Naar een nest van bladeren"], goed: 1,
        uitleg: "Vaak zijn dat bromelia's: planten die regenwater opvangen in hun bladeren." },
      { vraag: "Wat geeft de moeder haar kikkervisjes te eten?",
        antwoorden: ["Vliegen", "Onbevruchte eitjes", "Blaadjes", "Niets, ze zoeken zelf eten"], goed: 1,
        uitleg: "Ze komt steeds terug om nieuwe eitjes in het plasje te leggen." }
    ]
  },
  {
    id: "chimpansee", naam: "Chimpansee", gebied: "jungle", emoji: "🐒",
    foto: "fotos/chimpansee.jpg", jongFoto: "fotos/chimpansee-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Chimpansees zijn samen met bonobo's onze naaste levende familieleden.",
      "Ze gebruiken gereedschap: met een takje vissen ze termieten uit een heuvel en met stenen kraken ze noten.",
      "Chimpansees leven in groepen en vlooien elkaar om vriendschappen te onderhouden.",
      "Elke avond bouwen ze een nieuw slaapnest van takken en bladeren hoog in een boom.",
      "Een jong blijft ongeveer vijf jaar bij zijn moeder en rijdt in het begin mee op haar buik of rug.",
      "Ze leven in de bossen en savannes van Midden- en West-Afrika."
    ],
    vragen: [
      { vraag: "Hoe vangen chimpansees termieten?",
        antwoorden: ["Met hun tong", "Met een takje als 'hengel'", "Met een net van bladeren", "Ze eten geen termieten"], goed: 1,
        uitleg: "Jonge chimpansees leren dit door hun moeder heel lang te bekijken." },
      { vraag: "Waar slapen chimpansees?",
        antwoorden: ["In een grot", "Op de grond", "In een zelfgebouwd nest in een boom", "In het water"], goed: 2,
        uitleg: "Ze bouwen bijna elke avond een nieuw nest." },
      { vraag: "Waarom vlooien chimpansees elkaar?",
        antwoorden: ["Alleen om luizen te eten", "Om vriendschappen te onderhouden", "Omdat ze zich vervelen", "Om warm te blijven"], goed: 1,
        uitleg: "Vlooien maakt rustig en versterkt de band in de groep." }
    ]
  },
  {
    id: "orangoetan", naam: "Orang-oetan", gebied: "jungle", emoji: "🦧",
    foto: "fotos/orangoetan.jpg", jongFoto: "fotos/orangoetan-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Orang-oetan betekent in het Maleis 'mens van het bos'.",
      "Ze leven alleen op de eilanden Borneo en Sumatra in Zuidoost-Azië.",
      "Orang-oetans zijn de grootste dieren die vooral in bomen leven. Hun armen kunnen een spanwijdte van meer dan 2 meter hebben.",
      "Een jong blijft zo'n 7 jaar bij zijn moeder. Dat is langer dan bij elk ander dier behalve de mens.",
      "Ze eten vooral vruchten en onthouden precies wanneer welke boom vruchten draagt.",
      "Bij regen houden ze soms een groot blad boven hun hoofd als paraplu."
    ],
    vragen: [
      { vraag: "Wat betekent 'orang-oetan'?",
        antwoorden: ["Rode aap", "Mens van het bos", "Koning van de bomen", "Grote arm"], goed: 1,
        uitleg: "Het komt uit het Maleis: orang = mens, hutan = bos." },
      { vraag: "Op welke eilanden leven orang-oetans in het wild?",
        antwoorden: ["Madagaskar en Sri Lanka", "Borneo en Sumatra", "Java en Bali", "IJsland en Groenland"], goed: 1,
        uitleg: "Hun regenwoud daar wordt helaas steeds kleiner." },
      { vraag: "Hoe lang blijft een jonge orang-oetan bij zijn moeder?",
        antwoorden: ["Een paar weken", "Een jaar", "Ongeveer 7 jaar", "Zijn hele leven"], goed: 2,
        uitleg: "In die tijd leert hij welke vruchten waar en wanneer te vinden zijn." }
    ]
  },
  {
    id: "toekan", naam: "Reuzentoekan", gebied: "jungle", emoji: "🐦",
    foto: "fotos/toekan.jpg", jongFoto: "fotos/toekan-jong.jpg", jongNaam: "jong",
    weetjes: [
      "De reuzentoekan heeft de grootste snavel van alle vogels in verhouding tot zijn lichaam.",
      "De snavel lijkt zwaar, maar is licht: hij is van binnen hol met een soort sponzig netwerk.",
      "Toekans gebruiken hun snavel ook om warmte kwijt te raken, zoals een radiator.",
      "Ze eten vooral vruchten en gooien die soms omhoog om ze met open snavel op te vangen.",
      "Jonge toekans hebben eerst een kortere, minder felle snavel. Die groeit pas langzaam uit.",
      "Toekans slapen met hun snavel op hun rug en hun staart over zich heen gevouwen."
    ],
    vragen: [
      { vraag: "Waarom is de grote snavel van een toekan niet zwaar?",
        antwoorden: ["Hij is van plastic", "Hij is van binnen hol en sponzig", "Hij is gevuld met lucht uit de longen", "Hij is wel heel zwaar"], goed: 1,
        uitleg: "Een stevige buitenkant met een licht netwerk binnenin: slim gebouwd." },
      { vraag: "Waarvoor gebruikt een toekan zijn snavel behalve om te eten?",
        antwoorden: ["Om warmte kwijt te raken", "Om te graven", "Om te zwemmen", "Om licht te geven"], goed: 0,
        uitleg: "Door meer bloed naar de snavel te sturen, koelt hij af." },
      { vraag: "Hoe slaapt een toekan?",
        antwoorden: ["Hangend ondersteboven", "Met zijn snavel op zijn rug", "Staand op één poot in het water", "In een hol in de grond"], goed: 1,
        uitleg: "Zo wordt hij een compact bolletje veren in een boomholte." }
    ]
  },

  // ===== Bos =====
  {
    id: "kerkuil", naam: "Kerkuil", gebied: "bos", emoji: "🦉",
    foto: "fotos/kerkuil.jpg", jongFoto: "fotos/kerkuil-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "Kerkuilen vliegen bijna geruisloos dankzij zachte veren met gekartelde randen.",
      "Het hartvormige gezicht werkt als een schotelantenne die geluid naar de oren leidt.",
      "Het ene oor zit iets hoger dan het andere. Zo kan hij precies horen waar een geluid vandaan komt.",
      "Botjes en haren die hij niet kan verteren, spuugt hij uit als braakbal.",
      "De kerkuil leeft op bijna alle continenten. Alleen niet op Antarctica."
    ],
    vragen: [
      { vraag: "Hoe kan een kerkuil bijna geruisloos vliegen?",
        antwoorden: ["Hij vliegt heel langzaam", "Zijn veren hebben zachte, gekartelde randen", "Hij houdt zijn adem in", "Hij zweeft alleen op de wind"], goed: 1,
        uitleg: "Die randen breken de luchtstroom, zodat er bijna geen geruis is." },
      { vraag: "Wat is bijzonder aan de oren van een kerkuil?",
        antwoorden: ["Hij heeft er vier", "Het ene oor zit hoger dan het andere", "Ze zitten op zijn poten", "Hij heeft geen oren"], goed: 1,
        uitleg: "Zo hoort hij ook of een geluid van boven of van onderen komt." },
      { vraag: "Wat is een braakbal?",
        antwoorden: ["Een ei van een uil", "Een bal met botjes en haren die de uil uitspuugt", "Een nest van veren", "Een speeltje voor uilen"], goed: 1,
        uitleg: "Onderzoekers pluizen braakballen uit om te zien wat een uil gegeten heeft." }
    ]
  },
  {
    id: "panda", naam: "Panda", gebied: "bos", emoji: "🐼",
    foto: "fotos/panda.jpg", jongFoto: "fotos/panda-jong.jpg", jongNaam: "welp",
    weetjes: [
      "Reuzenpanda's leven in bergbossen in China.",
      "Ze eten bijna alleen bamboe, wel 12 uur per dag.",
      "Een verlengd polsbotje werkt als een soort extra duim om bamboe vast te houden.",
      "Een pasgeboren panda weegt maar zo'n 100 gram, ongeveer 900 keer minder dan zijn moeder.",
      "Door bescherming gaat het beter met de panda. Hij geldt nu als 'kwetsbaar' in plaats van 'bedreigd'."
    ],
    vragen: [
      { vraag: "Hoe zwaar is een pasgeboren reuzenpanda ongeveer?",
        antwoorden: ["Ongeveer 100 gram", "1 kilo", "5 kilo", "15 kilo"], goed: 0,
        uitleg: "Zo licht als een reep chocola! Het welpje is roze en bijna kaal." },
      { vraag: "Wat helpt een panda om bamboe vast te houden?",
        antwoorden: ["Zijn lange tong", "Een verlengd polsbotje dat werkt als duim", "Zijn staart", "Plakkerige poten"], goed: 1,
        uitleg: "Dat botje wordt ook wel de 'zesde vinger' genoemd." },
      { vraag: "Waar leven reuzenpanda's in het wild?",
        antwoorden: ["In Afrika", "In bergbossen in China", "In Australië", "Op de Noordpool"], goed: 1,
        uitleg: "Daar groeit veel bamboe en is het koel en vochtig." }
    ]
  },
  {
    id: "eekhoorn", naam: "Eekhoorn", gebied: "bos", emoji: "🐿️",
    foto: "fotos/eekhoorn.jpg", jongFoto: "fotos/eekhoorn-jong.jpg", jongNaam: "jong",
    weetjes: [
      "In de herfst verstopt een eekhoorn noten op heel veel verschillende plekken.",
      "Niet alle noten worden teruggevonden. Uit vergeten noten groeien soms nieuwe bomen.",
      "Het nest van een eekhoorn heet een kobel.",
      "Rode eekhoorns kunnen rood, bruin of bijna zwart zijn.",
      "Een eekhoorn kan zijn enkels draaien en zo met zijn kop naar beneden een boom af klimmen."
    ],
    vragen: [
      { vraag: "Wat doet een eekhoorn in de herfst met noten?",
        antwoorden: ["Hij verstopt ze op heel veel plekken", "Hij eet ze allemaal meteen op", "Hij geeft ze aan vogels", "Hij laat ze liggen"], goed: 0,
        uitleg: "Zo heeft hij in de winter genoeg te eten." },
      { vraag: "Hoe heet het nest van een eekhoorn?",
        antwoorden: ["Een hol", "Een kobel", "Een burcht", "Een horst"], goed: 1,
        uitleg: "Een burcht is van een das, een horst van een roofvogel." },
      { vraag: "Hoe kan een eekhoorn met zijn kop naar beneden een boom af klimmen?",
        antwoorden: ["Hij heeft zuignappen", "Hij kan de enkels van zijn achterpoten draaien", "Hij laat zich gewoon vallen", "Hij gebruikt zijn staart als touw"], goed: 1,
        uitleg: "Zijn nagels haken dan achter de schors, zodat hij niet valt." }
    ]
  },
  {
    id: "egel", naam: "Egel", gebied: "bos", emoji: "🦔",
    foto: "fotos/egel.jpg", jongFoto: "fotos/egel-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Een egel heeft ongeveer 5000 tot 7000 stekels.",
      "Bij gevaar rolt hij zich op tot een stekelige bal.",
      "In de winter houdt een egel een winterslaap. Zijn hartslag en temperatuur gaan dan flink omlaag.",
      "Egels zijn vooral 's nachts actief en eten kevers, rupsen, wormen en slakken.",
      "Geef een egel nooit melk: daar kan hij ziek van worden. Water is wel goed."
    ],
    vragen: [
      { vraag: "Wat doet een egel in de winter?",
        antwoorden: ["Hij trekt naar het zuiden", "Hij houdt een winterslaap", "Hij krijgt een witte vacht", "Hij graaft een hol in de sneeuw om te jagen"], goed: 1,
        uitleg: "Hij eet zich in de herfst eerst dik, zodat hij de winter doorkomt." },
      { vraag: "Wat kun je een egel beter NIET geven?",
        antwoorden: ["Water", "Melk", "Niets, hij eet alles", "Een schuilplek"], goed: 1,
        uitleg: "Egels kunnen melk slecht verteren en kunnen er diarree van krijgen." },
      { vraag: "Wanneer is een egel vooral actief?",
        antwoorden: ["'s Ochtends vroeg", "Midden op de dag", "'s Nachts", "Alleen als het regent"], goed: 2,
        uitleg: "Overdag slaapt hij in een nestje van bladeren." }
    ]
  },
  {
    id: "vos", naam: "Vos", gebied: "bos", emoji: "🦊",
    foto: "fotos/vos.jpg", jongFoto: "fotos/vos-jong.jpg", jongNaam: "welp",
    weetjes: [
      "De vos (rode vos) komt op meer plekken ter wereld voor dan bijna elk ander wild roofdier: van Europa tot Noord-Amerika en Australië.",
      "Een vos hoort bij de hondachtigen, maar heeft verticale pupillen zoals een kat.",
      "Vossen horen zo goed dat ze een muis onder de sneeuw kunnen horen piepen.",
      "Zijn dikke staart heet een 'lunte'. Die gebruikt hij als warme deken en om zijn evenwicht te houden.",
      "Welpen worden in het voorjaar geboren in een hol, de 'burcht'. Na ongeveer vier weken komen ze voor het eerst naar buiten om te spelen.",
      "Vossen leven ook in steden, bijvoorbeeld in Amsterdam en Londen."
    ],
    vragen: [
      { vraag: "Hoe heet de staart van een vos?",
        antwoorden: ["Pluim", "Lunte", "Kwast", "Bossel"], goed: 1,
        uitleg: "Bij koud weer krult de vos zich op en legt hij zijn lunte over zijn neus." },
      { vraag: "Op welk dier lijken de pupillen van een vos?",
        antwoorden: ["Een hond", "Een kat", "Een uil", "Een geit"], goed: 1,
        uitleg: "Verticale spleetpupillen helpen bij het zien in de schemering." },
      { vraag: "Hoe heet het hol waarin vossenwelpen geboren worden?",
        antwoorden: ["Burcht", "Nest", "Kot", "Leger"], goed: 0,
        uitleg: "Soms gebruiken vossen een oude burcht van een das of konijn." }
    ]
  },
  {
    id: "wolf", naam: "Wolf", gebied: "bos", emoji: "🐺",
    foto: "fotos/wolf.jpg", jongFoto: "fotos/wolf-jong.jpg", jongNaam: "welp",
    weetjes: [
      "Alle honden stammen af van de wolf. Mensen hebben wolven duizenden jaren geleden getemd.",
      "Wolven leven in een roedel. Dat is meestal een familie: een ouderpaar met hun jongen.",
      "Met huilen houden wolven contact met elkaar. Dat kan kilometers ver te horen zijn.",
      "Een wolf kan in één nacht tientallen kilometers lopen.",
      "Sinds 2015 komen er weer wilde wolven in Nederland voor.",
      "Welpen worden blind geboren en gaan na een paar weken voor het eerst uit het hol."
    ],
    vragen: [
      { vraag: "Welk huisdier stamt af van de wolf?",
        antwoorden: ["De kat", "De hond", "Het paard", "Het konijn"], goed: 1,
        uitleg: "Alle hondenrassen, van chihuahua tot Duitse dog, stammen af van de wolf." },
      { vraag: "Waaruit bestaat een roedel meestal?",
        antwoorden: ["Alleen mannetjes", "Een ouderpaar met hun jongen", "Willekeurige wolven", "Wolven en vossen samen"], goed: 1,
        uitleg: "Een roedel is eigenlijk gewoon een familie." },
      { vraag: "Waarom huilen wolven?",
        antwoorden: ["Omdat ze verdrietig zijn", "Naar de maan, omdat die schijnt", "Om contact te houden met elkaar", "Omdat ze honger hebben"], goed: 2,
        uitleg: "Dat ze naar de maan huilen is een fabel; ze steken hun kop omhoog zodat het geluid verder draagt." }
    ]
  },
  {
    id: "edelhert", naam: "Edelhert", gebied: "bos", emoji: "🦌",
    foto: "fotos/edelhert.jpg", jongFoto: "fotos/edelhert-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "Het edelhert is het grootste wilde landdier van Nederland. Je kunt het bijvoorbeeld op de Veluwe zien.",
      "Alleen mannetjes (herten) hebben een gewei. Het valt elk voorjaar af en groeit daarna opnieuw.",
      "In de herfst is de bronsttijd. Dan 'burlen' de mannetjes: een luid, diep brullend geluid.",
      "Vrouwtjes heten hindes. Zij leven met de jongen in groepen.",
      "Kalveren hebben witte vlekjes op hun vacht. Zo vallen ze minder op tussen de bladeren.",
      "Edelherten eten gras, bladeren, knoppen en eikels."
    ],
    vragen: [
      { vraag: "Hoe heet het geluid dat mannetjes edelherten maken in de herfst?",
        antwoorden: ["Blaten", "Burlen", "Hinniken", "Knorren"], goed: 1,
        uitleg: "In september en oktober hoor je het burlen op de Veluwe." },
      { vraag: "Hoe vaak krijgt een edelhert een nieuw gewei?",
        antwoorden: ["Elk jaar", "Om de vijf jaar", "Eén keer in zijn leven", "Nooit"], goed: 0,
        uitleg: "Een nieuw gewei groeit in een paar maanden, wel tot 2 centimeter per dag." },
      { vraag: "Waarom hebben edelhertkalveren witte vlekjes?",
        antwoorden: ["Omdat ze ziek zijn", "Om minder op te vallen tussen bladeren", "Om indruk te maken", "Het is sneeuw"], goed: 1,
        uitleg: "Het lijkt op zonlicht dat door de bladeren valt. Na een paar maanden verdwijnen de vlekjes." }
    ]
  },
  {
    id: "bruinebeer", naam: "Bruine beer", gebied: "bos", emoji: "🐻",
    foto: "fotos/bruinebeer.jpg", jongFoto: "fotos/bruinebeer-jong.jpg", jongNaam: "welp",
    weetjes: [
      "De bruine beer leeft in bossen en bergen van Europa, Azië en Noord-Amerika. De grizzly is ook een bruine beer.",
      "Bruine beren zijn alleseters: ze eten bessen, wortels, noten, insecten, honing en vis.",
      "In de herfst eten ze zich vol en daarna houden ze een winterslaap in een hol.",
      "Tijdens de winterslaap eten, drinken en plassen ze maandenlang niet.",
      "Welpen worden midden in de winter in het hol geboren en wegen dan maar ongeveer een halve kilo.",
      "De bult op hun schouders is een grote spier om mee te graven."
    ],
    vragen: [
      { vraag: "Welke beer is eigenlijk ook een bruine beer?",
        antwoorden: ["De ijsbeer", "De grizzly", "De panda", "De koala"], goed: 1,
        uitleg: "Grizzly is de naam voor bruine beren in delen van Noord-Amerika. (Een koala is trouwens helemaal geen beer.)" },
      { vraag: "Wanneer worden bruine-berenwelpen geboren?",
        antwoorden: ["In de zomer", "Midden in de winter, in het hol", "In de herfst", "Het hele jaar door, op elke plek"], goed: 1,
        uitleg: "De moeder zoogt ze tijdens de winterslaap. In de lente komen ze samen naar buiten." },
      { vraag: "Waarvoor dient de bult op de schouders van een bruine beer?",
        antwoorden: ["Vetopslag voor de winter", "Een grote spier om te graven", "Een opslag voor water", "Een bult van een verwonding"], goed: 1,
        uitleg: "Met die sterke spier graven ze wortels op en maken ze hun winterhol." }
    ]
  },

  // ===== Insecten =====
  {
    id: "honingbij", naam: "Honingbij", gebied: "insecten", emoji: "🐝",
    foto: "fotos/honingbij.jpg", jongFoto: "fotos/honingbij-jong.jpg", jongNaam: "larve",
    weetjes: [
      "Met een speciale dans, de kwispeldans, vertelt een bij waar bloemen te vinden zijn.",
      "De werkbijen zijn allemaal vrouwtjes. De mannetjes heten darren.",
      "Een koningin kan in de zomer tot wel 1500 eitjes per dag leggen.",
      "De cellen in een honingraat zijn zeshoekig. Zo past er veel in met weinig was.",
      "Uit een eitje komt een larve. Die groeit in een cel uit tot een nieuwe bij."
    ],
    vragen: [
      { vraag: "Hoe vertelt een honingbij andere bijen waar bloemen te vinden zijn?",
        antwoorden: ["Met een geurspoor op de grond", "Met een speciale dans", "Door te zoemen in morse", "Dat vertelt ze niet"], goed: 1,
        uitleg: "De richting en de duur van de dans laten zien waar de bloemen zijn en hoe ver weg." },
      { vraag: "Hoe heten de mannetjes van de honingbij?",
        antwoorden: ["Werkers", "Darren", "Koningen", "Hommels"], goed: 1,
        uitleg: "Darren hebben geen angel en verzamelen geen nectar." },
      { vraag: "Welke vorm hebben de cellen in een honingraat?",
        antwoorden: ["Rond", "Vierkant", "Zeshoekig", "Driehoekig"], goed: 2,
        uitleg: "Zeshoeken passen perfect tegen elkaar zonder ruimte te verspillen." }
    ]
  },
  {
    id: "monarchvlinder", naam: "Monarchvlinder", gebied: "insecten", emoji: "🦋",
    foto: "fotos/monarchvlinder.jpg", jongFoto: "fotos/monarchvlinder-jong.jpg", jongNaam: "rups",
    weetjes: [
      "Elk najaar vliegen miljoenen monarchvlinders uit Noord-Amerika naar bossen in Mexico.",
      "Sommige leggen meer dan 4000 kilometer af.",
      "De rups eet alleen zijdeplant. Daardoor smaakt hij vies voor vogels.",
      "Een monarchvlinder verandert van ei naar rups, naar pop, naar vlinder.",
      "De vlinders die naar Mexico trekken leven veel langer dan hun ouders: maanden in plaats van weken."
    ],
    vragen: [
      { vraag: "Wat maakt de monarchvlinder zo bijzonder?",
        antwoorden: ["Hij leeft wel 20 jaar", "Hij trekt duizenden kilometers ver", "Hij kan onder water ademen", "Hij heeft geen vleugels"], goed: 1,
        uitleg: "Het is een van de langste trektochten van alle insecten." },
      { vraag: "Welke plant eet de rups van de monarchvlinder?",
        antwoorden: ["Brandnetel", "Zijdeplant", "Gras", "Eikenblad"], goed: 1,
        uitleg: "De stoffen uit de zijdeplant maken de rups en de vlinder vies voor vogels." },
      { vraag: "In welke volgorde verandert een monarchvlinder?",
        antwoorden: ["Rups, ei, vlinder, pop", "Ei, rups, pop, vlinder", "Pop, ei, rups, vlinder", "Ei, pop, rups, vlinder"], goed: 1,
        uitleg: "Die verandering heet een gedaanteverwisseling of metamorfose." }
    ]
  },
  {
    id: "lieveheersbeestje", naam: "Zevenstippelig lieveheersbeestje", gebied: "insecten", emoji: "🐞",
    foto: "fotos/lieveheersbeestje.jpg", jongFoto: "fotos/lieveheersbeestje-jong.jpg", jongNaam: "larve",
    weetjes: [
      "Het zevenstippelig lieveheersbeestje is een kever. Zijn rode 'schild' zijn eigenlijk harde voorvleugels; daaronder zitten dunne vliegvleugels.",
      "De felle kleur is een waarschuwing: lieveheersbeestjes smaken vies voor vogels.",
      "Ze zijn geliefd bij tuiniers, omdat ze bladluizen eten. Eén lieveheersbeestje kan er duizenden opeten in zijn leven.",
      "De larve lijkt helemaal niet op een lieveheersbeestje: hij is langwerpig, donkergrijs met oranje vlekjes.",
      "Na de larve komt de pop. Daaruit kruipt het lieveheersbeestje, dat in het begin nog geel is zonder stippen.",
      "In de winter kruipen ze vaak met veel tegelijk weg in een spleet om te overwinteren."
    ],
    vragen: [
      { vraag: "Wat eten lieveheersbeestjes graag?",
        antwoorden: ["Bladluizen", "Rozenblaadjes", "Nectar alleen", "Fruit"], goed: 0,
        uitleg: "Daarom zijn ze een natuurlijke 'bestrijder' in de tuin. Ook de larven eten bladluizen." },
      { vraag: "Waarom is een lieveheersbeestje zo fel gekleurd?",
        antwoorden: ["Om een partner te vinden", "Als waarschuwing: hij smaakt vies", "Om warm te blijven", "Dat is toeval"], goed: 1,
        uitleg: "Vogels leren snel dat rood met zwart 'niet lekker' betekent." },
      { vraag: "Hoe ziet de larve van een lieveheersbeestje eruit?",
        antwoorden: ["Als een klein rond rood bolletje", "Langwerpig en donkergrijs met oranje vlekjes", "Als een groene rups", "Als een witte made"], goed: 1,
        uitleg: "Veel mensen herkennen de larve daarom niet." }
    ]
  },
  {
    id: "libel", naam: "Grote keizerlibel", gebied: "insecten", emoji: "🦋",
    foto: "fotos/libel.jpg", jongFoto: "fotos/libel-jong.jpg", jongNaam: "larve",
    weetjes: [
      "De grote keizerlibel is een van de grootste libellen van Europa. Zijn vleugels zijn samen ongeveer 10 centimeter breed.",
      "Libellen bestaan al meer dan 300 miljoen jaar, dus nog langer dan de dinosaurussen.",
      "Een libel heeft enorme ogen, die bestaan uit tienduizenden kleine oogjes. Hij ziet bijna rondom.",
      "Libellen kunnen stilhangen in de lucht en zelfs achteruit vliegen.",
      "De larve leeft één of twee jaar onder water. Daarna klimt hij langs een plantenstengel omhoog en kruipt de libel uit zijn larvehuid.",
      "Libellen steken en bijten mensen niet. Je hoeft er dus niet bang voor te zijn."
    ],
    vragen: [
      { vraag: "Waar leeft de larve van een libel?",
        antwoorden: ["In de grond", "Onder water", "In een boom", "In een bloem"], goed: 1,
        uitleg: "Pas aan het eind klimt de larve uit het water en wordt hij een libel." },
      { vraag: "Hoe lang bestaan libellen al ongeveer?",
        antwoorden: ["1000 jaar", "1 miljoen jaar", "Meer dan 300 miljoen jaar", "Pas sinds de mens er is"], goed: 2,
        uitleg: "Sommige oerlibellen hadden een spanwijdte van bijna 70 centimeter." },
      { vraag: "Wat kan een libel in de lucht?",
        antwoorden: ["Alleen rechtdoor vliegen", "Stilhangen en achteruit vliegen", "Alleen zweven", "Niet vliegen"], goed: 1,
        uitleg: "Een libel kan zijn vier vleugels los van elkaar bewegen." }
    ]
  },
  {
    id: "sprinkhaan", naam: "Grote groene sabelsprinkhaan", gebied: "insecten", emoji: "🦗",
    foto: "fotos/sprinkhaan.jpg", jongFoto: "fotos/sprinkhaan-jong.jpg", jongNaam: "nimf",
    weetjes: [
      "De grote groene sabelsprinkhaan is een van de grootste sprinkhanen van Nederland: wel 4 centimeter lang.",
      "Zijn voelsprieten zijn langer dan zijn hele lichaam.",
      "Het vrouwtje heeft achteraan een lange 'legboor' in de vorm van een sabel. Daarmee legt ze eitjes in de grond. Daar komt de naam vandaan.",
      "Het mannetje 'zingt' door zijn vleugels langs elkaar te wrijven. Dat hoor je op zomeravonden.",
      "Een sprinkhaan hoort met oortjes die op zijn voorpoten zitten.",
      "Een jonge sprinkhaan heet een nimf. Hij lijkt al op een volwassen sprinkhaan, maar heeft nog geen vleugels. Hij vervelt een aantal keer."
    ],
    vragen: [
      { vraag: "Waar zitten de oren van een sabelsprinkhaan?",
        antwoorden: ["Op zijn kop", "Op zijn voorpoten", "Op zijn vleugels", "Hij heeft geen oren"], goed: 1,
        uitleg: "Het zijn kleine trommelvliesjes vlak onder de 'knie'." },
      { vraag: "Hoe heet een jonge sprinkhaan?",
        antwoorden: ["Rups", "Made", "Nimf", "Pop"], goed: 2,
        uitleg: "Sprinkhanen hebben geen popstadium: de nimf groeit door vervellen uit tot volwassen dier." },
      { vraag: "Waar komt de naam 'sabelsprinkhaan' vandaan?",
        antwoorden: ["Hij vecht met andere sprinkhanen", "De legboor van het vrouwtje lijkt op een sabel", "Hij maakt een geluid als een zwaard", "Zijn poten zijn scherp"], goed: 1,
        uitleg: "Een sabel is een gebogen zwaard." }
    ]
  },
  {
    id: "vliegendhert", naam: "Vliegend hert", gebied: "insecten", emoji: "🪲",
    foto: "fotos/vliegendhert.jpg", jongFoto: "fotos/vliegendhert-jong.jpg", jongNaam: "larve",
    weetjes: [
      "Het vliegend hert is de grootste kever van Nederland. Mannetjes kunnen zo'n 8 centimeter lang worden.",
      "De grote 'geweien' van het mannetje zijn eigenlijk enorm uitgegroeide kaken.",
      "Mannetjes gebruiken hun gewei om te duwen en te worstelen met andere mannetjes, ongeveer zoals herten.",
      "De larve leeft drie tot vijf jaar (soms langer) in vermolmd hout van oude bomen, meestal eiken.",
      "De volwassen kever leeft maar een paar weken, in de zomer. Je ziet ze vooral op warme avonden vliegen.",
      "Het vliegend hert is zeldzaam en beschermd, omdat er steeds minder oude bomen en dood hout zijn."
    ],
    vragen: [
      { vraag: "Wat is het 'gewei' van een mannetjes vliegend hert eigenlijk?",
        antwoorden: ["Hoorns op zijn kop", "Uitgegroeide kaken", "Poten", "Voelsprieten"], goed: 1,
        uitleg: "Ze zijn zo groot dat hij er nauwelijks mee kan eten." },
      { vraag: "Waar leeft de larve van het vliegend hert?",
        antwoorden: ["In vijvers", "In vermolmd hout van oude bomen", "In bloemen", "In mierennesten"], goed: 1,
        uitleg: "Daarom is het belangrijk om oude bomen en dood hout in de natuur te laten liggen." },
      { vraag: "Hoe lang leeft de larve ongeveer?",
        antwoorden: ["Een paar dagen", "Een paar weken", "Drie tot vijf jaar", "Vijftig jaar"], goed: 2,
        uitleg: "De kever zelf leeft daarna maar een paar weken." }
    ]
  },
  {
    id: "koninginnenpage", naam: "Koninginnenpage", gebied: "insecten", emoji: "🦋",
    foto: "fotos/koninginnenpage.jpg", jongFoto: "fotos/koninginnenpage-jong.jpg", jongNaam: "rups",
    weetjes: [
      "De koninginnenpage is een van de grootste en mooiste vlinders van Nederland, met een spanwijdte tot ongeveer 8 centimeter.",
      "Aan zijn achtervleugels zitten twee 'staartjes' en een rood-blauwe vlek.",
      "De rups is groen met zwarte strepen en oranje stippen.",
      "Als je de rups stoort, steekt hij een oranje 'vorkje' uit zijn kop dat sterk ruikt. Zo schrikt hij vijanden af.",
      "De rups eet planten uit de schermbloemenfamilie, zoals wilde peen, venkel en dille.",
      "Mannetjes vliegen graag naar de top van een heuvel of toren om vrouwtjes te ontmoeten. Dat heet 'hilltopping'."
    ],
    vragen: [
      { vraag: "Wat doet de rups van de koninginnenpage als hij gestoord wordt?",
        antwoorden: ["Hij rolt zich op", "Hij steekt een oranje stinkend vorkje uit", "Hij laat zich vallen", "Hij spuit water"], goed: 1,
        uitleg: "Dat vorkje heet een osmeterium." },
      { vraag: "Welke planten eet de rups van de koninginnenpage?",
        antwoorden: ["Brandnetels", "Schermbloemen zoals wilde peen en venkel", "Gras", "Eikenbladeren"], goed: 1,
        uitleg: "Soms vind je de rups dus zelfs op de dille in de moestuin." },
      { vraag: "Wat is 'hilltopping'?",
        antwoorden: ["Mannetjes zoeken een hoog punt om vrouwtjes te ontmoeten", "Rupsen die bergop kruipen", "Vlinders die overwinteren op bergen", "Een soort vliegwedstrijd"], goed: 0,
        uitleg: "Een hoog punt werkt als een afgesproken ontmoetingsplek." }
    ]
  },

  // ===== Boerderij =====
  {
    id: "koe", naam: "Koe", gebied: "boerderij", emoji: "🐄",
    foto: "fotos/koe.jpg", jongFoto: "fotos/koe-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "Een koe is een herkauwer: ze kauwt haar eten meerdere keren.",
      "De maag van een koe bestaat uit vier delen.",
      "Een koe maakt meer dan 100 liter speeksel per dag.",
      "Een koe geeft pas melk nadat ze een kalf heeft gekregen.",
      "Een pasgeboren kalf kan vaak binnen een uur al staan."
    ],
    vragen: [
      { vraag: "Hoeveel speeksel maakt een koe ongeveer per dag?",
        antwoorden: ["1 liter", "10 liter", "Meer dan 100 liter", "1000 liter"], goed: 2,
        uitleg: "Dat speeksel heeft ze nodig om gras goed te kunnen herkauwen." },
      { vraag: "Uit hoeveel delen bestaat de maag van een koe?",
        antwoorden: ["1", "2", "4", "10"], goed: 2,
        uitleg: "In die delen wordt taai gras stap voor stap verteerd." },
      { vraag: "Wanneer begint een koe melk te geven?",
        antwoorden: ["Als ze een jaar oud is", "Nadat ze een kalf heeft gekregen", "Alleen in de zomer", "Als ze veel gras eet"], goed: 1,
        uitleg: "Net als bij andere zoogdieren is de melk eigenlijk bedoeld voor het jong." }
    ]
  },
  {
    id: "varken", naam: "Varken", gebied: "boerderij", emoji: "🐷",
    foto: "fotos/varken.jpg", jongFoto: "fotos/varken-jong.jpg", jongNaam: "big",
    weetjes: [
      "Een jong varken heet een big. Een moeder krijgt vaak meer dan tien biggen tegelijk.",
      "Varkens kunnen bijna niet zweten. Met modder koelen ze af.",
      "Met hun sterke neus vinden ze zelfs truffels onder de grond.",
      "Varkens zijn slim: in onderzoek leerden ze een spiegel te gebruiken om verstopt voer te vinden.",
      "Met hun stevige snuit wroeten ze in de grond op zoek naar eten."
    ],
    vragen: [
      { vraag: "Waarvoor worden varkens soms ingezet, dankzij hun sterke neus?",
        antwoorden: ["Truffels zoeken", "Brand blussen", "Post bezorgen", "Schapen hoeden"], goed: 0,
        uitleg: "Truffels zijn dure paddenstoelen die onder de grond groeien." },
      { vraag: "Waarom rollen varkens in de modder?",
        antwoorden: ["Omdat ze vies willen zijn", "Om af te koelen, want ze kunnen bijna niet zweten", "Om te slapen", "Om te verstoppen"], goed: 1,
        uitleg: "Modder beschermt hun huid ook tegen de zon." },
      { vraag: "Hoe heet een jong varken?",
        antwoorden: ["Een veulen", "Een big", "Een lam", "Een kalf"], goed: 1,
        uitleg: "Een veulen is een jong paard, een lam een jong schaap en een kalf een jonge koe." }
    ]
  },
  {
    id: "kip", naam: "Kip", gebied: "boerderij", emoji: "🐔",
    foto: "fotos/kip.jpg", jongFoto: "fotos/kip-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "Vogels stammen af van dinosaurussen. De kip is dus verre familie van de T. rex.",
      "De kip stamt af van het bankivahoen, een wilde vogel uit Zuidoost-Azië.",
      "Een kippenei komt na ongeveer 21 dagen broeden uit.",
      "Een kuiken breekt de eierschaal open met een klein puntje op zijn snavel: de eitand.",
      "Kuikens piepen al in het ei, en de moeder 'praat' terug."
    ],
    vragen: [
      { vraag: "Welke dieren zijn de directe afstammelingen van dinosaurussen?",
        antwoorden: ["Hagedissen", "Krokodillen", "Vogels, zoals de kip", "Haaien"], goed: 2,
        uitleg: "Vogels zijn eigenlijk de laatste levende dinosaurussen." },
      { vraag: "Hoe lang duurt het ongeveer voordat een kippenei uitkomt?",
        antwoorden: ["3 dagen", "21 dagen", "3 maanden", "Een jaar"], goed: 1,
        uitleg: "In die drie weken houdt de kip de eieren warm." },
      { vraag: "Van welke wilde vogel stamt de kip af?",
        antwoorden: ["De fazant", "Het bankivahoen", "De pauw", "De struisvogel"], goed: 1,
        uitleg: "Mensen houden al duizenden jaren kippen." }
    ]
  },
  {
    id: "paard", naam: "Paard", gebied: "boerderij", emoji: "🐴",
    foto: "fotos/paard.jpg", jongFoto: "fotos/paard-jong.jpg", jongNaam: "veulen",
    weetjes: [
      "Doordat zijn ogen aan de zijkant van zijn hoofd zitten, ziet een paard bijna helemaal rondom zich heen.",
      "Een paard kan staand dutten: zijn benen kunnen als het ware 'op slot'.",
      "Voor een diepe slaap gaat een paard wel even liggen.",
      "Een veulen staat meestal binnen een uur na de geboorte op zijn benen.",
      "Paarden kunnen niet overgeven."
    ],
    vragen: [
      { vraag: "Waarom kan een paard bijna helemaal rondom zich heen kijken?",
        antwoorden: ["Het kan zijn hoofd 360 graden draaien", "Zijn ogen zitten aan de zijkant van zijn hoofd", "Het heeft vier ogen", "Het kijkt met zijn oren"], goed: 1,
        uitleg: "Alleen recht achter zich en vlak voor zijn neus ziet het bijna niets." },
      { vraag: "Hoe kan een paard staand slapen?",
        antwoorden: ["Het leunt altijd tegen een muur", "Zijn benen kunnen als het ware op slot", "Het slaapt nooit echt", "Het hangt aan zijn staart"], goed: 1,
        uitleg: "Pezen en banden houden de benen recht, zonder dat het spieren kost." },
      { vraag: "Hoe snel staat een pasgeboren veulen meestal op zijn benen?",
        antwoorden: ["Binnen ongeveer een uur", "Na een week", "Na een maand", "Na een jaar"], goed: 0,
        uitleg: "In het wild moet een veulen snel met de kudde mee kunnen." }
    ]
  },
  {
    id: "schaap", naam: "Schaap", gebied: "boerderij", emoji: "🐑",
    foto: "fotos/schaap.jpg", jongFoto: "fotos/schaap-jong.jpg", jongNaam: "lam",
    weetjes: [
      "Schapen zijn al ongeveer 10.000 jaar huisdieren. Ze stammen af van het wilde moeflon.",
      "De wol van een schaap blijft doorgroeien. Daarom worden de meeste schapen elk jaar geschoren.",
      "Schapen kunnen gezichten herkennen en onthouden, ook die van mensen.",
      "Hun pupillen zijn liggende rechthoekjes. Daardoor zien ze bijna rondom zich heen zonder hun kop te draaien.",
      "Een lam kan al binnen een uur na de geboorte staan en melk drinken.",
      "Schapen zijn kuddedieren: alleen voelen ze zich niet veilig."
    ],
    vragen: [
      { vraag: "Van welk wild dier stamt het schaap af?",
        antwoorden: ["De gems", "Het moeflon", "De steenbok", "Het hert"], goed: 1,
        uitleg: "Het moeflon is een wild schaap met grote gekrulde hoorns." },
      { vraag: "Welke vorm hebben de pupillen van een schaap?",
        antwoorden: ["Rond", "Verticale spleetjes", "Liggende rechthoekjes", "Sterretjes"], goed: 2,
        uitleg: "Zo hebben ze een enorm breed blikveld." },
      { vraag: "Waarom worden de meeste schapen elk jaar geschoren?",
        antwoorden: ["Omdat hun wol blijft doorgroeien", "Omdat het mooi staat", "Om ze sneller te maken", "Dat gebeurt nooit"], goed: 0,
        uitleg: "Wilde schapen verliezen hun wol vanzelf, maar bij veel gefokte rassen blijft hij groeien." }
    ]
  },
  {
    id: "geit", naam: "Geit", gebied: "boerderij", emoji: "🐐",
    foto: "fotos/geit.jpg", jongFoto: "fotos/geit-jong.jpg", jongNaam: "lammetje",
    weetjes: [
      "Geiten waren samen met schapen een van de eerste dieren die mensen hielden, meer dan 10.000 jaar geleden.",
      "Geiten zijn super klimmers. Sommige klimmen zelfs in bomen om bladeren te eten.",
      "Net als schapen hebben geiten rechthoekige pupillen.",
      "Een geit is een herkauwer: ze heeft een maag met vier delen en kauwt haar eten twee keer.",
      "Een jonge geit heet een geitenlam, of gewoon lammetje.",
      "Geiten zijn nieuwsgierig en slim. Ze kunnen leren om simpele puzzels op te lossen."
    ],
    vragen: [
      { vraag: "Hoeveel delen heeft de maag van een geit?",
        antwoorden: ["Eén", "Twee", "Drie", "Vier"], goed: 3,
        uitleg: "Pens, netmaag, boekmaag en lebmaag, net als bij een koe." },
      { vraag: "Waar klimmen sommige geiten in om te eten?",
        antwoorden: ["In bomen", "In het water", "Op daken van huizen", "Nergens, geiten klimmen niet"], goed: 0,
        uitleg: "In Marokko klimmen geiten in arganbomen om de vruchten te eten." },
      { vraag: "Wat betekent het dat een geit een herkauwer is?",
        antwoorden: ["Ze eet alleen 's nachts", "Ze kauwt haar eten twee keer", "Ze eet geen gras", "Ze heeft geen tanden"], goed: 1,
        uitleg: "Het eten komt na het doorslikken terug in de bek en wordt nog eens fijngekauwd." }
    ]
  },
  {
    id: "eend", naam: "Wilde eend", gebied: "boerderij", emoji: "🦆",
    foto: "fotos/eend.jpg", jongFoto: "fotos/eend-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "De wilde eend is de voorouder van bijna alle tamme eenden op boerderijen.",
      "Het mannetje (woerd) heeft een glanzend groene kop. Het vrouwtje is bruin gespikkeld, zodat ze goed verstopt zit op het nest.",
      "Eendenveren zijn waterdicht door een vettig laagje dat ze uit een klier bij hun staart halen.",
      "Kuikens kunnen een paar uur na het uitkomen al zwemmen.",
      "Het bekende 'kwak' wordt vooral door vrouwtjes gemaakt. Mannetjes maken een zachter geluid.",
      "Eenden 'grondelen': ze steken hun kop onder water en hun achterkant omhoog om plantjes te eten."
    ],
    vragen: [
      { vraag: "Hoe heet een mannetjeseend?",
        antwoorden: ["Haan", "Woerd", "Gent", "Ram"], goed: 1,
        uitleg: "Een mannetjesgans heet een gent, een mannetjesschaap een ram." },
      { vraag: "Waardoor blijven de veren van een eend droog?",
        antwoorden: ["Door een vettig laagje uit een klier", "Ze zijn van plastic", "Ze schudden heel hard", "Ze worden wel nat"], goed: 0,
        uitleg: "Met hun snavel smeren ze dat vet over al hun veren." },
      { vraag: "Wat is 'grondelen'?",
        antwoorden: ["Slapen op de grond", "Kop onder water, achterkant omhoog om te eten", "Hard kwaken", "In de modder rollen"], goed: 1,
        uitleg: "Zo kunnen ze waterplanten op de bodem bereiken zonder te duiken." }
    ]
  },
  {
    id: "ezel", naam: "Ezel", gebied: "boerderij", emoji: "🫏",
    foto: "fotos/ezel.jpg", jongFoto: "fotos/ezel-jong.jpg", jongNaam: "veulen",
    weetjes: [
      "Ezels stammen af van de Afrikaanse wilde ezel, die in droge, rotsachtige gebieden leeft.",
      "Met hun grote oren horen ze goed en raken ze warmte kwijt.",
      "Het geluid van een ezel heet balken: 'iii-aaa'. Dat kan kilometers ver klinken.",
      "Ezels zijn niet dom of koppig. Ze zijn voorzichtig en denken eerst na voordat ze iets doen.",
      "Een kruising tussen een ezel en een paard heet een muildier (ezelvader) of een muilezel (paardvader).",
      "Ezels kunnen 30 tot 50 jaar oud worden."
    ],
    vragen: [
      { vraag: "Hoe heet het geluid van een ezel?",
        antwoorden: ["Hinniken", "Balken", "Loeien", "Blaten"], goed: 1,
        uitleg: "Paarden hinniken, koeien loeien en schapen blaten." },
      { vraag: "Waarom lijken ezels soms koppig?",
        antwoorden: ["Ze zijn lui", "Ze zijn voorzichtig en denken eerst na", "Ze horen slecht", "Ze zijn altijd moe"], goed: 1,
        uitleg: "Als een ezel iets gevaarlijk vindt, blijft hij liever staan dan dat hij vlucht." },
      { vraag: "Hoe oud kan een ezel worden?",
        antwoorden: ["5 jaar", "10 jaar", "30 tot 50 jaar", "100 jaar"], goed: 2,
        uitleg: "Ezels worden vaak ouder dan paarden." }
    ]
  },

  // ===== Huisdieren =====
  {
    id: "hond", naam: "Hond", gebied: "huisdieren", emoji: "🐶",
    foto: "fotos/hond.jpg", jongFoto: "fotos/hond-jong.jpg", jongNaam: "pup",
    weetjes: [
      "Alle honden, van chihuahua tot husky, stammen af van wolven.",
      "Mensen en honden leven al meer dan 15.000 jaar samen.",
      "Een hondenneus is vele duizenden keren gevoeliger dan die van een mens.",
      "Honden horen hoge tonen die mensen niet kunnen horen.",
      "Puppy's worden geboren met hun ogen en oren nog dicht.",
      "Husky's werden gefokt om sleeën te trekken door de sneeuw."
    ],
    vragen: [
      { vraag: "Van welk wild dier stamt de hond af?",
        antwoorden: ["De vos", "De wolf", "De hyena", "De jakhals"], goed: 1,
        uitleg: "Door duizenden jaren samenleven met mensen ontstonden alle hondenrassen." },
      { vraag: "Hoe worden puppy's geboren?",
        antwoorden: ["Met hun ogen en oren nog dicht", "Met al hun tanden", "Ze kunnen meteen rennen", "Zonder vacht"], goed: 0,
        uitleg: "Na ongeveer twee weken gaan hun oogjes open." },
      { vraag: "Waarvoor werden husky's oorspronkelijk gefokt?",
        antwoorden: ["Om schapen te hoeden", "Om sleeën te trekken", "Om te zwemmen", "Om te jagen op vossen"], goed: 1,
        uitleg: "Ze kunnen lange afstanden lopen in extreme kou." }
    ]
  },
  {
    id: "kat", naam: "Kat", gebied: "huisdieren", emoji: "🐱",
    foto: "fotos/kat.jpg", jongFoto: "fotos/kat-jong.jpg", jongNaam: "kitten",
    weetjes: [
      "Bij een val draait een kat zich in de lucht om. Dat heet de oprichtreflex.",
      "Katten slapen ongeveer 12 tot 16 uur per dag.",
      "Achter in hun ogen zit een laagje dat licht weerkaatst. Daarom zien ze goed in het schemerdonker.",
      "Met hun snorharen voelen katten hun omgeving, zelfs in het donker.",
      "Siamese kittens worden bijna wit geboren. De donkere oren, poten en staart komen later."
    ],
    vragen: [
      { vraag: "Hoe komt het dat katten bij een val vaak op hun poten landen?",
        antwoorden: ["Ze hebben botten van rubber", "Ze draaien hun lichaam in de lucht", "Ze gebruiken hun staart als parachute", "Dat is puur geluk"], goed: 1,
        uitleg: "Dankzij hun soepele rug draaien ze eerst hun kop en dan de rest van hun lichaam." },
      { vraag: "Waarom krijgt een Siamese kat donkere oren, poten en staart?",
        antwoorden: ["Door de zon", "De kleurstof ontstaat alleen op de koelere plekken van het lichaam", "Door vies worden", "Door hun eten"], goed: 1,
        uitleg: "Oren, poten en staart zijn iets kouder dan de rest van het lichaam." },
      { vraag: "Waarom zien katten in het schemerdonker beter dan mensen?",
        antwoorden: ["Ze hebben lampjes in hun ogen", "Achter in hun ogen zit een laagje dat licht weerkaatst", "Ze hebben drie ogen", "Ze zien met hun snorharen"], goed: 1,
        uitleg: "Daarom lichten kattenogen op als je er 's nachts met een lamp op schijnt." }
    ]
  },
  {
    id: "konijn", naam: "Konijn", gebied: "huisdieren", emoji: "🐰",
    foto: "fotos/konijn.jpg", jongFoto: "fotos/konijn-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Bij gevaar stampt een konijn hard met zijn achterpoten op de grond als alarm.",
      "De tanden van een konijn blijven zijn hele leven groeien.",
      "Jonge konijnen worden kaal en blind geboren. Jonge hazen hebben meteen een vacht en open ogen.",
      "Wilde konijnen leven in groepen in gangenstelsels onder de grond.",
      "Met zijn grote oren hoort een konijn goed en raakt hij ook warmte kwijt."
    ],
    vragen: [
      { vraag: "Wat doet een konijn met zijn achterpoten om anderen te waarschuwen voor gevaar?",
        antwoorden: ["Zwaaien", "Hard op de grond stampen", "Graven", "Krabben op een boom"], goed: 1,
        uitleg: "Andere konijnen horen en voelen dat gestamp en vluchten hun hol in." },
      { vraag: "Wat is een verschil tussen jonge konijnen en jonge hazen?",
        antwoorden: ["Hazen komen uit een ei", "Konijnen worden kaal en blind geboren, hazen met vacht en open ogen", "Konijnen kunnen meteen rennen", "Er is geen verschil"], goed: 1,
        uitleg: "Jonge konijnen liggen veilig in een hol, jonge hazen liggen gewoon in het veld." },
      { vraag: "Wat is bijzonder aan de tanden van een konijn?",
        antwoorden: ["Ze vallen elk jaar uit", "Ze blijven zijn hele leven groeien", "Ze zijn blauw", "Konijnen hebben geen tanden"], goed: 1,
        uitleg: "Door veel hooi te kauwen slijten ze weer af." }
    ]
  },
  {
    id: "hamster", naam: "Hamster", gebied: "huisdieren", emoji: "🐹",
    foto: "fotos/hamster.jpg", jongFoto: "fotos/hamster-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Goudhamsters komen oorspronkelijk uit Syrië. In het wild zijn ze zeldzaam en bedreigd.",
      "Ze zijn vooral 's avonds en 's nachts actief.",
      "In hun wangzakken, die tot hun schouders lopen, vervoeren ze eten naar hun voorraad.",
      "Volwassen goudhamsters wonen het liefst alleen.",
      "Een goudhamster is maar ongeveer 16 dagen zwanger."
    ],
    vragen: [
      { vraag: "Wanneer is een goudhamster het meest actief?",
        antwoorden: ["Vroeg in de ochtend", "Midden op de dag", "'s Avonds en 's nachts", "Alleen in de winter"], goed: 2,
        uitleg: "In een looprad kan hij 's nachts kilometers afleggen." },
      { vraag: "Waarom moet een goudhamster meestal alleen wonen?",
        antwoorden: ["Hij is snel jaloers op mensen", "Volwassen goudhamsters zijn graag alleen en vechten met soortgenoten", "Hij is allergisch voor andere hamsters", "Dat hoeft niet"], goed: 1,
        uitleg: "Ook in het wild leeft elke goudhamster in een eigen hol." },
      { vraag: "Hoe lang is een goudhamster ongeveer zwanger?",
        antwoorden: ["Ongeveer 16 dagen", "2 maanden", "6 maanden", "1 jaar"], goed: 0,
        uitleg: "Dat is een van de kortste zwangerschappen van alle zoogdieren." }
    ]
  },
  {
    id: "cavia", naam: "Cavia", gebied: "huisdieren", emoji: "🐹",
    foto: "fotos/cavia.jpg", jongFoto: "fotos/cavia-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Cavia's komen oorspronkelijk uit de Andes in Zuid-Amerika. Daar worden ze al duizenden jaren gehouden.",
      "Een cavia kan zelf geen vitamine C maken (net als mensen). Daarom heeft hij elke dag verse groente nodig.",
      "Hun tanden blijven hun hele leven groeien. Door hooi te kauwen slijten ze netjes af.",
      "Cavia's zijn groepsdieren en worden eenzaam als ze alleen leven.",
      "Als een cavia blij is, maakt hij soms kleine sprongetjes in de lucht. Dat heet 'popcornen'.",
      "Jonge cavia's worden geboren met vacht en open ogen en kunnen meteen rondlopen."
    ],
    vragen: [
      { vraag: "Waar komen cavia's oorspronkelijk vandaan?",
        antwoorden: ["Guinee in Afrika", "De Andes in Zuid-Amerika", "Nederland", "Australië"], goed: 1,
        uitleg: "Hun Engelse naam 'guinea pig' is dus misleidend." },
      { vraag: "Welke vitamine moet een cavia elke dag via zijn eten krijgen?",
        antwoorden: ["Vitamine A", "Vitamine C", "Vitamine D", "Vitamine K"], goed: 1,
        uitleg: "Paprika en peterselie zitten vol vitamine C." },
      { vraag: "Hoe zien pasgeboren cavia's eruit?",
        antwoorden: ["Kaal en blind", "Met vacht en open ogen", "Als een ei", "Zonder poten"], goed: 1,
        uitleg: "Na een paar dagen eten ze al vast voedsel, al drinken ze ook nog melk." }
    ]
  },
  {
    id: "grasparkiet", naam: "Grasparkiet", gebied: "huisdieren", emoji: "🦜",
    foto: "fotos/grasparkiet.jpg", jongFoto: "fotos/grasparkiet-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "Grasparkieten komen uit Australië. Daar vliegen ze in zwermen van soms duizenden vogels.",
      "Wilde grasparkieten zijn groen met geel. Blauwe, witte en gele kleuren zijn door fokken ontstaan.",
      "Bij mannetjes is de 'neusdop' boven de snavel meestal blauw, bij vrouwtjes bruin of beige.",
      "Grasparkieten kunnen woorden en geluiden leren nadoen.",
      "Kuikens komen kaal en blind uit het ei. Na ongeveer een maand vliegen ze uit.",
      "Het zijn sociale vogels: één grasparkiet alleen verveelt zich snel."
    ],
    vragen: [
      { vraag: "Uit welk werelddeel komen grasparkieten?",
        antwoorden: ["Afrika", "Zuid-Amerika", "Australië", "Azië"], goed: 2,
        uitleg: "In de Australische binnenlanden leven ze in grote zwermen." },
      { vraag: "Welke kleur hebben wilde grasparkieten?",
        antwoorden: ["Blauw", "Groen met geel", "Wit", "Rood"], goed: 1,
        uitleg: "Groen is een goede schutkleur tussen het gras." },
      { vraag: "Hoe kun je vaak zien of een grasparkiet een mannetje is?",
        antwoorden: ["Aan de staart", "Aan de blauwe neusdop", "Aan de pootjes", "Aan zijn gezang"], goed: 1,
        uitleg: "Vrouwtjes hebben meestal een bruine of beige neusdop." }
    ]
  },

  // ===== Woestijn =====
  {
    id: "dromedaris", naam: "Dromedaris", gebied: "woestijn", emoji: "🐪",
    foto: "fotos/dromedaris.jpg", jongFoto: "fotos/dromedaris-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "Een dromedaris heeft één bult, een kameel (Bactrische kameel) heeft er twee.",
      "In de bult zit geen water maar vet. Dat is een voorraad energie voor als er weinig eten is.",
      "Een dorstige dromedaris kan in een paar minuten meer dan 100 liter water drinken.",
      "Lange wimpers en neusgaten die dicht kunnen beschermen tegen zandstormen.",
      "Hun lichaamstemperatuur mag overdag een paar graden stijgen, zodat ze minder zweten en water besparen.",
      "Een kalf kan al op de eerste dag lopen. Het heeft bij de geboorte nog geen bult."
    ],
    vragen: [
      { vraag: "Wat zit er in de bult van een dromedaris?",
        antwoorden: ["Water", "Vet", "Lucht", "Zand"], goed: 1,
        uitleg: "Het vet is een energievoorraad. Water slaan ze op in hun bloed en lichaam." },
      { vraag: "Hoeveel bulten heeft een dromedaris?",
        antwoorden: ["Geen", "Eén", "Twee", "Drie"], goed: 1,
        uitleg: "Ezelsbruggetje: de D van dromedaris ligt op zijn kant als één bult, de B van Bactrische kameel heeft er twee." },
      { vraag: "Hoeveel water kan een dorstige dromedaris snel drinken?",
        antwoorden: ["1 liter", "10 liter", "Meer dan 100 liter", "1000 liter"], goed: 2,
        uitleg: "Dat lukt in maar een paar minuten." }
    ]
  },
  {
    id: "stokstaartje", naam: "Stokstaartje", gebied: "woestijn", emoji: "🦦",
    foto: "fotos/stokstaartje.jpg", jongFoto: "fotos/stokstaartje-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Stokstaartjes leven in de Kalahari-woestijn en droge gebieden in het zuiden van Afrika.",
      "Ze leven in groepen van soms meer dan 30 dieren en wonen in een netwerk van holen.",
      "Terwijl de groep eten zoekt, houdt een 'wachter' op een hoog punt de omgeving in de gaten.",
      "De donkere vlekken rond hun ogen werken als een zonnebril tegen de felle zon.",
      "Ze kunnen goed tegen het gif van schorpioenen, die ze graag eten. Jongen leren van volwassenen hoe ze die veilig vangen.",
      "Andere groepsleden passen op de jongen, alsof het oppassers zijn."
    ],
    vragen: [
      { vraag: "Wat doet de 'wachter' bij een groep stokstaartjes?",
        antwoorden: ["Hij kookt het eten", "Hij let op gevaar", "Hij graaft holen", "Hij slaapt"], goed: 1,
        uitleg: "Ziet hij een roofvogel, dan roept hij en duikt iedereen een hol in." },
      { vraag: "Waarvoor dienen de donkere vlekken rond hun ogen?",
        antwoorden: ["Als zonnebril tegen fel licht", "Om indruk te maken", "Om in het donker te zien", "Nergens voor"], goed: 0,
        uitleg: "Het donkere vel weerkaatst minder zonlicht in hun ogen." },
      { vraag: "In welke woestijn leven stokstaartjes?",
        antwoorden: ["De Sahara", "De Gobi", "De Kalahari", "De Atacama"], goed: 2,
        uitleg: "De Kalahari ligt in het zuiden van Afrika." }
    ]
  },
  {
    id: "woestijnschildpad", naam: "Woestijnschildpad", gebied: "woestijn", emoji: "🐢",
    foto: "fotos/woestijnschildpad.jpg", jongFoto: "fotos/woestijnschildpad-jong.jpg", jongNaam: "jong",
    weetjes: [
      "De woestijnschildpad leeft in de Mojave- en Sonorawoestijn in het zuidwesten van de Verenigde Staten.",
      "Hij brengt tot wel 95 procent van zijn leven door in holen onder de grond, weg van hitte en kou.",
      "Met zijn sterke voorpoten graaft hij zelf zijn hol.",
      "Hij kan water opslaan in zijn blaas en daardoor maanden zonder drinken.",
      "Woestijnschildpadden kunnen 50 tot 80 jaar oud worden.",
      "Een jong is bij het uitkomen maar ongeveer 5 centimeter lang, met een zacht schild dat langzaam hard wordt."
    ],
    vragen: [
      { vraag: "Waar brengt een woestijnschildpad het grootste deel van zijn leven door?",
        antwoorden: ["In het water", "In een hol onder de grond", "Op de top van een rots", "In een boom"], goed: 1,
        uitleg: "Onder de grond is het koeler in de zomer en warmer in de winter." },
      { vraag: "Waar slaat een woestijnschildpad water op?",
        antwoorden: ["In zijn schild", "In zijn blaas", "In zijn staart", "Hij slaat geen water op"], goed: 1,
        uitleg: "Daarom mag je een woestijnschildpad nooit oppakken: van schrik kan hij zijn watervoorraad verliezen." },
      { vraag: "Hoe oud kan een woestijnschildpad worden?",
        antwoorden: ["5 jaar", "15 jaar", "50 tot 80 jaar", "500 jaar"], goed: 2,
        uitleg: "Schildpadden groeien langzaam en leven lang." }
    ]
  },
  {
    id: "zandgazelle", naam: "Arabische zandgazelle", gebied: "woestijn", emoji: "🦌",
    foto: "fotos/zandgazelle.jpg", jongFoto: "fotos/zandgazelle-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "De Arabische zandgazelle leeft in de zand- en grindwoestijnen van het Arabisch Schiereiland.",
      "Haar lichte zandkleurige vacht weerkaatst zonlicht en maakt haar bijna onzichtbaar in het zand.",
      "Ze kan lange tijd zonder drinken, omdat ze vocht haalt uit planten en dauw.",
      "Op de heetste momenten van de dag rust ze in de schaduw en ze is vooral actief in de ochtend en avond.",
      "Na de geboorte blijft een kalf de eerste weken stil verstopt liggen, terwijl de moeder in de buurt graast.",
      "Door jacht werd deze gazelle erg zeldzaam. In beschermde natuurgebieden komen er nu weer meer."
    ],
    vragen: [
      { vraag: "Waar haalt de zandgazelle vaak haar vocht vandaan?",
        antwoorden: ["Uit planten en dauw", "Uit de zee", "Uit cactussen alleen", "Ze heeft geen vocht nodig"], goed: 0,
        uitleg: "Daardoor hoeft ze bijna niet te drinken." },
      { vraag: "Wat doet een pasgeboren gazellekalf de eerste weken?",
        antwoorden: ["Het rent met de kudde mee", "Het ligt stil verstopt", "Het zwemt", "Het klimt in bomen"], goed: 1,
        uitleg: "Stil liggen en weinig geur verspreiden is de beste bescherming." },
      { vraag: "Wanneer is de zandgazelle het meest actief?",
        antwoorden: ["Midden op de dag", "In de ochtend en avond", "Alleen 's winters", "Nooit"], goed: 1,
        uitleg: "Zo vermijdt ze de grootste hitte." }
    ]
  },

  // ===== Rivier & Meer =====
  {
    id: "nijlpaard", naam: "Nijlpaard", gebied: "rivier", emoji: "🦛",
    foto: "fotos/nijlpaard.jpg", jongFoto: "fotos/nijlpaard-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "Een nijlpaard brengt de hele dag door in rivieren en meren in Afrika, en gaat 's nachts aan land om gras te eten.",
      "Een volwassen nijlpaard eet in één nacht zo'n 40 kilo gras.",
      "Nijlpaarden kunnen niet echt zwemmen. Ze lopen en springen over de bodem van de rivier.",
      "Hun huid maakt een roodachtige vloeistof die werkt als zonnebrandcrème. Het is geen bloed en geen zweet.",
      "Ogen, oren en neusgaten zitten bovenop de kop, zodat het nijlpaard kan kijken en ademen terwijl de rest onder water is.",
      "Kalveren worden vaak onder water geboren en rusten soms op de rug van hun moeder."
    ],
    vragen: [
      { vraag: "Wanneer eet een nijlpaard gras?",
        antwoorden: ["'s Ochtends vroeg in het water", "'s Nachts aan land", "Nooit, hij eet vis", "Alleen in de winter"], goed: 1,
        uitleg: "Overdag blijft hij in het water om koel te blijven." },
      { vraag: "Hoe bewegen nijlpaarden zich onder water?",
        antwoorden: ["Ze zwemmen als een vis", "Ze lopen en springen over de bodem", "Ze drijven alleen", "Ze gaan nooit onder water"], goed: 1,
        uitleg: "Ze zijn zo zwaar dat ze naar de bodem zakken." },
      { vraag: "Wat is de roodachtige vloeistof op de huid van een nijlpaard?",
        antwoorden: ["Bloed", "Gewoon zweet", "Een soort natuurlijke zonnebrandcrème", "Modder"], goed: 2,
        uitleg: "Het beschermt tegen de zon en helpt ook tegen bacteriën." }
    ]
  },
  {
    id: "otter", naam: "Europese otter", gebied: "rivier", emoji: "🦦",
    foto: "fotos/otter.jpg", jongFoto: "fotos/otter-jong.jpg", jongNaam: "jong",
    weetjes: [
      "De Europese otter leeft langs rivieren, beken en meren. Sinds 2002 leven er weer otters in Nederland.",
      "Een otter kan zijn oren en neusgaten afsluiten als hij onder water duikt.",
      "Met zijn lange snorharen voelt hij beweging in troebel water.",
      "Tussen zijn tenen zitten zwemvliezen, en zijn staart werkt als een roer.",
      "Otters zijn erg speels. Jonge otters glijden van modderhellingen en spelen met steentjes.",
      "Een otter eet vooral vis en kan per dag ongeveer een kilo eten."
    ],
    vragen: [
      { vraag: "Waarmee voelt een otter beweging in troebel water?",
        antwoorden: ["Met zijn staart", "Met zijn snorharen", "Met zijn oren", "Met zijn tong"], goed: 1,
        uitleg: "De snorharen zijn heel gevoelig voor kleine trillingen." },
      { vraag: "Sinds wanneer leven er weer otters in Nederland?",
        antwoorden: ["Er waren nooit otters", "Sinds 2002", "Sinds 1802", "Ze zijn er altijd geweest"], goed: 1,
        uitleg: "In 1988 was de otter uitgestorven in Nederland. In 2002 werden er weer otters uitgezet." },
      { vraag: "Waarvoor gebruikt een otter zijn staart bij het zwemmen?",
        antwoorden: ["Als roer", "Om vis te vangen", "Om te slapen", "Hij heeft geen staart"], goed: 0,
        uitleg: "De dikke, gespierde staart stuurt en duwt hem vooruit." }
    ]
  },
  {
    id: "bever", naam: "Bever", gebied: "rivier", emoji: "🦫",
    foto: "fotos/bever.jpg", jongFoto: "fotos/bever-jong.jpg", jongNaam: "jong",
    weetjes: [
      "De bever is het grootste knaagdier van Europa en kan meer dan 25 kilo wegen.",
      "Met zijn sterke oranje tanden knaagt hij hele bomen om. De tanden zijn oranje door ijzer in het glazuur.",
      "Bevers bouwen dammen van takken en modder om het water hoger te maken. Zo ligt de ingang van hun burcht onder water.",
      "Hun platte, geschubde staart gebruiken ze als roer en om alarm te slaan door op het water te kletsen.",
      "Bevers eten alleen planten: bast, takjes, bladeren en waterplanten.",
      "Jongen blijven ongeveer twee jaar bij hun ouders en helpen mee met bouwen."
    ],
    vragen: [
      { vraag: "Waarom zijn de tanden van een bever oranje?",
        antwoorden: ["Door ijzer in het glazuur", "Door het eten van wortels", "Ze zijn vies", "Door de zon"], goed: 0,
        uitleg: "Ijzer maakt de tanden extra sterk." },
      { vraag: "Waarom bouwt een bever een dam?",
        antwoorden: ["Om vis te vangen", "Om het water hoger te maken", "Om te spelen", "Om andere bevers tegen te houden"], goed: 1,
        uitleg: "Dan ligt de ingang van zijn burcht veilig onder water." },
      { vraag: "Wat eet een bever?",
        antwoorden: ["Vis", "Alleen planten", "Insecten", "Kikkers"], goed: 1,
        uitleg: "Bevers zijn echte planteneters. Ze knagen bomen om voor de bast en takjes." }
    ]
  },
  {
    id: "flamingo", naam: "Flamingo", gebied: "rivier", emoji: "🦩",
    foto: "fotos/flamingo.jpg", jongFoto: "fotos/flamingo-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "Flamingo's zijn roze door de kleurstoffen in de kreeftjes en algen die ze eten.",
      "Ze eten met hun kop ondersteboven en filteren eten uit het water met hun snavel.",
      "Flamingo's staan vaak op één poot. Waarschijnlijk kost dat hun minder energie en verliezen ze zo minder warmte.",
      "Kuikens zijn eerst grijs of wit en worden pas na een paar jaar roze.",
      "Beide ouders voeren het kuiken met 'kropmelk', een voedzame vloeistof uit hun keel.",
      "Ze leven in grote groepen bij ondiepe, zoute meren en lagunes."
    ],
    vragen: [
      { vraag: "Waardoor zijn flamingo's roze?",
        antwoorden: ["Door de zon", "Door kleurstoffen in hun eten", "Ze worden zo geboren", "Door het zoute water"], goed: 1,
        uitleg: "Zonder dat eten worden flamingo's langzaam bleek." },
      { vraag: "Welke kleur heeft een flamingokuiken?",
        antwoorden: ["Felroze", "Grijs of wit", "Groen", "Zwart"], goed: 1,
        uitleg: "Pas na een paar jaar krijgen ze hun roze veren." },
      { vraag: "Hoe eet een flamingo?",
        antwoorden: ["Met zijn kop ondersteboven in het water", "Hij plukt vruchten uit bomen", "Hij duikt diep", "Hij vangt insecten in de lucht"], goed: 0,
        uitleg: "Zijn snavel werkt als een zeef." }
    ]
  },
  {
    id: "krokodil", naam: "Nijlkrokodil", gebied: "rivier", emoji: "🐊",
    foto: "fotos/krokodil.jpg", jongFoto: "fotos/krokodil-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Krokodillen bestaan al heel lang. Hun familie leefde al in de tijd van de dinosaurussen.",
      "De nijlkrokodil leeft in rivieren en meren in Afrika en kan meer dan 5 meter lang worden.",
      "Krokodillen liggen vaak met open bek in de zon. Zo raken ze warmte kwijt, een beetje zoals zweten.",
      "Het geslacht van de jongen hangt af van de temperatuur in het nest.",
      "De moeder bewaakt haar nest en draagt de pas uitgekomen jongen voorzichtig in haar bek naar het water.",
      "Krokodillen kunnen meer dan een uur onder water blijven als ze rustig zijn."
    ],
    vragen: [
      { vraag: "Waarom ligt een krokodil vaak met open bek in de zon?",
        antwoorden: ["Om warmte kwijt te raken", "Omdat hij gaapt", "Om vogels te lokken", "Om te zingen"], goed: 0,
        uitleg: "Via de vochtige bek verdampt water en koelt hij af." },
      { vraag: "Wat bepaalt of krokodillenjongen mannetjes of vrouwtjes worden?",
        antwoorden: ["De kleur van het ei", "De temperatuur in het nest", "Het eten van de moeder", "Het toeval"], goed: 1,
        uitleg: "Dat geldt ook voor veel schildpadden." },
      { vraag: "Hoe brengt een moederkrokodil haar jongen naar het water?",
        antwoorden: ["Ze laat ze alleen lopen", "Ze draagt ze voorzichtig in haar bek", "Ze rolt de eieren erheen", "Op haar staart"], goed: 1,
        uitleg: "Haar sterke kaken kunnen ook heel voorzichtig zijn." }
    ]
  },
  {
    id: "knobbelzwaan", naam: "Knobbelzwaan", gebied: "rivier", emoji: "🦢",
    foto: "fotos/knobbelzwaan.jpg", jongFoto: "fotos/knobbelzwaan-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "De knobbelzwaan heeft een oranje snavel met een zwarte knobbel aan de bovenkant. Die knobbel is groter bij mannetjes.",
      "Het is een van de zwaarste vliegende vogels: een mannetje kan meer dan 12 kilo wegen.",
      "Zwanenparen blijven vaak hun hele leven bij elkaar.",
      "Jonge zwanen zijn grijsbruin. Pas na ongeveer een jaar worden ze helemaal wit, net als in het sprookje van het lelijke eendje.",
      "Kleine kuikens rijden soms mee op de rug van hun ouders.",
      "Als hij vliegt, maken zijn vleugels een zingend, zoevend geluid."
    ],
    vragen: [
      { vraag: "Welk sprookje gaat over een jonge zwaan?",
        antwoorden: ["Roodkapje", "Het lelijke eendje", "Hans en Grietje", "Assepoester"], goed: 1,
        uitleg: "Het grijze 'eendje' bleek een prachtige witte zwaan te worden." },
      { vraag: "Welke kleur hebben jonge knobbelzwanen?",
        antwoorden: ["Wit", "Grijsbruin", "Zwart", "Geel"], goed: 1,
        uitleg: "Na ongeveer een jaar zijn ze wit." },
      { vraag: "Waar komt de naam 'knobbelzwaan' vandaan?",
        antwoorden: ["Zijn knobbelige poten", "De zwarte knobbel op zijn snavel", "Zijn knobbelige nek", "Zijn geluid"], goed: 1,
        uitleg: "Bij mannetjes zwelt de knobbel in het voorjaar op." }
    ]
  },

  // ===== Australië =====
  {
    id: "kangoeroe", naam: "Grijze reuzenkangoeroe", gebied: "australie", emoji: "🦘",
    foto: "fotos/kangoeroe.jpg", jongFoto: "fotos/kangoeroe-jong.jpg", jongNaam: "joey",
    weetjes: [
      "Kangoeroes zijn buideldieren: het jong groeit op in een buidel op de buik van de moeder.",
      "Een pasgeboren joey is zo klein als een boon. Hij kruipt zelf naar de buidel en blijft daar maanden.",
      "Kangoeroes springen met hun sterke achterpoten en gebruiken hun staart als steun en evenwicht.",
      "Achteruit lopen kunnen ze bijna niet.",
      "De oostelijke grijze reuzenkangoeroe leeft in de graslanden en open bossen van Oost-Australië.",
      "Een groep kangoeroes heet een 'mob'."
    ],
    vragen: [
      { vraag: "Hoe groot is een kangoeroejong bij de geboorte?",
        antwoorden: ["Zo groot als een boon", "Zo groot als een kat", "Zo groot als een voetbal", "Net zo groot als zijn moeder"], goed: 0,
        uitleg: "Daarna groeit hij maandenlang verder in de buidel." },
      { vraag: "Hoe heet een jonge kangoeroe?",
        antwoorden: ["Kitten", "Joey", "Pup", "Kuiken"], goed: 1,
        uitleg: "Ook jonge koala's en wombats heten joey." },
      { vraag: "Wat kunnen kangoeroes bijna niet?",
        antwoorden: ["Springen", "Zwemmen", "Achteruit lopen", "Gras eten"], goed: 2,
        uitleg: "Hun grote staart en lange voeten zitten in de weg." }
    ]
  },
  {
    id: "koala", naam: "Koala", gebied: "australie", emoji: "🐨",
    foto: "fotos/koala.jpg", jongFoto: "fotos/koala-jong.jpg", jongNaam: "joey",
    weetjes: [
      "Een koala is geen beer, maar een buideldier, net als de kangoeroe.",
      "Koala's eten bijna alleen bladeren van eucalyptusbomen. Die zijn giftig voor de meeste andere dieren.",
      "Omdat eucalyptus weinig energie geeft, slapen koala's wel 18 tot 22 uur per dag.",
      "Koala's hebben vingerafdrukken die erg lijken op die van mensen.",
      "Een joey woont eerst ongeveer zes maanden in de buidel en rijdt daarna mee op de rug van zijn moeder.",
      "Koala's drinken weinig: ze halen het meeste vocht uit bladeren."
    ],
    vragen: [
      { vraag: "Is een koala een beer?",
        antwoorden: ["Ja, een kleine beer", "Nee, een buideldier", "Ja, familie van de panda", "Nee, een aap"], goed: 1,
        uitleg: "De naam 'koalabeer' is dus eigenlijk fout." },
      { vraag: "Wat eten koala's vooral?",
        antwoorden: ["Bamboe", "Eucalyptusbladeren", "Insecten", "Vruchten"], goed: 1,
        uitleg: "Bamboe is het lievelingseten van de panda." },
      { vraag: "Hoeveel uur per dag slaapt een koala ongeveer?",
        antwoorden: ["8 uur", "12 uur", "18 tot 22 uur", "Hij slaapt nooit"], goed: 2,
        uitleg: "Zo spaart hij energie, want eucalyptus is moeilijk te verteren." }
    ]
  },
  {
    id: "emoe", naam: "Emoe", gebied: "australie", emoji: "🐦",
    foto: "fotos/emoe.jpg", jongFoto: "fotos/emoe-jong.jpg", jongNaam: "kuiken",
    weetjes: [
      "De emoe is na de struisvogel de grootste vogel ter wereld. Hij kan bijna 2 meter hoog worden.",
      "Emoes kunnen niet vliegen, maar wel zo'n 50 kilometer per uur rennen.",
      "Het mannetje broedt de eieren uit en eet en drinkt in die acht weken bijna niets.",
      "De eieren zijn donkergroen.",
      "Kuikens hebben bruin met crèmekleurige strepen. Zo vallen ze minder op tussen het gras.",
      "Emoes kunnen goed zwemmen."
    ],
    vragen: [
      { vraag: "Wie broedt bij emoes de eieren uit?",
        antwoorden: ["Het vrouwtje", "Het mannetje", "Allebei om de beurt", "Niemand, het zand houdt ze warm"], goed: 1,
        uitleg: "Hij zorgt daarna ook nog maanden voor de kuikens." },
      { vraag: "Welke kleur hebben emoe-eieren?",
        antwoorden: ["Wit", "Donkergroen", "Roze", "Gestippeld blauw"], goed: 1,
        uitleg: "Ze lijken bijna op grote avocado's." },
      { vraag: "Waarom hebben emoekuikens strepen?",
        antwoorden: ["Om op te vallen", "Zodat ze minder opvallen in het gras", "Om hun moeder te herkennen", "Dat is modder"], goed: 1,
        uitleg: "Na een paar maanden verdwijnen de strepen." }
    ]
  },
  {
    id: "wombat", naam: "Wombat", gebied: "australie", emoji: "🐻",
    foto: "fotos/wombat.jpg", jongFoto: "fotos/wombat-jong.jpg", jongNaam: "joey",
    weetjes: [
      "Wombats zijn stevige buideldieren die holen graven met hun sterke klauwen.",
      "De buidel van een wombat zit achterstevoren: de opening wijst naar achteren. Zo komt er geen aarde in bij het graven.",
      "Wombats maken kubusvormige poepjes! Daarmee markeren ze hun gebied.",
      "Ze eten vooral gras en wortels en zijn vooral 's nachts actief.",
      "Een joey blijft ongeveer zes maanden in de buidel.",
      "Hoewel ze er traag uitzien, kunnen wombats korte stukken zo'n 40 kilometer per uur rennen."
    ],
    vragen: [
      { vraag: "Welke vorm heeft de poep van een wombat?",
        antwoorden: ["Rond", "Kubusvormig (blokjes)", "Lang en dun", "Sterretjes"], goed: 1,
        uitleg: "Blokjes rollen niet weg van de rots waar ze als 'naambordje' liggen." },
      { vraag: "Waarom zit de buidel van een wombat achterstevoren?",
        antwoorden: ["Zodat er geen aarde in komt bij het graven", "Om sneller te rennen", "Om de joey te laten uitkijken", "Toeval"], goed: 0,
        uitleg: "Slim bedacht door de natuur." },
      { vraag: "Wanneer zijn wombats vooral actief?",
        antwoorden: ["Midden op de dag", "'s Nachts", "Alleen in de zomer", "Nooit"], goed: 1,
        uitleg: "Overdag rusten ze in hun koele hol." }
    ]
  },
  {
    id: "tasmaanseduivel", naam: "Tasmaanse duivel", gebied: "australie", emoji: "🐾",
    foto: "fotos/tasmaanseduivel.jpg", jongFoto: "fotos/tasmaanseduivel-jong.jpg", jongNaam: "joey",
    weetjes: [
      "De Tasmaanse duivel leeft in het wild alleen nog op het eiland Tasmanië, ten zuiden van Australië.",
      "Hij is ongeveer zo groot als een kleine hond en is het grootste vleesetende buideldier dat nog bestaat.",
      "Zijn naam komt van zijn harde, gillende geluiden in de nacht.",
      "Hij ruimt veel dode dieren op en helpt zo de natuur schoon te houden.",
      "Een moeder krijgt meestal 2 tot 4 jongen die zo'n vier maanden in de buidel blijven.",
      "Door een besmettelijke ziekte zijn er veel minder Tasmaanse duivels. Er wordt hard gewerkt om ze te beschermen."
    ],
    vragen: [
      { vraag: "Waar leven Tasmaanse duivels in het wild?",
        antwoorden: ["In heel Afrika", "Alleen op Tasmanië", "In Zuid-Amerika", "Op Nieuw-Zeeland"], goed: 1,
        uitleg: "Tasmanië is een eiland ten zuiden van het vasteland van Australië." },
      { vraag: "Waar komt de naam 'duivel' vandaan?",
        antwoorden: ["Van zijn rode ogen", "Van zijn harde, gillende geluiden", "Van zijn hoorns", "Van zijn vuurrode vacht"], goed: 1,
        uitleg: "De eerste Europese kolonisten schrokken van de geluiden in de nacht." },
      { vraag: "Wat voor dier is de Tasmaanse duivel?",
        antwoorden: ["Een buideldier", "Een kat", "Een beer", "Een knaagdier"], goed: 0,
        uitleg: "Hij is het grootste vleesetende buideldier dat nog leeft." }
    ]
  },
  {
    id: "kookaburra", naam: "Kookaburra", gebied: "australie", emoji: "🐦",
    foto: "fotos/kookaburra.jpg", jongFoto: "fotos/kookaburra-jong.jpg", jongNaam: "jong",
    weetjes: [
      "De kookaburra (lachvogel) is de grootste ijsvogel ter wereld.",
      "Zijn roep klinkt als luid menselijk gelach. Je hoort hem vaak bij zonsopgang en zonsondergang.",
      "Kookaburra's lachen samen in koor om te laten horen dat een gebied van hun familie is.",
      "Jongen uit eerdere jaren helpen vaak mee met het voeren van nieuwe kuikens.",
      "Ze nestelen in boomholtes of zelfs in termietenheuvels in bomen.",
      "Ze eten insecten, wormen, hagedissen en kleine slangen."
    ],
    vragen: [
      { vraag: "Tot welke vogelfamilie hoort de kookaburra?",
        antwoorden: ["Papegaaien", "IJsvogels", "Uilen", "Kraaien"], goed: 1,
        uitleg: "Het is zelfs de grootste ijsvogel van de wereld." },
      { vraag: "Waarop lijkt de roep van een kookaburra?",
        antwoorden: ["Een fluitketel", "Menselijk gelach", "Een blaffende hond", "Een bel"], goed: 1,
        uitleg: "Daarom heet hij in het Nederlands ook wel 'lachvogel'." },
      { vraag: "Wie helpen mee met het voeren van de kuikens?",
        antwoorden: ["Niemand", "Oudere broers en zussen", "Andere vogelsoorten", "Alleen de vader"], goed: 1,
        uitleg: "Zo leren de oudere jongen alvast hoe ouderschap werkt." }
    ]
  },

  // ===== Bergen =====
  {
    id: "sneeuwluipaard", naam: "Sneeuwluipaard", gebied: "bergen", emoji: "🐆",
    foto: "fotos/sneeuwluipaard.jpg", jongFoto: "fotos/sneeuwluipaard-jong.jpg", jongNaam: "welp",
    weetjes: [
      "De sneeuwluipaard leeft hoog in de bergen van Centraal-Azië, zoals de Himalaya.",
      "Zijn staart is bijna zo lang als zijn lijf. Hij gebruikt hem voor evenwicht en als warme sjaal.",
      "Grote, behaarde poten werken als sneeuwschoenen.",
      "Sneeuwluipaarden kunnen niet brullen zoals een leeuw. Ze maken juist een zacht snuivend geluid.",
      "Hij kan sprongen maken van meer dan 10 meter.",
      "Welpen worden geboren in een rotsspleet en gaan na zo'n drie maanden mee met hun moeder."
    ],
    vragen: [
      { vraag: "Waarvoor gebruikt een sneeuwluipaard zijn lange staart?",
        antwoorden: ["Voor evenwicht en als warme sjaal", "Om te zwemmen", "Om vliegen te verjagen", "Nergens voor"], goed: 0,
        uitleg: "Bij het slapen legt hij zijn staart over zijn neus." },
      { vraag: "Kan een sneeuwluipaard brullen?",
        antwoorden: ["Ja, harder dan een leeuw", "Nee", "Alleen 's nachts", "Alleen welpen"], goed: 1,
        uitleg: "Hij maakt onder andere een vriendelijk snuivend geluid." },
      { vraag: "In welk gebergte leven sneeuwluipaarden?",
        antwoorden: ["De Alpen", "De Himalaya", "De Andes", "De Rocky Mountains"], goed: 1,
        uitleg: "Ze leven ook in andere bergen van Centraal-Azië." }
    ]
  },
  {
    id: "steenbok", naam: "Alpensteenbok", gebied: "bergen", emoji: "🐐",
    foto: "fotos/steenbok.jpg", jongFoto: "fotos/steenbok-jong.jpg", jongNaam: "jong",
    weetjes: [
      "De alpensteenbok leeft hoog in de Alpen, vaak boven de boomgrens.",
      "Mannetjes hebben enorme gebogen hoorns die meer dan een meter lang kunnen worden.",
      "Steenbokken zijn geweldige klimmers. Hun hoeven hebben een harde rand en een zachte, grijpende binnenkant.",
      "Ze klimmen soms zelfs tegen bijna loodrechte stuwdammen op om zout van de stenen te likken.",
      "Rond 1800 waren er nog maar ongeveer honderd over. Dankzij bescherming leven er nu weer tienduizenden.",
      "Een jong kan al kort na de geboorte over rotsen klauteren."
    ],
    vragen: [
      { vraag: "Waarom klimmen steenbokken tegen steile stuwdammen op?",
        antwoorden: ["Om zout te likken", "Om te slapen", "Om water te drinken", "Om te spelen met vissen"], goed: 0,
        uitleg: "Ze hebben zout nodig, en dat zit op de stenen van de dam." },
      { vraag: "Wat maakt de hoeven van een steenbok zo goed om te klimmen?",
        antwoorden: ["Ze hebben zuignappen", "Een harde rand met een zachte grijpende binnenkant", "Ze zijn heel scherp", "Ze zijn kleverig"], goed: 1,
        uitleg: "Zo hebben ze grip op het kleinste randje." },
      { vraag: "Hoeveel alpensteenbokken waren er rond 1800 nog?",
        antwoorden: ["Ongeveer honderd", "Een miljoen", "Geen enkele", "Ongeveer tienduizend"], goed: 0,
        uitleg: "Door bescherming in Italië groeide de groep weer en werden ze ook elders uitgezet." }
    ]
  },
  {
    id: "lama", naam: "Lama", gebied: "bergen", emoji: "🦙",
    foto: "fotos/lama.jpg", jongFoto: "fotos/lama-jong.jpg", jongNaam: "veulen (cria)",
    weetjes: [
      "Lama's komen uit de Andes in Zuid-Amerika en zijn familie van de kameel.",
      "Al duizenden jaren gebruiken mensen in de Andes lama's om spullen te dragen over bergpaden.",
      "Als een lama boos is, kan hij spugen. Meestal doet hij dat naar andere lama's, niet naar mensen.",
      "Hun bloed kan goed zuurstof opnemen. Daardoor kunnen ze makkelijk leven in de ijle lucht hoog in de bergen.",
      "Een jonge lama heet in Zuid-Amerika een 'cria'.",
      "Lama's neuriën om met elkaar te praten, vooral moeders met hun jong."
    ],
    vragen: [
      { vraag: "Van welk dier is de lama familie?",
        antwoorden: ["Het paard", "De kameel", "Het schaap", "De geit"], goed: 1,
        uitleg: "Lama's, alpaca's, kamelen en dromedarissen horen allemaal bij de kameelachtigen." },
      { vraag: "Hoe heet een jonge lama in Zuid-Amerika?",
        antwoorden: ["Joey", "Cria", "Kitten", "Puppy"], goed: 1,
        uitleg: "Cria komt uit het Spaans." },
      { vraag: "Naar wie spugen lama's meestal?",
        antwoorden: ["Naar mensen", "Naar andere lama's", "Naar vogels", "Ze spugen nooit"], goed: 1,
        uitleg: "Spugen is vooral ruzie maken over eten of rangorde." }
    ]
  },
  {
    id: "marmot", naam: "Alpenmarmot", gebied: "bergen", emoji: "🐿️",
    foto: "fotos/marmot.jpg", jongFoto: "fotos/marmot-jong.jpg", jongNaam: "jong",
    weetjes: [
      "Alpenmarmotten leven in grasvelden hoog in de Alpen.",
      "Ze houden een winterslaap van wel zes maanden in een hol, met de hele familie dicht tegen elkaar aan.",
      "Tijdens de winterslaap klopt hun hart nog maar een paar keer per minuut.",
      "Bij gevaar laten ze een harde fluittoon horen, zodat iedereen het hol in rent.",
      "Ze eten in de zomer gras, kruiden en bloemen om een dikke vetlaag op te bouwen.",
      "Jongen komen pas na ongeveer zes weken voor het eerst uit het hol."
    ],
    vragen: [
      { vraag: "Hoe lang duurt de winterslaap van een alpenmarmot ongeveer?",
        antwoorden: ["Een week", "Een maand", "Ongeveer zes maanden", "Twee jaar"], goed: 2,
        uitleg: "Daarom eten ze zich in de zomer helemaal rond." },
      { vraag: "Wat doet een marmot als hij gevaar ziet?",
        antwoorden: ["Hij fluit hard", "Hij speelt dood", "Hij klimt in een boom", "Niets"], goed: 0,
        uitleg: "Het fluiten waarschuwt de hele familie." },
      { vraag: "Hoe houdt de familie het warm tijdens de winterslaap?",
        antwoorden: ["Ze maken een vuurtje", "Ze liggen dicht tegen elkaar aan", "Ze gaan naar het zuiden", "Ze slapen in de sneeuw"], goed: 1,
        uitleg: "Samen verliezen ze minder warmte." }
    ]
  },
  {
    id: "rodepanda", naam: "Rode panda", gebied: "bergen", emoji: "🐾",
    foto: "fotos/rodepanda.jpg", jongFoto: "fotos/rodepanda-jong.jpg", jongNaam: "welp",
    weetjes: [
      "De rode panda leeft in de bergbossen van de Himalaya en het zuiden van China.",
      "Hij is geen familie van de reuzenpanda, maar heeft een eigen diergroep.",
      "Net als de reuzenpanda eet hij vooral bamboe, en heeft hij een extra 'duim' (een verlengd polsbotje) om stengels vast te houden.",
      "Zijn dikke gestreepte staart gebruikt hij als deken als het koud is.",
      "Rode panda's zijn vooral actief in de schemering en slapen overdag in bomen.",
      "Welpen blijven de eerste maanden in een nest in een holle boom of rotsspleet."
    ],
    vragen: [
      { vraag: "Is de rode panda familie van de reuzenpanda?",
        antwoorden: ["Ja, het is een babypanda", "Nee, hij heeft een eigen diergroep", "Ja, het is een vrouwtje", "Nee, het is een vos"], goed: 1,
        uitleg: "Ze delen wel de naam en het lievelingseten bamboe." },
      { vraag: "Wat is de 'extra duim' van een rode panda?",
        antwoorden: ["Een zesde teen met nagel", "Een verlengd polsbotje", "Een stuk staart", "Een klauw aan zijn achterpoot"], goed: 1,
        uitleg: "Daarmee houdt hij bamboestengels vast." },
      { vraag: "Waarvoor gebruikt de rode panda zijn staart als het koud is?",
        antwoorden: ["Als deken", "Om te graven", "Als paraplu", "Om mee te zwaaien"], goed: 0,
        uitleg: "Hij krult zich op en wikkelt zijn staart om zich heen." }
    ]
  },
  {
    id: "yak", naam: "Jak", gebied: "bergen", emoji: "🐂",
    foto: "fotos/yak.jpg", jongFoto: "fotos/yak-jong.jpg", jongNaam: "kalf",
    weetjes: [
      "De jak leeft op de hoogvlakte van Tibet en in de Himalaya, tot wel 5000 meter hoog.",
      "Zijn lange vacht hangt bijna tot op de grond en houdt hem warm bij min 40 graden.",
      "Jakken hebben grote longen en een groot hart, zodat ze genoeg zuurstof krijgen in de ijle lucht.",
      "Bewoners van de bergen gebruiken jakken als lastdier en voor melk, wol en boter.",
      "Jakken knorren als varkens in plaats van te loeien zoals koeien.",
      "Ze hebben het juist moeilijk als het warmer dan 15 graden wordt."
    ],
    vragen: [
      { vraag: "Welk geluid maakt een jak?",
        antwoorden: ["Hij loeit als een koe", "Hij knort als een varken", "Hij blaft", "Hij hinnikt"], goed: 1,
        uitleg: "Zijn wetenschappelijke naam betekent zelfs 'knorrend rund'." },
      { vraag: "Waarom hebben jakken grote longen?",
        antwoorden: ["Om goed te kunnen zwemmen", "Om genoeg zuurstof te krijgen in ijle berglucht", "Om hard te roepen", "Om te drijven"], goed: 1,
        uitleg: "Hoog in de bergen zit er minder zuurstof in elke ademteug." },
      { vraag: "Vanaf welke temperatuur krijgen jakken het al moeilijk?",
        antwoorden: ["Vanaf min 40 graden", "Vanaf 0 graden", "Vanaf ongeveer 15 graden", "Nooit"], goed: 2,
        uitleg: "Een jak is gemaakt voor kou, niet voor warmte." }
    ]
  }
];


// =====================================================
// 3. ACHIEVEMENTS (BADGES)
// =====================================================
// punten = aantal punten dat je nodig hebt
// alles: true = je moet ALLE vragen beantwoord hebben
// icoon = de naam van het plaatje uit de lijst "iconen" hieronder
//
// De grenzen zijn een percentage van alle vragen samen, in goede antwoorden.
// Voeg je dieren toe, dan schuiven de badges vanzelf mee. Math.round rondt af.
// Met 82 dieren x 3 vragen = 246 vragen wordt dat: 1, 25, 62, 123, 185 en alles.
// Ranger, Expert en Bioloog zijn het kwart, de helft en driekwart.
const alleVragen = dieren.reduce(function (som, dier) { return som + dier.vragen.length; }, 0);
const badges = [
  { naam: "Rookie",    punten: 1,                              icoon: "poot" },
  { naam: "Verkenner", punten: Math.round(alleVragen * 0.10),  icoon: "kompas" },
  { naam: "Ranger",    punten: Math.round(alleVragen * 0.25),  icoon: "boom", stempel: "Kwart",      mijlpaal: "Kwart gehaald!" },
  { naam: "Expert",    punten: Math.round(alleVragen * 0.50),  icoon: "loep", stempel: "Halverwege", mijlpaal: "Halverwege!" },
  { naam: "Bioloog",   punten: Math.round(alleVragen * 0.75),  icoon: "blad", stempel: "Driekwart",  mijlpaal: "Driekwart gehaald!" },
  { naam: "Legende",   alles: true,                            icoon: "kroon" }
];
const geheimeBadge = { naam: "Geheime Pinguïn", icoon: "pinguin", geheim: true };

// De plaatjes zijn SVG: tekeningen gemaakt van code.
// viewBox="0 0 24 24" betekent: we tekenen op een raster van 24 bij 24.
// - <circle> tekent een cirkel (cx, cy = midden, r = straal)
// - <ellipse> tekent een ovaal
// - <path d="..."> tekent een lijn met bochten: M = begin hier, L = lijn naar,
//   C = bocht naar, z = sluit de vorm
// "currentColor" betekent: gebruik de tekstkleur uit de CSS.
// Zo kan hetzelfde plaatje grijs (op slot) of donker op goud zijn.
const iconen = {
  poot:
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
      '<ellipse cx="5.5" cy="10" rx="2" ry="2.6"/><ellipse cx="9.5" cy="5.5" rx="2" ry="2.7"/>' +
      '<ellipse cx="14.5" cy="5.5" rx="2" ry="2.7"/><ellipse cx="18.5" cy="10" rx="2" ry="2.6"/>' +
      '<path d="M12 11.5c-3 0-6.2 3.6-6.2 6.3 0 1.8 1.5 2.7 3.2 2.3 1.2-.3 2-.8 3-.8s1.8.5 3 .8c1.7.4 3.2-.5 3.2-2.3 0-2.7-3.2-6.3-6.2-6.3z"/>' +
    "</svg>",
  kompas:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="9"/>' +
      '<path d="M15.8 8.2 13.4 13.4 8.2 15.8 10.6 10.6z" fill="currentColor"/>' +
    "</svg>",
  boom:
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
      '<path d="M12 2 6.5 9.5h3L5 15.5h4.5L5.5 20h13l-4-4.5H19l-4.5-6h3z"/>' +
      '<rect x="10.8" y="19" width="2.4" height="3.5" rx="0.6"/>' +
    "</svg>",
  loep:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">' +
      '<circle cx="10.5" cy="10.5" r="6.2"/><path d="M15.2 15.2 20.5 20.5"/>' +
    "</svg>",
  blad:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M4.5 19.5C4.5 10.5 10 4.5 20 4c-.5 10-6.5 15.5-15.5 15.5z" fill="currentColor" fill-opacity="0.25"/>' +
      '<path d="M4.5 19.5 14 10M9 15h4M11.5 12.5V9"/>' +
    "</svg>",
  kroon:
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
      '<path d="M3 7.5l4.5 4L12 4l4.5 7.5 4.5-4-1.8 10H4.8z"/>' +
      '<rect x="4.8" y="18.5" width="14.4" height="2.2" rx="0.6"/>' +
    "</svg>",
  slot:
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
      '<path d="M7 10V7.5a5 5 0 0 1 10 0V10h-2.2V7.5a2.8 2.8 0 0 0-5.6 0V10z"/>' +
      '<rect x="5" y="10" width="14" height="11" rx="2"/>' +
    "</svg>",
  pinguin:
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
      '<ellipse cx="12" cy="13" rx="6.2" ry="7.4"/>' +
      '<ellipse cx="12" cy="15.2" rx="3.4" ry="4.2" fill="#0d1511"/>' +
      '<circle cx="14.2" cy="8.2" r="1" fill="#0d1511"/>' +
      '<path d="M16.2 8.6 21 10.2 16.2 11.6z" fill="#f5b700"/>' +
      '<ellipse cx="10.2" cy="20.2" rx="2.2" ry="1.1" fill="#f5b700"/>' +
    "</svg>"
};

// De geheime badge hoort er pas bij als die vrij is. Daarvoor blijft de teller op /6.
function zichtbareBadges() {
  if (eiStaat.badge) {
    return badges.concat([geheimeBadge]);
  }
  return badges;
}


// =====================================================
// 4. OPGESLAGEN GEGEVENS
// =====================================================
// localStorage is een klein geheugen in de browser.
// Daardoor blijven je punten bewaard als je de pagina ververst.
// "antwoorden" onthoudt per vraag of je hem goed had.
// De sleutel is "dier-id:nummer", bijvoorbeeld "ijsbeer:0" = eerste vraag over de ijsbeer.
const OPSLAG = "wildlifequiz-v2";
let opgeslagen = JSON.parse(localStorage.getItem(OPSLAG) || "{}");
let punten = opgeslagen.punten || 0;
let antwoorden = opgeslagen.antwoorden || {};

function opslaan() {
  // Zelfde sleutel op GitHub Pages: de browser bewaart dit voor deze site (https).
  localStorage.setItem(OPSLAG, JSON.stringify({ punten: punten, antwoorden: antwoorden }));
}

// Paaseieren staan apart. wildlifequiz-v2 blijft { punten, antwoorden }.
const EI_SLEUTEL = "wildlifequiz-eieren";
const EI_SOORTEN = ["parade", "glijden", "poollicht", "wildlife", "reeks", "nacht", "console", "bezoeker"];
const EI_VOOR_BADGE = 3;
let reeks = 0;
let badgeOnderweg = null;

function leesEieren() {
  try {
    const ruw = JSON.parse(localStorage.getItem(EI_SLEUTEL) || "{}");
    const gevonden = [];
    const lijst = ruw && Array.isArray(ruw.gevonden) ? ruw.gevonden : [];
    lijst.forEach(function (id) {
      if (EI_SOORTEN.indexOf(id) !== -1 && gevonden.indexOf(id) === -1) {
        gevonden.push(id);
      }
    });
    return { gevonden: gevonden, badge: !!(ruw && ruw.badge) };
  } catch (e) {
    return { gevonden: [], badge: false };
  }
}

function bewaarEieren() {
  localStorage.setItem(EI_SLEUTEL, JSON.stringify({
    gevonden: eiStaat.gevonden,
    badge: eiStaat.badge
  }));
}

let eiStaat = leesEieren();
if (!eiStaat.badge && eiStaat.gevonden.length >= EI_VOOR_BADGE) {
  eiStaat.badge = true;
  bewaarEieren();
}

// Alleen als er bij het openen al voortgang stond. Eén keer, tot de pagina opnieuw laadt.
const terugkomer = punten > 0 || Object.keys(antwoorden).length > 0;
let welkomGetoond = false;
let welkomTimer = null;

function heeftVoortgang() {
  return punten > 0 || Object.keys(antwoorden).length > 0;
}

function aantalTekst(n, enkel, meer) {
  return n + " " + (n === 1 ? enkel : meer);
}

function verbergWelkom() {
  const el = document.getElementById("welkom");
  if (!el) {
    return;
  }
  el.classList.remove("zichtbaar");
  el.setAttribute("aria-hidden", "true");
  if (welkomTimer) {
    clearTimeout(welkomTimer);
    welkomTimer = null;
  }
}

function toonWelkom() {
  if (welkomGetoond || !terugkomer || !heeftVoortgang() || !document.body.classList.contains("start")) {
    return;
  }
  welkomGetoond = true;
  const el = document.getElementById("welkom");
  const badgesBehaald = zichtbareBadges().filter(isVerdiend).length;
  el.textContent = "";
  const titel = document.createElement("strong");
  titel.textContent = "Welkom terug!";
  el.appendChild(titel);
  el.append(" Je hebt " + aantalTekst(punten, "punt", "punten") + " en " + aantalTekst(badgesBehaald, "badge", "badges") + ".");
  el.setAttribute("aria-hidden", "false");
  requestAnimationFrame(function () {
    el.classList.add("zichtbaar");
  });
  welkomTimer = setTimeout(verbergWelkom, 4500);
}


// =====================================================
// 5. HULPFUNCTIES
// =====================================================

// Maakt een foto met de <img>-tag.
// "src" zegt waar de foto staat, "alt" is een korte beschrijving
// (voor schermlezers, of als de foto niet getoond kan worden).
// Laadt de foto niet? Dan tonen we de emoji als reserve.
function maakFoto(src, beschrijving, klasse, reserveEmoji) {
  const foto = document.createElement("img");
  foto.src = src;
  foto.alt = beschrijving;
  foto.className = klasse;
  foto.onerror = function () {
    const reserve = document.createElement("span");
    reserve.className = "emoji " + klasse;
    reserve.textContent = reserveEmoji;
    foto.replaceWith(reserve);
  };
  return foto;
}

function zoekGebied(id) {
  return gebieden.find(function (g) { return g.id === id; });
}

function zoekDier(id) {
  return dieren.find(function (d) { return d.id === id; });
}

// Alle dieren van één gebied
function dierenVan(gebiedId) {
  return dieren.filter(function (dier) { return dier.gebied === gebiedId; });
}

// Totaal aantal vragen op de hele site
function aantalVragen() {
  let totaal = 0;
  dieren.forEach(function (dier) { totaal = totaal + dier.vragen.length; });
  return totaal;
}

// Is een bepaalde vraag al beantwoord?
function isBeantwoord(dier, nummer) {
  return (dier.id + ":" + nummer) in antwoorden;
}

// Hoeveel vragen van dit dier zijn al beantwoord?
function vragenGedaan(dier) {
  return dier.vragen.filter(function (v, nummer) { return isBeantwoord(dier, nummer); }).length;
}

// Een dier is "klaar" als alle drie de vragen beantwoord zijn
function dierKlaar(dier) {
  return vragenGedaan(dier) === dier.vragen.length;
}

// Werkt de punten en voortgangsbalk bovenaan bij
function toonStatus() {
  const gedaan = Object.keys(antwoorden).length;
  const totaal = aantalVragen();
  document.getElementById("punten").textContent = punten;
  document.getElementById("beantwoord").textContent = gedaan;
  document.getElementById("totaal").textContent = totaal;
  document.getElementById("voortgang-vulling").style.width = (gedaan / totaal * 100) + "%";
}

// Laat één weergave zien en verbergt de andere
function toonWeergave(id) {
  ["overzicht", "gebied-pagina", "dier-pagina", "minigame"].forEach(function (w) {
    document.getElementById(w).classList.toggle("verborgen", w !== id);
  });
  // Alleen op het startscherm krijgt <body> de klasse "start".
  // In style.css zorgt die klasse voor de pinguïnfoto op de achtergrond.
  document.body.classList.toggle("start", id === "overzicht");
  document.body.classList.toggle("minigame", id === "minigame");
  document.documentElement.classList.toggle("minigame-open", id === "minigame");
  if (id !== "overzicht") {
    verbergWelkom();
  }
  if (id !== "minigame") {
    mgPauzeerRoute();
  }
}


// =====================================================
// 6. NAVIGATIE MET DE HASH
// =====================================================
// Deze functie leest de hash (het stuk na #) en kiest de juiste weergave.
// "#dier/ijsbeer".split("/") geeft ["#dier", "ijsbeer"].
function navigeer() {
  const delen = location.hash.split("/");
  const soort = delen[0];
  const id = delen[1];

  if (soort === "#minigame") {
    toonMinigame();
  } else if (soort === "#gebied" && zoekGebied(id)) {
    toonGebied(id);
  } else if (soort === "#dier" && zoekDier(id)) {
    toonDier(id);
  } else {
    toonOverzicht();
  }
  toonStatus();
  window.scrollTo(0, 0);
}

// Elke keer als de hash verandert (door een klik of de terugknop van de browser)
window.addEventListener("hashchange", navigeer);


// =====================================================
// 7. OVERZICHT: alle gebieden
// =====================================================
function toonOverzicht() {
  toonWeergave("overzicht");
  const raster = document.getElementById("gebieden");
  raster.innerHTML = "";

  gebieden.forEach(function (gebied) {
    const lijst = dierenVan(gebied.id);
    const klaar = lijst.filter(dierKlaar).length;

    // Een <a> is een link. href="#gebied/..." verandert de hash als je klikt.
    const kaart = document.createElement("a");
    kaart.className = "gebied-kaart";
    kaart.href = "#gebied/" + gebied.id;
    if (klaar === lijst.length) {
      kaart.classList.add("voltooid");
    }
    kaart.appendChild(maakFoto(gebied.foto, "Foto bij het gebied " + gebied.naam, "gebied-foto", "🌍"));

    const info = document.createElement("div");
    info.className = "gebied-info";
    info.innerHTML =
      "<h3>" + gebied.naam + "</h3>" +
      "<p>" + gebied.tekst + "</p>" +
      '<div class="gebied-voortgang">' +
        '<div class="mini-balk"><div style="width:' + (klaar / lijst.length * 100) + '%"></div></div>' +
        '<span class="teller">' + klaar + "/" + lijst.length + "</span>" +
      "</div>";
    kaart.appendChild(info);
    raster.appendChild(kaart);
  });

  toonDierIndex();
  toonWelkom();
}


// ----- Snelkoppelingen naar ALLE dieren (onderaan het startscherm) -----
// We maken een kopie van de lijst (met slice) en sorteren die op naam.
// localeCompare vergelijkt woorden zoals in een woordenboek, ook met é of ë.
function toonDierIndex() {
  const vak = document.getElementById("dier-index");
  vak.innerHTML = "";
  const opAlfabet = dieren.slice().sort(function (a, b) {
    return a.naam.localeCompare(b.naam, "nl");
  });

  opAlfabet.forEach(function (dier) {
    const link = document.createElement("a");
    link.className = "index-dier";
    link.href = "#dier/" + dier.id;
    link.title = dier.naam;   // volledige naam als je de muis erop houdt
    // In data-zoek zetten we alle tekst waarop je kunt zoeken (naam + gebied).
    link.dataset.zoek = zoekTekst(dier.naam + " " + zoekGebied(dier.gebied).naam);

    const foto = maakFoto(dier.foto, dier.naam, "index-foto", dier.emoji);
    foto.loading = "lazy";   // laad de foto pas als hij in beeld komt
    link.appendChild(foto);

    const gedaan = vragenGedaan(dier);
    let status = gedaan + "/3";
    if (dierKlaar(dier)) {
      link.classList.add("klaar");
      status = "✓";
    }
    link.insertAdjacentHTML("beforeend",
      '<span class="index-naam">' + dier.naam + "</span>" +
      '<span class="index-status">' + status + "</span>");
    vak.appendChild(link);
  });

  document.getElementById("aantal-dieren").textContent = dieren.length + " dieren";
  filterDieren();
}

// Maakt tekst makkelijk vergelijkbaar: alles in kleine letters en zonder
// accenten. Dan vindt "pinguin" ook "Keizerspinguïn" en "australie" ook "Australië".
// normalize("NFD") haalt ï uit elkaar in i + een los puntjes-teken,
// en replace gooit die losse tekens weg.
function zoekTekst(tekst) {
  return tekst.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Verbergt alle dieren waarvan de naam (of het gebied) niet past bij de zoektekst.
function filterDieren() {
  const tekst = zoekTekst(document.getElementById("zoek-dier").value.trim());
  let zichtbaar = 0;
  document.querySelectorAll(".index-dier").forEach(function (link) {
    const past = link.dataset.zoek.includes(tekst);
    link.classList.toggle("verborgen", !past);
    if (past) zichtbaar++;
  });
  document.getElementById("geen-dier").classList.toggle("verborgen", zichtbaar > 0);
}

// Elke keer dat je een letter typt, wordt er opnieuw gefilterd.
document.getElementById("zoek-dier").addEventListener("input", filterDieren);


// =====================================================
// 8. GEBIEDSPAGINA: alle dieren van één gebied
// =====================================================
function toonGebied(gebiedId) {
  toonWeergave("gebied-pagina");
  const gebied = zoekGebied(gebiedId);
  const lijst = dierenVan(gebiedId);

  document.getElementById("gebied-titel").textContent = gebied.naam;
  document.getElementById("gebied-tekst").textContent = gebied.tekst;
  document.getElementById("gebied-teller").textContent =
    lijst.filter(dierKlaar).length + " van " + lijst.length + " dieren voltooid";

  const raster = document.getElementById("dieren");
  raster.innerHTML = "";

  lijst.forEach(function (dier) {
    const kaart = document.createElement("a");
    kaart.className = "kaart";
    kaart.href = "#dier/" + dier.id;
    kaart.appendChild(maakFoto(dier.foto, "Foto van een " + dier.naam.toLowerCase(), "kaart-foto", dier.emoji));

    const naam = document.createElement("span");
    naam.className = "naam";
    naam.textContent = dier.naam;
    kaart.appendChild(naam);

    // Label rechtsboven: hoeveel vragen al gedaan zijn
    const status = document.createElement("span");
    status.className = "status";
    if (dierKlaar(dier)) {
      kaart.classList.add("klaar");
      status.classList.add("goed");
      status.textContent = "Voltooid";
    } else {
      status.textContent = vragenGedaan(dier) + "/" + dier.vragen.length;
    }
    kaart.appendChild(status);
    raster.appendChild(kaart);
  });
}


// =====================================================
// 9. DIERPAGINA: foto's, weetjes en drie vragen
// =====================================================
function toonDier(dierId) {
  toonWeergave("dier-pagina");
  const dier = zoekDier(dierId);
  const gebied = zoekGebied(dier.gebied);

  // Terugknop naar het gebied
  const terug = document.getElementById("terug-gebied");
  terug.href = "#gebied/" + gebied.id;
  terug.textContent = "← " + gebied.naam;

  // Grote foto van het volwassen dier
  const groot = document.getElementById("dier-foto");
  groot.innerHTML = "";
  groot.appendChild(maakFoto(dier.foto, "Foto van een volwassen " + dier.naam.toLowerCase(), "dier-foto-img", dier.emoji));
  document.getElementById("dier-gebied").textContent = gebied.naam;
  document.getElementById("dier-naam").textContent = dier.naam;

  // Foto van het jong
  const jong = document.getElementById("jong-foto");
  jong.innerHTML = "";
  jong.appendChild(maakFoto(dier.jongFoto, "Foto van een jonge " + dier.naam.toLowerCase(), "jong-foto-img", dier.emoji));
  document.getElementById("jong-naam").textContent = "Jong: " + dier.jongNaam;

  // Weetjes als lijst
  const lijst = document.getElementById("weetjes");
  lijst.innerHTML = "";
  dier.weetjes.forEach(function (tekst) {
    const li = document.createElement("li");
    li.textContent = tekst;
    lijst.appendChild(li);
  });

  // Vorige en volgende dier in hetzelfde gebied
  const buren = dierenVan(gebied.id);
  const plek = buren.indexOf(dier);
  const vorige = buren[(plek - 1 + buren.length) % buren.length];
  const volgende = buren[(plek + 1) % buren.length];
  document.getElementById("vorige-dier").href = "#dier/" + vorige.id;
  document.getElementById("vorige-dier").textContent = "← " + vorige.naam;
  document.getElementById("volgende-dier").href = "#dier/" + volgende.id;
  document.getElementById("volgende-dier").textContent = volgende.naam + " →";

  toonVragen(dier);
}

// Tekent de drie vraagkaarten van een dier
function toonVragen(dier) {
  const vak = document.getElementById("vragen");
  vak.innerHTML = "";
  document.getElementById("vragen-teller").textContent =
    vragenGedaan(dier) + " van " + dier.vragen.length + " beantwoord";

  dier.vragen.forEach(function (v, nummer) {
    const kaart = document.createElement("div");
    kaart.className = "vraag-kaart";
    kaart.innerHTML =
      '<p class="vraag-label">Vraag ' + (nummer + 1) + "</p>" +
      '<p class="vraag-tekst">' + v.vraag + "</p>";

    const knoppen = document.createElement("div");
    knoppen.className = "antwoorden";
    const letters = ["A", "B", "C", "D"];
    v.antwoorden.forEach(function (tekst, keuze) {
      const knop = document.createElement("button");
      knop.className = "antwoord";
      knop.innerHTML = '<span class="letter">' + letters[keuze] + "</span>";
      knop.append(tekst);
      knop.addEventListener("click", function () {
        kiesAntwoord(dier, nummer, keuze);
      });
      knoppen.appendChild(knop);
    });
    kaart.appendChild(knoppen);

    const uitslag = document.createElement("div");
    uitslag.className = "uitslag";
    kaart.appendChild(uitslag);

    // Al eerder beantwoord? Dan laten we de uitslag meteen zien
    if (isBeantwoord(dier, nummer)) {
      toonUitslag(kaart, v, antwoorden[dier.id + ":" + nummer]);
    }
    vak.appendChild(kaart);
  });
}

// Kleurt de knoppen en toont de uitleg.
// gekozen = het nummer van het gekozen antwoord
function toonUitslag(kaart, v, gekozen) {
  const knoppen = kaart.querySelectorAll(".antwoord");
  knoppen.forEach(function (knop) { knop.disabled = true; });
  knoppen[v.goed].classList.add("goed");

  const uitslag = kaart.querySelector(".uitslag");
  if (gekozen === v.goed) {
    kaart.classList.add("is-goed");
    uitslag.innerHTML = '<strong class="goed">Correct! +1</strong>' + v.uitleg;
  } else {
    knoppen[gekozen].classList.add("fout");
    kaart.classList.add("is-fout");
    uitslag.innerHTML = '<strong class="fout">Helaas, het juiste antwoord is: ' +
      v.antwoorden[v.goed] + "</strong>" + v.uitleg;
  }
}


// =====================================================
// 10. ANTWOORD CONTROLEREN
// =====================================================
function kiesAntwoord(dier, nummer, keuze) {
  // Elke vraag mag maar één keer: al beantwoord? Dan doen we niets.
  if (isBeantwoord(dier, nummer)) {
    return;
  }
  const v = dier.vragen[nummer];
  antwoorden[dier.id + ":" + nummer] = keuze;
  if (keuze === v.goed) {
    punten = punten + 1;
    reeks = reeks + 1;
  } else {
    reeks = 0;
  }
  opslaan();

  const kaart = document.querySelectorAll(".vraag-kaart")[nummer];
  toonUitslag(kaart, v, keuze);
  kaart.classList.add("vers");
  if (keuze === v.goed) {
    confettiBij(kaart.querySelectorAll(".antwoord")[keuze]);
    const getal = document.getElementById("punten");
    getal.classList.remove("punten-puls");
    void getal.offsetWidth;
    getal.classList.add("punten-puls");
    if (reeks >= 5 && reeks % 5 === 0) {
      toonSignaal(reeks + " op rij!");
      vindEi("reeks", { teken: false });
    }
  }
  toonReeks();
  document.getElementById("vragen-teller").textContent =
    vragenGedaan(dier) + " van " + dier.vragen.length + " beantwoord";
  toonStatus();
  toonBadges(true); // true = nieuwe badges krijgen een animatie
}


// =====================================================
// 11. ACHIEVEMENTS TONEN
// =====================================================
function isVerdiend(badge) {
  if (!badge) {
    return false;
  }
  if (badge.geheim) {
    return !!eiStaat.badge;
  }
  if (badge.alles) {
    return Object.keys(antwoorden).length === aantalVragen();
  }
  return punten >= badge.punten;
}

// Namen van de badges die al als goud op het scherm staan.
// Zo weten we welke badges nieuw zijn en nog geanimeerd moeten worden.
let getoondeBadges = [];

// Tekent alle badges. Met animeren = true krijgen nieuwe badges
// eerst een animatie; zonder animatie worden ze meteen goud.
function toonBadges(animeren) {
  const rij = document.getElementById("badges");
  rij.innerHTML = "";

  zichtbareBadges().forEach(function (badge) {
    const vak = document.createElement("div");
    vak.className = "badge" + (badge.geheim ? " geheim" : "");
    vak.dataset.naam = badge.naam; // zodat we dit vak later terugvinden

    const eis = badge.geheim
      ? "Drie sporen"
      : (badge.alles ? "Alle vragen" : badge.punten + (badge.punten === 1 ? " punt" : " punten"));
    const stempel = badge.stempel
      ? '<div class="badge-stempel">' + badge.stempel + "</div>"
      : "";
    vak.innerHTML =
      '<div class="medaille">' + iconen[badge.icoon] +
        '<span class="slotje">' + iconen.slot + "</span>" +
      "</div>" +
      '<div class="badge-naam">' + badge.naam + "</div>" +
      stempel +
      '<div class="badge-eis">' + eis + "</div>";
    rij.appendChild(vak);

    if (isVerdiend(badge)) {
      const onderweg = badgeOnderweg === badge.naam;
      const alInRij = wachtrij.some(function (b) { return b.naam === badge.naam; });
      if (onderweg || alInRij) {
        // De animatie loopt al. Niet nog een keer in de rij zetten.
      } else if (getoondeBadges.includes(badge.naam) || !animeren) {
        maakGoud(badge);           // was al verdiend: meteen goud
      } else {
        wachtrij.push(badge);      // nieuw: in de wachtrij voor de animatie
      }
    }
  });

  // Is er een badge weggevallen (bijvoorbeeld na een reset)? Dan vergeten we hem.
  getoondeBadges = getoondeBadges.filter(function (naam) {
    return isVerdiend(zichtbareBadges().find(function (b) { return b.naam === naam; }));
  });
  toonBadgeTeller();
  startVolgendeAnimatie();
}

// Maakt het vak van een badge goud en onthoudt dat
function maakGoud(badge) {
  const vak = document.querySelector('.badge[data-naam="' + badge.naam + '"]');
  if (vak) {
    vak.classList.add("verdiend");
    vak.querySelector(".badge-eis").textContent = "Ontgrendeld";
  }
  if (!getoondeBadges.includes(badge.naam)) {
    getoondeBadges.push(badge.naam);
  }
  toonBadgeTeller();
}

// Het tellertje in de bovenbalk, bijvoorbeeld "3/6"
function toonBadgeTeller() {
  document.getElementById("badge-teller").textContent = getoondeBadges.length + "/" + zichtbareBadges().length;
}


// =====================================================
// 12. BADGE-ANIMATIE
// =====================================================
// Hoe werkt de animatie? In drie stappen:
//
// STAP 1 - Verschijnen (CSS @keyframes "badgeVerschijnt" in style.css)
//   Een grote medaille staat midden in beeld. Hij begint klein
//   (transform: scale(0.2)) en groeit naar normale grootte (scale(1)).
//   De medaille zelf draait één keer rond. De tekst eronder blijft stil,
//   zodat "Kwart gehaald!" leesbaar is.
//
// STAP 2 - Wegvliegen (CSS transition + JavaScript)
//   We meten met getBoundingClientRect() waar de medaille nu staat
//   en waar hij naartoe moet (het badge-vak, of het tellertje bovenin
//   als het badge-vak niet in beeld is). Het verschil is de afstand.
//   Dan geven we hem transform: translate(x, y) scale(klein).
//   translate schuift iets op, scale maakt het kleiner of groter.
//   Door de transition beweegt dat vloeiend in plaats van in één keer.
//   (Deze truc heet FLIP: First, Last, Invert, Play.)
//
// STAP 3 - Landen
//   Als de beweging klaar is ("transitionend"), halen we de grote
//   medaille weg en maken we het echte badge-vak goud.
//
// Meerdere badges tegelijk? Die staan in een wachtrij en komen
// één voor één aan de beurt.

const wachtrij = [];        // badges die nog op hun animatie wachten
let animatieBezig = false;  // speelt er nu een animatie?

// Wil de gebruiker minder beweging? (instelling van het besturingssysteem)
function minderBeweging() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function startVolgendeAnimatie() {
  if (animatieBezig || wachtrij.length === 0) {
    return;
  }
  animatieBezig = true;
  speelAnimatie(wachtrij.shift());
}

function speelAnimatie(badge) {
  // Donkere achtergrond
  const scherm = document.createElement("div");
  scherm.className = "badge-scherm";
  document.body.appendChild(scherm);

  // De grote medaille met tekst eronder.
  // Bij kwart, helft en driekwart staat die mijlpaal groot in beeld.
  const groot = document.createElement("div");
  groot.className = "badge-groot";
  groot.setAttribute("role", "status");
  groot.setAttribute("aria-live", "polite");
  const kop = badge.mijlpaal
    ? badge.naam + "<strong>" + badge.mijlpaal + "</strong>"
    : "Achievement ontgrendeld<strong>" + badge.naam + "</strong>";
  groot.innerHTML =
    '<div class="medaille-groot"><div class="medaille-draai">' + iconen[badge.icoon] + "</div></div>" +
    '<div class="badge-groot-tekst">' + kop + "</div>";
  document.body.appendChild(groot);

  // Klaar met de animatie: opruimen en de volgende starten
  badgeOnderweg = badge.naam;
  let afgerond = false;

  function klaar() {
    if (afgerond) {
      return;
    }
    afgerond = true;
    clearTimeout(nood);
    badgeOnderweg = null;
    groot.remove();
    scherm.remove();
    maakGoud(badge);
    const vak = document.querySelector('.badge[data-naam="' + badge.naam + '"]');
    if (vak) {
      vak.classList.add("net-geland"); // korte gloed bij het landen
    }
    animatieBezig = false;
    startVolgendeAnimatie();
  }

  // Valt de animatie stil, dan landt de badge alsnog. Geen tweede feest.
  const nood = setTimeout(klaar, 4000);

  // Minder beweging: alleen rustig in- en uitfaden
  if (minderBeweging()) {
    groot.classList.add("rustig");
    setTimeout(function () {
      groot.classList.add("weg");
      scherm.classList.add("weg");
    }, 1200);
    setTimeout(klaar, 1700);
    return;
  }

  // STAP 1: de CSS-animatie "badgeVerschijnt" start vanzelf (duurt 1,3 s).
  // Als die klaar is, gaat STAP 2 beginnen.
  groot.addEventListener("animationend", function (e) {
    if (e.target !== groot) {
      return;
    }
    const medaille = groot.querySelector(".medaille-groot");
    const start = medaille.getBoundingClientRect();
    const doel = zoekDoel(badge).getBoundingClientRect();

    // Afstand tussen het midden van de medaille en het midden van het doel
    const x = (doel.left + doel.width / 2) - (start.left + start.width / 2);
    const y = (doel.top + doel.height / 2) - (start.top + start.height / 2);
    // Hoeveel kleiner de medaille moet worden
    const schaal = doel.width / start.width;

    // STAP 2: met een transition vliegt de medaille naar het doel
    groot.classList.add("vliegt");
    scherm.classList.add("weg");
    medaille.style.transform = "translate(" + x + "px, " + y + "px) scale(" + schaal + ")";

    // STAP 3: als de beweging klaar is, landen we
    medaille.addEventListener("transitionend", klaar, { once: true });
  }, { once: true });
}

// Waar moet de medaille naartoe?
// Is het badge-vak helemaal in beeld, dan daarheen. Anders naar het tellertje bovenin.
function zoekDoel(badge) {
  const vak = document.querySelector('.badge[data-naam="' + badge.naam + '"] .medaille');
  if (vak) {
    const r = vak.getBoundingClientRect();
    const balkHoogte = document.querySelector(".bovenbalk").offsetHeight;
    if (r.top >= balkHoogte && r.bottom <= window.innerHeight) {
      return vak;
    }
  }
  return document.querySelector("#badge-indicator .mini-medaille");
}


// =====================================================
// 13. RESET
// =====================================================
document.getElementById("opnieuw").addEventListener("click", function () {
  if (confirm("Weet je zeker dat je al je voortgang wilt wissen?")) {
    punten = 0;
    antwoorden = {};
    reeks = 0;
    verbergWelkom();
    opslaan();
    toonReeks();
    navigeer();
    toonBadges(false);
  }
});


// =====================================================
// 14. PINGUÏNPARADE
// =====================================================
// Pijl omhoog, omhoog, omlaag, omlaag, links, links, rechts, rechts,
// en daarna de letters p-i-n-g-u-i-n. Hoofdletters maken niet uit.
const PARADE_CODE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowLeft",
  "ArrowRight", "ArrowRight",
  "p", "i", "n", "g", "u", "i", "n"
];
let paradeIndex = 0;
let signaalTimer = null;

const SVG_PARADE =
  '<svg viewBox="0 0 78 64" aria-hidden="true">' +
    '<ellipse cx="30" cy="40" rx="18" ry="16" fill="#f3f6f4"/>' +
    '<ellipse cx="30" cy="42" rx="10" ry="11" fill="#17211c"/>' +
    '<circle cx="46" cy="26" r="11" fill="#f3f6f4"/>' +
    '<circle cx="50" cy="24" r="1.5" fill="#121a16"/>' +
    '<path d="M56 25.2 70 29 56 32.2z" fill="#f5b700"/>' +
    '<path d="M20 36c-8 2-12 8-10 12 4-2 10-2 14-6z" fill="#d5ddd8"/>' +
    '<ellipse cx="34" cy="57" rx="8" ry="2.6" fill="#f5b700"/>' +
    '<ellipse cx="24" cy="56.2" rx="6" ry="2.2" fill="#e2a400"/>' +
  "</svg>";

function toonSignaal(tekst) {
  const el = document.getElementById("signaal");
  if (!el) {
    return;
  }
  el.textContent = tekst;
  el.classList.add("zichtbaar");
  if (signaalTimer) {
    clearTimeout(signaalTimer);
  }
  signaalTimer = setTimeout(function () {
    el.classList.remove("zichtbaar");
  }, 3200);
}

function startParade() {
  if (document.querySelector(".parade")) {
    return;
  }
  toonSignaal("De kolonie trekt voorbij.");
  const laag = document.createElement("div");
  const rustig = minderBeweging();
  laag.className = "parade" + (rustig ? " rustig" : "");
  laag.setAttribute("aria-hidden", "true");
  const aantal = rustig ? 6 : 11;
  for (let i = 0; i < aantal; i++) {
    const vogel = document.createElement("span");
    vogel.className = "parade-vogel";
    vogel.innerHTML = SVG_PARADE;
    if (!rustig) {
      vogel.style.animationDuration = (7.2 + (i % 3) * 0.25) + "s";
      vogel.style.animationDelay = (i * 0.42) + "s";
      vogel.style.bottom = (12 + (i % 4) * 14) + "px";
      vogel.style.setProperty("--schaal", String(0.78 + (i % 4) * 0.08));
    }
    laag.appendChild(vogel);
  }
  document.body.appendChild(laag);
  setTimeout(function () {
    laag.remove();
  }, rustig ? 2200 : 12500);
}

function paradeToets(e) {
  if (!e || !e.key) {
    return "";
  }
  return e.key.length === 1 ? e.key.toLowerCase() : e.key;
}

function inZoekvak(el) {
  return !!(el && el.id === "zoek-dier");
}

// Luistert op window, zodat de code ook werkt als de focus op de pagina zelf staat.
function luisterParadeCode() {
  window.addEventListener("keydown", function (e) {
    if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) {
      return;
    }
    const toets = paradeToets(e);
    if (!toets) {
      return;
    }
    const match = toets === PARADE_CODE[paradeIndex];
    // In het zoekvak alleen meetellen als de code daardoor blijft kloppen.
    // "pinguin" zoeken zonder de pijlen ervoor start de parade dus niet.
    if (inZoekvak(e.target) && !match) {
      return;
    }
    if (match) {
      // Pas vanaf de tweede pijl tegenhouden, zodat gewoon omhoog scrollen blijft werken.
      if (paradeIndex > 0 && toets.indexOf("Arrow") === 0) {
        e.preventDefault();
      }
      paradeIndex = paradeIndex + 1;
      if (paradeIndex === PARADE_CODE.length) {
        paradeIndex = 0;
        startParade();
      }
    } else {
      paradeIndex = toets === PARADE_CODE[0] ? 1 : 0;
    }
  });
}


// =====================================================
// 15. IJSKLIM
// Eindeloos omhoog. Schotsen, vissen en meeuwen komen uit een vaste voorraad.
// De stap is vast (1/60 s), zodat 60 Hz en 120 Hz even snel lopen.
// =====================================================
const MG_SLEUTEL = "wildlifequiz-minigame";
const MG_STAP = 1 / 60;
const MG_LOG_W = 390;
const MG_LOG_H = 640;
const MG_G = -3200;
const MG_SPRONG = 1040;
const MG_VEER = 1500;
const MG_LOOP = 290;
const MG_MEDAILLE = 100;
const MG_VIS = 25;

const mg = {
  raf: 0,
  acc: 0,
  laatste: 0,
  bezig: false,
  gepauzeerd: false,
  afgelopen: false,
  score: 0,
  heel: -1,
  visPunten: 0,
  maxY: 0,
  record: 0,
  ereteken: false,
  reden: "val",
  x: MG_LOG_W / 2,
  y: 30,
  vx: 0,
  vy: 0,
  cam: 0,
  volgendeY: 40,
  gemaakt: 0,
  w: 0,
  h: 0,
  rustig: false,
  toetsLinks: false,
  toetsRechts: false,
  knopLinks: false,
  knopRechts: false,
  schermLinks: false,
  schermRechts: false,
  stuurVast: null,
  kantel: 0,
  kantelAan: false,
  kantelGezien: false,
  kantelGevraagd: false,
  schotsen: [],
  vissen: [],
  meeuwen: []
};

const mgTekenen = [];

function mgLees() {
  try {
    const ruw = JSON.parse(localStorage.getItem(MG_SLEUTEL) || "{}");
    const record = Math.max(0, Math.min(999999, Math.floor(Number(ruw && ruw.record) || 0)));
    return { record: record, ereteken: !!(ruw && ruw.ereteken) };
  } catch (e) {
    return { record: 0, ereteken: false };
  }
}

function mgBewaar() {
  mg.record = Math.max(mg.record, Math.floor(mg.score));
  localStorage.setItem(MG_SLEUTEL, JSON.stringify({
    record: mg.record,
    ereteken: mg.ereteken
  }));
}

function mgMaak(lijst, n, extra) {
  lijst.length = 0;
  for (let i = 0; i < n; i++) {
    const stuk = { aan: false, x: 0, y: 0, w: 78, vx: 0, soort: "vast", stuk: 0 };
    if (extra) extra(stuk);
    lijst.push(stuk);
  }
}

function mgPool() {
  mgMaak(mg.schotsen, 22);
  mgMaak(mg.vissen, 10);
  mgMaak(mg.meeuwen, 4);
}

function mgVrij(lijst) {
  for (let i = 0; i < lijst.length; i++) {
    if (!lijst[i].aan) return lijst[i];
  }
  return null;
}

function mgMoeilijk() {
  return Math.min(1, mg.maxY / 7200);
}

function mgNieuwSchots() {
  const slot = mgVrij(mg.schotsen);
  if (!slot) return false;
  const m = mgMoeilijk();
  const vroeg = mg.gemaakt < 7;
  const gat = vroeg ? 58 : (62 + 86 * m);
  let soort = "vast";
  if (!vroeg) {
    const r = Math.random();
    if (r < 0.06 + 0.08 * m) soort = "veer";
    else if (r < 0.16 + 0.34 * m) soort = "beweegt";
    else if (r < 0.24 + 0.5 * m) soort = "breek";
  }
  slot.aan = true;
  slot.w = vroeg ? 96 : 78;
  slot.x = 18 + Math.random() * (MG_LOG_W - slot.w - 36);
  slot.y = mg.volgendeY;
  slot.soort = soort;
  slot.vx = soort === "beweegt" ? ((Math.random() < 0.5 ? -1 : 1) * (42 + 48 * m)) : 0;
  slot.stuk = 0;
  mg.volgendeY += Math.min(gat, 150);
  mg.gemaakt += 1;

  if (!vroeg && Math.random() < 0.2) {
    const vis = mgVrij(mg.vissen);
    if (vis) {
      vis.aan = true;
      vis.x = slot.x + slot.w * 0.5;
      vis.y = slot.y + 42;
    }
  }
  if (m > 0.22 && mg.gemaakt % 8 === 0) {
    const meeuw = mgVrij(mg.meeuwen);
    if (meeuw) {
      meeuw.aan = true;
      meeuw.y = slot.y + Math.min(gat, 150) * 0.45;
      meeuw.x = slot.x > MG_LOG_W / 2 ? 36 : MG_LOG_W - 70;
      meeuw.vx = (slot.x > MG_LOG_W / 2 ? 1 : -1) * (60 + 50 * m);
    }
  }
  return true;
}

function mgVul() {
  const doel = mg.cam + MG_LOG_H + 180;
  let teller = 0;
  while (mg.volgendeY < doel && teller < 30) {
    if (!mgNieuwSchots()) break;
    teller += 1;
  }
}

function mgRuim(lijst, marge) {
  for (let i = 0; i < lijst.length; i++) {
    if (lijst[i].aan && lijst[i].y < mg.cam - marge) lijst[i].aan = false;
  }
}

function mgDir() {
  if (mg.stuurVast === -1 || mg.stuurVast === 1 || mg.stuurVast === 0) return mg.stuurVast;
  const links = mg.toetsLinks || mg.knopLinks || mg.schermLinks;
  const rechts = mg.toetsRechts || mg.knopRechts || mg.schermRechts;
  if (links && !rechts) return -1;
  if (rechts && !links) return 1;
  if (mg.kantelAan && mg.kantelGezien) return mg.kantel;
  return 0;
}

function mgOverlapX(cx, half, links, rechts) {
  function binnen(x) {
    return x + half > links && x - half < rechts;
  }
  return binnen(cx) || binnen(cx - MG_LOG_W) || binnen(cx + MG_LOG_W);
}

function mgStap(dt) {
  if (!mg.bezig || mg.gepauzeerd) return;
  const dir = mgDir();
  mg.vx = dir * MG_LOOP;
  mg.x += mg.vx * dt;
  if (mg.x < 0) mg.x += MG_LOG_W;
  if (mg.x > MG_LOG_W) mg.x -= MG_LOG_W;

  const vorigeY = mg.y;
  mg.vy += MG_G * dt;
  if (mg.vy < -1400) mg.vy = -1400;
  mg.y += mg.vy * dt;

  for (let i = 0; i < mg.schotsen.length; i++) {
    const schots = mg.schotsen[i];
    if (!schots.aan) continue;
    if (schots.vx) {
      schots.x += schots.vx * dt;
      if (schots.x < 10) {
        schots.x = 10;
        schots.vx = Math.abs(schots.vx);
      } else if (schots.x > MG_LOG_W - schots.w - 10) {
        schots.x = MG_LOG_W - schots.w - 10;
        schots.vx = -Math.abs(schots.vx);
      }
    }
    if (schots.stuk > 0) {
      schots.stuk -= dt;
      schots.y -= 28 * dt;
      if (schots.stuk <= 0) schots.aan = false;
      continue;
    }
    if (mg.vy < 0 && vorigeY >= schots.y - 2 && mg.y <= schots.y + 8 && mgOverlapX(mg.x, 15, schots.x, schots.x + schots.w)) {
      mg.y = schots.y;
      mg.vy = schots.soort === "veer" ? MG_VEER : MG_SPRONG;
      if (schots.soort === "breek") schots.stuk = 0.16;
      break;
    }
  }

  for (let i = 0; i < mg.vissen.length; i++) {
    const vis = mg.vissen[i];
    if (!vis.aan) continue;
    if (Math.abs(vis.y - (mg.y + 20)) < 28 && mgOverlapX(mg.x, 16, vis.x - 14, vis.x + 14)) {
      vis.aan = false;
      mg.visPunten = Math.min(999999, mg.visPunten + MG_VIS);
    }
  }

  for (let i = 0; i < mg.meeuwen.length; i++) {
    const meeuw = mg.meeuwen[i];
    if (!meeuw.aan) continue;
    meeuw.x += meeuw.vx * dt;
    if (meeuw.x < -30) meeuw.x = MG_LOG_W + 20;
    if (meeuw.x > MG_LOG_W + 30) meeuw.x = -20;
    const raak = Math.abs(meeuw.y - (mg.y + 22)) < 26 && mgOverlapX(mg.x, 16, meeuw.x - 8, meeuw.x + 36);
    if (raak && mg.maxY > 500) {
      mg.reden = "meeuw";
      mgEinde();
      return;
    }
  }

  if (mg.y > mg.maxY) mg.maxY = mg.y;
  const geklommen = Math.max(0, mg.maxY - 36);
  const score = Math.min(999999, Math.floor(geklommen / 7) + mg.visPunten);
  if (score !== mg.score) {
    mg.score = score;
    if (!mg.ereteken && mg.score >= MG_MEDAILLE) {
      mg.ereteken = true;
      mgBewaar();
      toonSignaal("Medaille: IJsglijder");
    }
    const heel = Math.floor(mg.score);
    if (heel !== mg.heel) {
      mg.heel = heel;
      mgHud();
    }
  }

  const doelCam = mg.y - MG_LOG_H * 0.36;
  if (doelCam > mg.cam) mg.cam = doelCam;
  mgVul();
  mgRuim(mg.schotsen, 90);
  mgRuim(mg.vissen, 70);
  mgRuim(mg.meeuwen, 80);

  if (mg.y < mg.cam - 36) {
    mg.reden = "val";
    mgEinde();
  }
}

function mgVoegTijd(dt) {
  if (!mg.bezig || mg.gepauzeerd) return;
  if (dt < 0) dt = 0;
  if (dt > 0.1) dt = 0.1;
  mg.acc += dt;
  let n = 0;
  while (mg.acc >= MG_STAP - 1e-8 && n < 8) {
    mg.acc -= MG_STAP;
    if (mg.acc < 1e-8) mg.acc = 0;
    mgStap(MG_STAP);
    n += 1;
    if (!mg.bezig || mg.gepauzeerd) {
      mg.acc = 0;
      return;
    }
  }
}

function mgHud() {
  const heel = Math.floor(mg.score);
  const score = document.getElementById("mg-score");
  const record = document.getElementById("mg-record");
  const eindeScore = document.getElementById("mg-einde-score");
  const eindeRecord = document.getElementById("mg-einde-record");
  if (score) score.textContent = String(heel);
  if (record) record.textContent = String(mg.record);
  if (eindeScore) eindeScore.textContent = String(heel);
  if (eindeRecord) eindeRecord.textContent = String(mg.record);
}

function mgToonScherm() {
  const start = document.getElementById("mg-startscherm");
  const pauze = document.getElementById("mg-pauze");
  const einde = document.getElementById("mg-einde");
  if (!start) return;
  start.classList.toggle("verborgen", mg.bezig || mg.afgelopen);
  pauze.classList.toggle("verborgen", !(mg.bezig && mg.gepauzeerd));
  einde.classList.toggle("verborgen", !mg.afgelopen);
  const tekst = document.getElementById("mg-einde-tekst");
  if (tekst) {
    tekst.textContent = mg.reden === "meeuw"
      ? "Een meeuw zat in de weg. De pinguïn keert om. Niets gewond."
      : "De pinguïn zakt onder het beeld. Niets gewond.";
  }
}

function mgFocus() {
  const veld = document.getElementById("mg-veld");
  if (veld) veld.focus({ preventScroll: true });
}

function mgAfmetingen() {
  const canvas = document.getElementById("mg-canvas");
  if (!canvas) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, rect.width);
  const h = Math.max(1, rect.height);
  const pxW = Math.round(w * dpr);
  const pxH = Math.round(h * dpr);
  if (canvas.width !== pxW || canvas.height !== pxH) {
    canvas.width = pxW;
    canvas.height = pxH;
  }
  canvas.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
  mg.w = w;
  mg.h = h;
}

function mgBeeld() {
  const s = Math.min(mg.w / MG_LOG_W, mg.h / MG_LOG_H);
  const bw = MG_LOG_W * s;
  const bh = MG_LOG_H * s;
  return { s: s, ox: (mg.w - bw) / 2, oy: (mg.h - bh) / 2, bw: bw, bh: bh };
}

function mgPX(x, y) {
  const v = mgBeeld();
  return {
    x: v.ox + x * v.s,
    y: v.oy + v.bh - (y - mg.cam) * v.s,
    s: v.s
  };
}

function mgRond(ctx, x, y, w, h, r) {
  const rr = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function mgTekenLucht(ctx) {
  ctx.fillStyle = "#0c1216";
  ctx.fillRect(0, 0, mg.w, mg.h);
  const v = mgBeeld();
  const lucht = ctx.createLinearGradient(0, v.oy, 0, v.oy + v.bh);
  lucht.addColorStop(0, "#121a22");
  lucht.addColorStop(1, "#1a3840");
  ctx.fillStyle = lucht;
  ctx.fillRect(v.ox, v.oy, v.bw, v.bh);
  ctx.strokeStyle = "rgba(245, 183, 0, 0.28)";
  ctx.lineWidth = 1;
  ctx.strokeRect(v.ox + 0.5, v.oy + 0.5, v.bw - 1, v.bh - 1);
  ctx.fillStyle = "rgba(232, 237, 233, 0.45)";
  for (let i = 0; i < 10; i++) {
    const sx = v.ox + ((i * 73) % MG_LOG_W) * v.s;
    const sy = v.oy + ((i * 97) % MG_LOG_H) * v.s;
    ctx.fillRect(sx, sy, 2, 2);
  }
}

function mgTekenSchots(ctx, schots) {
  const p = mgPX(schots.x, schots.y);
  const s = p.s;
  const w = schots.w * s;
  const h = 14 * s;
  const zak = schots.stuk > 0 ? (0.16 - schots.stuk) * 40 * s : 0;
  ctx.fillStyle = schots.soort === "breek" ? "#b7c9d0" : "#d5e2e8";
  mgRond(ctx, p.x, p.y + zak, w, h, 5 * s);
  ctx.fill();
  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.fillRect(p.x + 6 * s, p.y + zak + 2 * s, w - 12 * s, 2 * s);
  if (schots.soort === "breek" || schots.stuk > 0) {
    ctx.strokeStyle = "#1c2a30";
    ctx.lineWidth = Math.max(1, s);
    ctx.beginPath();
    ctx.moveTo(p.x + w * 0.25, p.y + zak + h * 0.3);
    ctx.lineTo(p.x + w * 0.48, p.y + zak + h * 0.85);
    ctx.lineTo(p.x + w * 0.72, p.y + zak + h * 0.25);
    ctx.stroke();
  }
  if (schots.soort === "veer") {
    ctx.strokeStyle = "#f5b700";
    ctx.lineWidth = Math.max(1.5, 2 * s);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    const cx = p.x + w * 0.5;
    const amp = 5 * s;
    const n = 5;
    ctx.moveTo(cx - amp, p.y);
    for (let k = 1; k <= n; k++) {
      const y = p.y - (18 * s * k) / n;
      const x = cx + (k % 2 === 0 ? -amp : amp);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

function mgTekenVis(ctx, vis) {
  const p = mgPX(vis.x, vis.y);
  const s = p.s;
  ctx.fillStyle = "#f5b700";
  ctx.beginPath();
  ctx.ellipse(p.x, p.y, 11 * s, 5.5 * s, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(p.x - 8 * s, p.y);
  ctx.lineTo(p.x - 16 * s, p.y - 5 * s);
  ctx.lineTo(p.x - 16 * s, p.y + 5 * s);
  ctx.fill();
  ctx.fillStyle = "#121a16";
  ctx.beginPath();
  ctx.arc(p.x + 4 * s, p.y - 1 * s, 1.1 * s, 0, Math.PI * 2);
  ctx.fill();
}

function mgTekenMeeuw(ctx, meeuw) {
  const p = mgPX(meeuw.x, meeuw.y);
  const s = p.s;
  const kijk = meeuw.vx >= 0 ? 1 : -1;
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.scale(kijk, 1);
  ctx.fillStyle = "#e8ede9";
  ctx.beginPath();
  ctx.ellipse(10 * s, 0, 14 * s, 6 * s, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#8fa196";
  ctx.beginPath();
  ctx.moveTo(4 * s, -2 * s);
  ctx.quadraticCurveTo(16 * s, -16 * s, 28 * s, -3 * s);
  ctx.quadraticCurveTo(14 * s, -6 * s, 4 * s, -2 * s);
  ctx.fill();
  ctx.fillStyle = "#f5b700";
  ctx.beginPath();
  ctx.moveTo(22 * s, 0);
  ctx.lineTo(30 * s, 2 * s);
  ctx.lineTo(22 * s, 4 * s);
  ctx.fill();
  ctx.restore();
}

function mgTekenPingu(ctx, wx) {
  const p = mgPX(wx, mg.y);
  const s = p.s;
  const kijk = mg.vx === 0 ? 1 : (mg.vx > 0 ? 1 : -1);
  ctx.save();
  ctx.translate(p.x, p.y);
  const ps = s * 1.3;
  ctx.scale(kijk * ps, ps);
  ctx.fillStyle = "#e2a400";
  ctx.beginPath();
  ctx.ellipse(-6, -2, 5, 2.4, 0, 0, Math.PI * 2);
  ctx.ellipse(6, -2, 5, 2.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#d5ddd8";
  ctx.beginPath();
  ctx.ellipse(-12, -16, 4, 8, 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17211c";
  ctx.beginPath();
  ctx.ellipse(0, -20, 11, 14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f3f6f4";
  ctx.beginPath();
  ctx.ellipse(3, -18, 7, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17211c";
  ctx.beginPath();
  ctx.arc(4, -32, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f3f6f4";
  ctx.beginPath();
  ctx.arc(6, -31, 3.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#121a16";
  ctx.beginPath();
  ctx.arc(7.2, -31.5, 1.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f5b700";
  ctx.beginPath();
  ctx.moveTo(8, -29);
  ctx.lineTo(16, -27);
  ctx.lineTo(8, -25.5);
  ctx.fill();
  ctx.restore();
}

function mgTeken() {
  const canvas = document.getElementById("mg-canvas");
  if (!canvas || !mg.w) return;
  const ctx = canvas.getContext("2d");
  const v = mgBeeld();
  mgTekenLucht(ctx);
  ctx.save();
  ctx.beginPath();
  ctx.rect(v.ox, v.oy, v.bw, v.bh);
  ctx.clip();
  mgTekenen.length = 0;
  for (let i = 0; i < mg.schotsen.length; i++) {
    if (mg.schotsen[i].aan) mgTekenen.push(mg.schotsen[i]);
  }
  mgTekenen.sort(function (a, b) { return b.y - a.y; });
  for (let i = 0; i < mgTekenen.length; i++) mgTekenSchots(ctx, mgTekenen[i]);
  for (let i = 0; i < mg.vissen.length; i++) {
    if (mg.vissen[i].aan) mgTekenVis(ctx, mg.vissen[i]);
  }
  for (let i = 0; i < mg.meeuwen.length; i++) {
    if (mg.meeuwen[i].aan) mgTekenMeeuw(ctx, mg.meeuwen[i]);
  }
  mgTekenPingu(ctx, mg.x);
  if (mg.x < 36) mgTekenPingu(ctx, mg.x + MG_LOG_W);
  if (mg.x > MG_LOG_W - 36) mgTekenPingu(ctx, mg.x - MG_LOG_W);
  ctx.restore();
}

function mgReset() {
  mg.score = 0;
  mg.heel = -1;
  mg.visPunten = 0;
  mg.maxY = 0;
  mg.reden = "val";
  mg.x = MG_LOG_W / 2;
  mg.y = 36;
  mg.vx = 0;
  mg.vy = 0;
  mg.cam = 0;
  mg.acc = 0;
  mg.laatste = 0;
  mg.volgendeY = 78;
  mg.gemaakt = 1;
  mg.stuurVast = null;
  for (let i = 0; i < mg.schotsen.length; i++) mg.schotsen[i].aan = false;
  for (let i = 0; i < mg.vissen.length; i++) mg.vissen[i].aan = false;
  for (let i = 0; i < mg.meeuwen.length; i++) mg.meeuwen[i].aan = false;
  const grond = mg.schotsen[0];
  grond.aan = true;
  grond.x = MG_LOG_W / 2 - 58;
  grond.y = 0;
  grond.w = 116;
  grond.soort = "vast";
  grond.vx = 0;
  grond.stuk = 0;
  mgVul();
}

function mgEinde() {
  if (mg.afgelopen) return;
  mg.afgelopen = true;
  mg.bezig = false;
  mg.gepauzeerd = false;
  mg.stuurVast = null;
  if (mg.raf) {
    cancelAnimationFrame(mg.raf);
    mg.raf = 0;
  }
  mg.record = Math.max(mg.record, Math.floor(mg.score));
  mgBewaar();
  mgHud();
  mgToonScherm();
  mgTeken();
}

function mgStart() {
  mg.bezig = true;
  mg.gepauzeerd = false;
  mg.afgelopen = false;
  mgReset();
  mgToonScherm();
  mgHud();
  mgAfmetingen();
  mgTeken();
  mgFocus();
  if (mg.raf) cancelAnimationFrame(mg.raf);
  mg.raf = requestAnimationFrame(mgLus);
}

function mgVerder() {
  if (!mg.bezig || mg.afgelopen) return;
  mg.gepauzeerd = false;
  mg.laatste = 0;
  mg.acc = 0;
  mgToonScherm();
  mgFocus();
  if (mg.raf) cancelAnimationFrame(mg.raf);
  mg.raf = requestAnimationFrame(mgLus);
}

function mgPauzeerRoute() {
  if (!mg.bezig || mg.afgelopen) return;
  mg.gepauzeerd = true;
  mg.toetsLinks = false;
  mg.toetsRechts = false;
  mg.knopLinks = false;
  mg.knopRechts = false;
  mg.schermLinks = false;
  mg.schermRechts = false;
  if (mg.raf) {
    cancelAnimationFrame(mg.raf);
    mg.raf = 0;
  }
  if (Math.floor(mg.score) > mg.record) {
    mg.record = Math.floor(mg.score);
    mgBewaar();
  }
  mgHud();
  mgToonScherm();
}

function mgLus(nu) {
  if (!mg.bezig || mg.gepauzeerd) return;
  if (!mg.laatste) mg.laatste = nu;
  let dt = (nu - mg.laatste) / 1000;
  mg.laatste = nu;
  if (dt < 0) dt = 0;
  mgAfmetingen();
  mgVoegTijd(dt);
  if (!mg.bezig || mg.gepauzeerd) return;
  mgTeken();
  mg.raf = requestAnimationFrame(mgLus);
}

function mgDoelX() {
  let best = null;
  let bestDy = 1e9;
  for (let i = 0; i < mg.schotsen.length; i++) {
    const schots = mg.schotsen[i];
    if (!schots.aan || schots.stuk > 0) continue;
    const dy = schots.y - mg.y;
    if (dy < -8 || dy > 190) continue;
    if (dy < bestDy) {
      bestDy = dy;
      best = schots.x + schots.w / 2;
    }
  }
  return best;
}

function mgStatus() {
  let schotsen = 0;
  let vissen = 0;
  let meeuwen = 0;
  for (let i = 0; i < mg.schotsen.length; i++) if (mg.schotsen[i].aan) schotsen += 1;
  for (let i = 0; i < mg.vissen.length; i++) if (mg.vissen[i].aan) vissen += 1;
  for (let i = 0; i < mg.meeuwen.length; i++) if (mg.meeuwen[i].aan) meeuwen += 1;
  return {
    x: mg.x,
    y: mg.y,
    vy: mg.vy,
    cam: mg.cam,
    score: mg.score,
    maxY: mg.maxY,
    bezig: mg.bezig,
    gepauzeerd: mg.gepauzeerd,
    pool: mg.schotsen.length,
    schotsen: schotsen,
    vissen: vissen,
    meeuwen: meeuwen,
    doel: mgDoelX(),
    kantelAan: mg.kantelAan
  };
}

function mgStuur(dir) {
  if (dir === -1 || dir === 0 || dir === 1) mg.stuurVast = dir;
  else mg.stuurVast = null;
}

function toonMinigame() {
  toonWeergave("minigame");
  mg.rustig = minderBeweging();
  document.getElementById("minigame").classList.toggle("minigame-rustig", mg.rustig);
  mgToonScherm();
  mgHud();
  requestAnimationFrame(function () {
    if (!document.body.classList.contains("minigame")) return;
    mgAfmetingen();
    if (!mg.bezig) mgTeken();
  });
}

function mgToets(e) {
  if (!document.body.classList.contains("minigame")) return;
  if (e.target && e.target.closest && e.target.closest("button, a, input, textarea, select")) return;
  const toets = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  const stuur = toets === "ArrowLeft" || toets === "ArrowRight" || toets === "a" || toets === "d";
  if (!stuur) return;
  if (toets.indexOf("Arrow") === 0) e.preventDefault();
  if (mg.bezig && !mg.afgelopen) e.stopImmediatePropagation();
  if (mg.gepauzeerd || mg.afgelopen || !mg.bezig) return;
  if (toets === "ArrowLeft" || toets === "a") mg.toetsLinks = true;
  if (toets === "ArrowRight" || toets === "d") mg.toetsRechts = true;
}

function mgToetsLos(e) {
  if (!e.key) return;
  const toets = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (toets === "ArrowLeft" || toets === "a") mg.toetsLinks = false;
  if (toets === "ArrowRight" || toets === "d") mg.toetsRechts = false;
}

function mgVraagKantel() {
  const Ev = window.DeviceOrientationEvent;
  if (!Ev) return;
  if (typeof Ev.requestPermission !== "function") {
    mg.kantelAan = true;
    return;
  }
  if (mg.kantelGevraagd) return;
  mg.kantelGevraagd = true;
  Ev.requestPermission().then(function (staat) {
    mg.kantelAan = staat === "granted";
  }).catch(function () {
    mg.kantelAan = false;
  });
}

function mgKoppel() {
  const opgeslagen = mgLees();
  mg.record = opgeslagen.record;
  mg.ereteken = opgeslagen.ereteken;
  mgPool();
  mgHud();

  document.getElementById("mg-start").addEventListener("click", function () {
    mgVraagKantel();
    mgStart();
  });
  document.getElementById("mg-opnieuw").addEventListener("click", function () {
    mgVraagKantel();
    mgStart();
  });
  document.getElementById("mg-verder").addEventListener("click", mgVerder);

  function houd(id, veld) {
    const knop = document.getElementById(id);
    knop.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      if (!mg.bezig || mg.afgelopen || mg.gepauzeerd) return;
      mg[veld] = true;
      mgFocus();
    });
    knop.addEventListener("pointerup", function () { mg[veld] = false; });
    knop.addEventListener("pointercancel", function () { mg[veld] = false; });
    knop.addEventListener("pointerleave", function () { mg[veld] = false; });
  }
  houd("mg-links", "knopLinks");
  houd("mg-rechts", "knopRechts");

  const veld = document.getElementById("mg-veld");
  veld.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (e.target.closest("button, a")) return;
    if (!mg.bezig || mg.afgelopen) return;
    if (mg.gepauzeerd) {
      mgVerder();
      return;
    }
    const rect = veld.getBoundingClientRect();
    const links = e.clientX < rect.left + rect.width / 2;
    mg.schermLinks = links;
    mg.schermRechts = !links;
  });
  function schermLos() {
    mg.schermLinks = false;
    mg.schermRechts = false;
  }
  veld.addEventListener("pointerup", schermLos);
  veld.addEventListener("pointercancel", schermLos);
  window.addEventListener("pointerup", schermLos);
  window.addEventListener("pointercancel", schermLos);
  veld.addEventListener("touchmove", function (e) { e.preventDefault(); }, { passive: false });

  window.addEventListener("keydown", mgToets);
  window.addEventListener("keyup", mgToetsLos);
  window.addEventListener("blur", function () {
    mg.toetsLinks = false;
    mg.toetsRechts = false;
  });
  window.addEventListener("resize", function () {
    if (!document.body.classList.contains("minigame")) return;
    mgAfmetingen();
    mgTeken();
  });
  window.addEventListener("deviceorientation", function (e) {
    if (e.gamma == null || isNaN(e.gamma)) return;
    mg.kantelGezien = true;
    mg.kantel = Math.max(-1, Math.min(1, e.gamma / 24));
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) mgPauzeerRoute();
  });
}
mgKoppel();

// =====================================================
// 16. START
// =====================================================
luisterParadeCode();
navigeer();
toonBadges(false);

// Op een telefoon zijn er geen pijltjestoetsen.
// Vijf tikken op het logo of de titel, binnen 3 seconden, roepen dezelfde parade op.
let paradeKliks = 0;
let paradeKlikStart = 0;

function luisterParadeTikken() {
  const logo = document.querySelector(".logo");
  if (!logo) {
    return;
  }
  logo.addEventListener("click", function () {
    const nu = Date.now();
    if (paradeKliks === 0 || nu - paradeKlikStart > 3000) {
      paradeKliks = 0;
      paradeKlikStart = nu;
    }
    paradeKliks = paradeKliks + 1;
    if (paradeKliks >= 5) {
      paradeKliks = 0;
      paradeKlikStart = 0;
      startParade();
    }
  });
}
luisterParadeTikken();

// De parade-code en de vijf tikken blijven zoals ze zijn.
// Hier tellen we alleen mee wanneer de parade echt start.
(function () {
  const origineel = startParade;
  startParade = function () {
    const had = !!document.querySelector(".parade");
    origineel();
    if (!had && document.querySelector(".parade")) {
      vindEi("parade");
    }
  };
})();


// =====================================================
// 16. VERBORGEN SPOREN
// =====================================================
const SVG_GLIJ =
  '<svg viewBox="0 0 120 48" aria-hidden="true">' +
    '<ellipse cx="58" cy="28" rx="40" ry="13" fill="#f3f6f4"/>' +
    '<ellipse cx="56" cy="30" rx="24" ry="7" fill="#17211c"/>' +
    '<circle cx="92" cy="22" r="12" fill="#f3f6f4"/>' +
    '<circle cx="97" cy="19" r="1.6" fill="#121a16"/>' +
    '<path d="M102 21 118 25 102 28.5z" fill="#f5b700"/>' +
    '<ellipse cx="40" cy="40" rx="10" ry="3" fill="#f5b700"/>' +
    '<ellipse cx="24" cy="38" rx="8" ry="2.4" fill="#e2a400"/>' +
  "</svg>";

function vindEi(id, opties) {
  if (EI_SOORTEN.indexOf(id) === -1 || eiStaat.gevonden.indexOf(id) !== -1) {
    return false;
  }
  eiStaat.gevonden.push(id);
  if (!eiStaat.badge && eiStaat.gevonden.length >= EI_VOOR_BADGE) {
    eiStaat.badge = true;
  }
  bewaarEieren();
  toonEiTeller();
  if (!opties || opties.teken !== false) {
    toonBadges(true);
  }
  return true;
}

function toonEiTeller() {
  const el = document.getElementById("ei-teller");
  if (!el) {
    return;
  }
  if (eiStaat.gevonden.length === 0) {
    el.textContent = "";
    return;
  }
  el.textContent = "Easter eggs gevonden: " + eiStaat.gevonden.length + "/" + EI_SOORTEN.length;
}

function toonReeks() {
  const el = document.getElementById("reeks");
  if (!el) {
    return;
  }
  if (reeks < 2) {
    el.textContent = "";
    el.classList.add("verborgen");
    el.classList.remove("heet");
    return;
  }
  el.textContent = reeks + " op rij";
  el.classList.remove("verborgen");
  el.classList.toggle("heet", reeks >= 5);
}

function confettiBij(element) {
  if (!element || minderBeweging()) {
    return;
  }
  const rect = element.getBoundingClientRect();
  const laag = document.createElement("div");
  laag.className = "confetti";
  laag.setAttribute("aria-hidden", "true");
  laag.style.left = (rect.left + rect.width / 2) + "px";
  laag.style.top = (rect.top + rect.height / 2) + "px";
  const kleuren = ["#f5b700", "#3ecf8e", "#ffe08a", "#e8ede9"];
  for (let i = 0; i < 10; i++) {
    const stuk = document.createElement("span");
    const hoek = (Math.PI * 2 * i) / 10;
    const afstand = 28 + (i % 3) * 10;
    stuk.style.setProperty("--x", Math.cos(hoek) * afstand + "px");
    stuk.style.setProperty("--y", (Math.sin(hoek) * afstand - 6) + "px");
    stuk.style.background = kleuren[i % kleuren.length];
    laag.appendChild(stuk);
  }
  document.body.appendChild(laag);
  setTimeout(function () {
    laag.remove();
  }, 700);
}

function startGlijden() {
  if (document.querySelector(".glijbaan")) {
    return;
  }
  vindEi("glijden");
  toonSignaal("Een pinguïn glijdt voorbij.");
  const baan = document.createElement("div");
  const rustig = minderBeweging();
  baan.className = "glijbaan" + (rustig ? " rustig" : "");
  baan.setAttribute("aria-hidden", "true");
  const el = document.createElement("div");
  el.className = "glijder";
  el.innerHTML = SVG_GLIJ;
  baan.appendChild(el);
  document.body.appendChild(baan);
  setTimeout(function () {
    baan.remove();
  }, rustig ? 1800 : 2800);
}

const SVG_BEZOEK =
  '<svg viewBox="0 0 120 150" aria-hidden="true">' +
    '<ellipse cx="60" cy="142" rx="28" ry="5" fill="#0c1210" opacity="0.35"/>' +
    '<path d="M42 74c-16 5-22 26-12 38 8-2 16-10 16-20 0-7 0-13-4-18z" fill="#d5ddd8"/>' +
    '<ellipse cx="60" cy="90" rx="28" ry="34" fill="#f3f6f4"/>' +
    '<ellipse cx="60" cy="98" rx="16" ry="22" fill="#17211c"/>' +
    '<circle cx="60" cy="48" r="22" fill="#f3f6f4"/>' +
    '<circle cx="51" cy="46" r="2.3" fill="#121a16"/>' +
    '<circle cx="69" cy="46" r="2.3" fill="#121a16"/>' +
    '<path d="M53 56h14l-7 10z" fill="#f5b700"/>' +
    '<path d="M55 59h10l-5 6z" fill="#e2a400"/>' +
    '<ellipse cx="46" cy="124" rx="11" ry="4.2" fill="#f5b700"/>' +
    '<ellipse cx="74" cy="124" rx="11" ry="4.2" fill="#e2a400"/>' +
    '<g class="vleugel">' +
      '<path d="M78 74c16 5 22 26 12 38-8-2-16-10-16-20 0-7 0-13 4-18z" fill="#d5ddd8"/>' +
    "</g>" +
  "</svg>";

function startBezoeker() {
  if (document.querySelector(".bezoek")) {
    return;
  }
  vindEi("bezoeker");
  toonSignaal("Er komt een bezoeker aan.");
  const laag = document.createElement("div");
  const rustig = minderBeweging();
  laag.className = "bezoek" + (rustig ? " rustig" : "");
  laag.setAttribute("aria-hidden", "true");
  const el = document.createElement("div");
  el.className = "bezoeker";
  el.innerHTML = SVG_BEZOEK;
  laag.appendChild(el);
  document.body.appendChild(laag);
  if (rustig) {
    setTimeout(function () {
      laag.remove();
    }, 2500);
    return;
  }
  el.classList.add("nadert");
  setTimeout(function () {
    el.classList.remove("nadert");
    el.classList.add("staat");
  }, 2600);
  setTimeout(function () {
    el.classList.remove("staat");
    el.classList.add("zwaai");
  }, 3600);
  setTimeout(function () {
    el.classList.remove("zwaai");
    el.classList.add("weg");
  }, 4600);
  setTimeout(function () {
    laag.remove();
  }, 6200);
}

function startPoollicht() {
  if (document.querySelector(".poollicht")) {
    return;
  }
  vindEi("poollicht");
  toonSignaal("Het poollicht antwoordt.");
  const el = document.createElement("div");
  el.className = "poollicht" + (minderBeweging() ? " rustig" : "");
  el.setAttribute("aria-hidden", "true");
  document.body.appendChild(el);
  setTimeout(function () {
    el.remove();
  }, minderBeweging() ? 1600 : 4200);
}

function startRadar() {
  vindEi("wildlife");
  toonSignaal("Alle sporen lichten op.");
  document.body.classList.add("radar");
  if (minderBeweging()) {
    document.body.classList.add("radar-rustig");
  }
  setTimeout(function () {
    document.body.classList.remove("radar");
    document.body.classList.remove("radar-rustig");
  }, 1300);
}

function isNacht(nu) {
  const uur = nu.getHours();
  return uur >= 21 || uur < 6;
}

function pasNachtToe() {
  const nacht = isNacht(new Date());
  document.body.classList.toggle("nacht", nacht);
  if (nacht) {
    vindEi("nacht");
  }
}

let onderdrukKlik = false;

function telSnel(e, staat, grens, actie) {
  if (onderdrukKlik) {
    onderdrukKlik = false;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    return;
  }
  const nu = Date.now();
  if (staat.n === 0 || nu - staat.t > 3000) {
    staat.n = 0;
    staat.t = nu;
  }
  staat.n = staat.n + 1;
  if (staat.n >= grens) {
    staat.n = 0;
    staat.t = 0;
    actie();
  }
}

const plekStaat = { n: 0, t: 0, timer: null };
const voetStaat = { n: 0, t: 0 };

function koppelVasthouden(el, actie) {
  if (!el) {
    return;
  }
  let timer = null;
  let lang = false;
  let x = 0;
  let y = 0;

  function stopTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  el.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "mouse" && e.button !== 0) {
      return;
    }
    lang = false;
    x = e.clientX;
    y = e.clientY;
    stopTimer();
    timer = setTimeout(function () {
      timer = null;
      lang = true;
      onderdrukKlik = true;
      actie();
      setTimeout(function () {
        onderdrukKlik = false;
      }, 700);
    }, 700);
  });
  el.addEventListener("pointermove", function (e) {
    if (!timer) {
      return;
    }
    if (Math.abs(e.clientX - x) > 14 || Math.abs(e.clientY - y) > 14) {
      stopTimer();
    }
  });
  el.addEventListener("pointerup", stopTimer);
  el.addEventListener("pointercancel", stopTimer);
  el.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
}

function veldActief(el) {
  if (!el || !el.tagName) {
    return false;
  }
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

function staartIsParade(lijst) {
  if (lijst.length < PARADE_CODE.length) {
    return false;
  }
  const staart = lijst.slice(-PARADE_CODE.length);
  for (let i = 0; i < PARADE_CODE.length; i++) {
    if (staart[i] !== PARADE_CODE[i]) {
      return false;
    }
  }
  return true;
}

let woordBuffer = "";
const toetsGeschiedenis = [];

function luisterWoorden() {
  window.addEventListener("keydown", function (e) {
    if (e.repeat || e.metaKey || e.ctrlKey || e.altKey || !e.key) {
      return;
    }
    if (veldActief(e.target)) {
      return;
    }
    const toets = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    toetsGeschiedenis.push(toets);
    if (toetsGeschiedenis.length > 24) {
      toetsGeschiedenis.shift();
    }
    // De parade eindigt op dezelfde letters. Die ronde hoort bij de parade.
    if (staartIsParade(toetsGeschiedenis)) {
      woordBuffer = "";
      return;
    }
    if (e.key.length !== 1 || !/^[a-z\u00c0-\u024f]$/i.test(e.key)) {
      if (e.key.length !== 1) {
        woordBuffer = "";
      }
      return;
    }
    woordBuffer = (woordBuffer + e.key.toLowerCase()).slice(-16);
    const plat = woordBuffer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Alleen het eind van de buffer telt. "pinpin" en "pinguin" delen het begin
    // "pin"; een korter woord mag het langere dus niet onderscheppen.
    const sporen = [
      ["wildlife", startRadar],
      ["pinguin", startPoollicht],
      ["pinpin", startBezoeker]
    ];
    for (let i = 0; i < sporen.length; i++) {
      if (plat.endsWith(sporen[i][0])) {
        woordBuffer = "";
        sporen[i][1]();
        break;
      }
    }
  });
}

function spoorInConsole() {
  console.log(
    "%cWildlife Quiz%c\nJe kijkt achter het glas. De kolonie heeft dat door.\nTyp %ckolonie()%c en druk op Enter.",
    "color:#f5b700;font-weight:700;font-size:15px;letter-spacing:0.06em",
    "color:#c5d0c8;font-size:13px",
    "color:#f5b700;font-weight:700",
    "color:#c5d0c8"
  );
  window.kolonie = function () {
    vindEi("console");
    toonSignaal("De kolonie heeft je gehoord.");
    return "De kolonie heeft je gehoord.";
  };
}

function startSporen() {
  toonEiTeller();
  toonReeks();

  const plek = document.getElementById("pinguin-plek");
  const logo = document.querySelector(".logo");
  const voet = document.querySelector(".voet");

  // Lang indrukken mag de klik daarna niet als parade-tik laten meetellen.
  logo.addEventListener("click", function (e) {
    if (!onderdrukKlik) {
      return;
    }
    onderdrukKlik = false;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  koppelVasthouden(plek, startPoollicht);
  koppelVasthouden(logo, startRadar);

  // Drie tikken, en daarna even wachten: de bezoeker.
  // Een vierde of vijfde tik binnen die pauze annuleert hem.
  // Vijf tikken blijven de buikglijder.
  plek.addEventListener("click", function (e) {
    if (onderdrukKlik) {
      onderdrukKlik = false;
      e.preventDefault();
      return;
    }
    const nu = Date.now();
    if (plekStaat.n === 0 || nu - plekStaat.t > 3000) {
      plekStaat.n = 0;
      plekStaat.t = nu;
    }
    plekStaat.n = plekStaat.n + 1;
    if (plekStaat.timer) {
      clearTimeout(plekStaat.timer);
      plekStaat.timer = null;
    }
    if (plekStaat.n >= 5) {
      plekStaat.n = 0;
      plekStaat.t = 0;
      startGlijden();
      return;
    }
    if (plekStaat.n === 3) {
      plekStaat.timer = setTimeout(function () {
        plekStaat.timer = null;
        plekStaat.n = 0;
        plekStaat.t = 0;
        startBezoeker();
      }, 500);
    }
  });
  voet.addEventListener("click", function (e) {
    telSnel(e, voetStaat, 5, function () {
      vindEi("console");
      toonSignaal("De kolonie heeft je gehoord.");
    });
  });

  document.getElementById("willekeurig").addEventListener("click", function () {
    const dier = dieren[Math.floor(Math.random() * dieren.length)];
    location.hash = "#dier/" + dier.id;
  });

  luisterWoorden();
  pasNachtToe();
  setInterval(pasNachtToe, 60000);
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      pasNachtToe();
    }
  });
  spoorInConsole();
}

startSporen();
