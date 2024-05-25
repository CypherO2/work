import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Thumbnail from "../assets/SiteIcon.png";

export default function Contactpage() {
  useEffect(() => {
    document.title = "CJ Presley | Contact Me";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <ContactForm />
    </>
  );
}
