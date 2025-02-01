import { useEffect } from "react";
import ProfileComp from "../components/ProfileComp";
import Thumbnail from "../assets/SiteIcon.png";
import { Container, Row } from "react-bootstrap";

export default function Aboutpage() {
  useEffect(() => {
    document.title = "CJ Presley | About Me";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <Container>
        <Row>
          <ProfileComp />
        </Row>
      </Container>
    </>
  );
}
