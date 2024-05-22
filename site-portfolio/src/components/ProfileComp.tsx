import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Avatar from "../assets/e.jpg";

export default function ProfileComp() {
  return (
    <>
      <MDBContainer className="py-3">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-dark rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="#/" className="text-light">
                  Work
                </a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem className="text-light" active>
                About Me
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-3 bg-dark">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={Avatar}
                  alt="avatar"
                  className="rounded-circle m-2"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-light mb-1 fw-bold">
                  Full Stack Developer & Graphic Design Artist
                </p>
                <p className="text-light mb-4">Manchester, England, UK</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-3 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3 bg-dark">
                  <MDBListGroupItem className="bg-dark text-light d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-light" />
                    <MDBCardText>CypherO2.github.io/work</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="bg-dark text-light d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg text-light" />
                    <MDBCardText>CypherO2</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="bg-dark text-light d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="youtube fa-lg"
                      style={{ color: "#ffffff" }}
                    />
                    <MDBCardText>
                      https://www.youtube.com/@nox-noctiflora
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="bg-dark text-light d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="discord fa-lg"
                      style={{ color: "#ffffff" }}
                    />
                    <MDBCardText>.cassi06</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="bg-dark text-light d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="linkedin fa-lg"
                      style={{ color: "#ffffff" }}
                    />
                    <MDBCardText>www.linkedin.com/in/cjpresley/</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0 bg-dark">
                  <MDBCardBody className="text-light fw-bold mb-3">
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Sgathach Bot
                      </span>
                      - Project Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Administartive Features
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={10} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Documentation
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={45} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Slash Commands
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Infrastructure
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={0} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={0} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0 bg-dark">
                  <MDBCardBody className="text-light fw-bold mb-3">
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Portfolio Site
                      </span>
                      - Project Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Web Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Pages
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={40} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Content
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={40} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Mobile Scaling
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={0} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol className="py-2" md="6">
                <MDBCard className="mb-4 mb-md-0 bg-dark">
                  <MDBCardBody className="text-light fw-bold mb-3">
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Pokedex
                      </span>
                      - Project Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      UI
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={0} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Database
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      User Friendliness
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol className="py-2" md="6">
                <MDBCard className="mb-4 mb-md-0 bg-dark">
                  <MDBCardBody className="text-light fw-bold mb-3">
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        GMC-Bury2024-CNCS
                      </span>
                      - Project Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      UI
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={70} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={95} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Fuctionality
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={60} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
