import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "./data";
import { Reveal, SectionHeading } from "./reveal";

const FEATURED = CATEGORIES.slice(0, 6);

export function CategoriesTeaser() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              title="Where We Place"
              highlight="Talent"
              subtitle="A snapshot of the sectors we recruit for - from skilled trades to healthcare and hospitality."
            />
          </Reveal>
          <Reveal delay={80}>
            <Link
              to="/service-categories"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-ink px-6 py-3 text-xs font-bold tracking-wide text-ink uppercase transition-colors hover:bg-ink hover:text-ink-foreground sm:inline-flex"
            >
              View All Categories
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURED.map((category, index) => (
            <Reveal as="li" key={category.name} delay={Math.min(index, 5) * 60}>
              <article className="group relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-3 text-[0.68rem] leading-tight font-extrabold tracking-wide text-ink-foreground uppercase sm:text-xs">
                  {category.name}
                </h3>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/service-categories"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-xs font-bold tracking-wide text-ink uppercase"
          >
            View All Categories
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
