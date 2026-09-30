import type { Metadata } from "next";
import Workpage from "@/views/Workpage";

export const metadata: Metadata = { title: "CJ Presley | Work" };

export default function Page() {
  return <Workpage />;
}
