import { createFileRoute } from "@tanstack/react-router";
import { SisterConcerns } from "@/components/site/SisterConcerns";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-sister-photo.jpg";

export const Route = createFileRoute("/sister-concerns")({
  head: () => ({
    meta: [
      { title: "Our Sister Concerns | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Meet the hospitality and lifestyle brands operated by the Takura group across Kathmandu Valley, including Vintage Dé Home Restaurant, Lhotse Thakali & Sekuwa and Himalayan Java Coffee.",
      },
    ],
  }),
  component: SisterConcernsPage,
});

function SisterConcernsPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto}>
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <span className="mb-3 flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-14" style={{ backgroundColor: "#9c8054" }} />
            <svg width="34" height="22" viewBox="0 0 34 22" fill="none">
              <path d="M2 20 L11 6 L15 12 L20 3 L32 20 Z" fill="#9c8054" />
            </svg>
            <span className="h-px w-14" style={{ backgroundColor: "#9c8054" }} />
          </span>
          <h1
            className="font-serif text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ color: "#102830" }}
          >
            Beyond Recruitment
          </h1>
          <p
            className="mt-2 text-xl tracking-[0.25em] sm:text-2xl"
            style={{ color: "#5a4d36" }}
          >
            Our Sister Concerns
          </p>
          <p
            className="mt-5 max-w-lg text-sm leading-relaxed text-ink/70 sm:text-base"
            style={{ textAlign: "justify", textAlignLast: "center" }}
          >
            The hospitality and lifestyle brands operated by the Takura group across Kathmandu
            Valley.
          </p>
        </div>
      </PhotoBanner>
      <div>
        <SisterConcerns />
      </div>
    </SiteLayout>
  );
}
