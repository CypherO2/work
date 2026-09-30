"use client";

import GalleryComp from "../components/GalleryComp";
import Thumbnail from "../assets/SiteIcon.png";
import { page, pageTitle, thumbnail } from "@/lib/ui";

export default function Artpage() {
  return (
    <div className={page}>
      <div className={thumbnail}>
        <img src={Thumbnail.src} alt="" className="h-0 w-0 object-cover" />
      </div>
      <h1 className={pageTitle}>Art Gallery</h1>
      <GalleryComp />
    </div>
  );
}
