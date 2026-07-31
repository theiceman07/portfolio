export const siteConfig = {
  name: "Malligaarjunan A V K",
  nickname: "Arjun",
  title: "Malligaarjunan A V K | Portfolio",
  description:
    "Technology student passionate about quantitative finance, explainable AI, software engineering and data-driven decision making.",
  url: "https://arjun-avk.vercel.app",
  location: "Coimbatore, India",
  email: "malligaarjunan.24it@kct.ac.in",
  github: "theiceman07",
  githubUrl: "https://github.com/theiceman07",
  linkedinUrl: "https://www.linkedin.com/in/malligaarjunan-a-v-k-16a3412ba/",
  resumePath: "/resume.pdf",
};

export const navItems = [
  { id: "hero", label: "Home", number: "01" },
  { id: "about", label: "About", number: "02" },
  { id: "skills", label: "Skills", number: "03" },
  { id: "experience", label: "Experience", number: "04" },
  { id: "projects", label: "Projects", number: "05" },
  { id: "protosem", label: "Protosem", number: "06" },
  { id: "interests", label: "Interests", number: "07" },
  { id: "photography", label: "Photos", number: "08" },
  { id: "contact", label: "Contact", number: "09" },
] as const;

export const tickerItems = [
  "QUANT FINANCE",
  "RISK ANALYTICS",
  "VaR/CVaR",
  "EXPLAINABLE AI",
  "PYTHON",
  "FASTF1",
  "BLOCKCHAIN",
  "NSE EQUITY",
  "STREAMLIT",
  "NETWORKX",
  "KCT · COIMBATORE",
];

export const personalityTraits = [
  { label: "Curiosity", value: "98" },
  { label: "Analytical", value: "96" },
  { label: "Competitive", value: "94" },
  { label: "Creative", value: "91" },
  { label: "Global Mindset", value: "95" },
];

export const aboutStatement = `I'm a B.Tech Information Technology student at Kumaraguru College of Technology, Coimbatore — driven by the intersection of markets, models, and machines. I build at the convergence of quantitative finance, explainable AI, and software engineering — translating complex data into decisions that matter. Whether it's risk analytics, algorithmic thinking, or full-stack systems, I approach every problem with analytical rigor, creative problem-solving, and a competitive edge honed on track and pitch alike.`;

export const skills = [
  "Python",
  "Machine Learning",
  "Data Analysis",
  "Risk Analytics",
  "Financial Modeling",
  "Streamlit",
  "Docker",
  "Git/GitHub",
  "Blockchain",
  "NetworkX",
  "FastF1",
  "Matplotlib",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Data Visualization",
  "Time Series Analysis",
  "React",
  "TypeScript",
  "SQL",
] as const;

export const experiences = [
  {
    id: "forge-intern",
    company: "Forge Innovation & Ventures",
    program: "Innovation Engineer Trainee",
    platform: "Coimbatore",
    period: "Jul 2026 – Present",
    type: "real",
    summary: "Participating in an intensive innovation and product development fellowship, focusing on real-world problem solving, design thinking, and rapid prototyping of technology solutions.",
    details: [
      "Applying systems engineering and design thinking methodologies to define problem statements and build proof-of-concept prototypes.",
      "Collaborating with mentors and cross-functional teams to align technical development with real-world industry requirements and business objectives.",
      "Engaging in the ProtoSem (Graduate Innovation Engineer Certification) curriculum to accelerate product innovation and technical validation.",
    ],
    tags: ["Product Innovation", "Design Thinking", "Rapid Prototyping", "ProtoSem"],
  },
  {
    id: "lysa-intern",
    company: "Lysa Solutions",
    program: "Software Quality Assurance, Responsive UI/UX Engineering & AI-Based Proctoring System — Intern",
    platform: "Coimbatore",
    period: "June 2026 (1 month)",
    type: "real",
    summary: "Contributed to DigiLearn, a multi-tenant school/college management platform, and ExamGuard, an AI-based remote exam proctoring desktop application, across a live production codebase (Django REST backend, React web client, Electron desktop app).",
    details: [
      "Manual QA & Defect Documentation: Functionally tested DigiLearn across Admin, Faculty, and Student roles; built a structured, severity-ranked defect register covering functional, UI, and data-integrity issues.",
      "Mobile Responsiveness & UI/UX Engineering: Audited the platform against usability heuristics across mobile/tablet/desktop breakpoints; implemented responsive layout fixes on high-traffic dashboard and exam-listing screens.",
      "AI-Based Proctoring System (ExamGuard): Functionally tested an on-device computer-vision proctoring system covering identity verification, attention/gaze monitoring, and prohibited-item detection, across varied lighting/camera/multi-person conditions; verified session lifecycle reliability.",
      "Note: Work governed by a signed NDA — description here is intentionally conceptual, no proprietary implementation details included."
    ],
    tags: ["Computer Vision", "QA/Testing", "Django/React/Electron"],
  },
  {
    id: "groovegami-intern",
    company: "GrooveGami",
    program: "Digital Content Creator — Intern",
    platform: "Coimbatore",
    period: "Jun 2025 – Jul 2025 (2 months)",
    type: "real",
    summary: "Spearheaded the creation of engaging digital content and visual assets for GrooveGami across multiple digital platforms. Leveraged advanced graphic design principles to produce high-performing, on-brand marketing materials that elevated social media presence and drove user engagement.",
    details: [
      "Designed dynamic visual content, infographics, and marketing collateral using Canva and modern graphic design tools.",
      "Produced and scheduled on-brand digital assets for social media channels, optimizing formats for maximum reach.",
      "Collaborated with cross-functional teams to define content strategy, creative direction, and brand guidelines.",
      "Analyzed engagement metrics to iterate on visual campaigns, ensuring alignment with target demographics."
    ],
    tags: ["Graphic Design", "Canva", "Content Strategy", "Digital Marketing", "Visual Storytelling"],
  },
  {
    id: "gs-risk",
    company: "Goldman Sachs",
    program: "Risk Job Simulation",
    platform: "Forage",
    period: "2025",
    type: "simulated",
    summary: "Applied risk frameworks to assess credit exposure and market risk under simulated trading scenarios.",
    details: [
      "Evaluated counterparty credit risk using exposure metrics and collateral analysis",
      "Built scenario analyses for market risk under stressed macro conditions",
      "Interpreted VaR outputs and communicated risk findings to stakeholders",
      "Applied Goldman Sachs risk governance principles in a simulated desk environment",
    ],
    tags: [],
  },
  {
    id: "jpm-quant",
    company: "JPMorgan Chase",
    program: "Quantitative Research Job Simulation",
    platform: "Forage",
    period: "2025",
    type: "simulated",
    summary: "Quantitative research workflow — pricing models, statistical analysis, and strategy backtesting.",
    details: [
      "Implemented quantitative models for pricing and risk measurement",
      "Conducted statistical analysis on market data to identify signal patterns",
      "Backtested trading strategies and evaluated performance metrics",
      "Documented research methodology and model assumptions",
    ],
    tags: [],
  },
  {
    id: "jpm-ib",
    company: "JPMorgan Chase",
    program: "Investment Banking Job Simulation",
    platform: "Forage",
    period: "2025",
    type: "simulated",
    summary: "M&A advisory simulation — valuation, pitch book construction, and deal analysis.",
    details: [
      "Performed comparable company and precedent transaction analyses",
      "Built DCF valuation models with sensitivity tables",
      "Structured pitch book narratives for client presentations",
      "Analyzed strategic rationale for M&A transactions",
    ],
    tags: [],
  },
  {
    id: "jpm-swe",
    company: "JPMorgan Chase",
    program: "Software Engineering Job Simulation",
    platform: "Forage",
    period: "2025",
    type: "simulated",
    summary: "Enterprise software engineering — API design, data pipelines, and production-grade code practices.",
    details: [
      "Designed RESTful interfaces for financial data services",
      "Implemented data processing pipelines with error handling and logging",
      "Applied code review standards and testing practices",
      "Collaborated on system architecture decisions in an agile workflow",
    ],
    tags: [],
  },
] as const;

export const projects = [
  {
    id: "risk-intelligence",
    index: "01",
    title: "Explainable Risk Intelligence System for Indian Equity Markets",
    category: "Quant Finance · Risk Analytics",
    proves:
      "Proves end-to-end risk quantification with interpretable ML — not black-box forecasting.",
    description:
      "A production-style risk analytics platform for NSE-listed equities. Implements rolling and EWMA volatility estimators, VaR/CVaR at multiple confidence levels, regime detection via statistical breakpoints, and COVID-era stress analysis. Features an interpretable ML forecasting layer with SHAP explainability, a Streamlit dashboard for interactive exploration, Docker containerization, and live Yahoo Finance NSE data ingestion.",
    tags: [
      "Python",
      "Streamlit",
      "Docker",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Yahoo Finance",
      "NSE",
    ],
    badges: ["VaR/CVaR", "COVID stress-tested", "Explainable ML"],
    href: "https://github.com/theiceman07/risk-intelligence-system",
    linkLabel: "View on GitHub",
  },
  {
    id: "blockchain-viz",
    index: "02",
    title: "Blockchain Visualizer",
    category: "Blockchain · Cryptography",
    proves:
      "Proves deep understanding of consensus, Merkle proofs, and cryptographic validation — not surface-level Web3.",
    description:
      "Interactive Google Colab blockchain simulator covering Proof of Work mining, Merkle Tree construction and verification, ECDSA digital signatures, transaction fee mechanics, block validation pipelines, and tamper detection. NetworkX powers graph-based visualization of the chain topology and peer propagation.",
    tags: ["Python", "NetworkX", "ECDSA", "Merkle Trees", "Google Colab"],
    badges: ["PoW Mining", "Tamper Detection"],
    href: "https://github.com/theiceman07/Blockchain-Visualizer",
    linkLabel: "View on GitHub",
  },
  {
    id: "fastf1-undercut",
    index: "03",
    title: "FastF1 Undercut Analyzer",
    category: "Formula 1 · Data Analytics",
    proves:
      "Proves race-strategy analytics capability — translating telemetry into competitive pit-window decisions.",
    description:
      "F1 analytics notebook leveraging the FastF1 API for telemetry overlays, tyre degradation curves, undercut opportunity detection, race strategy decomposition, and team pace comparison across stints. Built for engineers who think in deltas, not lap lists.",
    tags: ["Python", "FastF1", "Pandas", "Matplotlib", "Jupyter"],
    badges: ["Telemetry Overlays", "Undercut Detection"],
    href: "https://github.com/theiceman07/FastF1-Undercut-Analyzer-",
    linkLabel: "View on GitHub",
  },
  {
    id: "fraud-detection",
    index: "04",
    title: "Credit Card Fraud Detection",
    category: "Machine Learning · Classification",
    proves:
      "Proves rigorous ML workflow discipline — from messy data to evaluated, deployable models.",
    description:
      "End-to-end machine learning pipeline for credit card fraud classification. Covers exploratory data analysis, class imbalance handling, feature preprocessing, model training with cross-validation, and comprehensive evaluation using precision-recall and ROC metrics.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    badges: ["End-to-End ML", "Imbalanced Data"],
    href: "https://github.com/theiceman07", // TODO: Replace with actual repo URL
    linkLabel: "View on GitHub",
  },
  {
    id: "restaurant-rec",
    index: "05",
    title: "Restaurant Recommendation System",
    category: "Recommendation Systems · ML",
    proves:
      "Proves ability to engineer features and build recommendation pipelines from raw user-item data.",
    description:
      "Collaborative filtering recommendation engine with data preprocessing, feature engineering for user preferences and restaurant attributes, similarity-based scoring, and a structured recommendation pipeline delivering ranked suggestions.",
    tags: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    badges: ["Feature Engineering", "Rec Pipeline"],
    href: "https://github.com/theiceman07", // TODO: Replace with actual repo URL
    linkLabel: "View on GitHub",
  },
] as const;

export const protosemUpdates = [
  {
    id: "week-0",
    title: "Week 0: Self-Evaluation & Perspectives",
    subtitle: "Completed the 16 Personalities assessment and presented a Zen Pencils comic that personally resonated with me.",
    type: "research",
    date: "Week 0",
  },
  {
    id: "week-1",
    title: "Week 1: 5S Principles & Web Deployment",
    subtitle: "Learned the 5S workplace organization method (Sort, Set in order, Shine) and built & deployed a live portfolio website.",
    type: "development",
    date: "Week 1",
  },
  { id: "week-2", title: "Week 2: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "research", date: "Week 2" },
  { id: "week-3", title: "Week 3: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "development", date: "Week 3" },
  { id: "week-4", title: "Week 4: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "design", date: "Week 4" },
  { id: "week-5", title: "Week 5: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "testing", date: "Week 5" },
  { id: "week-6", title: "Week 6: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "research", date: "Week 6" },
  { id: "week-7", title: "Week 7: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "development", date: "Week 7" },
  { id: "week-8", title: "Week 8: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "design", date: "Week 8" },
  { id: "week-9", title: "Week 9: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "testing", date: "Week 9" },
  { id: "week-10", title: "Week 10: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "research", date: "Week 10" },
  { id: "week-11", title: "Week 11: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "development", date: "Week 11" },
  { id: "week-12", title: "Week 12: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "design", date: "Week 12" },
  { id: "week-13", title: "Week 13: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "testing", date: "Week 13" },
  { id: "week-14", title: "Week 14: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "research", date: "Week 14" },
  { id: "week-15", title: "Week 15: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "development", date: "Week 15" },
  { id: "week-16", title: "Week 16: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "design", date: "Week 16" },
  { id: "week-17", title: "Week 17: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "testing", date: "Week 17" },
  { id: "week-18", title: "Week 18: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "research", date: "Week 18" },
  { id: "week-19", title: "Week 19: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "development", date: "Week 19" },
  { id: "week-20", title: "Week 20: In Progress", subtitle: "More updates are coming soon. The prototype development journey continues...", type: "design", date: "Week 20" },
] as const;

/** Mosaic interest tiles — span controls grid size for playful layout */
export const interestMosaic = [
  { id: "f1", label: "apex & telemetry", literal: "Formula One", category: "sport", span: "col-span-1 md:col-span-2 md:row-span-2" },
  { id: "risk", label: "expected value", literal: "Risk & Decision-Making", category: "mind", span: "col-span-1 md:col-span-2 md:row-span-1" },
  { id: "barca", label: "camp nou // matchday", literal: "FC Barcelona", category: "sport", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "travel", label: "terminal departures", literal: "Travel", category: "lifestyle", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "gokart", label: "two-stroke 125cc", literal: "International Go-Kart Racing", category: "sport", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "law", label: "jurisprudence", literal: "Law", category: "mind", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "big-short", label: "CDOs & swaps", literal: "The Big Short", category: "film", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "wolf", label: "stratton oakmont", literal: "The Wolf of Wall Street", category: "film", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "ai", label: "latent spaces", literal: "Machine Learning", category: "mind", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "office", label: "threat level midnight", literal: "The Office", category: "film", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "coffee", label: "single origin", literal: "Specialty Coffee", category: "lifestyle", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { id: "design", label: "negative space", literal: "UI/UX Design", category: "lifestyle", span: "col-span-1 md:col-span-1 md:row-span-1" },
] as const;

export type InterestCategory = (typeof interestMosaic)[number]["category"];

export const interestCategoryStyles: Record<
  InterestCategory,
  { accent: string; icon: string }
> = {
  sport: { accent: "border-accent/30 hover:bg-accent-muted", icon: "⚡" },
  lifestyle: { accent: "border-steel/30 hover:bg-steel-muted", icon: "◈" },
  mind: { accent: "border-foreground/10 hover:bg-glass-bg", icon: "◉" },
  film: { accent: "border-steel/20 hover:border-accent/20", icon: "▶" },
};

export const photographyItems = [
  { id: "p1", src: "/photography/temple.jpg.jpeg", alt: "Intricate red roof architecture of a Chinese temple", caption: "Temple Architecture" },
  { id: "p2", src: "/photography/collections.jpg.jpeg", alt: "Display shelf featuring a scale model race car and Tintin figurines", caption: "Curated Collections" },
  { id: "p3", src: "/photography/jellyfish.jpg.jpeg", alt: "Golden jellyfish drifting in dark water", caption: "Marine Drift" },
  { id: "p4", src: "/photography/karting.jpg.jpeg", alt: "Go-kart track at sunset with grandstands in the background", caption: "Yas Kartzone" },
  { id: "p5", src: "/photography/desert.jpg.jpeg", alt: "Vast desert sand dunes under a bright setting sun", caption: "Dune Sunset" },
  { id: "p6", src: "/photography/f2003.jpg.jpeg", alt: "Ferrari F2003-GA Formula 1 car on display", caption: "Scuderia F2003-GA" },
] as const;

export const githubConfig = {
  username: "theiceman07",
  contributionChartUrl: "https://ghchart.rshah.org/theiceman07",
  activityGraphUrl:
    "https://github-readme-activity-graph.vercel.app/graph?username=theiceman07&theme=react-dark&bg_color=0a0a0b&color=ededec&line=ffb000&point=4a6b8a&area=true",
  statsUrl:
    "https://github-readme-stats.vercel.app/api?username=theiceman07&show_icons=true&theme=dark&bg_color=0a0a0b&title_color=ffb000&text_color=ededec&icon_color=4a6b8a&border_color=ffffff10&hide_border=false",
};
