import './App.css'

const stats = [
  { label: 'Years building', value: '3+' },
  { label: 'Projects', value: '8' },
]

const focusAreas = [
  'Flutter + Dart',
  'Python + Flask',
  'Git | Github',
  'RESTful API',
  'Payments & fintech',
  'Backend integrations',
  'Performance tuning',
  'Developer experience',
]

const projects = [
  {
    title: 'Asenso Mobile',
    type: 'Fintech platform',
    summary:
      'Developed and maintained a mobile banking platform covering customer onboarding, KYC and eKYC workflows, secure transactions, and core account operations. Contributed to containerized application deployments and environment management using Rancher and Harbor, with automated CI/CD workflows through GitHub Actions.',
    tags: ['Dart', 'Flutter', 'Python', 'REST API', 'Docker', 'GitHub Actions', 'Rancher', 'Harbor'],
  },
  {
    title: 'SEC Mobile',
    type: 'Fintech platform',
    summary:
      'Developed a white-labeled fintech mobile application based on the Asenso Mobile platform, adapting its core architecture and functionality to support a separate financial services implementation while maintaining a consistent mobile banking experience.',
    tags: ['Dart', 'Flutter', 'Python', 'REST API', 'Docker', 'GitHub Actions', 'Rancher', 'Harbor'],
  },
  {
    title: 'Merchant App',
    type: 'Fintech platform',
    summary:
      'Developed a person-to-merchant (P2M) mobile application for RBGI merchants, supporting end-to-end transaction workflows and merchant-facing operations. Contributed to its backend integration, containerized deployment, and CI/CD processes across Rancher and Harbor environments.',
    tags: ['Dart', 'Flutter', 'Python', 'REST API', 'Docker', 'GitHub Actions', 'Rancher', 'Harbor'],
  },
  {
    title: 'SMS Switch API',
    type: 'Fintech platform',
    summary:
      'Developed a Python-based SMS switching API that integrates with third-party SMS providers and supports automated message processing through scheduled CRON jobs. The service facilitates SMS delivery through telecommunications providers such as SMART and Globe.',
    tags: ['Flask', 'Python', 'REST API', 'Docker', 'GitHub Actions', 'Rancher', 'Harbor'],
  },
  {
    title: 'API Gateway ISO 20022 | ISO 8583',
    type: 'RESTful API',
    summary:
      'Collaborated with the development team on API gateway and transaction-processing services supporting ISO 20022 and ISO 8583 integrations. Worked on API routing, transaction flows, fee logic, and partner integration patterns to support reliable and scalable financial transaction processing. ',
    tags: ['REST API', 'Python', 'Flask', 'MySQL'],
  },
  {
    title: 'SwitchConnect Web Portal',
    type: 'Web Portal',
    summary:
      'Modular fintech operations platform designed to streamline the management of payment gateway services, from merchant onboarding and user administration to transaction monitoring, connector configuration, and reporting. The project reflects a production-grade architecture centered on reusable UI components, route-based navigation, secure authentication, and API-driven business workflows.',
    tags: ['Vue.js', 'Quasar', 'Springboot', 'SCSS', 'TypeScript', 'MySQL'],
  },
  {
    title: 'E-Wallet Mobile',
    type: 'Fintech Platform',
    summary:
      'Created dashboards and workflow automation to reduce manual checks, speed up transaction reviews, and give teams better operational visibility.',
    tags: ['Dart', 'Flutter', 'Python', 'REST API', 'Docker', 'GitHub Actions', 'Rancher', 'Harbor'],
  },
  {
    title: 'MVSM Mobile Deposit',
    type: 'Fintech Platform',
    summary:
      'Created dashboards and workflow automation to reduce manual checks, speed up transaction reviews, and give teams better operational visibility.',
    tags: ['Dart', 'Flutter', 'Python', 'REST API', 'Docker', 'GitHub Actions', 'Rancher', 'Harbor'],
  },
]

const journey = [
  'Crafting products that feel fast, dependable, and calm under pressure.',
  'Bridging product thinking with engineering execution across frontend, backend, and systems.',
  'Keeping a rider’s mentality in the work: clear direction, steady focus, and momentum.',
]

function App() {
  return (
    <div className="min-h-screen bg-[#070b11] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b11]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 text-sm font-medium tracking-[0.28em] text-zinc-100 uppercase">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.7)]" />
            Jan Luis Villanueva
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#work" className="transition hover:text-orange-300">Work</a>
            <a href="#about" className="transition hover:text-orange-300">About</a>
            <a href="#contact" className="transition hover:text-orange-300">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-orange-400/60 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200 transition hover:border-orange-300 hover:bg-orange-500/20"
          >
            Let’s ride
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:pt-14">
        <section className="road-grid relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.12),transparent_28%)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-orange-200">
                Road-tested software engineer
              </p>

              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Building systems that keep the ride moving.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
                I’m a product-minded engineer building polished experiences, resilient APIs, and digital tools that turn complex operations into something people can trust.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  View projects
                </a>
                <a
                  href="mailto:janjanluis17@gmail.com"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-300/60 hover:text-orange-200"
                >
                  janjanluis17@gmail.com
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="metric-card rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-2xl font-semibold tracking-[-0.06em] text-white">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="panel-shell rounded-[28px] border border-white/10 bg-[#0c1017]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Current route</p>
                    <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">Software developer</h2>
                  </div>
                  <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                    Available
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Focus</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {focusAreas.map((item) => (
                        <span key={item} className="tech-pill rounded-full border border-white/10 bg-zinc-900/80 px-2.5 py-1.5 text-[11px] text-zinc-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-orange-200">Mode</div>
                    <div className="mt-3 space-y-2 text-sm text-zinc-200">
                      <div className="flex items-center justify-between">
                        <span>Build velocity</span>
                        <span className="text-orange-300">High</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Reliability</span>
                        <span className="text-emerald-300">Strong</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Design clarity</span>
                        <span className="text-cyan-300">Sharp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Selected work</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white">Built for momentum.</h2>
            </div>
            <span className="hidden rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400 md:inline-flex">
              Product • Systems • Experience
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="case-card group rounded-[28px] border border-white/10 bg-white/[0.02] p-6 transition hover:border-orange-400/40 hover:bg-white/[0.03]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-orange-200">{project.type}</span>
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-orange-400" />
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{project.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill rounded-full border border-white/10 bg-zinc-900/80 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.15em] text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">Built with clarity and calibration.</h2>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0b1118] p-6 md:p-8">
            <div className="space-y-5">
              {journey.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400" />
                  <p className="text-base leading-7 text-zinc-300 md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-[32px] border border-orange-400/30 bg-gradient-to-r from-orange-500/10 via-white/[0.02] to-cyan-500/10 p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-orange-200">Let’s build</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">A sharp idea deserves a solid build.</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:janjanluis17@gmail.com"
                className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
              >
                Email me
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-300/60 hover:text-orange-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 text-sm text-zinc-400">
          <span>© 2026 Jan Luis</span>
          <span>Built with React + TypeScript + Tailwind</span>
        </div>
      </footer>
    </div>
  )
}

export default App
