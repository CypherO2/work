"use client";

import { withBase } from "@/lib/basePath";

import { MDBContainer } from "mdb-react-ui-kit";
import { Row } from "react-bootstrap";
import MainBanner from "../components/Banner/BannerComp";
import QuoteComp from "../components/QuoteComp";
import ContentCard from "../components/Cards/ContentCard";

export default function Homepage() {
  return (
    <>
      <MainBanner
        titleText="CJ Presley"
        subtitleText="Developer, Graphic Designer & Copywriter"
        firstButtonText="Art"
        firstRedirect={withBase("/portfolio-art")}
        secondButtonText="Code"
        secondRedirect={withBase("/portfolio-code")}
      />
      <MDBContainer>
        <Row>
          <QuoteComp
            quoteText="The reason we call them the tickle monster and not another creature is because only a monster would tickle someone"
            quoteAuthor="CJ Presley"
          />
        </Row>
        <Row>
          <ContentCard
            repoTitle="Sgàthach Discord Bot"
            repoDesc="Sgàthach is a versatile Python-based Discord bot designed to enhance
            your server's functionality and user experience. With a wide range
            of features tailored to streamline moderation, engagement, and
            community management, Sgàthach offers an all-in-one solution for
            Discord server administration."
            repoLink="https://github.com/CypherO2/Sg-thach-Discord-Bot"
          />
        </Row>
      </MDBContainer>
    </>
  );
}
