import { createFileRoute } from "@tanstack/react-router";
import { Clients } from "@/components/site/Clients";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-clients-photo.jpg";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Valued Clients | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Employers across Saudi Arabia, Qatar, UAE, Kuwait, Bahrain and Malaysia who rely on Takura Overseas for dependable, compliant manpower.",
      },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} title="Our Valued" highlight="Clients" />
      <div>
        <Clients />
      </div>
    </SiteLayout>
  );
}