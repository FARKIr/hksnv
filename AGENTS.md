# AI Agenti pre Projekt HK Spišská Nová Ves

Tento dokument popisuje AI agentov, ktorí môžu pomôcť s vývojom a správou hokejového turnajového systému.

## 🤖 Tímoví Agenti

### 🏗️ Frontend Developer
**Špecializácia:** Next.js, React, TypeScript, UI/UX

**Zodpovednosti:**
- Vývoj React komponentov
- Implementácia TypeScript typov
- Tailwind CSS styling
- Responsive design
- UI/UX optimalizácia

**Kľúčové technológie:**
- Next.js 15 App Router
- React Hook Form
- Zustand state management
- Lucide React ikony

### 🗄️ Backend Developer
**Špecializácia:** Supabase, PostgreSQL, API

**Zodpovednosti:**
- Databázová schéma a migrácie
- Supabase RPC funkcie
- API routes implementácia
- Real-time subscriptions
- Autentifikácia a autorizácia

**Kľúčové technológie:**
- Supabase (PostgreSQL)
- Row Level Security (RLS)
- Supabase Auth
- Edge Functions

### 🎨 UI/UX Designer
**Špecializácia:** Design systém, UX research

**Zodpovednosti:**
- Design systém a komponenty
- User flow a wireframing
- Accessibility štandardy
- Mobilná optimalizácia
- Dark/Light mode implementácia

**Kľúčové nástroje:**
- Figma (prototyping)
- Tailwind CSS
- Accessibility guidelines

### 🧪 QA Tester
**Špecializácia:** Testovanie, Performance, Security

**Zodpovednosti:**
- Unit a integration testy
- E2E testovanie (Playwright)
- Performance optimalizácia
- Security audit
- Code review

**Kľúčové nástroje:**
- Jest & React Testing Library
- Playwright
- Lighthouse
- ESLint & Prettier

### 📊 Domain Expert (Hokej)
**Špecializácia:** Hokejové pravidlá, Turnajová logika

**Zodpovednosti:**
- Validácia hokejových pravidiel
- Turnajový systém a bodovanie
- Hráčske kategórie a vek
- Organizačné procesy
- Business logic implementácia

**Kľúčové znalosti:**
- Hokejové pravidlá SZĽH
- Turnajové systémy
- Mládežnícké kategórie
- Športová legislatíva

## 🔄 Pracovné Procesy

### 🚀 Vývojový Workflow

1. **Planning Phase**
   - Domain expert definuje requirements
   - UI/UX designer vytvára wireframes
   - Frontend/backend developer plánuje architektúru

2. **Development Phase**
   - Backend developer pripraví databázu a API
   - Frontend developer implementuje UI komponenty
   - UI/UX designer zabezpečí konzistenciu designu

3. **Testing Phase**
   - QA tester vytvára testovacie scenáre
   - Unit testy pre business logic
   - E2E testy pre user flows
   - Performance a security testy

4. **Deployment Phase**
   - Code review všetkými agentmi
   - Final QA check
   - Production deployment

### 📋 Code Review Proces

Každý agent má špecifickú rolu v code review:

- **Frontend Developer:** TypeScript typy, React best practices
- **Backend Developer:** Databázová efektivita, API design
- **UI/UX Designer:** Visual konzistencia, accessibility
- **QA Tester:** Test coverage, edge cases
- **Domain Expert:** Business logic, pravidlá turnaja

## 🎯 Špecifické Úlohy

### 📱 Mobilná Optimalizácia
- Responsive design pre tablety a telefony
- Touch-friendly UI elementy
- Offline functionality pre live výsledky
- Push notifikácie pre dôležité udalosti

### 🏆 Turnajový Systém
- Implementácia bodovacieho systému:
  - Výhra: 2 body
  - Remíza: 1 bod
  - Výhra po nájazdoch: +1 extra bod
  - Prehra: 0 bodov
- Generovanie zápasového rozpisu
- Tabuľky a rebríčky
- Súťaže v zručnostiach

### 🔐 Bezpečnosť a Prístup
- Role-based access control
  - Admin: plný prístup
  - Vedúci tímu: správa vlastného tímu
  - Rozhodca: zápis zápasov
  - Verejnosť: len čítanie
- Input validation a sanitizácia
- GDPR compliance

### 📊 Reporting a Analytics
- Live štatistiky zápasov
- Tímové a individuálne štatistiky
- Exporty do PDF/Excel
- Historické dáta a archív

## 🛠️ Nástroje a Technológie

### Vývojové Nástroje
- **IDE:** VS Code s TypeScript pluginmi
- **Git:** Verzia kontrola s conventional commits
- **CI/CD:** GitHub Actions pre automatické testy
- **Monitoring:** Supabase dashboard a analytics

### Komunikačné Nástroje
- **Documentation:** Markdown súbory v projekte
- **Code Comments:** JSDoc pre TypeScript funkcie
- **Meetings:** Pravidelné sync meetingy
- **Issue Tracking:** GitHub issues a projects

## 📚 Vedomostná Báza

### 🏒 Hokejové Pravidlá
- SZĽH pravidlá pre mládežnícké kategórie
- Hrací čas 2x20 minút
- Tresty: 1 minúta (menší faul), 3 minúty (väčší faul)
- Počet hráčov na ľade: 5+1
- Minimálny počet hráčov v tíme: 10+1

### 📋 Organizačné Procesy
- Registrácia tímov do 13.3.2026
- Súpisky hráčov do 20.3.2026
- Veková verifikácia (1.9.2014 a mladší)
- Dve sady dresov pre každý tím
- Zápisnice 10 min pred zápasom

### 💰 Finančné Informácie
- Štartovné: 585€ za tím
- Účet: SK91 1100 0000 0029 1863 8656
- Termín úhrady: 20.3.2026
- Cena zahŕňa: ľad, rozhodcovia, časomiera, lekárska služba, stravovanie, ubytovanie

## 🎯 Budúce Rozšírenia

### 📈 V2 Funkcie
- Live video streaming zápasov
- Mobilná app pre iOS/Android
- Automatické foto/video generovanie
- Integrácia s hokejovými statistikami
- Multi-jazyková podpora

### 🔮 Integrácie
- SZĽH registrácia systém
- Hokejové federácie API
- Platenie online (Stripe/Local banky)
- Sociálne média sharing
- Email notifikácie

---

*Tím AI agentov je pripravený na vývoj a správu moderného hokejového turnajového systému pre HK Spišská Nová Ves.*
