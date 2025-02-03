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
import Logo from "../assets/SiteIcon.png";

export default function NavComp() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);
  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <MDBNavbar
          expand="lg"
          light
          style={{ backgroundColor: "rgb(10,10,10,0)" }}
        >
          <MDBContainer className="fw-bold" style={{ fontFamily: "monospace" }}>
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
                    <MDBDropdownMenu
                      style={{ backgroundColor: "rgba(10, 10, 10, 0.9)" }}
                    >
                      <MDBDropdownItem href="#/portfolio-art" link>
                        <span className="text-secondary fw-bold">Art</span>
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#/portfolio-code" link>
                        <span className="text-secondary fw-bold">Code</span>
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
                    <MDBDropdownMenu
                      style={{ backgroundColor: "rgba(10, 10, 10, 0.9)" }}
                    >
                      <MDBDropdownItem href="#/blog" link>
                        <span className="text-secondary fw-bold">Blog</span>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </>
  );
}
