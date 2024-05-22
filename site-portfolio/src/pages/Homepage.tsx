import { MDBContainer } from "mdb-react-ui-kit";
import QuoteComp from "../components/QuoteComp";
import { Row, Col } from "react-bootstrap";
import RecRepoCard from "../components/RecommendedRepoCard";
import TimelineComp from "../components/TimelineComp";
import "../css/timeline.css"
import { useEffect } from "react";

export default function Homepage() {
      useEffect(() => {
        document.title = "CJ Presley | Github Pages";
      });
  return (
    <MDBContainer>
      <Row>
        <Col>
          <RecRepoCard />
        </Col>
        <Col>
          <QuoteComp />
        </Col>
      </Row>
      <Row>
        <TimelineComp />
      </Row>
    </MDBContainer>
  );
}
