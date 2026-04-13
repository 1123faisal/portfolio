# CaiDrive — Luxury Car Rental Platform

> **Type:** Full-Stack Web Application &nbsp;|&nbsp; **Industry:** Luxury Automotive / Travel & Mobility  
> **Live Site:** [caidrive.com](https://caidrive.com/) &nbsp;|&nbsp; **Market:** UAE (Dubai & beyond)

---

## About CaiDrive

CAI Drive positions itself as the *"Keeper of the Keys"* — a premium, digital-first platform for finding and renting the world's most exclusive luxury and hypercar vehicles in the UAE. The platform goes beyond traditional car rental by combining a curated fleet of 500+ luxury vehicles with a lifestyle membership that unlocks VIP partner discounts at top Dubai hotels, restaurants, attractions, and fuel stations.

> *"Find and rent the world's most exclusive vehicles"* — CAI Drive tagline

### Platform at a Glance
| Metric | Value |
|--------|-------|
| Luxury vehicles available | **500+** |
| Premium brands represented | **50+** |
| Average customer rating | **4.9 / 5.0** |
| Market | **UAE — Dubai & surrounding emirates** |

---

## Fleet — Featured Brands & Vehicles

CAI Drive carries an ultra-premium fleet across six flagship brands and several additional marques, all 2024 models:

### Flagship Brands
| Brand | Representative Models |
|-------|-----------------------|
| **Ferrari** | SF90 Stradale ($5,500/day), 488 GTB ($3,500/day) |
| **Lamborghini** | Aventador SVJ ($6,000/day), Huracán EVO ($4,000/day) |
| **Porsche** | 911 GT3 RS ($1,800/day), 911 Turbo S ($2,800/day), Taycan Turbo S ($2,400/day) |
| **Rolls-Royce** | Cullinan Black Badge ($5,500/day), Ghost ($5,000/day) |
| **Bentley** | Continental GT ($3,800/day), Flying Spur ($4,200/day) |
| **McLaren** | 720S Spider ($2,300/day), Artura ($3,800/day) |

### Additional Marques
- **Bugatti** — Chiron Sport ($25,000/day)
- **Pagani** — Huayra Roadster ($20,000/day)
- **Aston Martin** — Valkyrie ($15,000/day), DBS Superleggera, DB12
- **Mercedes-AMG** — GT Black Series ($3,200/day), Maybach S680 ($4,500/day)
- **BMW** — M8 Competition ($1,800/day)
- **Audi** — R8 V10 Performance ($2,600/day)

---

## Key Features

### 🔍 Car Discovery & Booking
- **Global search** with keyboard shortcut (`⌘K`) for instant vehicle lookup
- **Brand filter bar** — quick access to Ferrari, Lamborghini, Porsche, Rolls-Royce, Bentley, McLaren
- **Vehicle detail pages** — performance specs (top speed, 0–100 time, horsepower), per-day pricing, photo galleries, and real user reviews with ratings
- **Curated featured collections** — editors' pick listings for special occasions

### 👤 User Accounts & Authentication
- Email/password sign-in with **Forgot Password** recovery flow
- **OAuth SSO** — Google and Apple sign-in
- Account creation with profile management
- Notification centre for booking updates

### 🏨 Partner Locations (Lifestyle Membership)
CAI Drive members unlock exclusive discounts at premium Dubai destinations:

| Category | Partners & Discounts |
|----------|----------------------|
| **Attractions** | Burj Khalifa Observation Deck (20% off), Dubai Frame (15% off) |
| **Hotels** | The Ritz-Carlton Dubai (15% off), Four Seasons Resort (10% off) |
| **Dining** | Pierchic Restaurant @ Madinat Jumeirah (12% off), Nobu @ Atlantis The Palm (10% off) |
| **Fuel** | ENOC Fuel Station on Sheikh Zayed Road (5% off), ADNOC Service Station (3% off) |

### 📍 Rides (Chauffeur Service)
- Authenticated ride-booking module, providing chauffeured experiences in the luxury fleet

### 🛡️ Service Guarantees
- **Fully Insured** — comprehensive coverage on every journey
- **Best Rates** — price match guarantee across the entire fleet
- **VIP Service** — 24/7 concierge support with doorstep delivery and collection

### 🌐 Accessibility & UX
- **Multi-language support** (language switcher in nav)
- **Dark / Light theme toggle**
- **Responsive design** — optimised for mobile and desktop

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Angular (MEAN stack) |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT, OAuth 2.0 (Google, Apple) |
| **Payments** | Secure payment gateway integration |
| **Language** | TypeScript |

---

## My Role & Contributions

- Built the **car catalogue and search module** — brand filtering, full-text vehicle search (`⌘K` shortcut UX), sorting, and detailed vehicle spec pages.
- Developed the **booking and reservation management** flow: date/duration selection, pick-up/drop-off location options, real-time availability checks, and reservation modification/cancellation.
- Implemented **user authentication** — JWT-based login/registration, OAuth SSO (Google & Apple), forgot-password recovery, and profile management.
- Integrated **secure payment gateways** for online rental payments, including pricing calculation and cost summary views.
- Built the **Partner Locations** module — filterable map/list of partner venues (dining, hotels, attractions, fuel) with member discount display logic.
- Engineered the **ratings and feedback system** — per-vehicle review submission, aggregate star ratings surfaced on listings.
- Developed the **Admin Dashboard** for managing car listings, user accounts, booking records, and customer support workflows.
- Implemented **i18n (multi-language)** and **dark/light theme switching** with persistent user preferences.

