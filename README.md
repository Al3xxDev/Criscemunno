# 🍕 Pizzeria Criscemunno — Premium Web Experience

[![W3C Validation](https://img.shields.io/badge/W3C-HTML5%20%2F%20CSS3-orange.svg?style=flat-flat)](https://validator.w3.org/)
[![Mobile Friendly](https://img.shields.io/badge/Mobile--First-100%25-success.svg?style=flat-flat)](#-performance--mobile-optimizations)
[![Performance](https://img.shields.io/badge/Performance-60fps%20Animations-gold.svg?style=flat-flat)](#-performance--mobile-optimizations)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-flat)](LICENSE)

A state-of-the-art, high-fidelity, single-page web application designed for **Pizzeria Criscemunno**, an authentic Neapolitan pizzeria located in the heart of Salerno, Italy, right next to the historic Duomo di Salerno (Cathedral of Saint Matthew).

This website is engineered with a mobile-first philosophy, incorporating a dark, luxurious glassmorphic visual system, custom typography, fluid layouts, hardware-accelerated animations, and a dynamic real-time hours state-engine.

---

## 📌 Table of Contents

1. [Key Features](#-key-features)
2. [UX/UI & Design System](#-uxui--design-system)
3. [Technical Architecture](#-technical-architecture)
4. [Performance & Mobile Optimizations](#-performance--mobile-optimizations)
5. [Project Structure](#-project-structure)
6. [Getting Started](#-getting-started)
7. [Pizzeria Details & Live Schedule](#-pizzeria-details--live-schedule)
8. [Developer Utilities](#-developer-utilities)
9. [License & Credits](#-license--credits)

---

## 🌟 Key Features

### 🕒 Real-Time Status Engine (JavaScript)
A custom script determines if the pizzeria is open or closed based on the client's local system time. It updates the UI dynamically:
- **Pulsing Badge**: Displays a green pulsing badge (**Aperto Ora**) or red badge (**Chiuso Ora**).
- **Opening Time Offsets**: Correctly handles different opening hours per day (Mon/Wed/Thu/Fri at 19:00, Tue/Sat at 19:15, and Sunday closure).
- **Contextual Status Notices**: Generates personalized copy based on the exact time (e.g., *"We are open tonight! Kitchen active until 11:30 PM"* or *"We are closed, we reopen tomorrow at 7:00 PM"*).
- **Active Day Highlighting**: Automatically adds the `.active-day` class to the current day in the HTML schedule table.

### 📜 Digital Menu & Interactive Wine List
- **Categorized View**: The menu covers Antipasti, Fritti, Classiche/Bianche, Padellino, and drinks.
- **Swipeable Mobile Ribbons**: On mobile devices, the category tabs transform into a touch-swipeable ribbon with hidden scrollbars, mimicking native app experiences.
- **Wine Cellar Table**: Fully responsive table featuring premium local Campanian DOC/IGP wines with structured columns for both glass (calice) and bottle (bottiglia) pricing.
- **Allergen Index**: A clear, color-coded allergen legend matches numerical identifiers (1-14) to specific menu items.

### 🎡 Hardware-Accelerated Marquee ("Momenti di Gusto")
- An infinite-loop marquee showcasing high-resolution food, interior, and veranda imagery.
- Driven by hardware-accelerated CSS keyframe animations (`will-change: transform`) yielding a silky-smooth 60fps scrolling experience.
- Interactive hover-to-pause logic showing details of the photos.

### 💬 Autoplay Testimonial Slider
- A high-fidelity testimonial carousel that auto-rotates through three detailed 5-star Google Reviews.
- Mapped with custom reviewer avatars specifically designed to match the website's warm charcoal-and-gold color scheme.

---

## 🎨 UX/UI & Design System

The visual design is engineered to evoke the warm, authentic charcoal tones of a Neapolitan wood-fired oven mixed with premium modern elegance:

### 🎨 Color Palette (HSL Tokens)
*   **Charcoal Dark (Primary Background)**: `hsl(210, 11%, 8%)` — Deep, soothing dark theme.
*   **Gold/Ocher (Accents & Highlights)**: `hsl(38, 79%, 52%)` — Representing the golden crust of a perfect pizza.
*   **Soft Amber (Muted Accents)**: `hsl(38, 60%, 45%)`
*   **Glassmorphic Overlay**: `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(12px)`.

### 🔤 Typography
*   **Display & Headings**: *Lobster* (via Google Fonts) — Adds an authentic, warm Italian cursive script personality.
*   **Body & UI Elements**: *Montserrat* (via Google Fonts) — High legibility, modern geometric sans-serif.

---

## 🛠️ Technical Architecture

The application is written strictly in vanilla web technologies, ensuring maximum speed, SEO crawler indexability, and zero build dependency creep:

- **HTML5**: Leverages semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<time>`) and accessibility parameters (`aria-hidden`, `aria-label`).
- **CSS3**: Built entirely on top of CSS Custom Variables (Design Tokens), Flexbox, CSS Grid, and GPU-assisted transitions.
- **JavaScript (ES6)**: Zero external libraries (no jQuery, no Tailwind script overhead). Contains DOM manipulators, touch swipe event boundaries, and date arithmetic.

---

## 📱 Performance & Mobile Optimizations

Since over 80% of local restaurant searches come from mobile viewports, the site has been meticulously optimized for handheld devices:

1.  **Viewport Shift Prevention**: Absolute position attributes are avoided for overlays; sliding panels use `transform: translateX(...)` with `transition: transform` to bypass layout recalculation loops.
2.  **Ribbon Swipe Tabs**: Mobile tabs use horizontal overflow with `-webkit-overflow-scrolling: touch` for natural scroll momentum.
3.  **Smart Dots Leader Suppression**: Dot leaders connecting dish titles to prices are hidden on mobile viewports using CSS media queries, preventing ugly line wraps.
4.  **Responsive Grid Layouts**: CSS Grids dynamically change columns (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) to scale from small phones to large desktop displays.

---

## 📂 Project Structure

```
Criscemunno/
├── assets/                  # High-resolution image assets
│   ├── icon.jpg             # Site Favicon
│   ├── logo.png             # Sketch pizzeria logo
│   ├── pizzaVistaDuomo.jpg  # Hero backdrop (pizza with Duomo view)
│   ├── localeDentro.png     # Indoor seating photo
│   ├── localeFuori.png      # Outdoor veranda entrance photo
│   ├── localeFuori2.png     # Outdoor seating by the Cathedral photo
│   ├── preparazionePizza.jpg# Pizzaiolo stretching dough photo
│   ├── reviewer_giulia.png  # Avatar for reviewer Mily
│   ├── reviewer_marco.png   # Avatar for reviewer Antonio
│   └── reviewer_luca.png    # Avatar for reviewer Edmondo
├── scratch/
│   └── verify_assets.py     # Python script to check for broken assets
├── index.html               # Main entry HTML document
├── index.css                # Styling rules & design tokens
├── index.js                 # Interactive scripts & hours validation
├── robots.txt               # Instructions to block search engine indexation
└── README.md                # Project documentation (this file)
```

---

## 🚀 Getting Started

Since the site is built on vanilla web standards, running it is simple:

### Option A: Direct Local Run
Simply double-click `index.html` to open it in your preferred browser.

### Option B: Local Web Server (Recommended)
To ensure optimal performance, proper loading of fonts, and smooth scroll animations in a realistic browser environment, spin up a simple server:

**Using Python 3**:
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

**Using Node.js (npx)**:
```bash
npx http-server -p 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📍 Pizzeria Details & Live Schedule

*   **Location**: [Via Romualdo II Guarna, 15, 84121 Salerno SA, Italy](https://maps.google.com/?q=Via+Romualdo+II+Guarna,+15,+84121+Salerno+SA)
*   **Phone**: `0892966164` (Click-to-call active)
*   **WhatsApp**: `+39 351 5721312` (Direct message link active)
*   **Social Channels**:
    - [Instagram](https://www.instagram.com/criscemunno)
    - [Facebook](https://www.facebook.com/criscemunno)
    - [TripAdvisor](https://www.tripadvisor.it/Restaurant_Review-g187781-d10516519-Reviews-Criscemunno_Pizzaria-Salerno_Amalfi_Coast_Province_of_Salerno_Campania.html)

### Weekly Hours:
| Day | Opening Hours |
|---|---|
| Monday | 7:00 PM – 11:30 PM |
| Tuesday | 7:15 PM – 11:30 PM |
| Wednesday | 7:00 PM – 11:30 PM |
| Thursday | 7:00 PM – 11:30 PM |
| Friday | 7:00 PM – 11:30 PM |
| Saturday | 7:15 PM – 12:00 AM |
| Sunday | Closed |

---

## 🛠️ Developer Utilities

The repository contains a helper Python script `scratch/verify_assets.py` to ensure that all images referenced inside `index.html` and `index.css` are physically present in the `assets/` directory.

To run it, navigate to the project root and execute:
```bash
python scratch/verify_assets.py
```
This is useful during development or updates to prevent broken images.

---

## 📜 License & Credits

- **Design & Coding**: Pair-programmed by the development team and Antigravity.
- **Assets**: Copyright © Pizzeria Criscemunno. All rights reserved.
- **License**: MIT License. Feel free to use the template codebase for other non-commercial/commercial projects.
