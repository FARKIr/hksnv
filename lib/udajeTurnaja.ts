import type { UdajeTurnaja } from "@/types/udajeTurnaja";

export const udajeTurnaja: UdajeTurnaja = {
  nazov: "Spiško Cup – Turnaj",
  organizator: "HK Spišská Nová Ves mládež",
  miesto: "Zimný štadión Spišská Nová Ves",
  datum: "28. 3. 2026 – 29. 3. 2026",
  terminPrihlasky: "13. 3. 2026",
  kategoria: "5 ročník ŠHT, hráči narodení 1.9.2014 a mladší",
  kontakt: {
    hlavny: {
      meno: "Lukáš Laškody",
      tel: "0910 183 208",
      email: "mladez@hksnv.sk",
      funkcia: "šéftréner",
    },
    veduci: {
      meno: "Ivan Berthóty",
      tel: "0944 237 350",
      email: "ivanberthoty@gmail.com",
      funkcia: "vedúci",
    },
  },
  startovne: {
    cena: "585 €",
    iban: "SK91 1100 0000 0029 1863 8656",
    terminUhrady: "20. 3. 2026",
  },
  vCeneStartovneho: [
    "Prenájom ľadovej plochy",
    "Rozhodcovia",
    "Časomiera",
    "Lekárska služba",
    "Pitný režim a ovocie pre všetky tímy",
    "Trofeje, medaile, ocenenia",
  ],
  stravne:
    "2 x obed (sobota, nedeľa), 1 x večera (sobota), 1 x raňajky (nedeľa)",
  ubytovanie: "1 noc",
  poznamka:
    "V cene štartovného za tím nie je zahrnuté ubytovanie, stravné a uhradí sa na mieste. Dopravu si zabezpečuje každý tím svojpomocne.",
  podpis: "S pozdravom Lukáš Laškody",
  hraciSystem: {
    system: "Každý s každým v tabuľke",
    hraciCas: "2x20 minút",
    body: [
      "Výhra – 2 body",
      "Remíza – 1 bod",
      "Výhra po nájazdoch v druhej tretine – extra 1 bod",
      "Prehra – 0 bodov",
    ],
  },
  specialnePravidla: [
    "Ak sa skončia obidve tretiny nerozhodne, na konci druhej tretiny sa vykoná po jednom nájazde",
    "Pri rovnosti bodov rozhoduje (vzájomný zápas, skóre, počet strelených gólov, počet inkasovaných gólov)",
    "Počet hráčov na ľade 5+1",
    "Minimálny počet hráčov za jeden tím je 10+1",
    "Pri menšom faule hráč obdrží 1 trestnú minútu, pri väčšom faule 3 minúty",
    "Osobný trest 5 minút",
  ],
  sutazZrucnosti:
    "V prvý deň turnaja sa uskutoční súťaž v zručnosti hráčov. Každý tréner vyberie za tím 2 hráčov a jedného brankára, ktorí budú súťažiť v jednotlivých disciplínach.",
  organizacnePokyny: [
    "Každý účastník je povinný odovzdať organizátorovi súpisku hráčov s menom, priezviskom, dátumom narodenia a hráčskym číslom do 20.3.2026",
    "V prípade zistenia počas trvania turnaja, že hráč nespĺňa vekovú kategóriu a je starší ako je uvedené, organizátor má právo odobrať získané body a diskvalifikovať daný tím bez nároku na vrátenie peňazí",
    "Právo na vylosovanie zápasov si vyhradzuje usporiadateľ turnaja",
    "Každé družstvo musí mať k dispozícii dve sady dresov odlišnej farby",
    "Zápis o stretnutí pripravia vedúci družstiev na predpísanom tlačive, pričom tlačivo odovzdajú 10 min pred začiatkom stretnutia",
    "Podrobnejší rozpis zápasov a časový harmonogram obdržia družstvá týždeň pred turnajom",
    "Hra do tela nie je povolená. Všetky zápasy rozhodujú licencovaní rozhodcovia",
    "Počas turnaja bude zabezpečená zdravotná starostlivosť",
  ],
  timy: [
    { skupina: "A", tim: "Spišská Nová Ves" },
    { skupina: "B", tim: "HKM Zvolen" },
    { skupina: "C", tim: "" },
    { skupina: "D", tim: "" },
    { skupina: "E", tim: "" },
    { skupina: "F", tim: "" },
  ],
};
