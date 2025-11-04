# Holistic Learning Hub

A modern single-page experience showcasing Jigish Parghi's holistic learning series across Java, Python, Go, and full-stack experimentation. Built with React and Vite, the site highlights each repository with curated descriptions, callouts, and a polished glassmorphism-inspired UI.

## Getting started

```bash
npm install
npm run dev
```

The development server will start on [http://localhost:5173](http://localhost:5173).

To create an optimized production build:

```bash
npm run build
```

## Project structure

```
├── public
│   └── favicon.svg
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── GradientOrb.jsx
│   │   └── Reveal.jsx
│   ├── data
│   │   └── repositories.js
│   ├── main.jsx
│   └── styles
│       └── global.css
├── index.html
├── package.json
└── vite.config.js
```

## Content updates

Edit `src/data/repositories.js` to tweak repository descriptions, highlights, or add new journeys. Each entry controls the icon, copy, and GitHub link displayed in the UI.
