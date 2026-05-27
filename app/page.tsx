"use client";

import BackgroundScene from "../components/BackgroundScene";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1e293b] font-sans relative selection:bg-rose-500/30">
      {/* Background Decorative Grids & Glows */}
      <BackgroundScene />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-rose-500/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none z-0" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-[#FAF7F2]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between max-w-5xl mx-auto rounded-b-xl">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm tracking-widest text-slate-600 font-semibold uppercase">
            jaysyrk
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
        </div>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-wider text-slate-600">
          <a href="#projects" className="hover:text-rose-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-rose-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-rose-400 transition-colors">Contact</a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-colors flex items-center gap-1"
          >
            GitHub
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-28 md:py-36 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 bg-slate-100/50 text-slate-700 font-mono text-[10px] uppercase tracking-widest mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          Systems & DSL Architecture
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-[5rem] font-bold tracking-tighter mb-8 max-w-4xl leading-[1.05]"
        >
          Building highly optimized <br />
          <span className="bg-gradient-to-r from-rose-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            developer tools and systems.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-sans mb-12 tracking-wide"
        >
          Hi, I&apos;m <span className="text-rose-500 font-extrabold">Jacob McCord</span>, a 16-year-old software engineer building resilient backend infrastructure. I specialize in low-overhead edge networks, highly optimized custom rule compilers, and systems programming where microsecond benchmarks actually matter. While my core focus is hardcore backend systems, I enjoy exploring other domains here and there.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-400 hover:from-rose-400 hover:to-purple-400 text-[#080b10] font-mono text-xs uppercase tracking-widest rounded-lg font-bold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            Explore Projects
          </a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-300 bg-slate-100/50 hover:bg-slate-200/50 hover:border-slate-400 text-slate-700 font-mono text-xs uppercase tracking-widest rounded-lg hover:-translate-y-1 transition-all duration-300"
          >
            View Codebases
          </a>
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-24 relative z-10 scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-slate-200/50 pb-8"
        >
          <div>
            <div className="font-mono text-xs text-rose-400 uppercase tracking-widest mb-2">[01 // CORE_PROJECTS]</div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800">Engineered Systems</h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Production-grade developer tools focusing on high throughput, compiler correctness, and bare-metal resource conservation.
          </p>
        </motion.div>

        {/* Simplified Showcase Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* PROJECT 1: OUSIA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm hover:border-rose-500/20 transition-all duration-300"
          >
            <div>
              <span className="font-mono text-[10px] text-purple-400 bg-purple-400/10 border border-purple-400/20 px-2 py-0.5 rounded uppercase tracking-wider w-fit mb-4 block">
                High Performance Edge
              </span>

              <h3 className="text-2xl font-bold text-slate-800 mb-2 font-sans flex items-center gap-3">
                Ousia
                <a
                  href="https://github.com/jaysyrk/Ousia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-rose-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </h3>
              <p className="text-xs font-mono text-rose-400 mb-4 tracking-wide">Dynamic L7 Edge Gateway</p>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                A high-performance reverse-proxy, API gateway, and lightweight service mesh built entirely in Go. Ousia empowers distributed programs operating on low-resource virtual private servers to safely handle massive load capacities through streamlined connection multiplexing and robust failover mechanics.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {["Go", "Service Mesh", "L7 Routing", "Docker", "Prometheus", "TLS Termination"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono bg-rose-500/5 text-rose-500 border border-rose-500/10 px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* PROJECT 2: TELEOS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm hover:border-fuchsia-400/20 transition-all duration-300"
          >
            <div>
              <span className="font-mono text-[10px] text-fuchsia-400 bg-fuchsia-400/10 border border-fuchsia-400/20 px-2 py-0.5 rounded uppercase tracking-wider w-fit mb-4 block">
                AST Parser Compiler
              </span>

              <h3 className="text-2xl font-bold text-slate-800 mb-2 font-sans flex items-center gap-3">
                teleos
                <a
                  href="https://github.com/jaysyrk/teleos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-fuchsia-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </h3>
              <p className="text-xs font-mono text-fuchsia-400 mb-4 tracking-wide">Rule Engine DSL</p>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                A domain-specific language (DSL) and high-speed rule evaluation engine. It lexes and parses human-readable business logic directly into an Abstract Syntax Tree (AST) for bulletproof query resolution, providing massive throughput advantages over standard imperative rule loops.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {["DSL Grammar", "AST Compilation", "Backward Chaining", "Rust", "Python", "Type Resolution"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono bg-fuchsia-400/5 text-fuchsia-500 border border-fuchsia-400/10 px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Refined Technical Skills Matrix */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-28 relative z-10 scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center text-center mb-16"
        >
          <div className="font-mono text-xs text-rose-400 uppercase tracking-widest mb-2">[02 // CORE_CAPABILITIES]</div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 mb-4">Technical Capabilities</h2>
          <p className="text-slate-600 text-sm max-w-lg">
            Strictly tailored skills matching low-level systems programming, networking architectures, compilers, and cloud scale operations.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Core Languages */}
          <div className="p-6 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm hover:border-rose-500/20 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-rose-400">[LGS]</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">Core Languages</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li className="flex justify-between items-center">
                <span>Go (High-throughput systems)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Rust (Memory-safe tooling)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Python (Scripting & ML)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
            </ul>
          </div>

          {/* Card 2: Systems & Architecture */}
          <div className="p-6 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm hover:border-purple-400/20 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-purple-400">[ARC]</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">Architecture</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li className="flex justify-between items-center">
                <span>Network Gateways & Proxies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>AST Parsing & Compilers</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Concurrent Processing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
            </ul>
          </div>

          {/* Card 3: Ecosystem & Tools */}
          <div className="p-6 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm hover:border-slate-300 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-slate-600">[TLS]</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">Ecosystem</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li className="flex justify-between items-center">
                <span>Linux Environments</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
              <li className="flex justify-between items-center">
                <span>Docker & Containers</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Git / Version Control</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-28 relative z-10 scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200/50 bg-gradient-to-br from-white/80 to-[#F5EFE6]/40 p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[250px] h-[250px] rounded-full bg-rose-500/5 blur-[50px] pointer-events-none" />

          <div className="max-w-md">
            <div className="font-mono text-xs text-rose-400 uppercase tracking-widest mb-2">[03 // GET_IN_TOUCH]</div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 mb-4">Let&apos;s build together</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Always interested in open-source systems engineering, custom compiler pipelines, product strategy, or general deep tech conversations.
            </p>
          </div>

          <div>
            <a
              href="mailto:jmccord.dev@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs uppercase tracking-wider rounded-xl font-bold transition-all duration-200 shadow-xl shadow-slate-900/5 hover:shadow-slate-900/10 hover:-translate-y-0.5"
            >
              jmccord.dev@gmail.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 px-6 py-12 relative z-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-500">
        <p>© {new Date().getFullYear()} Jacob McCord. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="text-rose-400">Next.js</span> +{" "}
          <span className="text-fuchsia-400">Tailwind</span> · Deployed on GitHub Pages
        </p>
      </footer>
    </main>
  );
}
