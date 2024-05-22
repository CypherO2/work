import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import {
  DISCORD_LINK,
  YOUTUBE_LINK,
  LINKEDIN_LINK,
  GITHUB_LINK,
} from "../constants/mylinks";

export default function FootComp() {
  return (
    <>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#382c2c" }}
      >
        <MDBContainer className="pt-4">
          <section className="mb-4">
            <MDBBtn
              rippleColor="dark"
              color="dark"
              floating
              size="lg"
              className="text-light m-1"
              href={DISCORD_LINK}
              role="button"
            >
              <MDBIcon fab className="fa-discord" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="dark"
              floating
              size="lg"
              className="text-light m-1"
              href={YOUTUBE_LINK}
              role="button"
            >
              <MDBIcon fab className="fa-youtube" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="dark"
              floating
              size="lg"
              className="text-light m-1"
              href={LINKEDIN_LINK}
              role="button"
            >
              <MDBIcon fab className="fa-linkedin" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="dark"
              floating
              size="lg"
              className="text-light m-1"
              href={GITHUB_LINK}
              role="button"
            >
              <MDBIcon fab className="fa-github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center text-secondary p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-light" href="#placeholderGithubLink">
            {" "}
            Charles J Presley
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
