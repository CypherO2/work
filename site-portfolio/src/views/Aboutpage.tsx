import ProfileComp from "../components/ProfileComp";
import Thumbnail from "../assets/SiteIcon.png";
import { page, thumbnail } from "@/lib/ui";

export default function Aboutpage() {
  return (
    <div className={page}>
      <div className={thumbnail}>
        <img src={Thumbnail.src} alt="" className="h-0 w-0 object-cover" />
      </div>
      <ProfileComp />
    </div>
  );
}
