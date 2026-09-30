import type { Metadata } from "next";
import Unknownpage from "@/views/Unknownpage";

export const metadata: Metadata = { title: "Error 404 | Page Not Found" };

export default function NotFound() {
  return <Unknownpage />;
}
