import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import SplashCursor from "@/components/splash-cursor";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MD Asif Shah Diner — Shopify Developer" },
      {
        name: "description",
        content:
          "Freelance Shopify developer building high-converting, custom Shopify 2.0 stores with Liquid, metafields, and pixel-perfect theme work.",
      },
      { name: "author", content: "MD Asif Shah Diner" },
      { property: "og:title", content: "MD Asif Shah Diner — Shopify Developer" },
      {
        property: "og:description",
        content: "Custom Shopify 2.0 themes, Liquid sections, and conversion-focused storefronts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <SplashCursor COLOR="#9362f4" RAINBOW_MODE={false} />
        <ClickSound />
        <Scripts />
      </body>
    </html>
  );
}

function ClickSound() {
  useEffect(() => {
    let audioContext: AudioContext | undefined;

    const playClickSound = () => {
      const context = (audioContext ??= new AudioContext());

      const createMechanicalClick = () => {
        const now = context.currentTime;
        const impact = context.createOscillator();
        const click = context.createOscillator();
        const resonance = context.createOscillator();
        const impactGain = context.createGain();
        const clickGain = context.createGain();
        const resonanceGain = context.createGain();

        // A short low impact, sharp surface click, and restrained mechanical resonance.
        impact.type = "triangle";
        impact.frequency.setValueAtTime(185, now);
        impact.frequency.exponentialRampToValueAtTime(105, now + 0.055);
        impactGain.gain.setValueAtTime(0.08, now);
        impactGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);

        click.type = "sine";
        click.frequency.setValueAtTime(1250, now);
        click.frequency.exponentialRampToValueAtTime(720, now + 0.022);
        clickGain.gain.setValueAtTime(0.045, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.028);

        resonance.type = "sine";
        resonance.frequency.setValueAtTime(480, now);
        resonance.frequency.exponentialRampToValueAtTime(340, now + 0.11);
        resonanceGain.gain.setValueAtTime(0.018, now);
        resonanceGain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

        impact.connect(impactGain);
        impactGain.connect(context.destination);
        click.connect(clickGain);
        clickGain.connect(context.destination);
        resonance.connect(resonanceGain);
        resonanceGain.connect(context.destination);

        impact.start(now);
        click.start(now);
        resonance.start(now);
        impact.stop(now + 0.065);
        click.stop(now + 0.028);
        resonance.stop(now + 0.11);
      };

      if (context.state === "suspended") {
        void context.resume().then(createMechanicalClick);
      } else {
        createMechanicalClick();
      }
    };

    document.addEventListener("click", playClickSound, { passive: true });
    return () => {
      document.removeEventListener("click", playClickSound);
      void audioContext?.close();
    };
  }, []);

  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
