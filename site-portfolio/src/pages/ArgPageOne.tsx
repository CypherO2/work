import { MDBContainer } from "mdb-react-ui-kit";
import { useEffect } from "react";
import ARGIMAGE1 from "../assets/ARG/2025-07-26_05.32.31.png";

export default function ArgPageOne() {
  useEffect(() => {
    document.title = "CJ Presley | Github Pages";
  });
  return (
    <>
      <MDBContainer>
        <h1
          id="https://youtu.be/47ntBElzaWk?si=t9OUiXQdmVKPkuiU"
          className="text-center text-light"
        >
          You Found This?!
        </h1>
        <img
          className="img-fluid m-5 "
          alt="where am I? are they watching? are you? - they're in the dark, in the fog - RUN!!"
          src={ARGIMAGE1}
        />
      </MDBContainer>
    </>
  );
}
