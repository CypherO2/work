import { MDBContainer } from "mdb-react-ui-kit";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import MainBanner from "../components/BannerComp";
import QuoteComp from "../components/QuoteComp";
import RecRepoCard from "../components/RecommendedRepoCard";
import { SGATHACH_LINK } from "../constants/mylinks";

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
          <QuoteComp
            quoteText="The reason we call them the tickle monster and not another creature is because only a monster would tickle someone"
            quoteAuthor="CJ Presley"
          />
        </Row>
        <Row>
          <RecRepoCard
            repoTitle="Sgàthach Discord Bot"
            repoDesc="Sgàthach is a versatile Python-based Discord bot designed to enhance
            your server's functionality and user experience. With a wide range
            of features tailored to streamline moderation, engagement, and
            community management, Sgàthach offers an all-in-one solution for
            Discord server administration."
            repoLink={SGATHACH_LINK}
          />
        </Row>
      </MDBContainer>
    </>
  );
}
