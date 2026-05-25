"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b10] text-[#f8fafc] font-sans relative selection:bg-cyan-500/30">
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none z-0" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#080b10]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between max-w-5xl mx-auto rounded-b-xl">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm tracking-widest text-slate-400 font-semibold uppercase">
            jaysyrk
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-wider text-slate-400">
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors flex items-center gap-1"
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 font-mono text-[10px] uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Systems & DSL Architecture
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 max-w-4xl leading-[1.1]">
          Building ultra-lightweight <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-400 bg-clip-text text-transparent">
            gateways and parser engines.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed font-sans mb-10">
          Hi, I&apos;m <span className="text-slate-100 font-medium">Jacob McCord</span>, a 16-year-old software engineer building resilient backend infrastructure. I specialize in low-overhead edge networks, highly optimized custom rule compilers, and systems programming where microsecond benchmarks actually matter.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-[#080b10] font-mono text-xs uppercase tracking-wider rounded-lg font-bold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Projects
          </a>
          <a
            href="https://github.com/jaysyrk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-slate-300 font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-200"
          >
            View Codebases
          </a>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-12 relative z-10 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/5 pb-8">
          <div>
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">[01 // CORE_PROJECTS]</div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Engineered Systems</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Production-grade developer tools focusing on high throughput, compiler correctness, and bare-metal resource conservation.
          </p>
        </div>

        {/* Simplified Showcase Rows */}
        <div className="space-y-24">
          
          {/* PROJECT 1: OUSIA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Ousia Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded uppercase tracking-wider w-fit mb-4 block">
                  High Performance Edge
                </span>

                <h3 className="text-2xl font-bold text-white mb-2 font-sans flex items-center gap-3">
                  Ousia
                  <a
                    href="https://github.com/jaysyrk/Ousia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-4 tracking-wide">Dynamic L7 Edge Gateway & Service Mesh</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                  A high-performance reverse-proxy, API gateway, and lightweight service mesh built entirely in Go. Ousia empowers distributed programs operating on low-resource virtual private servers to safely handle the same massive load capacities as bloated enterprise frameworks through streamlined connection multiplexing, intelligent path routing, and robust failover mechanics.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Go", "Service Mesh", "L7 Routing", "Docker", "Prometheus", "TLS Termination"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-cyan-500/5 text-cyan-300 border border-cyan-500/10 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ousia Code Block */}
            <div className="lg:col-span-6 rounded-2xl border border-white/5 bg-slate-950/80 p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                <span className="font-mono text-xs text-slate-500">ousia.yaml</span>
                <span className="font-mono text-[10px] text-teal-400">L7 Configuration</span>
              </div>
              <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto p-2 bg-[#05070a] rounded-lg">
{`# Dynamic Edge Gateway Route Specifications
gateway:
  listen: :443
  tls:
    auto_sni: true
  routes:
    - path: /v1/*
      backend: round_robin(srv-cluster)
      resiliency:
        max_retries: 3
        timeout: 850ms
        circuit_breaker: error_rate > 5%`}
              </pre>
            </div>
          </div>

          {/* PROJECT 2: TELEOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* teleos Code Block */}
            <div className="lg:col-span-6 rounded-2xl border border-white/5 bg-slate-950/80 p-6 flex flex-col justify-between overflow-hidden relative lg:order-2">
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                <span className="font-mono text-xs text-slate-500">policy.tls</span>
                <span className="font-mono text-[10px] text-violet-400">AST Rule Grammar</span>
              </div>
              <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto p-2 bg-[#05070a] rounded-lg">
{`# teleos Domain Specific Language Grammar
rule rate_limit {
    when request.count > 100
     and user.tier != "premium"
    then reject_request()
}

rule loyalty_discount {
    when order.total >= 250
     and user.months_active > 12
    then apply_rebate(0.15)
}`}
              </pre>
            </div>

            {/* teleos Details */}
            <div className="lg:col-span-6 flex flex-col justify-between lg:order-1">
              <div>
                <span className="font-mono text-[10px] text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded uppercase tracking-wider w-fit mb-4 block">
                  AST Parser Compiler
                </span>

                <h3 className="text-2xl font-bold text-white mb-2 font-sans flex items-center gap-3">
                  teleos
                  <a
                    href="https://github.com/jaysyrk/teleos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-violet-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </h3>
                <p className="text-xs font-mono text-violet-400 mb-4 tracking-wide">Rule Engine DSL & AST Compiler</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                  A domain-specific language (DSL) and high-speed rule evaluation engine. It lexes and parses human-readable business logic directly into an Abstract Syntax Tree (AST) for bulletproof query resolution. By incorporating backward chaining mechanics, the evaluation pipeline resolves query dependency trees efficiently, providing massive throughput advantages over standard imperative rule loops.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["DSL Grammar", "AST Compilation", "Backward Chaining", "Rust", "Python", "Type Resolution"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-violet-500/5 text-violet-300 border border-violet-500/10 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 3: SELFSYNTHENGINE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SelfSynthEngine Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase tracking-wider w-fit mb-4 block">
                  Self-Writing ML Optimizer
                </span>

                <h3 className="text-2xl font-bold text-white mb-2 font-sans flex items-center gap-3">
                  SelfSynthEngine
                  <a
                    href="https://github.com/jaysyrk/SelfSynthEngine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </h3>
                <p className="text-xs font-mono text-emerald-400 mb-4 tracking-wide">Self-Writing File Optimization Engine</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                  An automatic file-processing and compression compiler. SelfSynthEngine analyzes completely arbitrary, unstructured input data, dynamically synthesizes customized Python execution plans, predicts optimal data pipelines utilizing standard machine learning classifiers, and self-corrects runtime compile failures on-the-fly. Features highly-parallelized file batch processing, custom cryptographic checksum signatures, and has zero third-party requirements.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "Machine Learning", "Dynamic Compilation", "Cryptographic Signatures", "Self-Healing Logic", "Concurrency"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-emerald-500/5 text-emerald-300 border border-emerald-500/10 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* SelfSynthEngine Code Block */}
            <div className="lg:col-span-6 rounded-2xl border border-white/5 bg-slate-950/80 p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                <span className="font-mono text-xs text-slate-500">pipeline.py</span>
                <span className="font-mono text-[10px] text-emerald-400">Self-Writing API</span>
              </div>
              <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto p-2 bg-[#05070a] rounded-lg">
{`from selfsynth import SelfSynthEngine

# Initialize the self-healing dynamic compiler
engine = SelfSynthEngine(level="aggressive")

# Automatically synthesizes custom Python handlers,
# optimizes unstructured data, and signs the bundle
engine.optimize(
    input_path="raw_dataset.csv", 
    output_path="dataset.opt.csv"
)

print(f"SHA-256 Signature: {engine.signature}")`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* Refined Technical Skills Matrix */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-28 relative z-10 scroll-mt-20">
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">[02 // CORE_CAPABILITIES]</div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Technical Capabilities</h2>
          <p className="text-slate-400 text-sm max-w-lg">
            Strictly tailored skills matching low-level systems programming, networking architectures, compilers, and cloud scale operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Core Languages */}
          <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-cyan-400">[LGS]</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">Core Languages</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between items-center">
                <span>Go (High Concurrency)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Rust (Safety & Speed)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Python (Scripting & DSLs)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
              <li className="flex justify-between items-center">
                <span>TypeScript (NextJS Ecosystem)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
              <li className="flex justify-between items-center">
                <span>SQL (Relational Design)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
            </ul>
          </div>

          {/* Card 2: Networking & Proxies */}
          <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm hover:border-teal-500/20 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-teal-400">[NET]</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">Networking & Proxies</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between items-center">
                <span>L7 Reverse Proxies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Service Mesh Architectures</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>TLS Termination / SNI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
              <li className="flex justify-between items-center">
                <span>Connection Multiplexing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
              <li className="flex justify-between items-center">
                <span>Intelligent Path Routing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
            </ul>
          </div>

          {/* Card 3: Compilers & Parser Engines */}
          <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm hover:border-violet-500/20 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-violet-400">[CMP]</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">Compilers & Parsers</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between items-center">
                <span>AST Compilation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Domain Specific Languages</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Backward Chaining Logic</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Lexical & Syntactic Parsing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
              <li className="flex justify-between items-center">
                <span>Dynamic Program Synthesis</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>ML Predictors & Self-Healing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </li>
            </ul>
          </div>

          {/* Card 4: Operations & Analytics */}
          <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm hover:border-white/10 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-slate-400">[OPS]</span>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">Operations & Cloud</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between items-center">
                <span>Docker Engine Orchestration</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Prometheus Telemetry</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </li>
              <li className="flex justify-between items-center">
                <span>Linux Syscall Hooks</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
              <li className="flex justify-between items-center">
                <span>CI/CD Automations</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
              <li className="flex justify-between items-center">
                <span>GitHub Actions Config</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-28 relative z-10 scroll-mt-20">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/80 to-[#0e131f]/40 p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[250px] h-[250px] rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none" />

          <div className="max-w-md">
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">[03 // GET_IN_TOUCH]</div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Let&apos;s build together</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Always interested in open-source systems engineering, custom compiler pipelines, product strategy, or general deep tech conversations.
            </p>
          </div>

          <div>
            <a
              href="mailto:jmccord.dev@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 font-mono text-xs uppercase tracking-wider rounded-xl font-bold transition-all duration-200 shadow-xl shadow-white/5 hover:shadow-white/10 hover:-translate-y-0.5"
            >
              jmccord.dev@gmail.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12 relative z-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-500">
        <p>© {new Date().getFullYear()} Jacob McCord. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="text-cyan-400">Next.js</span> +{" "}
          <span className="text-violet-400">Tailwind</span> · Deployed on GitHub Pages
        </p>
      </footer>
    </main>
  );
}
