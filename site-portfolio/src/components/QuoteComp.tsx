import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function QuoteComp() {
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
                  style={{ color: "rgb(130, 5, 130)" }}
                  className="fw-bold fs-1"
                >
                  "
                </span>
                The reason we call them the tickle monster and not another
                creature is because only a monster would tickle someone
                <span
                  style={{ color: "rgb(130, 5, 130)" }}
                  className="fw-bold fs-1"
                >
                  "
                </span>
                <span className="fs-4 text-muted">
                  <br />- CJ Presley
                </span>
              </h2>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
