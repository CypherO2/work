import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Thumbnail from "../assets/SiteIcon.png";
import { MDBContainer } from "mdb-react-ui-kit";
import MainBanner from "../components/BannerComp";

export default function Contactpage() {
  useEffect(() => {
    document.title = "CJ Presley | Contact Me";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <MainBanner />
      <MDBContainer>
        <ContactForm />
      </MDBContainer>
    </>
  );
}
