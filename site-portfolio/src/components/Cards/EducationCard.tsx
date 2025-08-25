import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import ExperienceText from "./experienceText";

export default function EducationCard() {
  return (
    <MDBCard
      className="mb-4"
      style={{ backgroundColor: "rgba(10, 10, 10, 0.7)" }}
    >
      <MDBCardBody className="text-light">
        <MDBCardTitle
          className="fw-bold mb-2 fs-3"
          style={{ fontFamily: "monospace" }}
        >
          My Education
        </MDBCardTitle>
        <MDBContainer>
          <ExperienceText
            dateStart="April 2025"
            dateEnd="Present"
            jobRole="Software Engineering"
            workPlace="The Open University"
            roleDesc={
              "HTQ Diploma of Higher Education in Software Development."
            }
          />
          <ExperienceText
            dateStart="Sept 2022"
            dateEnd="July 2024"
            jobRole="T-Level"
            workPlace="Salford City College"
            roleDesc="T-Level in Digital Production, Design and Development."
          />
          <ExperienceText
            dateStart="Sept 2017"
            dateEnd="July 2022"
            jobRole=" GCSEs"
            workPlace="The Albion Academy"
            roleDesc="Mathematics, English Literature, English Lanuages, Combined Science: Trilogy."
          />
          <ExperienceText
            dateStart="Sept 2017"
            dateEnd="July 2022"
            jobRole="BTECs"
            workPlace="The Albion Academy"
            roleDesc="Art, Craft and Design (3D Design), Art, Craft and Design, Creative iMedia."
          />
        </MDBContainer>
      </MDBCardBody>
    </MDBCard>
  );
}
