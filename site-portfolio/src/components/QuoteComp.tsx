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
            background="dark"
            className="text-white py-auto"
            style={{ height: "27rem" }}
          >
            <MDBCardBody className="d-flex align-items-baseline m-3">
              <MDBTypography blockquote className="mt-auto pt-auto">
                <p className="mx-auto">
                  <MDBIcon fas icon="quote-left text-danger" size="lg" />
                  <span className="lead font-italic fs-3">
                    The mark of a mature programmer is willingness to throw out
                    code you spent time on when you realise it's pointless.
                  </span>
                  <MDBIcon fas icon="quote-right text-danger" size="lg" />
                </p>
                <p className="text-center text-secondary fs-5 mb-5 mx-auto">
                  Bram Cohen
                </p>
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
