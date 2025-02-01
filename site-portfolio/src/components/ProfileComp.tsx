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
  MDBCardTitle,
} from "mdb-react-ui-kit";
import Avatar from "../assets/myavatar.jpg";
import ExperienceText from "./experienceText.tsx";
import {
  COPYWRITE_DESC,
  MCDONALDS_DESC,
  PEXP_DESC,
  TTB_DESC,
} from "../constants/jobdesc.ts";

export default function ProfileComp() {
  return (
    <>
      <MDBContainer className="py-3">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb
              style={{
                backgroundColor: "rgba(10,10,10,0.7)",
                fontFamily: "monospace",
              }}
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
                <h5 className="text-light mb-1 fw-bold">
                  Developer, Copywriter & Graphic Designer
                </h5>
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
                    <MDBCardText>@nox-noctiflora</MDBCardText>
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
                    <MDBCardText>/in/cjpresley/</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
                    className="text-light d-flex justify-content-between align-items-center p-3"
                  >
                    <MDBIcon
                      fab
                      icon="bluesky fa-lg"
                      style={{ color: "#ffffff" }}
                    />
                    <MDBCardText>cassi06.bsky.social</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ backgroundColor: "rgba(10, 10, 10, 0.7)" }}>
              <MDBCardBody className="text-light">
                <MDBCardTitle
                  className="fw-bold mb-2 fs-3"
                  style={{ fontFamily: "monospace" }}
                >
                  My Experience
                </MDBCardTitle>
                <MDBContainer>
                  <ExperienceText
                    dateStart="Nov 2022"
                    dateEnd="Dec 2022"
                    jobRole="Team Member"
                    workPlace="McDonalds"
                    roleDesc={MCDONALDS_DESC}
                  />
                  <ExperienceText
                    dateStart="Dec 2023"
                    dateEnd="Dec 2023"
                    jobRole="Sole Cleaner"
                    workPlace="Pizza Express"
                    roleDesc={PEXP_DESC}
                  />
                  <ExperienceText
                    dateStart="Mar 2024"
                    dateEnd="July 2024"
                    jobRole="Graphic Design / Copywriter"
                    workPlace="LKYPCG Volunteer"
                    roleDesc={COPYWRITE_DESC}
                  />
                  <ExperienceText
                    dateStart="May 2024"
                    dateEnd="July 2024"
                    jobRole="CRM and Site Admin"
                    workPlace="The Training Brokers Ltd"
                    roleDesc={TTB_DESC}
                  />
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
