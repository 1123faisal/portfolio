# ForSite — Enterprise Medical Field Services Platform

> **Version:** 2.2.29 &nbsp;|&nbsp; **Type:** Single-Page Application &nbsp;|&nbsp; **Industry:** Healthcare / Medical Equipment Services  
> **Live Portal:** [forsite.fortecmedical.com](https://forsite.fortecmedical.com/PortalApp/#/login) &nbsp;|&nbsp; **Client:** [ForTec Medical](https://fortecmedical.com/) — Hudson, OH

---

## About ForTec Medical

ForTec Medical is an industry-leading surgical technology services company founded over **35 years ago**, headquartered in Hudson, Ohio. Their mission: *"Advanced Surgical Technologies. Clinical Procedural Support. Access for All."*

ForTec mobilizes advanced surgical equipment **on demand** for hospitals, surgery centers, and physician offices across the United States — eliminating costly capital expenditure, maintenance overhead, and technology obsolescence risk for their clients. Every deployment is supported by a **highly-trained Clinical Technology Specialist** who arrives with the device, supports the procedure, and ensures safe operation.

### Scale of Operations
| Metric | Value |
|--------|-------|
| Medical device types in inventory | **30+ major types** |
| Devices deployed nationwide | **1,350+** |
| Preventative maintenance events/year | **2,200+** |
| Years in operation | **35+** |

### Surgical Specialties Served
ForTec serves procedures across **12 surgical specialties**:

| Specialty | Representative Technologies |
|-----------|---------------------------|
| **Aesthetic** | CO₂RE Fractional CO₂ Resurfacing, Vbeam Perfecta |
| **Colorectal** | neoV Laser |
| **ENT** | Aura XP Laser, Aurora MD CO₂, Holmium Laser, KTP/YAG |
| **General Surgery** | Argon Beam Coagulator, CO₂ Laser Platform, Holmium Laser |
| **GYN** | Evolve 180 Laser, OmniGuide, Thulium Cyber TM Laser |
| **Interventional Pulmonology** | KTP/YAG, neoV Laser, OmniGuide |
| **Interventional Radiology** | Fiber Dust Thulium Fiber Laser (TFL), Single Use Morcellator |
| **Neurosurgery** | CO₂ Laser Platform, Imperium CO₂ Laser Fiber, OmniGuide |
| **Ophthalmology** | CATALYS® Laser, FEMTO LDV Crystal Line, Oculight TX, UltraPulse CO₂ |
| **Podiatry** | Vbeam Perfecta |
| **Urology** | Blue Light Cystoscopy, CryoCare Touch™ Cryoablation, Fujifilm Arietta Precision Ultrasound, Holmium Laser |
| **Vascular** | Aura XP Laser, Evolve 180 Laser, KTP/YAG |

### One Source Partnership Program
ForTec's flagship programme consolidates all surgical technology needs under one vendor, offering:
- **Smart Equipment Management** — no capex, no maintenance, no obsolescence risk
- **Efficient Staffing** — dedicated, credentialed Clinical Technology Specialists; no multi-vendor coordination
- **Stable Partnership** — preferential pricing, predictable response times, and select permanent device placement
- **Laser Education Portal** — complimentary 24/7 training access (partnership with Rockwell Laser Industries) for beginners through programme managers

---

## Overview

ForSite is the enterprise operational backbone and customer-facing partner portal for ForTec Medical. It is a large-scale SPA that serves **two distinct user audiences** in a single, role-aware application:

1. **Customer / Partner Portal** — Hospitals, surgery centers, and physician offices log in to self-serve their surgical case scheduling, view confirmations, manage upcoming and past cases, and access account services.
2. **Internal Operations** — ForTec staff manage end-to-end field-service operations: scheduling, billing, inventory, work orders, HR, sales, and compliance — replacing fragmented legacy workflows in one unified workspace.

The application is deployed across development, test, and production environments, with the production portal live at [forsite.fortecmedical.com](https://forsite.fortecmedical.com/PortalApp/#/login).

### Customer Portal Capabilities (User-Facing)
- **24/7 Case Scheduling** with immediate confirmation — no phone calls required
- **Case History** — view previous and upcoming scheduled procedures
- **Case Management** — edit, confirm (next-business-day), or cancel cases in real time
- **Account Dashboard** — centralised view of all service activity per facility
- **Self-Service Signup** — quick onboarding via email or phone with the ForTec sales team

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Angular 21 (Standalone Components, Signals) |
| **State Management** | NgRx 20 (Store, Effects, Selectors, DevTools) |
| **UI Library** | Angular Material 21 + Bootstrap 5 + ng-bootstrap |
| **Backend** | .NET REST API (JWT + MFA authentication) |
| **Real-time** | Microsoft SignalR (push notifications) |
| **Styling** | SCSS — custom design token system over Bootstrap |
| **Testing** | Jasmine / Karma |
| **Charts & Maps** | ngx-echarts, ng2-charts, Angular Google Maps |
| **Bundler** | Angular CLI (`@angular/build:application`) |
| **Language** | TypeScript 5 (strict mode, all strict flags enabled) |

## Key Features

- **Operations Management** — Case tracking, event scheduling, work orders, and order fulfillment workflows
- **Customer & Account Management** — Full CRM-style customer profiles, notes, service agreements, and HPG customer support
- **Billing & Accounting** — Invoice management, lockbox processing, expense certification, and accounting reconciliation
- **HR & Employee Management** — Employee records, incident reporting, driving event tracking
- **Inventory & Equipment** — Item catalog, damage forms, RMA processing, vehicle fleet tracking, asset availability
- **Sales** — Sales pipeline and commission management
- **Admin & Access Control** — Role-based access configuration via a dedicated admin panel
- **Real-time Notifications** — SignalR-powered live updates across session
- **i18n Ready** — `@ngx-translate/core` with structured JSON locale files
- **Dark Mode** — Theme switching with persistent preference via localStorage

## Architecture Highlights

### Domain-Driven Structure
Each business domain owns its API service, request/response models, and NgRx feature store in isolation — preventing cross-domain coupling and enabling independent development.

```
src/app/
├── api/           # ~15 domain services (auth, billing, customer, hr, …)
├── store/         # Global NgRx root state
├── ui/business-areas/  # 9 business domain feature modules
└── stores.ts      # Central registry of 40+ lazy feature store slices
```

### Modern Angular Patterns
- **Standalone components** throughout — zero NgModule usage
- **Signal-first inputs** via `input()` / `model()` APIs
- **Reactive/signal bridge** using `toSignal()` for Observable → Signal conversion
- **Automatic teardown** via `takeUntilDestroyed()` — no manual lifecycle management
- **`strictTemplates: true`** — template errors caught at compile time

### Scalable State Management
- 40+ NgRx feature slices, each with `actions → reducer → effects → selectors`
- Global state tracks in-flight API calls per domain (`apiInFlightArray`) for granular loading indicators
- Centralized `DomainSharedService` wraps every HTTP call — handles spinner state, result validation, and error surfacing uniformly

### Type-Safe API Layer
- All 100+ REST endpoints defined as constants in `src/app/core/config/api.ts`
- URL construction via `ApiBuilder.createUrl()` — no raw string concatenation
- Standardized `ResultDto<T>` response shape across all endpoints

## Development Tooling

```bash
npm start              # Dev server
npm test               # Unit tests (Jasmine/Karma)
npm run lint           # ESLint (explicit accessors + return types enforced)
npm run format         # Prettier + ESLint auto-fix
npm run stats          # Webpack bundle analyzer
npm run build-version  # Auto-generate src/version.ts from git tag
```

- Three environment builds: `dev`, `test`, `production` with distinct API endpoints and `base-href` values
- Bundle budgets: 10 MB warning / 13 MB error
- Semantic versioning via git tags (`v2.x.x`) → auto-written to `src/version.ts`

## My Role

- Led frontend architecture for ForSite — ForTec Medical's enterprise SPA and customer-facing partner portal, serving hospitals, surgery centers, and physician offices across the USA.
- Designed and implemented the NgRx state architecture with 40+ feature slices, domain-driven API services, and a centralised `DomainSharedService` for uniform HTTP handling.
- Built the customer-facing portal dashboard enabling 24/7 case scheduling, real-time case management (edit, confirm, cancel), and case history — directly replacing phone-based workflows.
- Architected the billing and accounting module front-to-back: invoice management, lockbox processing, expense certification, and accounting reconciliation.
- Established component conventions (standalone components, Signals, SCSS design tokens) and coding standards adopted team-wide; enforced via ESLint strict rules.
- Delivered Dark Mode, i18n infrastructure, and SignalR real-time notifications across the application.
- Supported 12 surgical specialties and 30+ medical device type workflows through configurable, role-aware UI modules.
