const projects = [
  {
    name: "VektorStream",
    tagline: "High-Throughput Edge Vectorizer",
    description:
      "High-throughput user event vectorizer with zero-allocation ring buffers, an embedded BadgerDB persistence layer, and a real-time time-decay rules engine. Includes a sleek React/Vite dashboard to visualize 3D user states dynamically.",
    tags: ["Go", "React", "BadgerDB", "Vite"],
    href: "https://github.com/jaysyrk/VektorStream",
    highlight: true,
  },
  {
    name: "ChronosIaC",
    tagline: "Infrastructure Drift Detection & Postmortem Platform",
    description:
      "Drift detection and postmortem platform for IaC. Compares live state to baselines using scheduled polling and event-driven alerts. Focuses on actionable insights and automated postmortems, trading real-time checks for scalable, periodic analysis.",
    tags: ["Next.js", "Express", "PostgreSQL", "TypeScript", "DevOps"],
    href: "https://github.com/jaysyrk/ChronosIac",
    highlight: true,
  },
  {
    name: "teleos",
    tagline: "Rule Engine DSL",
    description:
      "Logic engine and DSL that parses business rules into an AST for efficient, modular evaluation. Uses backward chaining for query resolution. Designed for readable syntax and easy integration, balancing user-friendly rules with reliable parsing.",
    tags: ["DSL", "Compiler", "Python", "Architecture"],
    href: "https://github.com/jaysyrk/teleos",
    highlight: true,
  },
  {
    name: "roadmap-flagmanager",
    tagline: "Product Roadmap & Feature Flag Manager",
    description:
      "Roadmap and feature flag manager with live toggles and AI changelogs. Prioritizes real-time control and auditability, balancing flexibility for product teams with safe deployment workflows.",
    tags: ["Next.js", "FastAPI", "SQLite", "TypeScript"],
    href: "https://github.com/jaysyrk/roadmap-flagmanager",
    highlight: true,
  },
  {
    name: "SelfSynthEngine",
    tagline: "Self-Writing File Optimization Engine",
    description:
      "Intelligent, automatic file processing and optimization engine. Dynamically writes its own Python code to handle unknown files, predicts optimization time with built-in ML, and self-heals on failure. Features parallel processing, cryptographic signing, and zero external dependencies.",
    tags: ["Python", "Machine Learning", "Parallelism", "Security"],
    href: "https://github.com/jaysyrk/SelfSynthEngine",
    highlight: true,
  },
  {
    name: "Syrk-lytical",
    tagline: "Client-Side Analytics Platform",
    description:
      "Privacy-first analytics dashboard with real-time event tracking and funnel visualizations, all in-browser. Trades server-side complexity for instant feedback and user data privacy.",
    tags: ["Next.js", "TypeScript", "Recharts", "Analytics"],
    href: "https://github.com/jaysyrk/Syrk-lytical",
    highlight: false,
  },
  {
    name: "ci-cd-pipeline",
    tagline: "Automated CI/CD Pipeline",
    description:
      "CI/CD pipeline with containerized builds, automated tests, and zero-downtime deploys. Focuses on reliability and fast feedback, balancing automation with manual approval gates.",
    tags: ["Python", "Docker", "GitHub Actions", "DevOps"],
    href: "https://github.com/jaysyrk/ci-cd-pipeline",
    highlight: false,
  },
  {
    name: "system-health-dashboard",
    tagline: "System Health Monitoring Dashboard",
    description:
      "Live server monitoring dashboard for CPU, memory, and process health. Uses WebSockets for real-time updates, trading persistent storage for instant visibility.",
    tags: ["Python", "Flask", "psutil", "Monitoring"],
    href: "https://github.com/jaysyrk/system-health-dashboard",
    highlight: false,
  },
  {
    name: "ordertrack-pro",
    tagline: "Order & Invoice Management System",
    description:
      "Order and invoice system with inventory, customer management, and PDF generation. Balances ERP features with a simple, focused UI for small businesses.",
    tags: ["Python", "Flask", "Chart.js", "PDF"],
    href: "https://github.com/jaysyrk/ordertrack-pro",
    highlight: false,
  },
  {
    name: "helpdesk",
    tagline: "IT Help Desk & Asset Manager",
    description:
      "ITSM platform for tickets, SLAs, and asset inventory. Emphasizes RBAC and escalation, trading feature breadth for reliability and clear workflows.",
    tags: ["Python", "Flask", "ITSM", "RBAC"],
    href: "https://github.com/jaysyrk/helpdesk",
    highlight: false,
  },
  {
    name: "budget-tracker",
    tagline: "Personal Finance & Budget Tracker",
    description:
      "Finance dashboard for income, expenses, and trends. Focuses on clarity and automation, trading advanced analytics for a simple, actionable overview.",
    tags: ["Python", "Flask", "Finance", "Data Viz"],
    href: "https://github.com/jaysyrk/budget-tracker",
    highlight: false,
  },
];

const skills = [
  { category: "Languages", items: ["Go", "Python", "TypeScript", "JavaScript", "SQL"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Recharts"] },
  { category: "Backend", items: ["Go", "FastAPI", "Flask", "BadgerDB", "PostgreSQL"] },
  { category: "Infra / DevOps", items: ["Docker", "GitHub Actions", "CI/CD", "SQLite"] },
  { category: "Product", items: ["Roadmapping", "Feature Flags", "Changelogs", "ITSM"] },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E6E6FA] text-slate-800 font-sans">
      {/* Nav */}
      <nav className="border-b border-[#D8BFD8] bg-white/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="font-mono text-[#8b6b8b] font-semibold tracking-tight text-lg">jaysyrk</span>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#projects" className="hover:text-[#8b6b8b] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#8b6b8b] transition-colors">Skills</a>
          <a href="#contact" className="hover:text-[#8b6b8b] transition-colors">Contact</a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b6b8b] transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-[#8b6b8b] font-mono text-sm mb-4">Hi, I&apos;m</p>
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-slate-900">Jacob McCord</h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
          16-year-old software engineer specializing in <span className="text-[#8b6b8b] font-medium">technical product management</span> and <span className="text-[#8b6b8b] font-medium">systems architecture</span>. Building at the intersection of full-stack tools, infrastructure pipelines, and developer-focused products.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-[#D8BFD8] hover:bg-[#caaeca] text-slate-800 rounded-lg text-sm font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#D8BFD8] hover:border-[#caaeca] hover:bg-white rounded-lg text-sm font-medium transition-colors text-slate-600"
          >
            GitHub Profile
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">Projects</h2>
        <p className="text-slate-500 text-sm mb-10">
          Projects spanning full-stack development, DevOps, and product tooling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                project.highlight
                  ? "border-[#FFDAB9] bg-white hover:border-[#f0c49a] shadow-sm hover:shadow-[#FFDAB9]/60"
                  : "border-[#D8BFD8] bg-white hover:border-[#caaeca] hover:shadow-[#D8BFD8]/60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-mono text-xs text-[#C3C1CD] uppercase tracking-wider">
                    {project.tagline}
                  </span>
                  <h3 className="text-lg font-semibold mt-0.5 text-slate-800 group-hover:text-[#8b6b8b] transition-colors">
                    {project.name}
                  </h3>
                </div>
                {project.highlight && (
                  <span className="text-xs bg-[#FFDAB9] text-slate-700 border border-[#f0c49a] rounded-full px-2.5 py-1 font-medium shrink-0 ml-3">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-[#C8D8C4] text-slate-600 border border-[#b8c8b4] rounded-md px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">Skills</h2>
        <p className="text-slate-500 text-sm mb-10">Technologies and domains I work with regularly.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="bg-white border border-[#C8D8C4] rounded-xl p-4">
              <h3 className="text-xs font-semibold text-[#8b6b8b] uppercase tracking-wider mb-3">
                {category}
              </h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm text-slate-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">Contact</h2>
        <p className="text-slate-500 text-sm mb-8">Feel free to reach out — always open to new opportunities and conversations.</p>
        <a
          href="mailto:jmccord.dev@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#D8BFD8] hover:border-[#caaeca] hover:bg-[#E6E6FA] rounded-xl text-[#8b6b8b] font-medium transition-colors shadow-sm"
        >
          jmccord.dev@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D8BFD8] px-6 py-8 text-center text-sm text-slate-400 max-w-5xl mx-auto">
        <p>
          Built by{" "}
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b6b8b] hover:underline"
          >
            jaysyrk
          </a>{" "}
          · Next.js + Tailwind · Deployed on GitHub Pages
        </p>
      </footer>
    </main>
  );
}
