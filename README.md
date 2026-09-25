# Augastin K Lazar — Luxury Animated Portfolio

> **Electro Technical Officer Cadet (ETO Cadet) @ Mitsui O.S.K. Lines (MOL)**  
> High-Voltage Maritime Systems &bull; Embedded Firmware & Robotics &bull; Educational Content Creator &bull; Thrissur, Kerala, India

---

## 🌟 Highlights & Tech Stack

- **Three.js & WebGL**: Interactive 3D holographic maritime gyro-crystal and dynamic ocean wave particle constellation with cursor physics.
- **GSAP & ScrollTrigger**: Fluid narrative reveals, 3D card tilt physics, and staggered editorial typography.
- **Anime.js**: Cinematic 0–100% preloader, SVG drawing animations, and micro-interactions.
- **Web Audio API Micro-Synthesizer**: Zero-asset audio engine generating tactile feedback clicks and ambient resonant soundscapes (with instant toggle).
- **Tailwind CSS Design System**: Bespoke obsidian luxury palette with champagne gold (`#e5c158`) and warm amber (`#ff9d42`) lighting tailored to high-resolution photography.
- **High-Res Photography Integration**: Showcases `me1.png`, `me2.png`, and `Gemini_Generated_Image_.png` with optical glassmorphism and depth parallax.
- **GitHub Pages Ready**: Out-of-the-box configuration for 1-click publishing.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Launch Vite development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
npm run build
```

This generates an ultra-fast, optimized static bundle in the `dist/` directory with relative asset paths (`./assets/...`).

---

## 🌐 Publishing to GitHub Pages

### Option A: Automatic via GitHub Actions (Recommended)
This repository includes a ready-to-go GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Create a repository on GitHub (e.g., `portfolio` or `<your-username>.github.io`).
2. Run:
   ```bash
   git init
   git add .
   git commit -m "feat: initial luxury portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Navigate to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. Your site will automatically build and publish live!

### Option B: 1-Command Deploy via `gh-pages`
```bash
npm run deploy
```

---

## 📁 Project Architecture

```
├── public/
│   └── assets/
│       ├── me1.png                      # Hero 3D tilt portrait
│       ├── me2.png                      # Manifesto concrete sunlight portrait
│       └── Gemini_Generated_Image_.png  # Educational creator lab study
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   └── HeroBackground3D.jsx     # Three.js 3D crystal & ocean wave particle canvas
│   │   ├── About.jsx                    # Engineering manifesto & 4 core pillars
│   │   ├── Contact.jsx                  # Direct terminal, live Kerala IST clock & confetti
│   │   ├── CustomCursor.jsx             # Magnetic cursor follower with hover morphing
│   │   ├── ExperienceBento.jsx          # Educational studio, touring & martial arts
│   │   ├── Footer.jsx                   # Coordinates, copyright & smooth scroll to top
│   │   ├── Hero.jsx                     # Grand editorial typography & 3D photo card
│   │   ├── Navbar.jsx                   # Glassmorphic header with audio toggle
│   │   ├── Preloader.jsx                # Anime.js percentage counter & monogram
│   │   ├── Projects.jsx                 # Maritime simulation, robotics & 3D projects
│   │   ├── SeaService.jsx               # MOL LNG high-voltage electrical systems
│   │   └── SkillsMatrix.jsx             # Maritime, embedded, 3D web & robotics radar
│   ├── utils/
│   │   └── audio.js                     # Web Audio API sound synthesizer
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── vite.config.js                       # Configured with base: './' for GitHub Pages
└── tailwind.config.js                   # Luxury obsidian, champagne gold & marine palettes
```

---

&copy; Augastin K Lazar &bull; Mitsui O.S.K. Lines Cadet &bull; Thrissur, Kerala
