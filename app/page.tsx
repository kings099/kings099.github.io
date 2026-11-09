const publications = [
  {
    year: "2026",
    badge: "First author",
    title:
      "Final Checkpoints Are Not Enough: Analyzing Latent Reasoning Faithfulness Along Training Trajectories",
    authors: "Hengyu Jin, Shu Yang, Di Wang",
    venue: "arXiv · Under review at ACL Rolling Review",
    summary:
      "Tracks how latent reasoning faithfulness evolves across training checkpoints, revealing dynamics that final-checkpoint evaluation alone can miss.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2607.06648" },
      { label: "PDF", href: "https://arxiv.org/pdf/2607.06648" },
    ],
  },
  {
    year: "2026",
    badge: "First author",
    title:
      "Concord: An Interactive Environment for Evaluating Multi-User Agents under Distributed Information and Consent",
    authors: "Hengyu Jin, Shu Yang, Di Wang",
    venue: "Under review at ACL Rolling Review",
    summary:
      "An interactive environment where one agent serves several interdependent users, showing that obtaining users' consent, not gathering their information, is the main bottleneck.",
    links: [],
  },
  {
    year: "2026",
    badge: "Findings of ACL",
    title:
      "RISER: Orchestrating Latent Reasoning Skills for Adaptive Activation Steering",
    authors:
      "Wencheng Ye, Xiaoyang Yuan, Yi Bin, Hengyu Jin, Liang Peng, Pengpeng Zeng, Heng Tao Shen",
    venue: "Findings of ACL 2026",
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
    badge: "CHI EA 2026",
    title:
      "Kairotask: Probing the Bridge Between Vague Intents and Spatiotemporal Contexts",
    authors:
      "Jiachen Du, Yuanhao Zhang, Hengyu Jin, Xinkai Zou, Junwei Zhu, Xinyi Fu",
    venue: "CHI 2026 Extended Abstracts",
    summary:
      "A context-aware task assistant that uses language models to turn vague intentions into actionable spatiotemporal cues.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1145/3772363.3798333",
      },
    ],
  },
  {
    year: "2026",
    badge: "IEEE TAC",
    title:
      "CORA: A Cognitive Reframing Dialogue Agent for Supporting Emotion Regulation",
    authors:
      "T. Chen, Z. Li, X. Chen, Y. Shen, Hengyu Jin, L. Zhang, S. Zhao",
    venue: "IEEE Transactions on Affective Computing, 17(3): 2432–2447",
    summary:
      "A dialogue agent that supports emotion regulation through multi-turn cognitive reframing grounded in cognitive behavioral therapy.",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1109/TAFFC.2026.3709312",
      },
    ],
  },
  {
    year: "2026",
    badge: "Preprint",
    title: "RobotAgentBench: Towards Open-world Robot Autonomy",
    authors:
      "Lingjun Mao†, Jinglin Cao†, Lukun He†, Wenpeng Xu, Yuchen Yan, Hengyu Jin, Zijun Zhang, Jinzhou Tang, Songyao Jin, Ziche Liu, Yifei Shao, Junbo Huang, Fang Nan, Ruobing Han, Ziqiao Xi, Ziming Xu, Shuang Liang, Sibo Zhu, Wenyi Wu, Xinyue Wang, Yiming Huang, Xinkai Zou, Gao Zhu, Kun Zhou, Biwei Huang († equal contribution)",
    venue: "arXiv",
    summary:
      "A benchmark for robot agents in realistic household environments, evaluating task discovery, reasoning, manipulation, recovery, and robustness under a shared planning–execution–verification framework.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2610.34649" },
      {
        label: "Project",
        href: "https://aetherlabsai.github.io/RobotAgentBench/",
      },
    ],
  },
];

const experiences = [
  {
    organization: "PRADA Lab, KAUST",
    role: "Visiting Student",
    period: "Mar 2026 — Oct 2026",
    location: "Saudi Arabia & Remote",
    advisor: "Prof. Di Wang",
    projects: [
      "Latent reasoning faithfulness along training trajectories: verified counterfactual edits and latent-state interventions show that accuracy can rise while responsiveness to the required reasoning path falls.",
      "Concord: an interactive environment with 309 tasks and 190 groups of simulated users for evaluating agents that serve several interdependent users.",
    ],
  },
  {
    organization: "Aether AI",
    role: "Research Intern",
    period: "Jun 2026 — Present",
    location: "Remote",
    advisor: "Prof. Biwei Huang (UC San Diego)",
    projects: [
      "RobotAgentBench: co-authored a benchmark for open-world robot autonomy, contributing to the construction of its simulation data.",
      "Execution-time verification for robot-use agents, detecting failures during VLA execution, with natural failure-data generation in Genie Sim.",
    ],
  },
  {
    organization: "Tongji University",
    role: "Undergraduate Researcher",
    period: "Oct 2024 — Dec 2025",
    location: "Shanghai, China",
    advisor: "",
    projects: [
      "RISER: hidden-state steering with reusable reasoning vectors for frozen LLMs, giving 3.4–6.5-point average accuracy gains over the base models and 2–3× higher token efficiency than chain-of-thought.",
      "CORA and follow-up work on emotional support (advisor: Prof. Ying Shen): built a blinded evaluation platform, then used LLaMA-Factory to fine-tune Qwen2.5-7B-Instruct with LoRA for different personality styles.",
    ],
  },
  {
    organization: "Tsinghua University",
    role: "Research Intern",
    period: "Jun 2025 — Oct 2025",
    location: "Remote",
    advisor: "Prof. Xinyi Fu",
    projects: [
      "Kairotask: context-aware scheduling from vague intentions, combining Qwen-Plus reasoning with an iOS geofencing field study.",
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
          <a className="nav-contact" href="mailto:jhy99@tongji.edu.cn">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Undergraduate researcher in artificial intelligence</p>
            <h1>Hengyu Jin</h1>
            <p className="hero-lede">
              I study reasoning and reliability in foundation models, and how AI
              agents work with the people they serve.
            </p>
            <div className="hero-facts" aria-label="Academic profile">
              <div className="hero-fact">
                <p>Education</p>
                <div>
                  <strong>Tongji University</strong>
                  <span>B.Eng. in Software Engineering · GPA 4.60 / 5.00</span>
                </div>
              </div>
              <div className="hero-fact">
                <p>Current</p>
                <div>
                  <strong>Research Intern · Aether AI</strong>
                  <span>Previously Visiting Student · PRADA Lab, KAUST</span>
                </div>
              </div>
            </div>
            <div className="hero-actions">
              <a className="button button-secondary" href="mailto:jhy99@tongji.edu.cn">
                Email me <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-secondary"
                href="https://scholar.google.com/citations?user=R7hqHtEAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/kings099"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="focus-panel" aria-label="Research focus">
            <p className="focus-label">Research interests</p>
            <ul>
              <li>Reasoning and Reliability in Foundation Models</li>
              <li>AI Agents</li>
              <li>Robot-Use Agent</li>
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
              <time dateTime="2026-10">Oct 2026</time>
              <p>
                Released RobotAgentBench, a benchmark for open-world robot
                autonomy, with Aether AI.
              </p>
            </article>
            <article>
              <time dateTime="2026-10">Oct 2026</time>
              <p>
                Submitted Concord, my second first-author paper on multi-user
                agents, to ACL Rolling Review.
              </p>
            </article>
            <article>
              <time dateTime="2026-07">Jul 2026</time>
              <p>CORA was published in IEEE Transactions on Affective Computing.</p>
            </article>
            <article>
              <time dateTime="2026-07">Jul 2026</time>
              <p>
                Released our first-author preprint on latent reasoning
                faithfulness across training trajectories and submitted it to
                ACL Rolling Review.
              </p>
            </article>
            <article>
              <time dateTime="2026-07">Jul 2026</time>
              <p>RISER appeared in Findings of ACL 2026.</p>
            </article>
            <article>
              <time dateTime="2026-04">Apr 2026</time>
              <p>Kairotask appeared in the CHI 2026 Extended Abstracts.</p>
            </article>
          </div>
        </section>

        <section className="section-shell content-section" id="research">
          <div className="section-heading">
            <p className="section-index">01 / Research</p>
            <h2>Research interests</h2>
            <p>
              My work centers on understanding how foundation models reason
              and building AI agents that behave reliably in practice.
            </p>
          </div>
          <div className="research-grid">
            <article className="research-card">
              <span>01</span>
              <h3>Reasoning and reliability</h3>
              <p>
                Studying how foundation models reason in latent and explicit
                forms, and whether their reasoning stays faithful as they are
                trained.
              </p>
            </article>
            <article className="research-card">
              <span>02</span>
              <h3>AI agents</h3>
              <p>
                Building interactive environments for agents that serve several
                users, and studying robot-use agents that plan, act, and
                recover from failures.
              </p>
            </article>
            <article className="research-card">
              <span>03</span>
              <h3>Robot-Use Agent</h3>
              <p>
                Understanding how agents can learn what a particular person
                wants from personal context and interaction.
              </p>
            </article>
          </div>
        </section>

        <section className="section-shell content-section" id="publications">
          <div className="section-heading publication-heading">
            <div>
              <p className="section-index">02 / Publications</p>
              <h2>Publications &amp; preprints</h2>
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
                  {publication.links.length > 0 ? (
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
                  ) : null}
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
                    {experience.role}
                    {experience.advisor ? (
                      <>
                        {" "}
                        <span>·</span> Advisor: {experience.advisor}
                      </>
                    ) : null}
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
                <span>Nov 2025 — Feb 2026</span>
              </div>
              <h3>Follo AI</h3>
              <p className="project-tagline">
                A context-aware scheduling agent extended from the Kairotask
                framework.
              </p>
              <p>
                Designed a response–perception–memory architecture combining
                LLM-based intent interpretation, environmental context, and
                structured user memory; led mobile and backend development and
                delivered a functional MVP.
              </p>
              <div className="project-tags">
                <span>AI agents</span>
                <span>iOS</span>
                <span>Context awareness</span>
              </div>
            </article>
            <article className="project-card">
              <div className="project-topline">
                <span>Team lead · Core developer</span>
                <span>Jun 2025 — Sep 2025</span>
              </div>
              <h3>Scrollscape</h3>
              <p className="project-tagline">
                An immersive Chinese-garden education experience for Apple
                Vision Pro.
              </p>
              <p>
                Implemented visionOS interaction and rendering components,
                including gesture-based navigation, virtual–physical scene
                transitions, and an automated aesthetic-evaluation module.
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
              <p>B.Eng. in Software Engineering · Sep 2023 — Jun 2027 (expected)</p>
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
              <p>Python · C++ · Swift · PyTorch · Hugging Face Transformers</p>
              <p className="background-detail">LLaMA-Factory · SwiftUI · React · FastAPI · Git · Linux · Slurm</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div>
          <p className="footer-title">Let&apos;s talk research.</p>
          <a href="mailto:jhy99@tongji.edu.cn">jhy99@tongji.edu.cn</a>
        </div>
        <div className="footer-meta">
          <div className="footer-links">
            <a
              href="https://scholar.google.com/citations?user=R7hqHtEAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/kings099" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p>© 2026 Hengyu Jin</p>
        </div>
      </footer>
    </div>
  );
}
