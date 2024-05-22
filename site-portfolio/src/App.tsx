import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  ABOUT_PATH,
  CONTACT_PATH,
  INDEX_PATH,
  PORTFOLIO_PATH,
  RESUME_PATH,
  UNKNOWN_PATH,
} from "./constants/paths";
import FootComp from "./components/FooterComp";
import NavComp from "./components/NavbarComp";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Portfoliopage from "./pages/Portfoliopage";
import Resumepage from "./pages/Resumepage";
import Unknownpage from "./pages/Unknownpage";

function App() {
  return (
    <>
      <NavComp />
      <Container>
        <Routes>
          <Route path={INDEX_PATH} element={<Homepage />} />
          <Route path={ABOUT_PATH} element={<Aboutpage />} />
          <Route path={CONTACT_PATH} element={<Contactpage />} />
          <Route path={PORTFOLIO_PATH} element={<Portfoliopage />} />
          <Route path={RESUME_PATH} element={<Resumepage />} />
          <Route path={UNKNOWN_PATH} element={<Unknownpage />} />
        </Routes>
      </Container>
      <FootComp />
    </>
  );
}

export default App;
