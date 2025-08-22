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
import { SOCIAL_INFO } from "../constants/mylinks.ts";
import ExperienceCard from "./Cards/ExperienceCard.tsx";
import EducationCard from "./Cards/EducationCard.tsx";

function SocialsInfo() {
  return (
    <>
      {SOCIAL_INFO.map((information) => {
        var infoIcon = information.split(" ")[0];
        var infoText = information.split(" ")[1];
        var infoIconType = information.split(" ")[2];
        return (
          <MDBListGroupItem
            style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
            className="text-light d-flex justify-content-between align-items-center p-3"
          >
            {infoIconType == "fab" && (
              <MDBIcon fab icon={infoIcon + " fa-lg text-light"} />
            )}
            {infoIconType == "fas" && (
              <MDBIcon fas icon={infoIcon + " fa-lg text-light"} />
            )}
            <MDBCardText>{infoText}</MDBCardText>
          </MDBListGroupItem>
        );
      })}
    </>
  );
}

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
                  Junior Developer @ Citizens Advice SORT
                </h5>
                <p className="text-light mb-4">Manchester, England, UK</p>
              </MDBCardBody>
            </MDBCard>
            <MDBRow className="mb-4">
              <MDBCard
                className="mb-3 mb-lg-0"
                style={{ backgroundColor: "rgba(10,10,10,0)" }}
              >
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <SocialsInfo />
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          </MDBCol>
          <MDBCol>
            <MDBRow>
              <ExperienceCard />
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <EducationCard />
        </MDBRow>
      </MDBContainer>
    </>
  );
}
