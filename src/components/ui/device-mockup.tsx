import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  src: string;
  alt: string;
  variant?: "desktop" | "mobile";
  className?: string;
}

export function DeviceMockup({ src, alt, variant = "desktop", className }: DeviceMockupProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("relative mx-auto", className)}>
        {/* Phone bezel */}
        <div className="relative rounded-[2.5rem] border-[6px] border-foreground bg-foreground p-2 shadow-[8px_8px_0_0_oklch(0.29_0.04_257)]">
          {/* Notch */}
          <div className="absolute -top-[6px] left-1/2 z-10 h-[28px] w-[120px] -translate-x-1/2 rounded-b-2xl bg-foreground" />
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2rem] bg-background">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover object-top"
            />
          </div>
          {/* Home indicator */}
          <div className="absolute bottom-3 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-muted" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Laptop lid */}
      <div className="relative rounded-t-2xl border-[6px] border-b-0 border-foreground bg-foreground p-2 pb-0 shadow-[8px_8px_0_0_oklch(0.29_0.04_257)]">
        {/* Camera dot */}
        <div className="absolute top-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-muted" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-t-xl bg-background pt-3">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>
      {/* Laptop base */}
      <div className="relative h-4 rounded-b-2xl border-[6px] border-t-2 border-foreground bg-foreground">
        {/* Trackpad notch */}
        <div className="absolute top-0 left-1/2 h-1 w-1/4 -translate-x-1/2 rounded-b bg-muted" />
      </div>
    </div>
  );
}
