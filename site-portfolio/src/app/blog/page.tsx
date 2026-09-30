import type { Metadata } from "next";
import MainBlogpage from "@/views/MainBlogpage";

export const metadata: Metadata = { title: "CJ Presley | Blogs" };

export default function Page() {
  return <><MainBlogpage /></>;
}
