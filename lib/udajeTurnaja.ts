import type { UdajeTurnaja } from "@/types/udajeTurnaja";

export const udajeTurnaja: UdajeTurnaja = {
  nazov: "Spiško Cup – Turnaj",
  organizator: "HK Spišská Nová Ves mládež",
  miesto: "Zimný štadión Spišská Nová Ves",
  datum: "28. 3. 2026 – 29. 3. 2026",
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
  timy: [
    { skupina: "A", tim: "S" },
    { skupina: "B", tim: "P" },
    { skupina: "C", tim: "I" },
    { skupina: "D", tim: "Š" },
    { skupina: "E", tim: "K" },
    { skupina: "F", tim: "O" },
  ],
};
