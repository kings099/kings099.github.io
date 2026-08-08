const publications = [
  {
    year: "2026",
    badge: "First author",
    title:
      "Final Checkpoints Are Not Enough: Analyzing Latent Reasoning Faithfulness Along Training Trajectories",
    authors: "Hengyu Jin, Shu Yang, Di Wang",
    venue: "arXiv · Under review at NAACL",
    summary:
      "Tracks how latent reasoning faithfulness evolves across training checkpoints, revealing dynamics that final-checkpoint evaluation alone can miss.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2607.06648" },
      { label: "PDF", href: "https://arxiv.org/pdf/2607.06648" },
    ],
  },
  {
    year: "2026",
    badge: "Findings of ACL",
    title:
      "RISER: Orchestrating Latent Reasoning Skills for Adaptive Activation Steering",
    authors:
      "Wencheng Ye, Xiaoyang Yuan, Yi Bin, Hengyu Jin, Liang Peng, Pengpeng Zeng, Heng Tao Shen",
    venue: "Findings of the Association for Computational Linguistics: ACL 2026",
    summary:
      "A plug-and-play activation-steering framework that adaptively composes reusable latent reasoning skills for more accurate and token-efficient reasoning.",
    links: [
      {
        label: "ACL Anthology",
        href: "https://aclanthology.org/2026.findings-acl.226/",
      },
      {
        label: "PDF",
        href: "https://aclanthology.org/2026.findings-acl.226.pdf",
      },
    ],
  },
  {
    year: "2026",
    badge: "IEEE TAC",
    title:
      "CORA: A Cognitive Reframing Dialogue Agent for Supporting Emotion Regulation",
    authors:
      "Tiantian Chen, Zelin Li, Xuri Chen, Ying Shen, Hengyu Jin, Lin Zhang, Shengjie Zhao",
    venue: "IEEE Transactions on Affective Computing",
    summary:
      "A multi-turn dialogue agent grounded in cognitive behavioral therapy techniques for interactive cognitive reframing and emotion regulation.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1109/TAFFC.2026.3709312",
      },
    ],
  },
  {
    year: "2026",
    badge: "CHI EA",
    title:
      "Kairotask: Probing the Bridge Between Vague Intents and Spatiotemporal Contexts",
    authors:
      "Jiachen Du, Yuanhao Zhang, Hengyu Jin, Xinkai Zou, Junwei Zhu, Xinyi Fu",
    venue: "Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems",
    summary:
      "A context-aware task assistant that uses language models to turn vague intentions into actionable spatiotemporal cues.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1145/3772363.3798333",
      },
    ],
  },
];

const experiences = [
  {
    organization: "PRADA Lab, KAUST",
    role: "Visiting Student",
    period: "Jul 2026 — Present",
    location: "Thuwal, Saudi Arabia",
    advisor: "Prof. Di Wang",
    projects: [
      "Mechanistic analysis of latent reasoning faithfulness across training trajectories.",
      "MUENV, a verifiable interactive environment for multi-user agent training and evaluation.",
    ],
  },
  {
    organization: "Aether AI",
    role: "Research Intern",
    period: "Jun 2026 — Present",
    location: "Remote",
    advisor: "Prof. Biwei Huang, UC San Diego",
    projects: [
      "Execution-time failure verification for vision-language-action agents, including natural failure-data generation in Genie Sim.",
    ],
  },
  {
    organization: "Tongji University",
    role: "Research Intern",
    period: "Oct 2024 — Dec 2025",
    location: "Shanghai, China",
    advisor: "Prof. Ying Shen",
    projects: [
      "Hidden-state steering for latent reasoning through reusable cognitive primitive vectors.",
      "CORA, a CBT-guided post-training and evaluation pipeline for multi-turn dialogue agents.",
    ],
  },
  {
    organization: "Tsinghua University",
    role: "Research Intern",
    period: "Jun 2025 — Oct 2025",
    location: "Remote",
    advisor: "Prof. Xinyi Fu",
    projects: [
      "Human-centered design and iOS development for context-aware schedule management, evaluated in an eight-day field study.",
    ],
  },
];

function AuthorLine({ authors }: { authors: string }) {
  const [before, after = ""] = authors.split("Hengyu Jin");

  return (
    <p className="publication-authors">
      {before}
      <strong>Hengyu Jin</strong>
      {after}
    </p>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-wrap" aria-label="Primary navigation">
          <a className="wordmark" href="#about" aria-label="Hengyu Jin, home">
            HJ<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
          <a className="nav-contact" href="mailto:hengyuking@gmail.com">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Undergraduate researcher · Tongji University</p>
            <h1>Hengyu Jin</h1>
            <p className="hero-lede">
              I study how foundation models reason, fail, and interact—toward
              more faithful reasoning systems and reliable AI agents.
            </p>
            <p className="hero-bio">
              I am a Software Engineering undergraduate at Tongji University,
              currently a visiting student at PRADA Lab, KAUST, and a research
              intern at Aether AI. My work spans latent reasoning, activation
              steering, verifiable agent environments, and dependable embodied
              agents.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/Hengyu_Jin_CV.pdf">
                Curriculum Vitae <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="mailto:hengyuking@gmail.com">
                Email me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="focus-panel" aria-label="Research focus">
            <div className="focus-number">01</div>
            <p className="focus-label">Research focus</p>
            <ul>
              <li>Reasoning faithfulness across training</li>
              <li>Controllable latent representations</li>
              <li>Verifiable and reliable AI agents</li>
            </ul>
            <div className="focus-status">
              <span className="status-dot" aria-hidden="true" />
              Open to research collaborations
            </div>
          </aside>
        </section>

        <section className="updates section-shell" aria-labelledby="updates-title">
          <div className="section-kicker" id="updates-title">
            Recent updates
          </div>
          <div className="updates-list">
            <article>
              <time dateTime="2026-07">Jul 2026</time>
              <p>
                Released our first-author preprint on latent reasoning
                faithfulness across training trajectories.
              </p>
            </article>
            <article>
              <time dateTime="2026-07">Jul 2026</time>
              <p>RISER appeared in Findings of ACL 2026.</p>
            </article>
            <article>
              <time dateTime="2026-04">Apr 2026</time>
              <p>Kairotask was published at CHI EA 2026.</p>
            </article>
          </div>
        </section>

        <section className="section-shell content-section" id="research">
          <div className="section-heading">
            <p className="section-index">01 / Research</p>
            <h2>Questions I work on</h2>
            <p>
              My work connects mechanistic analysis with systems that can be
              evaluated in realistic, verifiable settings.
            </p>
          </div>
          <div className="research-grid">
            <article className="research-card">
              <span>01</span>
              <h3>Latent reasoning &amp; faithfulness</h3>
              <p>
                How do hidden-state reasoning processes emerge during training,
                and when do they causally support a model&apos;s answer?
              </p>
            </article>
            <article className="research-card">
              <span>02</span>
              <h3>Reliable AI agents</h3>
              <p>
                How can agents detect execution failures, recover early, and be
                evaluated with grounded, reproducible environments?
              </p>
            </article>
            <article className="research-card">
              <span>03</span>
              <h3>Human-centered AI systems</h3>
              <p>
                How can language models translate vague human intentions into
                useful actions while preserving agency and context?
              </p>
            </article>
          </div>
        </section>

        <section className="section-shell content-section" id="publications">
          <div className="section-heading publication-heading">
            <div>
              <p className="section-index">02 / Publications</p>
              <h2>Selected publications</h2>
            </div>
            <p>
              Official paper pages are linked through arXiv, ACL Anthology, and
              publisher DOI records.
            </p>
          </div>

          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <div className="publication-year">{publication.year}</div>
                <div className="publication-body">
                  <div className="publication-meta">
                    <span>{publication.badge}</span>
                    <span>{publication.venue}</span>
                  </div>
                  <h3>{publication.title}</h3>
                  <AuthorLine authors={publication.authors} />
                  <p className="publication-summary">{publication.summary}</p>
                  <div className="publication-links" aria-label={`Links for ${publication.title}`}>
                    {publication.links.map((link) => (
                      <a
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="experience">
          <div className="section-heading">
            <p className="section-index">03 / Experience</p>
            <h2>Research experience</h2>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.organization}-${experience.period}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-date">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
                <div className="timeline-content">
                  <h3>{experience.organization}</h3>
                  <p className="timeline-role">
                    {experience.role} <span>·</span> Advisor: {experience.advisor}
                  </p>
                  <ul>
                    {experience.projects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="projects">
          <div className="section-heading">
            <p className="section-index">04 / Projects</p>
            <h2>Selected projects</h2>
          </div>
          <div className="project-grid">
            <article className="project-card project-featured">
              <div className="project-topline">
                <span>Co-founder · Full-stack lead</span>
                <span>2025 — 2026</span>
              </div>
              <h3>Follo AI</h3>
              <p className="project-tagline">
                A context-aware intelligent schedule assistant built around a
                response–perception–memory architecture.
              </p>
              <p>
                Designed the LLM routing engine, multimodal iOS perception
                pipeline, and structured memory layer; delivered a high-fidelity
                MVP and advanced the project to the financing phase.
              </p>
              <div className="project-tags">
                <span>AI agents</span>
                <span>iOS</span>
                <span>Multimodal systems</span>
              </div>
            </article>
            <article className="project-card">
              <div className="project-topline">
                <span>Team lead · Core developer</span>
                <span>2025</span>
              </div>
              <h3>Scrollscape</h3>
              <p className="project-tagline">
                An immersive Chinese-garden education experience for Apple
                Vision Pro.
              </p>
              <p>
                Built spatial interactions, a virtual–real portal, and an
                automated aesthetic evaluation system. Awarded First Prize in
                the East China Region of the China Collegiate Computing Contest.
              </p>
              <div className="project-tags">
                <span>Vision Pro</span>
                <span>Spatial computing</span>
                <span>Human–computer interaction</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell background-section" aria-labelledby="background-title">
          <div className="background-heading">
            <p className="section-index">05 / Background</p>
            <h2 id="background-title">Education &amp; recognition</h2>
          </div>
          <div className="background-grid">
            <article>
              <p className="background-label">Education</p>
              <h3>Tongji University</h3>
              <p>B.Eng. in Software Engineering · Sep 2023 — Present</p>
              <p className="background-detail">GPA 4.60 / 5.00 · 91.01 / 100</p>
            </article>
            <article>
              <p className="background-label">Recognition</p>
              <h3>Selected awards</h3>
              <p>First Prize, China Collegiate Computing Contest — East China Region</p>
              <p className="background-detail">First-grade Ethnic Class Special Scholarship, 2023–2025</p>
            </article>
            <article>
              <p className="background-label">Toolbox</p>
              <h3>Building research systems</h3>
              <p>Python · C++ · Swift · SwiftUI · React · FastAPI</p>
              <p className="background-detail">Machine learning · Computer vision · Agent systems</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div>
          <p className="footer-title">Let&apos;s talk research.</p>
          <a href="mailto:hengyuking@gmail.com">hengyuking@gmail.com</a>
        </div>
        <div className="footer-meta">
          <a href="/Hengyu_Jin_CV.pdf">Download CV</a>
          <p>© 2026 Hengyu Jin</p>
        </div>
      </footer>
    </div>
  );
}
