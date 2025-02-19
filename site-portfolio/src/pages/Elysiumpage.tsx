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
        firstButtonText="Add Bot"
        firstRedirect="https://discord.com/oauth2/authorize?client_id=1341004138443444316&permissions=446676936768&integration_type=0&scope=bot"
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
              repoLink={"https://github.come/CypherO2/Elysium_DiscordBot"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
