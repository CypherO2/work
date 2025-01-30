import { MDBContainer } from "mdb-react-ui-kit";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import MainBanner from "../components/BannerComp";
import QuoteComp from "../components/QuoteComp";
import RecRepoCard from "../components/RecommendedRepoCard";

export default function Homepage() {
  useEffect(() => {
    document.title = "CJ Presley | Github Pages";
  });
  return (
    <>
      <MainBanner
        titleText="CJ Presley"
        subtitleText="Developer, Graphic Designer & Copywriter"
        firstButtonText="Art"
        firstRedirect="#/portfolio-art"
        secondButtonText="Code"
        secondRedirect="#/portfolio-code"
      />
      <MDBContainer>
        <Row>
          <QuoteComp />
        </Row>
        <Row>
          <RecRepoCard />
        </Row>
      </MDBContainer>
    </>
  );
}
