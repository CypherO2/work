import { useEffect } from "react";
import GalleryComp from "../components/GalleryComp";

export default function Portfoliopage() {
  useEffect(() => {
    document.title = "CJ Presley | Portfolio";
  });
  return (
    <>
      <h1 className="p-1 text-center fw-bold">Portfolio Gallery</h1>
      <GalleryComp />
    </>
  );
}
