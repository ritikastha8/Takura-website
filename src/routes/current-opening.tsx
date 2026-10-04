import { createFileRoute } from "@tanstack/react-router";
import { CurrentOpening } from "@/components/site/CurrentOpening";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-opening-photo.jpg";

export const Route = createFileRoute("/current-opening")({
  head: () => ({
    meta: [
      { title: "Current Opening | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Live overseas job vacancies from Takura Overseas Pvt. Ltd. across Qatar, Saudi Arabia, UAE, Kuwait and Malaysia - construction, hospitality, security, transport and manufacturing roles.",
      },
    ],
  }),
  component: CurrentOpeningPage,
});

function CurrentOpeningPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} title="Current" highlight="Opening" />
      <div>
        <CurrentOpening />
      </div>
    </SiteLayout>
  );
}
