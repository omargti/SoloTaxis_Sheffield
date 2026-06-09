# Solo Taxis Sheffield

Marketing website for **Solo Taxis** — a Sheffield-based taxi and private hire company. Built with React and Vite as a fast, mobile-friendly single-page application.

**Repository:** [github.com/omargti/SoloTaxis_Sheffield](https://github.com/omargti/SoloTaxis_Sheffield)

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 + custom design tokens (`src/index.css`) |
| UI components | Ant Design (FAQ accordion), Iconify icons |
| Fonts | Barlow Condensed (headings), DM Sans (body) |

---

## Getting started

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

The app runs at `http://localhost:5173` by default.

---

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Homepage | Hero, services, ride section, About Us, testimonials, app download, FAQ |
| `/booking` | Book online | Embedded TaxiCaller booking iframe |
| `/app` | Download app | App store links and mobile app features |
| `/drive/apply` | Join our team | Driver registration form |
| `/terms` | Terms of service | Legal terms |
| `/privacy` | Privacy policy | Privacy policy |

---

## Navigation

Header and footer quick links are defined in `src/shared/constants/navigation.js` and kept in sync.

| Link | Destination |
|------|-------------|
| **About Us** | `/#about-us` — scrolls to the About Us section on the homepage |
| **Download app** | `/app` |
| **Join our team** | `/drive/apply` |

The footer also lists services as bullet points (no dead links):

- Ride, Reserve, Airport Transfers, Corporate, Courier, Events & Tours

---

## Brand & contact constants

Centralised in `src/shared/constants/brand.js`:

| Constant | Value |
|----------|-------|
| `BRAND_NAME` | Solo Taxis |
| `PHONE_DISPLAY` | 0114 463 4444 |
| `PHONE_RAW` | 01144634444 |
| `APP_STORE_URL` | [iOS App Store](https://apps.apple.com/gb/app/solo-taxis/id6754282801) |
| `GOOGLE_PLAY_URL` | [Google Play](https://play.google.com/store/apps/details?id=com.taxicaller.SoloTaxis.app) |
| `FACEBOOK_URL` | Facebook profile |
| `INSTAGRAM_URL` | Instagram profile |
| `DRIVER_APPLY_EMAIL` | drivers@solotaxis.com |

Update these in one place to reflect changes across the site.

---

## Driver registration form

**Route:** `/drive/apply`

New drivers can submit an application with:

- Personal details (name, email, phone, postcode, address)
- Licence and vehicle information
- Availability and experience
- Optional message and GDPR consent

Submissions are emailed to **drivers@solotaxis.com** via [FormSubmit](https://formsubmit.co).

### First-time setup

When the first application is submitted, FormSubmit sends a **one-time activation email** to `drivers@solotaxis.com`. Click the activation link to enable delivery.

### Custom email endpoint

To use Formspree, Web3Forms, or another provider:

```env
VITE_DRIVER_FORM_ENDPOINT=https://your-endpoint-here
```

---

## Design system

Defined in `src/index.css`:

- **Theme:** Warm light palette — background `#F5F4F1`, white cards, charcoal text `#1A1A1F`
- **Primary red:** `#B91C1C`
- **Hero:** Dark photo overlay with white text
- **Footer:** Dark charcoal `#1A1A1F`
- **Buttons:** `.btn-primary`, `.btn-secondary`, `.btn-ghost`
- **Layout:** `.card`, `.card-elevated`, `.section-eyebrow`, `.section-heading`
- **Forms:** `.form-page`, `.form-input`, `.driver-form` (driver apply page)
- **Booking:** `.booking-page` — responsive full-height iframe layout

---

## Project structure

```
src/
├── App.jsx                    # Route definitions
├── main.jsx                   # App shell (Navbar, Footer, progress bar)
├── index.css                  # Design tokens and global styles
├── features/
│   ├── landing/               # Homepage sections
│   │   ├── landingmain.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── RideandAppSection.jsx
│   │   ├── AppDownloadBanner.jsx
│   │   ├── Testimonials.jsx
│   │   └── Faqs.jsx
│   ├── booking/Booking.jsx    # Online booking iframe
│   ├── app/App.jsx            # Download app page
│   ├── drive/DriverApply.jsx  # Driver registration form
│   ├── terms/Terms.jsx
│   └── privacy/Privacy.jsx
└── shared/
    ├── constants/
    │   ├── brand.js           # Brand name, URLs, phone, email
    │   └── navigation.js      # Header/footer nav links
    ├── layout/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    ├── ui/
    │   ├── button.jsx
    │   └── PageProgressBar.jsx
    └── utils/
        ├── scrollToSection.js
        └── submitDriverApplication.js
```

---

## Changelog — recent updates

Summary of changes made during development:

### Branding & content

- Renamed visible branding from `soloTaxis` / `SoloTaxis` to **Solo Taxis** sitewide
- Centralised brand constants (phone, app store links, social URLs) in `brand.js`
- Rewrote **About Us** section with professional Sheffield-focused copy
- Updated service card descriptions (Ride, Reserve, Airport, Corporate, Courier, Events & Tours)
- FAQ uses brand phone number from constants

### Design & UI

- Premium rebrand with **Barlow Condensed** and **DM Sans** fonts
- Warm light theme: off-white background, white cards, red primary `#B91C1C`
- Dark hero overlay with white text; dark charcoal footer
- Unified CTA buttons to red `btn-primary` style (Book Now, Book Online, Download app, Join our team)
- Added scroll progress bar (`PageProgressBar`)
- Navbar: phone number top-right, **Book a ride** CTA with calendar icon

### Navigation

- Simplified header: removed Ride, Drive, Business links
- Header links: **About Us**, **Download app**, **Join our team**
- About Us points to homepage section `/#about-us` with smooth scroll
- Footer: replaced dead link columns with services bullet list
- Footer quick links mirror header navigation
- Shared nav config in `navigation.js` keeps header and footer in sync

### Pages & features

- **`/booking`** — Mobile-friendly responsive iframe (uses `100dvh`), tap-to-call header
- **`/app`** — Dedicated download page with app store links and feature overview
- **`/drive/apply`** — Driver registration form emailing `drivers@solotaxis.com`
- Homepage hero CTAs: call, book online (`/booking`), download app (`/app`)
- Service cards link to **Book now** → `/booking`
- About section **Book with us** CTA → `/booking`
- Homepage driver panel CTA: **Join our team** → `/drive/apply`

### Utilities

- `scrollToSection.js` — Smooth scroll and cross-page hash navigation for About Us
- `submitDriverApplication.js` — FormSubmit integration for driver applications

### Developer setup

- Vite config prepared for dev/preview hosting (`host`, `allowedHosts` where applicable)

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run lint` | Run ESLint |

---

## Licence

Private project — Solo Taxis Ltd.
