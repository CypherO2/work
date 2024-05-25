import { useEffect } from "react";
import CodeGallery from "../components/CodeGalleryComp";
import Thumbnail from "../assets/SiteIcon.png";

export default function Codepage() {
  useEffect(() => {
    document.title = "CJ Presley | Portfolio - Code";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <h1 className="p-1 text-center fw-bold">Code Gallery</h1>
      <CodeGallery />
    </>
  );
}
