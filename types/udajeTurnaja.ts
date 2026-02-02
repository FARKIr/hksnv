export interface Kontakt {
  meno: string;
  tel: string;
  email: string;
  funkcia: string;
}

export interface Startovne {
  cena: string;
  iban: string;
  terminUhrady: string;
}

export interface Tim {
  skupina: string;
  tim: string;
}

export interface UdajeTurnaja {
  nazov: string;
  organizator: string;
  miesto: string;
  datum: string;
  kategoria: string;
  kontakt: {
    hlavny: Kontakt;
    veduci: Kontakt;
  };
  startovne: Startovne;
  vCeneStartovneho: readonly string[];
  stravne: string;
  ubytovanie: string;
  poznamka: string;
  podpis: string;
  timy: readonly Tim[];
}
