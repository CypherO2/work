import GalleryComp from "../components/GalleryComp";
import Thumbnail from "../assets/SiteIcon.png";
import { page, pageTitle, thumbnail } from "@/lib/ui";

export default function Artpage() {
  return (
    <div className={page}>
      <div className={thumbnail}>
        <img src={Thumbnail.src} alt="" className="h-0 w-0 object-cover" />
      </div>
      <h1 className={pageTitle}>Art gallery</h1>
      <p className="mx-auto mb-6 max-w-[40rem] text-center text-[0.95rem] text-muted">
        Drawings, 3D work, maps, and studies. Click a piece to open it larger.
      </p>
      <GalleryComp />
    </div>
  );
}
