const projects = [
  {
    name: "teleos",
    tagline: "Rule Engine DSL",
    description:
      "A domain-specific language for writing business logic as human-readable rules. Compile once, run anywhere — cross-language rule execution engine.",
    tags: ["DSL", "Compiler", "Python", "Architecture"],
    href: "https://github.com/jaysyrk/teleos",
    highlight: true,
  },
  {
    name: "roadmap-flagmanager",
    tagline: "Product Roadmap & Feature Flag Manager",
    description:
      "Full-stack TPM tool to manage epics, features, tasks, and feature flags with live environment toggles and an AI-style changelog generator.",
    tags: ["Next.js", "FastAPI", "SQLite", "TypeScript"],
    href: "https://github.com/jaysyrk/roadmap-flagmanager",
    highlight: true,
  },
  {
    name: "Syrk-lytical",
    tagline: "Client-Side Analytics Platform",
    description:
      "Privacy-first analytics dashboard built entirely in the browser. Real-time event tracking, funnel visualizations, and retention charts — no server required.",
    tags: ["Next.js", "TypeScript", "Recharts", "Analytics"],
    href: "https://github.com/jaysyrk/Syrk-lytical",
    highlight: false,
  },
  {
    name: "ci-cd-pipeline",
    tagline: "Automated CI/CD Pipeline",
    description:
      "End-to-end CI/CD pipeline with containerized builds, automated testing, and zero-downtime deployments using GitHub Actions and Docker.",
    tags: ["Python", "Docker", "GitHub Actions", "DevOps"],
    href: "https://github.com/jaysyrk/ci-cd-pipeline",
    highlight: false,
  },
  {
    name: "system-health-dashboard",
    tagline: "System Health Monitoring Dashboard",
    description:
      "Real-time server monitoring dashboard tracking CPU, memory, disk, and process health. Built with Flask and psutil, served over a live WebSocket feed.",
    tags: ["Python", "Flask", "psutil", "Monitoring"],
    href: "https://github.com/jaysyrk/system-health-dashboard",
    highlight: false,
  },
  {
    name: "ordertrack-pro",
    tagline: "Order & Invoice Management System",
    description:
      "ERP-style order tracking system with customer management, inventory, PDF invoice generation, and revenue charts.",
    tags: ["Python", "Flask", "Chart.js", "PDF"],
    href: "https://github.com/jaysyrk/ordertrack-pro",
    highlight: false,
  },
  {
    name: "helpdesk",
    tagline: "IT Help Desk & Asset Manager",
    description:
      "ITSM platform for managing tickets, SLAs, and IT asset inventory. Includes role-based access control and escalation workflows.",
    tags: ["Python", "Flask", "ITSM", "RBAC"],
    href: "https://github.com/jaysyrk/helpdesk",
    highlight: false,
  },
  {
    name: "budget-tracker",
    tagline: "Personal Finance & Budget Tracker",
    description:
      "Financial health dashboard with income/expense tracking, category breakdowns, spending trends, and an automated financial health score.",
    tags: ["Python", "Flask", "Finance", "Data Viz"],
    href: "https://github.com/jaysyrk/budget-tracker",
    highlight: false,
  },
];

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Recharts"] },
  { category: "Backend", items: ["FastAPI", "Flask", "SQLAlchemy", "REST APIs"] },
  { category: "Infra / DevOps", items: ["Docker", "GitHub Actions", "CI/CD", "SQLite"] },
  { category: "Product", items: ["Roadmapping", "Feature Flags", "Changelogs", "ITSM"] },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="font-mono text-indigo-400 font-semibold tracking-tight text-lg">jaysyrk</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-indigo-400 font-mono text-sm mb-4">Hi, I&apos;m</p>
        <h1 className="text-5xl font-bold tracking-tight mb-4">Jacob McCord</h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          16-year-old software engineer pursuing{" "}
          <span className="text-white font-medium">technical product management</span> and{" "}
          <span className="text-white font-medium">systems architecture</span>. I build full-stack tools,
          infrastructure pipelines, and developer-focused products.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-700 hover:border-gray-500 rounded-lg text-sm font-medium transition-colors text-gray-300 hover:text-white"
          >
            GitHub Profile
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-gray-400 text-sm mb-10">
          8 projects spanning full-stack development, DevOps, and product tooling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-950/50 ${
                project.highlight
                  ? "border-indigo-700/60 bg-indigo-950/30 hover:border-indigo-500"
                  : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                    {project.tagline}
                  </span>
                  <h3 className="text-lg font-semibold mt-0.5 group-hover:text-indigo-300 transition-colors">
                    {project.name}
                  </h3>
                </div>
                {project.highlight && (
                  <span className="text-xs bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 rounded-full px-2.5 py-1 font-medium shrink-0 ml-3">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-800 text-gray-400 rounded-md px-2.5 py-1">
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
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <p className="text-gray-400 text-sm mb-10">Technologies and domains I work with regularly.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-sm text-gray-500 max-w-5xl mx-auto">
        <p>
          Built by{" "}
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            jaysyrk
          </a>{" "}
          · Next.js + Tailwind · Deployed on GitHub Pages
        </p>
      </footer>
    </main>
  );
}
