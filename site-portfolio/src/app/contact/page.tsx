import type { Metadata } from "next";
import Contactpage from "@/views/Contactpage";

export const metadata: Metadata = { title: "CJ Presley | Contact" };

export default function Page() {
  return <Contactpage />;
}
