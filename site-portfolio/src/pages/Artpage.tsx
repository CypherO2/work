import { useEffect } from "react";
import GalleryComp from "../components/GalleryComp";

export default function Artpage() {
  useEffect(() => {
    document.title = "CJ Presley | Portfolio - Art";
  });
  return (
    <>
      <h1 className="p-1 text-center fw-bold">Art Gallery</h1>
      <GalleryComp />
    </>
  );
}
