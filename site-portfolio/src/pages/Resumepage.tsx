import { useEffect } from "react";
import CV from "../assets/CV/UpdateCV(2)_23-05-2024.pdf";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";

export default function Resumepage() {
  useEffect(() => {
    document.title = "CJ Presley | Resume";
  });
  return (
    <>
      <MDBContainer className="text-center py-2">

      

        <a href={CV} download className="fs-1 fw-bold">
          <span className="text-dark">For My CV:</span> Click Here!{" "}
          <MDBIcon fas className="fa-file-pdf" />
        </a>
      </MDBContainer>
    </>
  );
}
