import type { Metadata } from "next";
import Nowpage from "@/views/Nowpage";

export const metadata: Metadata = { title: "CJ Presley | Now" };

export default function Page() {
  return <Nowpage />;
}
