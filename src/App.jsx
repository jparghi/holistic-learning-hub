import Reveal from './components/Reveal.jsx';
import GradientOrb from './components/GradientOrb.jsx';
import repositories from './data/repositories.js';

const ArrowIcon = ({ direction = 'up-right' }) => {
  const rotations = {
    'up-right': '-45deg'
  };

  return (
    <svg
      className="icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotations[direction] ?? '0deg'})` }}
      aria-hidden
    >
      <path
        d="M5 19L19 5M19 5H7M19 5V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const GithubIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.11.79-.25.79-.56v-2.2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.72 1.27 3.39.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.58.23 2.74.11 3.03.75.81 1.2 1.85 1.2 3.1 0 4.44-2.69 5.42-5.25 5.71.42.36.8 1.08.8 2.19v3.25c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
    />
  </svg>
);

const App = () => {
  return (
    <div className="page-shell">
      <GradientOrb className="orb orb-1" />
      <GradientOrb className="orb orb-2" />

      <header className="hero" id="home">
        <Reveal as="div" className="hero__content" delay={0.1}>
          <p className="eyebrow">Holistic Learning Series</p>
          <h1>
            Guided journeys across <span className="accent">Java</span>, <span className="accent">Python</span>, and
            beyond.
          </h1>
          <p className="hero__subtitle">
            Curated practice paths, mentor-led projects, and product-ready experiments. Explore Jigish Parghi's
            open-source ecosystems crafted for engineering growth.
          </p>
          <div className="hero__cta">
            <a className="btn primary" href="#series">
              Browse the series
              <ArrowIcon />
            </a>
            <a className="btn ghost" href="https://github.com/jparghi" target="_blank" rel="noopener noreferrer">
              GitHub profile
              <GithubIcon />
            </a>
          </div>
        </Reveal>
      </header>

      <main>
        <section id="series" className="series">
          <Reveal as="div" className="section-heading" delay={0.1}>
            <span className="section-badge">Learning Catalog</span>
            <div>
              <h2>Holistic engineering playlists</h2>
              <p>
                Purpose-built repositories that weave together foundational theory, code kata, and real-world problem solving.
                Each series includes interactive challenges, study guides, and project briefs to help teams level up
                intentionally.
              </p>
            </div>
          </Reveal>

          <div className="card-grid">
            {repositories.map((repo, index) => (
              <Reveal key={repo.slug} as="article" className="repo-card" delay={0.1 + index * 0.08}>
                <div className="repo-card__header">
                  <div className="repo-icon" aria-hidden>
                    <span>{repo.icon}</span>
                  </div>
                  <div>
                    <h3>{repo.title}</h3>
                    <p className="repo-meta">{repo.tagline}</p>
                  </div>
                </div>
                <p className="repo-description">{repo.description}</p>
                <ul className="repo-highlights">
                  {repo.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={repo.href} target="_blank" rel="noopener noreferrer" className="btn link">
                  View on GitHub <ArrowIcon />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="cta" id="contact">
          <Reveal as="div" className="cta__content" delay={0.1}>
            <p className="eyebrow">Let's collaborate</p>
            <h2>Mentorship, pairing sessions, and community workshops.</h2>
            <p>
              Partner with Jigish to design engineering curricula, host masterclasses, or mentor growth-minded developers across
              your organization.
            </p>
            <a className="btn primary" href="mailto:jigish.parghi@gmail.com">
              Say hello
              <ArrowIcon />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer__content">
          <p>© {new Date().getFullYear()} Jigish Parghi. Crafted for curious minds.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
