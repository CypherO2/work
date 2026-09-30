import type { Metadata } from "next";
import HunderedsOfBeavers from "@/views/blog-pages/HundredsOfBeavers";

export const metadata: Metadata = {
  title: "CJ Presley | Hundreds of Beavers Review",
};

export default function Page() {
  return <HunderedsOfBeavers />;
}
