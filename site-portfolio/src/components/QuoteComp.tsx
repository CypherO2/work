import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export interface QuoteCompProps {
  quoteText: string;
  quoteAuthor: string;
}

export default function QuoteComp({ quoteText, quoteAuthor }: QuoteCompProps) {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="6" xl="12">
          <MDBCard
            className="text-white py-auto"
            style={{ height: "20rem", backgroundColor: "rgba(10,10,10,0.75)" }}
          >
            <MDBCardBody className="d-flex align-items-baseline m-auto">
              <h2
                style={{ fontFamily: "monospace" }}
                className="fw-bold text-center d-block m-auto py-auto"
              >
                <span
                  style={{ color: "rgba(5, 109, 130, 1)" }}
                  className="fw-bold fs-1"
                >
                  "
                </span>
                {quoteText}
                <span
                  style={{ color: "rgb(5, 109, 130, 1)" }}
                  className="fw-bold fs-1"
                >
                  "
                </span>
                <span className="fs-4 text-muted">
                  <br />- {quoteAuthor}
                </span>
              </h2>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
