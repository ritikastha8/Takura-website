import { CATEGORIES } from "./data";
import { Reveal } from "./reveal";

export function Categories() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category, index) => (
            <Reveal as="li" key={category.name} delay={Math.min(index, 4) * 80}>
              <article className="group relative h-full overflow-hidden rounded-xl border-2 border-transparent transition-colors hover:border-primary">
                <img
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 text-sm font-extrabold tracking-wide text-ink-foreground uppercase">
                  {category.name}
                </h3>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
