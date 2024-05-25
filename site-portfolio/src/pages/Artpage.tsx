import { useEffect } from "react";
import GalleryComp from "../components/GalleryComp";
import Thumbnail from "../assets/SiteIcon.png";


export default function Artpage() {
  useEffect(() => {
    document.title = "CJ Presley | Portfolio - Art";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <h1 className="p-1 text-center fw-bold">Art Gallery</h1>
      <GalleryComp />
    </>
  );
}
