import { createFileRoute } from "@tanstack/react-router";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { Certification } from "@/components/site/Certification";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-whatwedo-photo.jpg";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Executive search, headhunting, permanent staffing, HR outsourcing and training - discover the end-to-end recruitment services Takura Overseas delivers for employers worldwide.",
      },
    ],
  }),
  component: WhatWeDoPage,
});

function WhatWeDoPage() {
  return (
    <SiteLayout>
      <PhotoBanner
        image={bannerPhoto}
        title="What We"
        highlight="Do"
        focus="top"
        textColor="dark"
      />
      <section className="bg-ink py-14 text-center sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.35em] text-primary uppercase">End-To-End Recruitment</p>
          <h2 className="heading-caps mt-3 text-3xl text-white sm:text-4xl">
            What We <span className="text-primary">Do</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
            style={{ textAlign: "justify", textAlignLast: "center" }}
          >
            Talent sourcing, assessment, screening and compliant HR placement support - from first
            requirement to final mobilisation.
          </p>
        </div>
      </section>
      <div>
        <WhatWeDo />
        <Certification />
      </div>
    </SiteLayout>
  );
}
