"use client";

import GalleryComp from "../components/GalleryComp";
import Thumbnail from "../assets/SiteIcon.png";
import { MDBContainer } from "mdb-react-ui-kit";


export default function Artpage() {
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail.src} alt="" />
      </div>
      <h1 className="p-1 text-light text-center fw-bold my-2" style={{fontFamily:"monospace"}}>Art Gallery</h1>
      <MDBContainer>
        <GalleryComp />
      </MDBContainer>
    </>
  );
}
