import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, BadgeCheck, Award, Globe2 } from "lucide-react";
import sliderHomepage1 from "@/assets/slider/sliderhomepage1.jpg";
import sliderHomepage2 from "@/assets/slider/sliderhomepage2.jpg";
import sliderHomepage3 from "@/assets/slider/sliderhomepage3.jpg";

const SLIDES = [
  {
    image: sliderHomepage1,
    alt: "Construction worker in a hard hat at an industrial site",
    label: "Skilled people. Global opportunity.",
  },
  {
    image: sliderHomepage2,
    alt: "Recruitment consultants meeting a corporate client",
    label: "Trusted partnerships, built to last.",
  },
  {
    image: sliderHomepage3,
    alt: "Technicians working on a modern manufacturing floor",
    label: "Skilled teams for modern industry.",
  },
];

const BADGES = [
  { icon: ShieldCheck, label: "Govt. Licence No.", value: "1538/078/79" },
  { icon: BadgeCheck, label: "Quality Standard", value: "ISO 9001:2015 Certified" },
  { icon: Award, label: "Accreditation", value: "UKAS Accredited" },
  { icon: Globe2, label: "Affiliation", value: "RBA Member" },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % SLIDES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = SLIDES[activeSlide] ?? SLIDES[0]!;

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink">
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.alt}
        width={1600}
        height={1008}
        className="hero-image-enter absolute inset-0 h-full w-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent mix-blend-multiply" />
      <div className="blob -left-32 top-10 h-80 w-80 bg-primary/30" aria-hidden="true" />
      <div className="blob -right-20 bottom-0 h-96 w-96 bg-white/5" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="text-xs font-semibold tracking-[0.35em] text-primary-foreground/80 uppercase">
          {slide.label}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-extrabold text-ink-foreground uppercase sm:text-5xl lg:text-6xl">
          Takura - Creating a <span className="text-primary">Better Future</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Nepal's trusted ISO 9001:2015 certified foreign employment agency, connecting skilled
          talent with leading employers across the Gulf, Malaysia and beyond.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="/what-we-do"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Explore Our Services
          </a>
          <a
            href="/hire-talent"
            className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-bold tracking-wide text-ink-foreground uppercase transition-colors hover:bg-white hover:text-ink"
          >
            Get in Touch
          </a>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.65rem] tracking-[0.18em] text-white/60 uppercase">
                  {label}
                </span>
                <span className="block truncate text-sm font-semibold text-ink-foreground">
                  {value}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-3" aria-label="Hero slides">
          <button
            type="button"
            onClick={() => setActiveSlide((activeSlide - 1 + SLIDES.length) % SLIDES.length)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-primary hover:bg-primary"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          {SLIDES.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all ${index === activeSlide ? "w-10 bg-primary" : "w-2 bg-white/50 hover:bg-white"}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide}
            />
          ))}
          <button
            type="button"
            onClick={() => setActiveSlide((activeSlide + 1) % SLIDES.length)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-primary hover:bg-primary"
            aria-label="Next slide"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
