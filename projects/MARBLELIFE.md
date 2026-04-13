# MARBLELIFE® Franchise Operations Portal

**MARBLELIFE®** (est. 1988) is a nationwide franchise network of stone, tile & surface restoration specialists. Their services cover marble, travertine, granite, tile & grout, concrete, terrazzo, and wood — offering restoration, repair, and ongoing maintenance to both residential and commercial clients across the United States.

> Live brand site: [marblelifeproducts.com](https://marblelifeproducts.com)

---

## Project Overview

A full-featured internal operations SPA built for the MARBLELIFE® franchise network. The portal centralises the entire photo workflow for franchisee technicians and admins — from ZIP-file bulk uploads in the field to curating before/after restoration images that end up on the public marketing site. It also provides role-gated access to CRM data, payroll reporting, trip tickets, and surgical-strike analytics.

---

## My Role

**Frontend Engineer** — sole frontend developer responsible for architecture, all feature implementation, shared component library, CI/CD integration, and deployment pipeline.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Angular 18.1 (standalone APIs, no NgModule) |
| **Monorepo** | Nx 19.5 |
| **Language** | TypeScript 5.5 |
| **UI** | Bootstrap 5.3, Angular Material 18.1, Angular CDK 18.1 |
| **State** | Angular Signals (no NgRx, no BehaviorSubject) |
| **Reactivity** | RxJS 7.8 |
| **Notifications** | ngx-toastr 19 |
| **Loading States** | ngx-ui-loader 13 |
| **Testing** | Jest 29 + jest-preset-angular 14, Cypress 13 (E2E) |
| **Component Dev** | Storybook 7.5 |
| **Build & CI** | Nx affected tasks, Docker multi-stage build, nginx SPA serving |
| **Linting** | ESLint with Angular plugin, Prettier |

---

## Architecture

```
apps/
  marble-life-v1/          ← main Angular SPA
  marble-life-v1-e2e/      ← Cypress E2E suite
libs/
  models/                  ← @marble-life-v1/models — domain types & Roles enum
  ui/drag-drop/            ← @marble-life-v1/drag-drop — publishable UI library
```

- **Fully standalone components** — every component, dialog, and library export uses Angular 18 standalone APIs; zero `NgModule`s.
- **Lazy-loaded routes** — all feature modules load on demand via `loadComponent` / `loadChildren`.
- **Role-based redirects** — landing route resolves at runtime by injecting `AuthService` directly inside the route definition, routing field roles (`SALES_REPRESENTATIVE`, `TECHNICIAN`) to the photo library and admin roles to the full upload bucket.
- **Two API backends** — a dedicated auth microservice and a main API gateway, each with separate base URIs swapped per environment.
- **Four build environments** — `local`, `dev`, `QA`, `staging` — via Angular `fileReplacements` in `project.json`.

---

## Key Features

### Bulk Photo Upload Center

The core of the application. A multi-panel operations hub for managing thousands of franchise job photos.

| Panel | What It Does |
|---|---|
| **Bucket** | Ingestion point — POST ZIP files with full job metadata (franchisee, customer, surface type, service type, marketing class, building location, etc.) via a drag-and-drop uploader. Paginated grid with multi-select, bulk metadata update, per-image rotate/delete, debounced search, and a rich 12-taxonomy filter panel. |
| **Before / Exterior / After** | Three simultaneous paginated panels. Technicians tag images as Before, Exterior, or After and pair them by drag-and-drop. |
| **Photo Management** | Curated view of paired Before/After images. Admins star images, mark "Best Pair", flag for review, and promote pairs to the marketing site. |
| **Review Marketing** | Subset promoted to the public-facing gallery. Toggle marketing site visibility on/off per pair. |
| **Orphan Images** | Images that failed pairing — same upload, bulk-update, and delete capabilities as the main Bucket. |
| **Photo Library** | Read-optimised gallery of fully-resolved image pairs with Before/After/Exterior thumbnails. Default landing for field roles. |

**Role-filtered sub-navigation** — each panel's visibility is driven by `Roles` enum checks, making the same route deliver different UX depending on who is logged in.

### Authentication & Session Management

- JWT-based login with an immediate identity endpoint call to hydrate full user context.
- Session expiry enforced client-side via `setTimeout` — auto-redirects to `/auth` when the token expires, no server round-trip required.
- `autoLogin()` on app init reads `localStorage`, validates the expiration timestamp, and re-hydrates the identity signal silently.

### Guest Access

Tokenized `guest/:token` route for external stakeholders to access a limited view without credentials.

---

## Role-Based Access Control

Seven distinct roles, each with different navigation, panel access, and permitted actions:

| Role | Access Level |
|---|---|
| Super Admin | Full access to all panels and operations |
| Franchisee Admin | Full access scoped to their franchisee |
| Front Office Executive | Full access scoped to their org |
| Operation Manager | Elevated field access |
| Sales Representative | Photo Library only (field view) |
| Technician | Photo Library only (field view) |
| Equipment | Equipment-level scoped access |

---

## Reusable Component Library

Built and documented **18 shared components** plus one publishable Nx library:

### `@marble-life-v1/drag-drop` (published library)

A fully standalone, `ng-packagr`-packaged drag-and-drop file input component with:

- Required `multi` input to toggle single/multi-file mode
- Optional MIME type validation (with toastr error on violation)
- Optional file-size validation
- `filesList` output emitting `File[]`
- Drag-over/leave/drop visual state via CSS class toggling
- Full Storybook coverage

### Notable Shared Components

| Component | Description |
|---|---|
| `SelectFeatureComponent` | Filter panel with 8 taxonomy multi-selects, date range picker, free-text fields, and 12 boolean flag toggles — outputs a normalized `FilterData` object |
| `BucketImageComponent` | Configurable image card driven by `input()` boolean signals to show/hide actions (delete, rotate, tag, select, pair) — reused across bucket, before/after, and orphan views with zero duplication |
| `ZipUploadComponent` | Material dialog wrapping a reactive form with 8 dropdown selects and the `DragDropComponent`; POSTs `multipart/form-data` ZIP uploads |
| `BulkUpdateComponent` | Metadata batch-edit panel (inline and off-canvas variants) for multi-selected images |
| `ConfirmModalComponent` | Generic confirmation dialog configurable via `MAT_DIALOG_DATA` |
| `ChipsInputComponent` | Material chips input for manual pair ID entry directly on image cards |

---

## Multi-Tenancy & Scale

| Dimension | Detail |
|---|---|
| Multi-organisation | Every API call carries `organizationId`, `organizationRoleUserId`, `franchiseeId` |
| Multi-currency / timezone | `currencyCode`, `currencyExchangeRate`, `timeZoneId` on every identity response — supports international franchise locations |
| Server-side pagination | All lists paginated at the server; configurable page sizes (96 for image grids, 100 for management views) |
| External system links | Each image carries `estimateId`, `jobId`, `schedulerId`, `estimateURL`, `jobURL` — deep-linked to separate CRM and scheduling systems |

---

## Technical Highlights

- **Angular Signals exclusively** — all reactive state (`isLoggedIn`, `identityResponse`, `bucketImageList`, `selectedItems`, `pairData`, etc.) uses `signal<T>()`. No `BehaviorSubject` or `ReplaySubject` anywhere in the codebase.
- **`inject()` throughout** — constructor injection is absent across the entire app; all dependencies resolved via `inject()`, including inline inside route definitions.
- **`DestroyRef` cleanup** — subscriptions use the Angular 16+ `DestroyRef.onDestroy()` API instead of `takeUntil(destroy$)`.
- **Rich server-side filtering** — `FilterData` carries 12 taxonomy arrays + 12 boolean flags + date range + free-text fields, normalized by a dedicated `LibService.setFilterValue()` before any API call — clean separation of UI state from request shape.
- **Debounced live search** — consistent 800 ms debounce across all list views.
- **State colocation** — mutable signal state lives in services, not components, enabling cross-component reactivity without a global store or prop drilling.
- **Nx path alias discipline** — `@marble-life-v1/models` and `@marble-life-v1/drag-drop` enforced via `tsconfig.base.json`; no relative cross-lib imports anywhere.
- **Docker multi-stage build** — Node 20 build stage → nginx:alpine serving the SPA; `CONFIGURATION` build arg selects the Angular environment at image build time.

---

## Screens

| Screen | Route |
|---|---|
| Login | `/auth/login` |
| Bucket (upload ingestion) | `/bulk-photo-upload/bucket` |
| Before / Exterior / After | `/bulk-photo-upload/before-after` |
| Photo Management | `/bulk-photo-upload/photo-management` |
| Review Marketing | `/bulk-photo-upload/review-marketing` |
| Orphan Images | `/bulk-photo-upload/orphan-images` |
| Photo Library | `/bulk-photo-upload/library` |
| Guest Access | `/guest/:token` |
| CRM *(scaffolded)* | `/crm` |
| Surgical Strike *(scaffolded)* | `/surgical-strike` |
| Trip Ticket *(scaffolded)* | `/trip-ticket` |
| Payroll Report *(scaffolded)* | `/payroll-report` |
