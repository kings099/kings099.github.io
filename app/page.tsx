import VisitorMap from "./visitor-map";

const publications = [
  {
    year: "2026",
    badge: "Preprint",
    title: "RobotAgentBench: Towards Open-world Robot Autonomy",
    authors:
      "Lingjun Mao†, Jinglin Cao†, Lukun He†, Wenpeng Xu, Yuchen Yan, Hengyu Jin, Zijun Zhang, Jinzhou Tang, Songyao Jin, Ziche Liu, Yifei Shao, Junbo Huang, Fang Nan, Ruobing Han, Ziqiao Xi, Ziming Xu, Shuang Liang, Sibo Zhu, Wenyi Wu, Xinyue Wang, Yiming Huang, Xinkai Zou, Gao Zhu, Kun Zhou, Biwei Huang († equal contribution)",
    venue: "arXiv",
    abstract:
      "Recent advances in vision-language-action (VLA) and world-action models (WAMs) have significantly improved robotic manipulation, yet deploying robots in the open world demands a higher level of autonomy beyond executing predefined tasks. Robot agents offer a promising paradigm for this transition, integrating task discovery, contextual reasoning, physical execution, and adaptive recovery into a closed interaction loop. However, existing benchmarks largely evaluate isolated capabilities, failing to capture the complexity of open-world robot autonomy. We introduce RobotAgentBench (RAB), a comprehensive benchmark for evaluating robot agents in realistic, open-world household environments. Through an agent-assisted, human-in-the-loop real-to-sim pipeline, RAB constructs 50 diverse household layouts with interactive objects and physically grounded tasks, encompassing 90 atomic tasks, 18 short-horizon tasks, 8 long-horizon tasks, and 4 open-ended scenarios. RAB provides a multi-level evaluation of robot agent capabilities: (1) task-level assessments systematically examine five complementary dimensions: task discovery, context reasoning, manipulation, failure recovery, and robustness; (2) scenario-level evaluation assesses how agents integrate these capabilities to autonomously fulfill high-level user needs. Furthermore, RAB enables systematic comparisons of standalone VLA/WAM models and diverse robot agent architectures under a unified planning-execution-verification framework. Extensive experiments reveal substantial gaps between manipulation and autonomy, demonstrate the advantages of agentic architectures and recursive self-improvement, and highlight the remaining challenges toward open-world robot autonomy.",
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
    abstract:
      "Latent reasoning performs multi-step inference in continuous hidden states, promising more compact and efficient reasoning. However, these opaque states raise a question of faithfulness: whether the latent reasoning steps drive the final answer. Prior work reports unfaithful behaviors at selected checkpoints, leaving their development during training unexamined. We track behavioral and activation-based evidence across training using verified counterfactual edits and interventions on the latent reasoning states. We find that accuracy can improve while models become less responsive to edits that change the required reasoning path and the correct answer. This counterfactual responsiveness follows distinct trajectories across latent reasoning approaches. On the graph reachability task ProsQA, output sensitivity to noise replacement declines alongside counterfactual responsiveness. Across separately trained binary-choice and open-ended versions of GSM8K math problems, interventions on all latent states show opposite sensitivity trajectories. Guided by these trajectories, we intervene on the training procedure and improve counterfactual responsiveness. These results show that evaluating only a final checkpoint can obscure both when counterfactual responsiveness changes and what the latent states contribute.",
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
    abstract:
      "Recent work on domain-specific reasoning with large language models (LLMs) has largely relied on training-intensive approaches that require updating model parameters. Although activation steering has emerged as a parameter-efficient alternative, existing methods typically rely on static and manually designed interventions, limiting their ability to adapt to the dynamic nature of complex reasoning. To address this limitation, we propose RISER (Router-based Intervention for Steerable Enhancement of Reasoning), a plug-and-play intervention framework that adaptively steers LLM reasoning in activation space. RISER builds a library of reusable reasoning vectors and employs a lightweight Router to dynamically compose these vectors for each input. The Router is optimized via reinforcement learning under task-level rewards, enabling the emergent and compositional activation of latent cognitive primitives. Across seven diverse benchmarks, RISER achieves average zero-shot accuracy improvements of 3.4–6.5% over the base model, while outperforming chain-of-thought-style reasoning with 2–3× higher token efficiency and robust accuracy gains. Further analysis demonstrates that RISER autonomously combines multiple vectors into interpretable and precise control strategies, pointing toward more controllable and efficient LLM reasoning.",
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
    abstract:
      "Effective personal task management hinges on anchoring abstract intentions to precise spatiotemporal retrieval contexts. However, the ambiguity of user inputs often fractures the link between intent and context, causing tasks to lie dormant due to missed execution windows. To address this, we introduce Kairotask. This mobile probe utilizes Large Language Models to proactively inject spatiotemporal metadata into ambiguous instructions. By introducing benign friction through an inference-confirmation loop, Kairotask assists users in concretizing execution contexts while reinforcing memory encoding. An 8-day field study (N = 7) suggests that the system functions as effective \"cognitive scaffolding,\" helping users concretize abstract intents into actionable parameters. The study further reveals the nuanced influence of user structuredness: the system effectively compensates for the schedule management cognitive performance of \"weak planners,\" while yielding contrary outcomes for \"strong planners.\" Based on these findings, we discuss design implications for adaptive AI in Personal Information Management.",
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
    abstract:
      "Cognitive Behavioral Therapy (CBT) is recognized as one of the most effective and digitally accessible psychotherapies. However, existing CBT-based digital applications often adhere to rigid, predefined processes to reframe users’ negative thoughts, neglecting the flexibility needs of users in social communication contexts. Furthermore, while the core principle of CBT is cognitive reframing, many existing studies straightly provide positive reframed thoughts for users without encouraging autonomous self-reflection and correction of cognitive distortions. To address these research gaps, we propose a cognitive reframing dialogue agent powered by large language models, CORA, which enhances the flexibility of dialogue and improves the overall user experience. In addition, CORA digitalizes four practical CBT cognitive reframing techniques, facilitating users to explore their mental states and reconsider maladaptive cognition autonomously. To train CORA, we develop a counseling dialogue dataset based on these four cognitive reframing techniques, referred to as the GARD dataset. Experimental results show that CORA demonstrates strong empathy and technical proficiency, effectively alleviating users’ negative thoughts and improving their moods. This approach offers a novel pathway for the comprehensive digitization of CBT, facilitating advancements in the field of digital health. The code and dataset are available at https://github.com/slptongji/CORA.",
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
    organization: "Tsinghua University",
    role: "Research Intern",
    period: "Jun 2025 — Oct 2025",
    location: "Remote",
    advisor: "Prof. Xinyi Fu",
    projects: [
      "Kairotask: context-aware scheduling from vague intentions, combining Qwen-Plus reasoning with an iOS geofencing field study.",
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
  { name: "Aether AI", image: "/logos/aether.svg", url: "https://aetherlabs.ai/", className: "logo-aether" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="mailto:jhy99@tongji.edu.cn">Contact</a>
        </nav>
      </header>
      <main id="main-content">
        <section className="profile" id="about" aria-labelledby="profile-name">
          <div className="profile-copy">
            <h1 id="profile-name">Hengyu Jin</h1>
            <p>
              I am an undergraduate student at <a href="https://www.tongji.edu.cn/">Tongji University</a>,
              currently a Research Intern at <a href="https://aetherlabs.ai/">Aether AI</a>.
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

        <section className="content-section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Research experience</h2>
          <div className="experience-list">
            {experiences.map((experience) => {
              const affiliation = affiliations.find((item) => experience.organization.includes(item.name === "KAUST" ? "KAUST" : item.name));
              const experienceLogo = experience.organization === "Tsinghua University" ? "/logos/tsinghua-crest.svg" : affiliation?.image;
              return (
                <article className="experience" key={experience.organization}>
                  <div className={`experience-logo ${affiliation?.className ?? ""}`}>
                    {affiliation && experienceLogo ? <img src={experienceLogo} alt={`${affiliation.name} ${experience.organization === "Tsinghua University" ? "crest" : "logo"}`} width="100" height="58" loading="lazy" /> : null}
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
                <details className="publication-abstract">
                  <summary>Abstract</summary>
                  <p className="publication-summary">{publication.abstract}</p>
                </details>
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

        <VisitorMap />
      </main>
      <footer className="site-footer"><span>© 2026 Hengyu Jin</span><a href="mailto:jhy99@tongji.edu.cn">jhy99@tongji.edu.cn</a></footer>
    </div>
  );
}
