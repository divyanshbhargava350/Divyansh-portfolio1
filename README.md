# Divyansh Bhargava — Futuristic IoT & Software Developer Portfolio

A personal portfolio website designed for **Divyansh Bhargava**, a second-year B.Tech Internet of Things (IoT) student at **Madhav Institute of Technology and Science (MITS), Gwalior**.

The website combines the aesthetics of a **futuristic technology laboratory**, a **high-performance developer portfolio**, and a **sophisticated IoT telemetry dashboard**.

---

## 🚀 Key Highlights & Architecture

- **Visual Identity**: Deep Black + Electric Purple / Neon Violet surfaces with glowing cyan accents.
- **Modern IoT Sensor Gateway Experience ("Connected Systems")**:
  - Interactive 5-stage pipeline: `Sensors` → `IoT Gateway` → `Edge Processing` → `Cloud / Broker` → `Insights & Actions`.
  - Interactive sensor workbench for DHT22/BME280, Capacitive Soil Moisture, MQ-2 Gas/Smoke, Ambient Light (LDR), and ESP32 controller.
  - Interactive telemetry slider and simulated MQTT JSON packet dispatcher.
  - Educational deep-dive explaining how physical phenomena become digital telemetry.
- **Authentic Technical Skills**:
  - Categorized under Programming (C, C++, Python), IoT & Hardware (ESP32, Arduino, Sensors, Architecture), and Software & Tools (Git, GitHub, HTML, CSS, JavaScript).
  - Uses authentic qualitative badges (`Active Practice`, `Project-Tested`) rather than misleading percentage bars.
- **Projects Showcase ("Things I'm Building")**:
  - Smart Irrigation System, ESP32 Fire & Smoke Monitoring, Smart Plant Monitoring, and Smart Home Automation.
  - Custom SVG circuit/block diagrams for each project.
  - Status filters: `Prototype`, `In Progress`, `Planned`.
  - Interactive technical specification inspector modals.
- **Beyond Code**:
  - Event Management: *Skillsphere Club* (*Legacy of Valor*).
  - Creative Articulation: *Lafz-e-Bayaan — Raabta* (elocution & literary expression).
- **Hackathons & Ideas**:
  - *AI Synergy Hackathon 2026* (Collaborative Innovation Group).
- **Interactive Resume Suite**:
  - Modal with ATS-friendly digital CV.
  - Print-to-PDF support (`window.print()`).
  - Text & PDF download with automatic fallback.
  - To drop in your official PDF resume: place `resume.pdf` inside the `public/` directory!
- **Interactive Contact Hub**:
  - 1-click email copy with toast notification.
  - Direct links to GitHub and LinkedIn.
  - Interactive message composer that opens pre-filled email drafts.
  - Live Gwalior (IST) real-time clock.
- **Theme & Accessibility**:
  - Dark Mode (default) / Light Mode toggle with `localStorage` persistence.
  - Subtle synthesizer micro-interactions via Web Audio API (muted by default).
  - Desktop-only custom glowing cursor with touch detection and reduced-motion safety.
  - Minimal reading scroll progress bar and floating back-to-top button.

---

## 🛠️ Project Structure

```
divyansh-portfolio/
├── public/                 # Static assets (drop resume.pdf here)
├── src/
│   ├── components/         # Modular UI components
│   │   ├── Navbar.tsx      # Sticky glass navbar with theme & sound controls
│   │   ├── Hero.tsx        # Hero with interactive IoT gateway graphic
│   │   ├── ConnectedSystems.tsx # Signature IoT Sensor Gateway experience
│   │   ├── About.tsx       # Bio, pillars, and civil services synthesis
│   │   ├── Skills.tsx      # Categorized skills & filter controls
│   │   ├── Projects.tsx    # Project cards, schematics & inspector modal
│   │   ├── Experience.tsx  # Skillsphere Club & Lafz-e-Bayaan
│   │   ├── Hackathons.tsx  # AI Synergy Hackathon 2026
│   │   ├── Education.tsx   # MITS Gwalior B.Tech IoT timeline
│   │   ├── Contact.tsx     # Copy email, IST clock, message form
│   │   ├── Footer.tsx      # Minimal footer with copyright & links
│   │   ├── ResumeModal.tsx # Digital ATS resume & download handler
│   │   ├── CustomCursor.tsx # Smooth trailing glowing cursor
│   │   ├── ScrollProgressBar.tsx # Top reading progress bar
│   │   └── BackToTop.tsx   # Floating scroll-to-top button
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/Light mode provider
│   ├── data/
│   │   └── portfolioData.ts # Typed portfolio data (easy to edit)
│   ├── hooks/
│   │   └── useSoundFX.ts   # Web Audio API sound synthesis
│   ├── types/
│   │   └── portfolio.ts    # TypeScript definitions
│   ├── App.tsx             # Root assembly
│   ├── index.css           # Tailwind, custom scanlines & cyber grid
│   └── main.tsx            # Vite React entrypoint
├── index.html              # HTML shell with DB monogram SVG favicon
├── package.json            # Scripts & dependencies
├── tailwind.config.js      # Futuristic theme colors & animations
└── vite.config.ts          # Vite build configuration
```

---

## 💻 How to Run Locally

```bash
# 1. Navigate to the project directory
cd divyansh-portfolio

# 2. Start the development server
npm run dev

# 3. Open in browser
# http://localhost:5174
```

To build for production:
```bash
npm run build
```

---

## 📝 Updating Your Content

All data is decoupled from component UI and neatly organized in:
`src/data/portfolioData.ts`

To update your bio, add a project, or update hackathon results, simply edit this single file!
