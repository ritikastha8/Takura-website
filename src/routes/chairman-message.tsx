import { createFileRoute } from "@tanstack/react-router";
import { Chairman } from "@/components/site/Chairman";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-chairman-photo.jpg";

export const Route = createFileRoute("/chairman-message")({
  head: () => ({
    meta: [
      { title: "Chairman's Message | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "A message from the Chairman of Takura Overseas Pvt. Ltd. on ethical recruitment and building a better future for Nepali talent abroad.",
      },
    ],
  }),
  component: ChairmanMessagePage,
});

function ChairmanMessagePage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} captioned />
      <div>
        <Chairman />
      </div>
    </SiteLayout>
  );
}
