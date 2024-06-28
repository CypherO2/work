import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import { useState } from "react";
import Logo from "../assets/New Logo.png";

export default function NavComp() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);
  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <MDBNavbar expand="lg" light style={{ backgroundColor: "#342542" }}>
          <MDBContainer fluid>
            <MDBNavbarBrand href="#/">
              <img
                src={Logo}
                alt="logo for site"
                className="mx-2"
                style={{ width: "40px" }}
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
            >
              <MDBIcon fas className="fa-bars text-light" />
            </MDBNavbarToggler>
            <MDBCollapse navbar open={openNavNoTogglerSecond}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink
                    active
                    className="text-light"
                    aria-current="page"
                    href="#/"
                  >
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active className="text-light" href="#/about">
                    About
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link text-light"
                      role="button"
                    >
                      Portfolio
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="bg-dark">
                      <MDBDropdownItem href="#/portfolio-art" link>
                        <span className="text-light">Art</span>
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#/portfolio-code" link>
                        <span className="text-light">Code</span>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link text-light"
                      role="button"
                    >
                      Apps
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="bg-dark">
                      <MDBDropdownItem href="#/blog" link>
                        <span className="text-light">Blog</span>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    active
                    className="text-light"
                    href="#/resume"
                    tabIndex={-1}
                  >
                    Resume
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    active
                    className="text-light"
                    href="#/contact"
                    tabIndex={-1}
                  >
                    Contact
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </>
  );
}
