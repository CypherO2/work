import { MDBContainer } from "mdb-react-ui-kit";
import { Row } from "react-bootstrap";
import "../css/timeline.css";
import { useEffect } from "react";
import MainBanner from "../components/BannerComp";
import QuoteComp from "../components/QuoteComp";

export default function Homepage() {
  useEffect(() => {
    document.title = "CJ Presley | Github Pages";
  });
  return (
    <>
      <MainBanner />
      <MDBContainer>
        <Row>
          <QuoteComp/>
        </Row>
      </MDBContainer>
    </>
  );
}
