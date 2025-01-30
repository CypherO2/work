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
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Avatar from "../assets/myavatar.jpg";

export default function ProfileComp() {
  return (
    <>
      <MDBContainer className="py-3">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb
              style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
              className="rounded-3 p-3 mb-4"
            >
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
            <MDBCard
              style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
              className="mb-3"
            >
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

            <MDBCard
              className="mb-3 mb-lg-0"
              style={{ backgroundColor: "rgba(10,10,10,0)" }}
            >
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem
                    style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
                    className="text-light d-flex justify-content-between align-items-center p-3"
                  >
                    <MDBIcon fas icon="globe fa-lg text-light" />
                    <MDBCardText>CypherO2.github.io/work</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
                    className="text-light d-flex justify-content-between align-items-center p-3"
                  >
                    <MDBIcon fab icon="github fa-lg text-light" />
                    <MDBCardText>CypherO2</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
                    className="text-light d-flex justify-content-between align-items-center p-3"
                  >
                    <MDBIcon
                      fab
                      icon="youtube fa-lg"
                      style={{ color: "#ffffff" }}
                    />
                    <MDBCardText>
                      https://www.youtube.com/@nox-noctiflora
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
                    className="text-light d-flex justify-content-between align-items-center p-3"
                  >
                    <MDBIcon
                      fab
                      icon="discord fa-lg"
                      style={{ color: "#ffffff" }}
                    />
                    <MDBCardText>.cassi06</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
                    className="text-light d-flex justify-content-between align-items-center p-3"
                  >
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
        </MDBRow>
      </MDBContainer>
    </>
  );
}
