# HK Spišská Nová Ves - Hokejový Turnaj 2026

Moderný webový systém pre správu mládežníckeho hokejového turnaja kategórie 5. ročník ŠHT.

## 🏒 O Projekte

Systém je navrhnutý pre organizáciu turnaja **HK Spišská Nová Ves mládež**, ktorý sa uskutoční dňa 28.-29. marca 2026 na Zimnom štadióne Spišská Nová Ves.

### 📊 Detaily Turnaja
- **Kategória:** 5. ročník ŠHT (hráči narodení 1.9.2014 a mladší)
- **Počet tímov:** 6 tímov (A, B, C, D, E, F)
- **Hrací systém:** Každý s každým, 2x20 minút
- **Miesto konania:** Zimný štadión Spišská Nová Ves

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework s App Router
- **TypeScript** - Type-safe vývoj
- **Tailwind CSS** - Moderné CSS framework
- **Lucide React** - Ikony pre UI
- **React Hook Form** - Formuláre a validácia
- **Zustand** - State management

### Backend & Databáza
- **Supabase** - Backend as a Service
  - PostgreSQL databáza
  - Authentifikácia
  - Real-time subscriptions
  - File storage

### Vývojové Nástroje
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🚀 Quick Start

```bash
# Inštalácia závislostí
npm install

# Vytvorenie .env.local súboru
cp .env.example .env.local

# Spustenie vývojového servera
npm run dev
```

Aplikácia bude dostupná na `http://localhost:3000`

## 📁 Štruktúra Projektu

```
├── app/                 # Next.js App Router
│   ├── (auth)/         # Autentifikačné stránky
│   ├── admin/          # Admin rozhranie
│   ├── turnaj/         # Turnajové sekcie
│   └── api/            # API routes
├── components/         # Reusabilné komponenty
│   ├── ui/            # UI komponenty
│   ├── forms/         # Formuláre
│   └── layout/        # Layout komponenty
├── lib/               # Utility funkcie
│   ├── supabase/      # Supabase klient
│   ├── types/         # TypeScript typy
│   └── utils/         # Helper funkcie
├── hooks/             # Custom React hooks
└── public/            # Static assets
```

## 🏗️ Hlavné Funkcie

### 📋 Správa Turnaja
- Registrácia tímov a hráčov
- Generovanie zápasového rozpisu
- Výsledky a tabuľky
- Súťaže v zručnostiach

### 👥 Správa Účastníkov
- Tímové súpisky
- Hráčske profily
- Veková verifikácia
- Kontaktné informácie

### 📈 Výsledky a Štatistiky
- Live výsledky zápasov
- Tabuľky turnaja
- Individuálne štatistiky
- História zápasov

### 🏆 Organizačné Funkcie
- Plánovanie zápasov
- Rozhodcovia
- Zdravotná služba
- Stravovanie a ubytovanie

## 🔧 Konfigurácia

### Premenné Prostredia
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Databázová Schéma
Projekt používa PostgreSQL databázu s tabuľkami:
- `teams` - Tímy
- `players` - Hráči
- `matches` - Zápasy
- `results` - Výsledky
- `skills_competition` - Súťaže zručností

## 🎨 UI/UX Design

- **Moderný dizajn** s čistým rozhraním
- **Responsive design** pre všetky zariadenia
- **Slovenské lokalizácie** a texty
- **Dark/Light mode** podpora
- **Accessibility** štandardy

## 📱 Mobilná Verzia

Aplikácia je plne responzívna a optimalizovaná pre mobilné zariadenia, čo umožňuje:
- Live sledovanie výsledkov
- Rýchly prístup k zápasom
- Správu tímov na mieste turnaja

## 🔐 Bezpečnosť

- **Role-based access control**
- **Supabase Auth** pre bezpečnú autentifikáciu
- **Input validation** a sanitizácia
- **CSRF protection**
- **Secure headers**

## 📞 Kontakt

**Organizátor turnaja:**
- **Lukáš Laškody** - Šéftréner
  - Tel: 0910 183 208
  - Email: mladez@hksnv.sk

- **Ivan Berthóty** - Vedúci
  - Tel: 0944 237 350
  - Email: ivanberthoty@gmail.com

## 📄 Licencia

Projekt je vyvinutý pre HK Spišská Nová Ves mládež © 2026
