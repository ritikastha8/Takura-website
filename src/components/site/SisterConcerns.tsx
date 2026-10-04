import { SISTER_CONCERNS } from "./data";
import { Reveal, SectionHeading } from "./reveal";

import vintageDeRestaurant from "@/assets/sister-concerns/vintage-de-restaurant.png";
import lhotseThakali from "@/assets/sister-concerns/lhotse-thakali.png";
import vintageHub from "@/assets/sister-concerns/vintage-hub.png";
import himalayanJavaKumaripati from "@/assets/sister-concerns/himalayan-java-kumaripati.png";
import himalayanJavaKamaladi from "@/assets/sister-concerns/himalayan-java-kamaladi.png";

const IMAGES: Record<string, string> = {
  "vintage-de-restaurant": vintageDeRestaurant,
  "lhotse-thakali": lhotseThakali,
  "vintage-hub": vintageHub,
  "himalayan-java-kumaripati": himalayanJavaKumaripati,
  "himalayan-java-kamaladi": himalayanJavaKamaladi,
};

export function SisterConcerns() {
  return (
    <section id="sister-concerns" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="Our Sister"
            highlight="Concerns"
            subtitle="The hospitality and lifestyle brands operated by the Takura group across Kathmandu Valley."
          />
        </Reveal>

        <ul className="mt-14 space-y-12">
          {SISTER_CONCERNS.map((brand, index) => (
            <Reveal as="li" key={brand.name} delay={Math.min(index, 4) * 90}>
              <article className="flex flex-col gap-6 border-b border-border pb-12 last:border-b-0 last:pb-0 sm:flex-row sm:items-start">
                <div className="grid h-32 w-32 shrink-0 place-items-center overflow-hidden rounded-md border border-border bg-white p-3 shadow-card sm:h-36 sm:w-36">
                  <img
                    src={IMAGES[brand.image]}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold tracking-wide text-primary uppercase sm:text-lg">
                    {brand.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">{brand.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
