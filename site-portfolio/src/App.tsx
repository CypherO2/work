import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  ABOUT_PATH,
  ARTS_PATH,
  CODE_PATH,
  CONTACT_PATH,
  INDEX_PATH,
  RESUME_PATH,
  UNKNOWN_PATH,
} from "./constants/paths";
import FootComp from "./components/FooterComp";
import NavComp from "./components/NavbarComp";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Resumepage from "./pages/Resumepage";
import Unknownpage from "./pages/Unknownpage";
import Artpage from "./pages/Artpage";
import Codepage from "./pages/Codepage";

function App() {
  return (
    <>
      <NavComp />
      <Container>
        <Routes>
          <Route path={INDEX_PATH} element={<Homepage />} />
          <Route path={ABOUT_PATH} element={<Aboutpage />} />
          <Route path={CONTACT_PATH} element={<Contactpage />} />
          <Route path={ARTS_PATH} element={<Artpage />} />
          <Route path={CODE_PATH} element={<Codepage />} />
          <Route path={RESUME_PATH} element={<Resumepage />} />
          <Route path={UNKNOWN_PATH} element={<Unknownpage />} />
        </Routes>
      </Container>
      <FootComp />
    </>
  );
}

export default App;
