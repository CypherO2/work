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

function App() {
  return (
    <>
      <NavComp />
      <Container>
        <Routes>
          <Route path={INDEX_PATH} element={<Homepage />} />
          <Route path={ABOUT_PATH} element={<></>} />
          <Route path={CONTACT_PATH} element={<></>} />
          <Route path={PORTFOLIO_PATH} element={<></>} />
          <Route path={RESUME_PATH} element={<></>} />
          <Route path={UNKNOWN_PATH} element={<></>} />
        </Routes>
      </Container>
      <FootComp />
    </>
  );
}

export default App;
