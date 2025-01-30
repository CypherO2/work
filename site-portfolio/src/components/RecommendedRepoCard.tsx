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
    <MDBContainer className="text-light py-5 h-100">
      <MDBCard
        className="text-white"
        style={{ backgroundColor: "rgba(10,10,10,0.7)", height: "20rem" }}
      >
        <MDBContainer className="px-5 my-auto">
          <MDBCardTitle className="fw-bold fs-3">
            Sgàthach Discord Bot
          </MDBCardTitle>
          <MDBCardText className="fs-6">
            Sgàthach is a versatile Python-based Discord bot designed to enhance
            your server's functionality and user experience. With a wide range
            of features tailored to streamline moderation, engagement, and
            community management, Sgàthach offers an all-in-one solution for
            Discord server administration.
          </MDBCardText>
          <a
            className="btn btn-outline-purple btn-lg m-1 fw-bold my-auto"
            href={SGATHACH_LINK}
            style={{ color: "rgb(150,70,150)" }}
            role="button"
          >
            Github Repository
          </a>
        </MDBContainer>
      </MDBCard>
    </MDBContainer>
  );
}
