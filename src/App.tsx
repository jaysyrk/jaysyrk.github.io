import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-800 font-sans relative selection:bg-pink-200/50 overflow-x-hidden">
      
      {/* Floating Clean Nav */}
      <nav className="sticky top-4 z-50 mx-auto max-w-4xl bg-white/70 backdrop-blur-xl border border-slate-200/50 px-8 py-4 flex items-center justify-between rounded-full shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-sans text-lg tracking-wide text-slate-800 font-extrabold flex items-center gap-2">
            jaysyrk
          </span>
        </div>
        <div className="flex gap-6 text-sm font-semibold tracking-wide text-slate-500">
          <a href="#projects" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all duration-300">Projects</a>
          <a href="#skills" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all duration-300">Skills</a>
          <a href="#contact" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all duration-300">Contact</a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Make stars background visible but still faded enough to read text */}
        <div className="absolute inset-0 bg-stars-pattern opacity-30 mix-blend-multiply pointer-events-none z-[-1]" />

        <div className="flex-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 font-semibold text-xs uppercase tracking-wider mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-pink-400" />
            Software Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8 max-w-2xl leading-[1.1] text-slate-800"
          >
            Building tools, systems, <br />
            <span className="bg-gradient-to-r from-slate-700 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
              and infrastructure.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium mb-12"
          >
            Hi, I&apos;m <span className="text-pink-500 font-extrabold">jaysyrk</span>, a 16-year-old developer interested in backend systems and infrastructure. I enjoy working on low-level programming, edge networks, and compilers, focusing on building fast and reliable tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 bg-slate-800 hover:bg-pink-500 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-md hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>

        {/* Snorlax Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex-shrink-0 animate-float"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-slate-100 bg-white shadow-xl overflow-hidden flex items-center justify-center p-4">
            <img
              src="/snorlax.jpg"
              alt="Snorlax Eating"
              className="object-contain w-full h-full mix-blend-multiply"
            />
          </div>
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="relative z-10 py-24 scroll-mt-20 overflow-hidden bg-white/50">
        <div className="absolute inset-0 bg-kirby-pattern opacity-30 pointer-events-none mix-blend-multiply" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-slate-200/60 pb-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-800">Projects</h2>
            <p className="text-slate-500 text-sm font-medium">Focused on performance, compilers, and low-level systems.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PROJECT 1: LETHE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group flex flex-col justify-between p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-xl hover:border-pink-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="font-bold text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4 block group-hover:bg-pink-50 group-hover:text-pink-500 transition-colors">
                  Deception Proxy
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                  Lethe
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  A high-performance deception proxy that silently migrates malicious traffic into an isolated deception layer, wasting attacker resources and harvesting threat intelligence using TCP tarpits and ghost honeypots.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Go", "Cybersecurity", "TCP Tarpit"].map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* PROJECT 2: OUSIA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group flex flex-col justify-between p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-xl hover:border-pink-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="font-bold text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4 block group-hover:bg-pink-50 group-hover:text-pink-500 transition-colors">
                  Edge Proxy
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                  Ousia
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  A lightweight reverse-proxy and API gateway written in Go. It's designed to help applications on small virtual private servers handle traffic more efficiently using connection multiplexing and basic failover features.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Go", "L7 Routing", "TLS"].map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* PROJECT 3: TELEOS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group flex flex-col justify-between p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-xl hover:border-pink-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="font-bold text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4 block group-hover:bg-pink-50 group-hover:text-pink-500 transition-colors">
                  Rule Engine
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                  teleos
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  A domain-specific language (DSL) and rule evaluation engine. It parses rules into an Abstract Syntax Tree (AST) to evaluate queries faster and more efficiently than standard loops.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["DSL", "AST", "Rust"].map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* PROJECT 4: SYMEXEC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group flex flex-col justify-between p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-xl hover:border-pink-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="font-bold text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4 block group-hover:bg-pink-50 group-hover:text-pink-500 transition-colors">
                  Symbolic Execution
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                  symexec
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  A high-performance symbolic execution engine built in Rust. It utilizes the Z3 SMT solver to explore binary execution paths simultaneously, acting as an automated magic key generator for reverse-engineering.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Rust", "Z3", "Reverse Engineering"].map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24 scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-sanrio-pattern opacity-30 mix-blend-multiply pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 mb-4">
              Skills
            </h2>
            <p className="text-slate-500 text-sm font-medium">Technologies and tools I use for systems programming and architecture.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1 */}
            <div className="p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-700">Languages</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 font-semibold">
                <li className="flex justify-between items-center">
                  <span>Go (High-throughput)</span>
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Rust (Memory-safe)</span>
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Python (Scripting)</span>
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-700">Systems</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 font-semibold">
                <li className="flex justify-between items-center">
                  <span>Proxies & Gateways</span>
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                </li>
                <li className="flex justify-between items-center">
                  <span>AST Compilers</span>
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Concurrent Architecture</span>
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-700">Tools</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 font-semibold">
                <li className="flex justify-between items-center">
                  <span>Linux Environments</span>
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Docker & Containers</span>
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Version Control</span>
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-28 relative z-10 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[3rem] border border-slate-200 bg-white p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm"
        >
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 mb-4">Get in touch</h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Always open to talking about open-source projects, systems engineering, or software development in general.
            </p>
          </div>

          <div>
            <a
              href="mailto:jmccord.dev@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-pink-500 text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm hover:shadow-pink-500/20 hover:-translate-y-1"
            >
              jmccord.dev@gmail.com
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 px-6 py-12 relative z-10 flex flex-col items-center justify-center gap-4 text-xs text-slate-400 font-semibold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} jaysyrk</p>
      </footer>
    </main>
  );
}
