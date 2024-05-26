import Banner from "../assets/BannerSgathach(1).png";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  MDBContainer,
  MDBCardLink,
} from "mdb-react-ui-kit";
import { DISCORD_LINK, SGATHACH_LINK } from "../constants/mylinks";

export default function RecRepoCard() {
  return (
    <MDBContainer className="py-5 h-100">
      <h3 className="pb-4 fw-bold">✨Github Repository✨</h3>
      <MDBCard
        background="dark"
        className="text-white"
        style={{ height: "23rem" }}
      >
        <MDBCardImage
          overlay
          className="h-100 d-flex"
          src={Banner}
          alt="The Repository I Recommend the Users Checks Out"
        />
        <MDBCardOverlay className="pb-2">
          <MDBCardTitle className="fw-bold">Sgàthach Discord Bot</MDBCardTitle>
          <MDBCardText className="">
            Sgàthach is a versatile Python-based Discord bot designed to enhance
            your server's functionality and user experience. With a wide range
            of features tailored to streamline moderation, engagement, and
            community management, Sgàthach offers an all-in-one solution for
            Discord server administration.
          </MDBCardText>
          <MDBCardLink href={SGATHACH_LINK}>Repository</MDBCardLink>
          <MDBCardLink className="" href={DISCORD_LINK}>
            Discord Support
          </MDBCardLink>
        </MDBCardOverlay>
      </MDBCard>
    </MDBContainer>
  );
}
