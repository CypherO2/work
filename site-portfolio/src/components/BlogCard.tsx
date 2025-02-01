import { MDBContainer, MDBRipple, MDBBadge } from "mdb-react-ui-kit";
import { Row, Col } from "react-bootstrap";

interface BlogCardsProps {
  image: string;
  title: string;
  description: string;
  link: string;
  tag1: string;
  tag2: string;
  tag3: string;
}

export default function BlogCards(props: BlogCardsProps) {
  return (
    <MDBContainer className="py-3">
      <Row className="gx-5">
        <Col md="4" className="mb-1">
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <img src={props.image} className="img-fluid" />
            <a href={props.link}>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
        </Col>
        <Col md="6" className="mb-4">
          <h4 className="text-light" style={{ fontFamily: "monospace" }}>
            <strong>{props.title}</strong>
          </h4>
          <p className="text-light">
            {props.description}{" "}
            <MDBBadge color="danger" className="ms-2">
              {props.tag1}
            </MDBBadge>
            <MDBBadge color="primary" className="ms-2">
              {props.tag2}
            </MDBBadge>
            <MDBBadge color="success" className="ms-2">
              {props.tag3}
            </MDBBadge>
          </p>
          <a className="btn btn-outline-light btn-lg m-1" href="" role="button">
            Read More
          </a>
        </Col>
      </Row>
    </MDBContainer>
  );
}
