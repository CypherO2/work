import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";

export default function TimelineComp() {
  return (
    <MDBContainer fluid className="py-4">
      <h2 className="fw-bold mb-5 pb-5 text-center">🕒 My Timeline</h2>
      <MDBRow>
        <MDBCol lg="12">
          <div className="horizontal-timeline">
            <MDBTypography listInLine className="items">
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-danger">2021/22</div>
                  <h5 className="pt-2">Artistry</h5>
                  <p className="text-muted">
                    Through 2021 and 2022 I learnt how to turn imagination into
                    reality with the tools at my disposal, with just paper and
                    pen.
                  </p>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-info">2022</div>
                  <h5 className="pt-2">New Interest</h5>
                  <p className="text-muted">
                    It was my admission to college that led me to start towards
                    a career in programming and/ or development, the catalyst
                    for my career choice.
                  </p>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-success">2023</div>
                  <h5 className="pt-2">Learning</h5>
                  <p className="text-muted">
                    The year I began using/ learning React in conjunction with
                    Python. This led me to the realisation I could work with
                    Full-Stack Programs.
                  </p>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-warning">Future</div>
                  <h5 className="pt-2">Going Forward</h5>
                  <p className="text-muted">
                    I don't know what the future will hold but I hope it will be
                    kind to me and perhaps even help me in my future endevours
                    such as university.
                  </p>
                </div>
              </li>
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
