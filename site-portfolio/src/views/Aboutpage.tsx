"use client";

import ProfileComp from "../components/ProfileComp";
import Thumbnail from "../assets/SiteIcon.png";
import { Container, Row } from "react-bootstrap";

export default function Aboutpage() {
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail.src} alt="" />
      </div>
      <Container>
        <Row>
          <ProfileComp />
        </Row>
      </Container>
    </>
  );
}
