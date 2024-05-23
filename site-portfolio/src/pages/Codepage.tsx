import { useEffect } from "react";
import CodeGallery from "../components/CodeGalleryComp";

export default function Codepage() {
  useEffect(() => {
    document.title = "CJ Presley | Portfolio - Code";
  });
  return (
    <>
      <h1 className="p-1 text-center fw-bold">Code Gallery</h1>
      <CodeGallery />
    </>
  );
}
