import type { Metadata } from "next";
import AccessibilityControls from "@/components/AccessibilityControls";

export const metadata: Metadata = { title: "CJ Presley | Accessibility" };

export default function Page() {
  return <AccessibilityControls />;
}
