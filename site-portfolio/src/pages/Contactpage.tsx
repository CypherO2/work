import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

export default function Contactpage() {
  useEffect(() => {
    document.title = "CJ Presley | Contact Me";
  });
  return (
    <>
      <ContactForm />
    </>
  );
}
