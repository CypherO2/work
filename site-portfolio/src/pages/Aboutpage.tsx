import { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProfileComp from "../components/ProfileComp";

export default function Aboutpage() {
  useEffect(() => {
    document.title = "CJ Presley | About Me";
  });
  return (
    <>
      <Container>
        <ProfileComp />
      </Container>
    </>
  );
}
