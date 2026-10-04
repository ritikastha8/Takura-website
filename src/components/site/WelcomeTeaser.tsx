import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import aboutImage from "@/assets/aboutus.jpg";
import { Reveal, useInView } from "./reveal";

const STATS = [
  { value: 18, suffix: "+", label: "Years Leadership Experience" },
  { value: 6, suffix: "", label: "Countries Served" },
  { value: 100, suffix: "+", label: "Global Clients" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-3xl font-extrabold text-primary">
      {display}
      {suffix}
    </span>
  );
}

export function WelcomeTeaser() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal delay={80} className="relative order-2 lg:order-1">
          <div className="blob -right-10 -top-8 h-52 w-52 bg-primary/15" aria-hidden="true" />
          <div className="blob -bottom-10 -left-6 h-40 w-40 bg-ink/10" aria-hidden="true" />
          <img
            src={aboutImage}
            alt="Takura Overseas recruitment consultants meeting a corporate client"
            loading="lazy"
            width={900}
            height={900}
            className="relative aspect-square w-full rounded-full object-cover shadow-lift"
          />
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">Welcome to</p>
          <h2 className="heading-caps rule-red mt-3 text-3xl sm:text-4xl">Takura Overseas</h2>
          <p className="mt-6 leading-relaxed">
            A government-licensed, ISO 9001:2015 certified foreign employment agency based in
            Lalitpur, Nepal - connecting skilled and semi-skilled Nepali talent with reputable
            employers across the Gulf, Malaysia and beyond through transparent, fully documented
            recruitment.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-primary pl-3">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="mt-1 block text-[0.65rem] leading-snug tracking-wide uppercase">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/introduction"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              More About Us
            </Link>
            <Link
              to="/chairman-message"
              className="rounded-full border border-ink px-7 py-3.5 text-sm font-bold tracking-wide text-ink uppercase transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              Chairman's Message
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
