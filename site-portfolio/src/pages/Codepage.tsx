import { useEffect } from "react";
import CodeGallery from "../components/CodeGalleryComp";
import Thumbnail from "../assets/SiteIcon.png";
import { MDBContainer } from "mdb-react-ui-kit";

export default function Codepage() {
  useEffect(() => {
    document.title = "CJ Presley | Portfolio - Code";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <h1 className="p-1 text-center fw-bold my-2">Code Gallery</h1>
      <MDBContainer>
        <CodeGallery />
      </MDBContainer>
    </>
  );
}
