import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Check, Monitor, Smartphone } from "lucide-react";
import { useState } from "react";
import { projects, getProjectBySlug } from "@/data/projects";
import { DeviceMockup } from "@/components/ui/device-mockup";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    return {
      meta: [
        { title: project ? `${project.name} — Project Details` : "Project Not Found" },
        { name: "description", content: project?.description ?? "" },
      ],
    };
  },
  component: ProjectDetails,
});

function ProjectDetails() {
  const { slug } = Route.useParams();
  const project = getProjectBySlug(slug);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  if (!project) {
    throw notFound();
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold sm:text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-accent text-accent-foreground pop-shadow">A</span>
            <span className="hidden sm:inline">Asif Shah</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-bold transition-colors hover:bg-tertiary">
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} /> Back to portfolio
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Portfolio</Link>
            <span>/</span>
            <span className="text-foreground">{project.name}</span>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            {/* Project info */}
            <div>
              <span className={`inline-flex items-center gap-2 rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider ${project.accent}`}>
                <span>{project.shape}</span>
                {project.tag}
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.description}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="font-display text-lg font-extrabold">Key Features</h3>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm font-medium">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-quaternary">
                        <Check className="h-3 w-3 text-foreground" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons — after features */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-5 py-3 text-sm font-bold text-accent-foreground pop-shadow transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)] sm:text-base"
                >
                  Visit live store
                  <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-3 text-sm font-bold transition-colors duration-300 hover:bg-tertiary sm:text-base"
                >
                  <Github className="h-4 w-4" strokeWidth={2.5} /> View source
                </a>
              </div>

              {/* Password note */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-muted px-3 py-1.5 text-xs font-bold text-foreground">
                Demo password: <code className="rounded bg-background px-1.5 py-0.5 font-mono">{project.pw}</code>
              </div>
            </div>

            {/* Device mockups with toggle */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-secondary opacity-60" aria-hidden />
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rotate-45 rounded-lg border-2 border-foreground bg-tertiary opacity-60" aria-hidden />

              {/* Toggle button */}
              <div className="mb-4 flex items-center gap-2">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    viewMode === "desktop"
                      ? "bg-accent text-accent-foreground pop-shadow"
                      : "bg-background hover:bg-tertiary"
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5" strokeWidth={2.5} /> Desktop
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    viewMode === "mobile"
                      ? "bg-accent text-accent-foreground pop-shadow"
                      : "bg-background hover:bg-tertiary"
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" strokeWidth={2.5} /> Mobile
                </button>
              </div>

              {/* Mockup view */}
              <div
                key={viewMode}
                className="animate-[reveal-scale_0.7s_cubic-bezier(0.22,1,0.36,1)_both]"
              >
                {viewMode === "desktop" ? (
                  <DeviceMockup
                    src={project.image}
                    alt={`${project.name} homepage - desktop view`}
                    variant="desktop"
                    className="w-full"
                  />
                ) : (
                  <div className="mx-auto max-w-[280px]">
                    <DeviceMockup
                      src={project.image}
                      alt={`${project.name} homepage - mobile view`}
                      variant="mobile"
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border-2 border-foreground bg-accent p-8 text-accent-foreground pop-shadow-lg sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-2 border-foreground bg-tertiary" aria-hidden />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rotate-45 rounded-2xl border-2 border-foreground bg-quaternary" aria-hidden />

            <div className="relative text-center">
              <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Want a store like this?
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-base sm:text-lg">
                I can build a custom Shopify store tailored to your brand. Let's talk about your project.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ifas092@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-3 text-sm font-bold text-foreground pop-shadow transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] sm:text-base"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-transparent px-5 py-3 text-sm font-bold transition-colors duration-300 hover:bg-tertiary sm:text-base"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2.5} /> View all projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-foreground bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm font-medium sm:flex-row sm:px-6">
          <div>&copy; {new Date().getFullYear()} MD Asif Shah Diner. Built with Shopify love.</div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/ArnavAsif" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-tertiary"><Github className="h-4 w-4" strokeWidth={2.5} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
