import { createFileRoute } from "@tanstack/react-router";
import { OrganizationChart } from "@/components/site/OrganizationChart";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-orgchart-photo.jpg";

export const Route = createFileRoute("/organization-chart")({
  head: () => ({
    meta: [
      { title: "Organization Chart | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "The organizational structure of Takura Overseas Pvt. Ltd., from the Chairman's office through HR, finance, legal, processing and support functions.",
      },
    ],
  }),
  component: OrganizationChartPage,
});

function OrganizationChartPage() {
  return (
    <SiteLayout>
      <PhotoBanner
        image={bannerPhoto}
        title="Organization"
        highlight="Chart"
      />
      <div>
        <OrganizationChart />
      </div>
    </SiteLayout>
  );
}
