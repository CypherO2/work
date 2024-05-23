import { MDBContainer } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ErrorImage from "../assets/PageNotFound.png";

export default function Unknownpage() {
  useEffect(() => {
    document.title = "Error 404 | Page Not Found";
  });
  return (
    <>
      <MDBContainer>
        <Row>
          <Col>
            <h1 className="fw-bold text-dark mt-5 pt-5">Error 404: 😔</h1>
            <h3 className=" text-primary">page not found</h3>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Image
              src={ErrorImage}
              alt="404 Image for Page"
              style={{ width: "50%" }}
              className="my-3 py-2 "
            />
          </Col>
        </Row>
      </MDBContainer>
    </>
  );
}
