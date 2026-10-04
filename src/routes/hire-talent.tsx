import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { PhotoBanner } from "@/components/site/PhotoBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import bannerPhoto from "@/assets/banner-hiretalent-photo.jpg";

export const Route = createFileRoute("/hire-talent")({
  head: () => ({
    meta: [
      { title: "Hire Talent | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Share your manpower requirement with Takura Overseas and our recruitment team will build a tailored hiring plan.",
      },
    ],
  }),
  component: HireTalentPage,
});

function HireTalentPage() {
  return (
    <SiteLayout>
      <PhotoBanner image={bannerPhoto} title="Hire" highlight="Talent" />
      <div>
        <Contact mode="hire" />
      </div>
    </SiteLayout>
  );
}