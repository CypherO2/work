import { useEffect } from "react";
import CV from "../assets/CV/UpdateCV(2)_23-05-2024-Censored.pdf";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { Col, Row } from "react-bootstrap";
import Thumbnail from "../assets/SiteIcon.png";
import MainBanner from "../components/BannerComp";

export default function Resumepage() {
  useEffect(() => {
    document.title = "CJ Presley | Resume";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <MainBanner />
      <MDBContainer className="text-center py-4">
        <Row>
          <Col className="d-flex justify-content-center">
            <iframe src={CV} width="80%" height="1435vw" className="" />
          </Col>
        </Row>
        <a href={CV} download className="fs-1 fw-bold">
          <span className="text-dark">For My Preview CV:</span> Click Here!{" "}
          <MDBIcon fas className="fa-file-pdf" />
        </a>
      </MDBContainer>
    </>
  );
}
