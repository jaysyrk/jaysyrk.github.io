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
    <main className="min-h-screen bg-purple-50 text-slate-800 font-sans">
      {/* Nav */}
      <nav className="border-b border-purple-200 bg-white/70 backdrop-blur-sm px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="font-mono text-purple-600 font-semibold tracking-tight text-lg">jaysyrk</span>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-purple-500 font-mono text-sm mb-4">Hi, I&apos;m</p>
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-slate-900">Jacob McCord</h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
          16-year-old software engineer pursuing{" "}
          <span className="text-purple-700 font-medium">technical product management</span> and{" "}
          <span className="text-purple-700 font-medium">systems architecture</span>. I build full-stack tools,
          infrastructure pipelines, and developer-focused products.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-purple-300 hover:border-purple-400 hover:bg-purple-100 rounded-lg text-sm font-medium transition-colors text-slate-600"
          >
            GitHub Profile
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">Projects</h2>
        <p className="text-slate-500 text-sm mb-10">
          8 projects spanning full-stack development, DevOps, and product tooling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-200 ${
                project.highlight
                  ? "border-purple-300 bg-white hover:border-purple-400 shadow-sm"
                  : "border-purple-100 bg-white hover:border-purple-300"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-mono text-xs text-purple-400 uppercase tracking-wider">
                    {project.tagline}
                  </span>
                  <h3 className="text-lg font-semibold mt-0.5 text-slate-800 group-hover:text-purple-600 transition-colors">
                    {project.name}
                  </h3>
                </div>
                {project.highlight && (
                  <span className="text-xs bg-purple-100 text-purple-600 border border-purple-200 rounded-full px-2.5 py-1 font-medium shrink-0 ml-3">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-purple-50 text-purple-600 border border-purple-100 rounded-md px-2.5 py-1">
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
            <div key={category} className="bg-white border border-purple-100 rounded-xl p-4">
              <h3 className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-3">
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-purple-200 hover:border-purple-400 hover:bg-purple-50 rounded-xl text-purple-600 font-medium transition-colors shadow-sm"
        >
          jmccord.dev@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-200 px-6 py-8 text-center text-sm text-slate-400 max-w-5xl mx-auto">
        <p>
          Built by{" "}
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:underline"
          >
            jaysyrk
          </a>{" "}
          · Next.js + Tailwind · Deployed on GitHub Pages
        </p>
      </footer>
    </main>
  );
}
