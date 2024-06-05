import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBBtn,
  MDBBadge,
} from "mdb-react-ui-kit";

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
      <MDBRow className="gx-5">
        <MDBCol md="6" className="mb-1">
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <img src={props.image} className="w-100" />
            <a href={props.link}>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <h4>
            <strong>{props.title}</strong>
          </h4>
          <p className="text-muted">
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
          <MDBBtn color="danger" href={props.link}>
            Read More
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
