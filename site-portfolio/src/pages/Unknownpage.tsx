import { MDBContainer } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MainBanner from "../components/BannerComp";

export default function Unknownpage() {
  useEffect(() => {
    document.title = "Error 404 | Page Not Found";
  });
  return (
    <>
      <MDBContainer>
        <Row>
          <Col>
            <h1 className="fw-bold text-light mt-5 pt-5">
              404 - Page Not Found
            </h1>
            <h3
              style={{ color: "rgb(190,50,150)", fontFamily: "monospace" }}
              className="fw-bold"
            >
              are you in the right place?
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <MainBanner titleText="❓🌐❓" subtitleText="❔🤔❔" />
          </Col>
        </Row>
      </MDBContainer>
    </>
  );
}
