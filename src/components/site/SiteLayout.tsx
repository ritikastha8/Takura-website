import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[104px]">{children}</main>
      <Footer />
    </>
  );
}