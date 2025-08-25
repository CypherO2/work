import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";
// import { SGATHACH_LINK } from "../constants/mylinks";

export interface RecRepoProps {
  repoTitle: string;
  repoDesc: string;
  repoLink: string;
}

export default function ContentCard({
  repoDesc,
  repoLink,
  repoTitle,
}: RecRepoProps) {
  return (
    <MDBContainer className="text-light py-5 h-100">
      <MDBCard
        className="text-white"
        style={{ backgroundColor: "rgba(10,10,10,0.7)", height: "20rem" }}
      >
        <MDBContainer className="px-5 my-auto">
          <MDBCardTitle
            className="fw-bold fs-3"
            style={{ fontFamily: "monospace" }}
          >
            {repoTitle}
          </MDBCardTitle>
          <MDBCardText className="fs-6">{repoDesc}</MDBCardText>
          <a
            className="btn btn-outline-purple btn-lg m-1 fw-bold my-auto"
            href={repoLink}
            style={{ color: "rgba(5, 109, 130, 1)" }}
            role="button"
          >
            Github Repository
          </a>
        </MDBContainer>
      </MDBCard>
    </MDBContainer>
  );
}
