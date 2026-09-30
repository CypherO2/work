import type { Metadata } from "next";
import TLevelExperiencePage from "@/views/blog-pages/TLevelExperiencePage";

export const metadata: Metadata = {
  title: "CJ Presley | The T-Level Experience",
};

export default function Page() {
  return <TLevelExperiencePage />;
}
