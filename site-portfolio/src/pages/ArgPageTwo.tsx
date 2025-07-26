import { MDBContainer } from "mdb-react-ui-kit";
import { useEffect } from "react";
import ARGIMAGE2 from "../assets/ARG/img2.png";

export default function ArgPageTwo() {
  useEffect(() => {
    document.title = "CJ Presley | Github Pages";
  });
  return (
    <>
      <MDBContainer>
        <h1 id="" className="text-center text-light">
          You Found This As Well!?!?!
        </h1>
        <img className="img-fluid m-5 " alt="" src={ARGIMAGE2} />
      </MDBContainer>
    </>
  );
}
