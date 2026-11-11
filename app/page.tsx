import VisitorMap from "./visitor-map";

const publications = [
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
];

const experiences = [
  {
    organization: "Aether AI",
    role: "Research Intern",
    period: "Jun 2026 — Present",
    location: "Remote",
    advisor: "Prof. Biwei Huang (UC San Diego)",
    projects: [
      "RobotAgentBench: co-authored a benchmark for open-world robot autonomy, contributing to the construction of its simulation data.",
      "Working on Robot Agent System",
    ],
  },
  {
    organization: "PRADA Lab, KAUST",
    role: "Visiting Student",
    period: "Mar 2026 — Oct 2026",
    location: "Saudi Arabia & Remote",
    advisor: "Prof. Di Wang",
    projects: [
      "Latent reasoning faithfulness along training trajectories: verified counterfactual edits and latent-state interventions show that accuracy can rise while responsiveness to the required reasoning path falls.",
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

const affiliations = [
  { name: "Tongji University", image: "/logos/tongji.png", url: "https://www.tongji.edu.cn/", className: "logo-tongji" },
  { name: "Tsinghua University", image: "/logos/future-lab.svg", url: "https://thfl.tsinghua.edu.cn/", className: "logo-tsinghua" },
  { name: "KAUST", image: "/logos/kaust-wordmark.svg", url: "https://www.kaust.edu.sa/", className: "logo-kaust" },
  { name: "Aether AI", image: "/logos/aether.svg", url: "https://aetherlabsai.github.io/RobotAgentBench/", className: "logo-aether" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="mailto:jhy99@tongji.edu.cn">Contact</a>
        </nav>
      </header>
      <main id="main-content">
        <section className="profile" id="about" aria-labelledby="profile-name">
          <div className="profile-copy">
            <h1 id="profile-name">Hengyu Jin</h1>
            <p>
              I am an undergraduate student at <a href="https://www.tongji.edu.cn/">Tongji University</a>,
              currently a Research Intern at <a href="https://aetherlabsai.github.io/RobotAgentBench/">Aether AI</a>.
            </p>
            <p>My research interests center on:</p>
            <ul className="interests">
              <li><strong>Reliability and Reasoning in Foundation Models</strong></li>
              <li><strong>Robot-Use Agent Systems</strong></li>
              <li><strong>AI Agents</strong></li>
            </ul>
            <div className="profile-links">
              <a href="mailto:jhy99@tongji.edu.cn">Email</a>
              <span aria-hidden="true">/</span>
              <a href="https://scholar.google.com/citations?user=R7hqHtEAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer">Google Scholar</a>
              <span aria-hidden="true">/</span>
              <a href="https://github.com/kings099" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <img className="portrait" src="/portrait.jpg" width="220" height="293" alt="Portrait of Hengyu Jin" fetchPriority="high" />
        </section>

        <div className="affiliations" aria-label="Current and previous affiliations">
          {affiliations.map((affiliation) => (
            <a className={`affiliation ${affiliation.className}`} href={affiliation.url} key={affiliation.name} target="_blank" rel="noreferrer">
              <img src={affiliation.image} alt={`${affiliation.name} logo`} width="160" height="58" />
              <span>{affiliation.name}</span>
            </a>
          ))}
        </div>

        <section className="content-section" id="publications" aria-labelledby="publications-title">
          <h2 id="publications-title">Publications &amp; preprints</h2>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <h3>{publication.title}</h3>
                <AuthorLine authors={publication.authors} />
                <p className="publication-venue">{publication.venue}{publication.badge === "First author" ? " · First author" : ""}</p>
                <div className="publication-links" aria-label={`Links for ${publication.title}`}>
                  {publication.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">[{link.label}]</a>
                  ))}
                </div>
                <p className="publication-summary">{publication.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section news" aria-labelledby="news-title">
          <h2 id="news-title">News</h2>
          <ul className="news-list">
            <li><time dateTime="2026-10">Oct 2026</time><span>Released RobotAgentBench with Aether AI.</span></li>
            <li><time dateTime="2026-07">Jul 2026</time><span>CORA was published in IEEE Transactions on Affective Computing.</span></li>
            <li><time dateTime="2026-07">Jul 2026</time><span>Released our first-author preprint on latent reasoning faithfulness along training trajectories.</span></li>
            <li><time dateTime="2026-07">Jul 2026</time><span>RISER appeared in Findings of ACL 2026.</span></li>
            <li><time dateTime="2026-04">Apr 2026</time><span>Kairotask appeared in the CHI 2026 Extended Abstracts.</span></li>
          </ul>
        </section>

        <section className="content-section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Research experience</h2>
          <div className="experience-list">
            {experiences.map((experience) => {
              const affiliation = affiliations.find((item) => experience.organization.includes(item.name === "KAUST" ? "KAUST" : item.name));
              return (
                <article className="experience" key={experience.organization}>
                  <div className={`experience-logo ${affiliation?.className ?? ""}`}>
                    {affiliation ? <img src={affiliation.image} alt={`${affiliation.name} logo`} width="100" height="58" loading="lazy" /> : null}
                  </div>
                  <div className="experience-content">
                    <div className="experience-heading"><h3>{experience.organization}</h3><span>{experience.period}</span></div>
                    <p className="experience-role">{experience.role}{experience.advisor ? ` · Advisor: ${experience.advisor}` : ""}</p>
                    <ul>{experience.projects.map((project) => <li key={project}>{project}</li>)}</ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <VisitorMap />
      </main>
      <footer className="site-footer"><span>© 2026 Hengyu Jin</span><a href="mailto:jhy99@tongji.edu.cn">jhy99@tongji.edu.cn</a></footer>
    </div>
  );
}
