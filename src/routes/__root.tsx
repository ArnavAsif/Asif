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
      { name: "description", content: "Freelance Shopify developer building high-converting, custom Shopify 2.0 stores with Liquid, metafields, and pixel-perfect theme work." },
      { name: "author", content: "MD Asif Shah Diner" },
      { property: "og:title", content: "MD Asif Shah Diner — Shopify Developer" },
      { property: "og:description", content: "Custom Shopify 2.0 themes, Liquid sections, and conversion-focused storefronts." },
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
      audioContext ??= new AudioContext();

      const createBuzz = () => {
        const now = audioContext.currentTime;
        const mainOscillator = audioContext.createOscillator();
        const accentOscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        mainOscillator.type = "square";
        mainOscillator.frequency.setValueAtTime(360, now);
        mainOscillator.frequency.exponentialRampToValueAtTime(180, now + 0.12);
        accentOscillator.type = "sine";
        accentOscillator.frequency.setValueAtTime(720, now);
        accentOscillator.frequency.exponentialRampToValueAtTime(360, now + 0.08);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        mainOscillator.connect(gain);
        accentOscillator.connect(gain);
        gain.connect(audioContext.destination);
        mainOscillator.start(now);
        accentOscillator.start(now);
        mainOscillator.stop(now + 0.12);
        accentOscillator.stop(now + 0.12);
      };

      if (audioContext.state === "suspended") {
        void audioContext.resume().then(createBuzz);
      } else {
        createBuzz();
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
