import { createFileRoute } from "@tanstack/react-router";
import { Advertisement } from "@/components/site/Advertisement";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-advertisement-photo.jpg";

export const Route = createFileRoute("/advertisement")({
  head: () => ({
    meta: [
      { title: "Advertisement | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Current recruitment drives and demand notices from Takura Overseas Pvt. Ltd. across construction, hospitality, healthcare and manufacturing.",
      },
    ],
  }),
  component: AdvertisementPage,
});

function AdvertisementPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} title="Current" highlight="Advertisement" />
      <div>
        <Advertisement />
      </div>
    </SiteLayout>
  );
}
