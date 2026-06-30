import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin,
  Code2, Palette, Rocket, Zap, Check, Star, Sparkles, Store,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useReveal } from "@/lib/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Asif Shah Diner — Shopify Developer Portfolio" },
      { name: "description", content: "Freelance Shopify developer based in Dhaka. Custom Shopify 2.0 themes, Liquid sections, and conversion-focused storefronts that ship fast." },
      { property: "og:title", content: "MD Asif Shah Diner — Shopify Developer" },
      { property: "og:description", content: "Custom Shopify 2.0 themes and conversion-focused storefronts." },
    ],
  }),
  component: Index,
});

const skills = [
  { label: "Shopify", items: ["Liquid", "Shopify 2.0", "Theme Dev", "Metafields", "Metaobjects", "Shopify CLI"], color: "bg-accent text-accent-foreground", icon: Store },
  { label: "Front-End", items: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"], color: "bg-secondary text-foreground", icon: Code2 },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Chrome DevTools"], color: "bg-tertiary text-foreground", icon: Palette },
  { label: "E-commerce", items: ["CRO", "SEO", "Performance", "App Integration"], color: "bg-quaternary text-foreground", icon: Rocket },
];

const headshot = "https://i.ibb.co.com/LXr0YqGS/Chat-GPT-Image-Jun-30-2026-04-35-36-PM.png";

const marqueeWords = ["Liquid", "✦", "Shopify 2.0", "●", "Metafields", "△", "Theme Dev", "◆", "Sections", "✿", "CRO", "▲"];

function Index() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

/* ------------------------------- NAV ------------------------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold sm:text-xl">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-accent text-accent-foreground pop-shadow">A</span>
          <span className="hidden sm:inline">Asif Shah</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-4 py-2 text-sm font-bold text-accent-foreground pop-shadow transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)]">
          Hire me
          <span className="grid h-5 w-5 place-items-center rounded-full bg-background text-foreground">
            <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </header>
  );
}

/* ------------------------------- HERO ------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:pt-28">
      {/* Decorations */}
      <div className="pointer-events-none absolute -left-24 top-24 hidden h-72 w-72 rounded-full bg-tertiary md:block" aria-hidden />
      <div className="pointer-events-none absolute right-10 top-8 hidden h-16 w-16 rotate-12 rounded-md border-2 border-foreground bg-quaternary md:block" aria-hidden />
      <Squiggle className="pointer-events-none absolute right-1/4 top-40 hidden h-8 w-32 text-secondary md:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div data-reveal="left">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold uppercase tracking-wider pop-shadow">
            <span className="h-2 w-2 rounded-full bg-quaternary" /> Available for freelance
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-7xl">
            I build <span className="relative inline-block">
              <span className="relative z-10">Shopify</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-tertiary sm:h-5" aria-hidden />
            </span>{" "}
            stores that <span className="text-accent">convert</span>.
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
            Hey, I'm <strong className="text-foreground">MD Asif Shah Diner</strong>—a freelance Shopify developer in Dhaka building custom 2.0 themes, Liquid sections, and pixel-honest storefronts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-5 py-3 text-sm font-bold text-accent-foreground pop-shadow transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)] sm:text-base">
              See my work
              <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-foreground">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-transparent px-5 py-3 text-sm font-bold transition-colors duration-300 hover:bg-tertiary sm:text-base">
              Let's talk
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md">
            <div data-reveal="up" data-reveal-delay="0"><Stat n="60+" label="Shopify stores" /></div>
            <div data-reveal="up" data-reveal-delay="100"><Stat n="2.0" label="Theme expert" /></div>
            <div data-reveal="up" data-reveal-delay="200"><Stat n="100%" label="Responsive" /></div>
          </div>
        </div>

        {/* Visual blob */}
        <div data-reveal="right" className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-secondary" aria-hidden />
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rotate-45 rounded-lg border-2 border-foreground bg-tertiary" aria-hidden />
          <div className="relative aspect-square rounded-[50%_50%_30%_70%_/_60%_40%_60%_40%] border-2 border-foreground bg-accent pop-shadow-lg">
            <img
              src={headshot}
              alt="MD Asif Shah Diner"
              loading="eager"
              className="absolute inset-0 h-full w-full rounded-[50%_50%_30%_70%_/_60%_40%_60%_40%] object-cover"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold text-foreground pop-shadow whitespace-nowrap">
              <Sparkles className="h-3 w-3" strokeWidth={2.5} /> Shopify Dev
            </div>
          </div>
          {/* Floating tags */}
          <FloatingTag className="-left-6 top-10 -rotate-6 bg-quaternary">Liquid</FloatingTag>
          <FloatingTag className="-right-2 top-1/2 rotate-6 bg-tertiary">2.0</FloatingTag>
          <FloatingTag className="bottom-2 left-10 -rotate-3 bg-background">Metafields</FloatingTag>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl border-2 border-foreground bg-card p-3 pop-shadow">
      <div className="font-display text-2xl font-extrabold">{n}</div>
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

function FloatingTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`absolute rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold pop-shadow ${className}`}>
      {children}
    </span>
  );
}

function Squiggle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 20" fill="none" aria-hidden>
      <path d="M2 10 Q 17 0 32 10 T 62 10 T 92 10 T 118 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ----------------------------- MARQUEE ---------------------------- */
function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="border-y-2 border-foreground bg-accent text-accent-foreground">
      <div className="flex animate-marquee gap-8 whitespace-nowrap py-4 font-display text-2xl font-extrabold sm:text-3xl will-change-transform">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ ABOUT ----------------------------- */
function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div data-reveal="left">
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            A developer who treats every store like a product launch.
          </h2>
        </div>
        <div data-reveal="right" className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I'm a Shopify developer with hands-on experience building and customizing Shopify 2.0 stores using Liquid, HTML, CSS, JavaScript, metafields, and theme customization.
          </p>
          <p>
            I care about responsive layouts, conversion details, and reusable sections so brands can keep editing long after I ship. When something feels slow, I make it fast. When something feels rough, I sand it down.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Problem solving", "Communication", "Teamwork", "Time management", "Attention to detail"].map((s) => (
              <span key={s} className="rounded-full border-2 border-foreground bg-background px-3 py-1 text-sm font-semibold text-foreground">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-tertiary px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
      {children}
    </span>
  );
}

/* ------------------------------ SKILLS ---------------------------- */
function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute right-6 top-10 hidden h-20 w-20 rounded-full border-2 border-foreground bg-secondary md:block" aria-hidden />
      <div className="mx-auto max-w-7xl">
        <div data-reveal="up" className="max-w-2xl">
          <Eyebrow>Toolbox</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            The kit I reach for.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            const shadows = ["pop-shadow-pink", "pop-shadow-amber", "pop-shadow-mint", "pop-shadow"];
            return (
              <div key={s.label} data-reveal="up" data-reveal-delay={String(i * 100)} className={`group relative rounded-xl border-2 border-foreground bg-card p-5 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02] ${shadows[i]}`}>
                <div className={`absolute -top-5 left-5 grid h-10 w-10 place-items-center rounded-full border-2 border-foreground ${s.color}`}>
                  <Icon className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="mt-4 font-display text-xl font-extrabold">{s.label}</h3>
                <ul className="mt-3 space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm font-medium">
                      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-quaternary">
                        <Check className="h-3 w-3 text-foreground" strokeWidth={3} />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROJECTS --------------------------- */
function Projects() {
  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div data-reveal="up" className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Stores I've shipped.
            </h2>
            <p className="mt-3 text-muted-foreground">Each store is custom-built on Shopify 2.0. Demo passwords are <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">1</code>.</p>
          </div>
          <a href="https://github.com/ArnavAsif" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-bold transition-colors hover:bg-tertiary sm:inline-flex">
            <Github className="h-4 w-4" strokeWidth={2.5} /> All repos
          </a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const shadows = ["pop-shadow-pink", "pop-shadow-amber", "pop-shadow-mint", "pop-shadow-pink", "pop-shadow-amber", "pop-shadow-mint"];
            return (
              <Link key={p.name} to="/projects/$slug" params={{ slug: p.slug }}>
                <article data-reveal="up" data-reveal-delay={String((i % 3) * 100)} className={`group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:rotate-[-0.5deg] ${shadows[i % shadows.length]}`}>
                  <div className={`relative h-48 border-b-2 border-foreground ${p.accent} overflow-hidden`}>
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.tag}`}
                      width={400}
                      height={192}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-background text-xl font-black">{p.shape}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-xl font-extrabold">{p.name}</h3>
                      <span className="rounded-full border-2 border-foreground bg-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">Shopify 2.0</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{p.tag}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground transition-transform group-hover:-translate-y-0.5">
                        View details <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <a href={p.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-background px-3 py-1.5 text-xs font-bold transition-colors hover:bg-tertiary">
                        <Github className="h-3 w-3" strokeWidth={2.5} /> Code
                      </a>
                      <span className="ml-auto self-center text-[10px] font-bold uppercase tracking-wide text-muted-foreground">pw: {p.pw}</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- EXPERIENCE -------------------------- */
function Experience() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div data-reveal="left">
              <Eyebrow>Experience</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Building since 2024.
              </h2>
            </div>
            <div data-reveal="up" className="mt-8 rounded-2xl border-2 border-foreground bg-card p-6 pop-shadow-amber">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-extrabold">Freelance Shopify Developer</h3>
                  <p className="text-sm font-medium text-muted-foreground">2024 — Present</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-quaternary">
                  <Zap className="h-5 w-5" strokeWidth={2.5} />
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
                {[
                  "Developed and customized multiple Shopify stores from scratch",
                  "Built custom sections, product pages, and landing pages",
                  "Optimized site speed, UX, and integrated third-party apps",
                ].map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-secondary">
                      <Check className="h-3 w-3 text-foreground" strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div data-reveal="right">
              <Eyebrow>Education</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Curious by training.
              </h2>
            </div>
            <div className="mt-8 space-y-4">
              {[
                { title: "B.S.S. in Economics", school: "National University", year: "2019", color: "bg-accent text-accent-foreground" },
                { title: "HSC (Science)", school: "Higher Secondary", year: "", color: "bg-secondary text-foreground" },
                { title: "SSC (Science)", school: "Secondary", year: "", color: "bg-tertiary text-foreground" },
              ].map((e, i) => (
                <div key={e.title} data-reveal="right" data-reveal-delay={String(i * 100)} className="flex items-center gap-4 rounded-xl border-2 border-foreground bg-card p-4 pop-shadow">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-foreground ${e.color} font-display text-lg font-extrabold`}>
                    <Star className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-display font-extrabold">{e.title}</div>
                    <div className="truncate text-sm text-muted-foreground">{e.school} {e.year && `· ${e.year}`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CONTACT ---------------------------- */
function Contact() {
  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div data-reveal="scale" className="relative overflow-hidden rounded-3xl border-2 border-foreground bg-accent p-8 text-accent-foreground pop-shadow-lg sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-2 border-foreground bg-tertiary" aria-hidden />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rotate-45 rounded-2xl border-2 border-foreground bg-quaternary" aria-hidden />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground">
              Let's build
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              Got a store to ship?
            </h2>
            <p className="mt-3 max-w-xl text-base sm:text-lg">
              I'm taking on new Shopify projects. Send a brief, a screenshot, or just say hi.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div data-reveal="up" data-reveal-delay="0"><ContactRow icon={Mail} label="Email" value="ifas092@gmail.com" href="mailto:ifas092@gmail.com" /></div>
              <div data-reveal="up" data-reveal-delay="100"><ContactRow icon={Phone} label="Phone" value="+880 1600-018734" href="tel:+8801600018734" /></div>
              <div data-reveal="up" data-reveal-delay="200"><ContactRow icon={Linkedin} label="LinkedIn" value="arnav-asif" href="https://linkedin.com/in/arnav-asif-a74894259" /></div>
              <div data-reveal="up" data-reveal-delay="300"><ContactRow icon={Github} label="GitHub" value="ArnavAsif" href="https://github.com/ArnavAsif" /></div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1.5 text-xs font-bold text-foreground">
              <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} /> Khilkhet, Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border-2 border-foreground bg-background p-3 text-foreground transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--foreground)]">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-foreground bg-tertiary">
        <Icon className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="block truncate font-semibold">{value}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
    </a>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm font-medium sm:flex-row sm:px-6">
        <div>&copy; {new Date().getFullYear()} MD Asif Shah Diner. Built with Shopify love.</div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/ArnavAsif" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-tertiary"><Github className="h-4 w-4" strokeWidth={2.5} /></a>
          <a href="https://linkedin.com/in/arnav-asif-a74894259" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-tertiary"><Linkedin className="h-4 w-4" strokeWidth={2.5} /></a>
          <a href="mailto:ifas092@gmail.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-tertiary"><Mail className="h-4 w-4" strokeWidth={2.5} /></a>
        </div>
      </div>
    </footer>
  );
}
