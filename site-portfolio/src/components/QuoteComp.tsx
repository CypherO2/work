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
            className="text-white"
            style={{ height: "25rem" }}
          >
            <MDBCardBody className="p-5 m-5">
              <figure className="mb-0 text-center">
                <MDBTypography blockquote>
                  <p className="py-5">
                    <MDBIcon fas icon="quote-left text-danger" size="xs" />
                    <span className="lead font-italic">
                      The mark of a mature programmer is willingness to throw
                      out code you spent time on when you realise it's
                      pointless.
                    </span>
                    <MDBIcon fas icon="quote-right text-danger" size="xs" />
                  </p>
                </MDBTypography>
                <figcaption className="text-secondary blockquote-footer mb-0">
                  Bram Cohen
                </figcaption>
              </figure>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
