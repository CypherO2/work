import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  ABOUT_PATH,
  ARTCODECURIOUSITY_PATH,
  ARTS_PATH,
  BLOG_PATH,
  CODE_PATH,
  HUNDREDSOFBEAVERS_PATH,
  INDEX_PATH,
  TLEVELEXPERIENCE_PATH,
  UNKNOWN_PATH,
} from "./constants/paths";
import FootComp from "./components/FooterComp";
import NavComp from "./components/NavbarComp";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Unknownpage from "./pages/Unknownpage";
import Artpage from "./pages/Artpage";
import Codepage from "./pages/Codepage";
import MainBlogpage from "./pages/MainBlogpage";
import ArtCodeCuriousityPage from "./pages/blog-pages/ArtCodeCuriousityPage";
import "./css/core.css";

import TLevelExperiencePage from "./pages/blog-pages/TLevelExperiencePage";
import HunderedsOfBeavers from "./pages/blog-pages/HundredsOfBeavers";

function App() {
  return (
    <>
      <NavComp />
      <span style={{backgroundColor:"rgb(10,10,10)"}}>
      <Routes>
        <Route path={INDEX_PATH} element={<Homepage />} />
        <Route path={ABOUT_PATH} element={<Aboutpage />} />
        <Route path={ARTS_PATH} element={<Artpage />} />
        <Route path={BLOG_PATH} element={<MainBlogpage />} />
        <Route
          path={ARTCODECURIOUSITY_PATH}
          element={<ArtCodeCuriousityPage />}
        />
        <Route
          path={TLEVELEXPERIENCE_PATH}
          element={<TLevelExperiencePage />}
        />
        <Route path={HUNDREDSOFBEAVERS_PATH} element={<HunderedsOfBeavers />} />
        <Route path={CODE_PATH} element={<Codepage />} />
        
        <Route path={UNKNOWN_PATH} element={<Unknownpage />} />
      </Routes>
      </span>
      <FootComp />
    </>
  );
}

export default App;
