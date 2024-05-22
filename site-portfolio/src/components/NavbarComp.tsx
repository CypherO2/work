import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

export default function NavComp() {
  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <MDBNavbar className="sticky-top" expand="lg" light bgColor="dark">
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <MDBNavbarNav right className="mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink
                    className="text-light"
                    aria-current="page"
                    href="#/"
                  >
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className="text-light" href="#/about">
                    About
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className="text-light" href="#/portfolio">
                    Portfolio
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className="text-light" href="#/resume">
                    Resume
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className="text-light" href="#/contact">
                    Contact
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>

        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url(https://github.com/CypherO2/Pokedex-python/blob/main/Python%20Code/Code/Banner_Image.png?raw=true)",
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Charles J Presley</h1>
                <h4 className="mb-3">
                  Full Stack / Web Developer & Graphic Design Artist
                </h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="#/portfolio"
                  role="button"
                >
                  See My Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}