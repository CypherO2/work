import { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProfileComp from "../components/ProfileComp";
import Thumbnail from "../assets/SiteIcon.png";


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
        <ProfileComp />
      </Container>
    </>
  );
}
