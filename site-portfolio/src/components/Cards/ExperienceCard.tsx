import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import { EMPLOYMENT_INFO } from "../../constants/jobdesc";
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
          {EMPLOYMENT_INFO.map((job, index) => (
            <ExperienceText
              dateStart={job.startDate}
              dateEnd={job.endDate}
              jobRole={job.jobRole}
              workPlace={job.companyName}
              roleDesc={job.roleDesc}
              key={index}
            />
          ))}
        </MDBContainer>
      </MDBCardBody>
    </MDBCard>
  );
}
