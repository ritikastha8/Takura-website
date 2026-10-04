import { createFileRoute } from "@tanstack/react-router";
import { Categories } from "@/components/site/Categories";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-services-photo.jpg";

export const Route = createFileRoute("/service-categories")({
  head: () => ({
    meta: [
      { title: "Our Service Categories | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Skilled, semi-skilled and management manpower supplied across construction, manufacturing, oil & gas, transportation, facilities management, healthcare, hospitality, finance and education.",
      },
    ],
  }),
  component: ServiceCategoriesPage,
});

function ServiceCategoriesPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} title="Our Service" highlight="Categories" />
      <div>
        <Categories />
      </div>
    </SiteLayout>
  );
}
