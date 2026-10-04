import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

export function RevealLeft({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal-left", inView && "reveal-left-in", className)}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  title,
  highlight,
  subtitle,
  center = false,
  light = false,
}: {
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <h2
        className={cn(
          "heading-caps text-3xl sm:text-4xl",
          center ? "rule-red-center" : "rule-red",
          light && "text-ink-foreground",
        )}
      >
        {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
      </h2>
      {subtitle ? (
        <p className={cn("mt-6 text-base leading-relaxed", light && "text-white/70")}>{subtitle}</p>
      ) : null}
    </div>
  );
}
