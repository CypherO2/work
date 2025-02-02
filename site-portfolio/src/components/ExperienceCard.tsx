import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import {
  MCDONALDS_DESC,
  PEXP_DESC,
  COPYWRITE_DESC,
  TTB_DESC,
} from "../constants/jobdesc";
import ExperienceText from "./experienceText";

export default function ExperienceCard() {
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
  );
}
