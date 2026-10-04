import { createFileRoute } from "@tanstack/react-router";
import { Process } from "@/components/site/Process";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-process-photo.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Recruitment Procedure | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "The fourteen documented stages Takura Overseas follows, from client approach to candidate departure and post-arrival assessment.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} title="Recruitment" highlight="Procedure" />
      <div>
        <Process />
      </div>
    </SiteLayout>
  );
}