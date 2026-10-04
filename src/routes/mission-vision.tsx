import { createFileRoute } from "@tanstack/react-router";
import { MissionVision } from "@/components/site/MissionVision";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-mission-photo.jpg";

export const Route = createFileRoute("/mission-vision")({
  head: () => ({
    meta: [
      { title: "Mission, Vision & Core Values | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "The mission, vision and core values that guide Takura Overseas Pvt. Ltd. in delivering ethical, transparent and reliable recruitment solutions.",
      },
    ],
  }),
  component: MissionVisionPage,
});

function MissionVisionPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} title="Mission, Vision &" highlight="Core Values" />
      <div>
        <MissionVision />
      </div>
    </SiteLayout>
  );
}
