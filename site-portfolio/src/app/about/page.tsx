import type { Metadata } from "next";
import Aboutpage from "@/views/Aboutpage";

export const metadata: Metadata = { title: "CJ Presley | About" };

export default function Page() {
  return <Aboutpage />;
}
