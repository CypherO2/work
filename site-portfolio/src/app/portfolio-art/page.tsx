import type { Metadata } from "next";
import Artpage from "@/views/Artpage";

export const metadata: Metadata = { title: "CJ Presley | Art" };

export default function Page() {
  return <Artpage />;
}
