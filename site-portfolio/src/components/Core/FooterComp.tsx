import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { SOCIAL_LINKS } from "../../constants/mylinks";

export default function FootComp() {
  return (
    <>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "rgba(10,10,10,0)" }}
      >
        <MDBContainer className="pt-4">
          <section className="mb-4">
            {SOCIAL_LINKS.map((social, index) => {
              return (
                <MDBBtn
                  rippleColor="dark"
                  color="light"
                  floating
                  size="lg"
                  className="text-dark m-1"
                  href={social.socialLink}
                  role="button"
                  key={index}
                >
                  {social.socialIcon[1] == "fab" && (
                    <MDBIcon
                      fab
                      icon={social.socialIcon[0] + " fa-lg text-dark"}
                    />
                  )}
                  {social.socialIcon[1] == "fas" && (
                    <MDBIcon
                      fas
                      icon={social.socialIcon[0] + " fa-lg text-dark"}
                    />
                  )}
                </MDBBtn>
              );
            })}
          </section>
        </MDBContainer>

        <div
          className="text-center text-secondary p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          Made by
          <a className="text-light" href="https://www.github.com/CypherO2">
            {" "}
            CJ Presley
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
