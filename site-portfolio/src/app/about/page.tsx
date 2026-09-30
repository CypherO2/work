import type { Metadata } from "next";
import Aboutpage from "@/views/Aboutpage";

export const metadata: Metadata = { title: "CJ Presley | About Me" };

export default function Page() {
  return <Aboutpage />;
}
