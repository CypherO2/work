import type { Metadata } from "next";
import Homepage from "@/views/Homepage";

export const metadata: Metadata = { title: "CJ Presley | Github Pages" };

export default function Page() {
  return <Homepage />;
}
