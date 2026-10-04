import { createFileRoute } from "@tanstack/react-router";
import { Introduction } from "@/components/site/Introduction";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/introduction")({
  head: () => ({
    meta: [
      { title: "Introduction | Takura Overseas Pvt. Ltd." },
      {
        name: "description",
        content:
          "Introducing Takura Overseas Pvt. Ltd. - a government-licensed, ISO 9001:2015 certified foreign employment agency connecting skilled Nepali talent with employers worldwide.",
      },
    ],
  }),
  component: IntroductionPage,
});

function IntroductionPage() {
  return (
    <SiteLayout>
      <div>
        <Introduction />
      </div>
    </SiteLayout>
  );
}
