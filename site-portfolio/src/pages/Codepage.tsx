import { useEffect } from "react";
import Thumbnail from "../assets/SiteIcon.png";
import { MDBContainer } from "mdb-react-ui-kit";
import RecRepoCard from "../components/RecommendedRepoCard";
import { Col, Row } from "react-bootstrap";

export default function Codepage() {
  useEffect(() => {
    document.title = "CJ Presley | Portfolio - Code";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <h1
        className="p-1 text-light text-center fw-bold my-2"
        style={{ fontFamily: "monospace" }}
      >
        Code Gallery
      </h1>
      <MDBContainer>
        <Row>
          <Col>
            <RecRepoCard
              repoTitle="CypherO2/work"
              repoDesc="This is the repository that this site is hosted out of with Github Pages."
              repoLink="https://github.com/CypherO2/work"
            />
          </Col>
          <Col>
            <RecRepoCard
              repoTitle="CypherO2/Asteroid-Blasters"
              repoDesc="A game I greated while I was bored."
              repoLink="https://github.com/CypherO2/asteroid-blasters"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <RecRepoCard
              repoTitle="CypherO2/Pokedex-python"
              repoDesc="A respository for any random projects I may have, feel free to look around :D ❤ Ich Liebe Dich"
              repoLink="https://github.com/CypherO2/Pokedex-python"
            />
          </Col>
          <Col>
            <RecRepoCard
              repoTitle="CypherO2/LoginSystem"
              repoDesc="College Winter Project based on using a react website to operate through a python + FLASK backend w/ an SQLite3 database for customer log-in/sign-up utilizing password encryption (Hashing)"
              repoLink="https://github.com/CypherO2/LoginSystem"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <RecRepoCard
              repoTitle="CypherO2/GMC-Bury2024-CNCS "
              repoDesc="The GMSkills repo that me and a team of two others won 3rd place in a web development contest."
              repoLink="https://github.com/CypherO2/gmc-bury2024-cncs"
            />
          </Col>
        </Row>
      </MDBContainer>
    </>
  );
}
