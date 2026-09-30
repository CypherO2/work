import type { Metadata } from "next";
import ArtCodeCuriousityPage from "@/views/blog-pages/ArtCodeCuriousityPage";

export const metadata: Metadata = {
  title: "CJ Presley | Art, Code & Curiousity",
};

export default function Page() {
  return <ArtCodeCuriousityPage />;
}
