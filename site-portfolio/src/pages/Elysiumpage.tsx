import { Col, Container, Row } from "react-bootstrap";
import MainBanner from "../components/BannerComp";
import TableComp from "../components/TableComp";
import RecRepoCard from "../components/RecommendedRepoCard";

export default function ElysiumPage() {
  return (
    <>
      <MainBanner
        titleText={"Elysium Discord Bot"}
        subtitleText={
          "A multi-purpose discord bot, with an expansive selection of commands."
        }
      />
      <Container>
        <Row>
          <Col>
            <TableComp />
          </Col>
          <Col className="text-light">
            <RecRepoCard
              repoTitle={"CypherO2/Elysium_DiscordBot"}
              repoDesc={
                "A multi-purpose discord bot, with an expansive selection of commands."
              }
              repoLink={"https://github.com/CypherO2/Elysium_DiscordBot"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
