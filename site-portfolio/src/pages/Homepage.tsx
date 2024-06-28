import { MDBContainer } from "mdb-react-ui-kit";
import QuoteComp from "../components/QuoteComp";
import { Row, Col } from "react-bootstrap";
import RecRepoCard from "../components/RecommendedRepoCard";
import TimelineComp from "../components/TimelineComp";
import "../css/timeline.css";
import { useEffect } from "react";
import Thumbnail from "../assets/SiteIcon.png";
import MainBanner from "../components/BannerComp";

export default function Homepage() {
  useEffect(() => {
    document.title = "CJ Presley | Github Pages";
  });
  return (
    <>
      <MainBanner />
      <MDBContainer>
        <div className="thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
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
    </>
  );
}
