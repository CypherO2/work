import { useEffect } from "react";
import BlogCards from "../components/BlogCard";
import BlogImage1 from "../assets/pexels-dariuskrs-2228183.jpg";
import BlogImage2 from "../assets/pexels-pixabay-276452.jpg";
import { Col } from "react-bootstrap";
import {
  ARTCODECURIOUSITY_DESC,
  TLEVELEXPERIENCE_DESC,
} from "../constants/blog_desc";
import {
  ARTCODECURIOUSITY_PATH,
  TLEVELEXPERIENCE_PATH,
} from "../constants/paths";
import Thumbnail from "../assets/SiteIcon.png";

export default function MainBlogpage() {
  useEffect(() => {
    document.title = "CJ Presley | Portfolio - Art";
  });
  return (
    <>
      <div className="thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <h1 className="text-center fw-bold pt-3">My Blog</h1>
      <h5 className="text-center text-muted px-5">
        Welcome to my creative corner where art meets code! Discover a blend of
        artistic inspiration, coding challenges, and diverse curiosities.
        Whether you're an artist, coder, or curious mind, there's something here
        for you. Join me as I share my passions and projects, sparking
        inspiration and exploration. Dive in and let's embark on this exciting
        adventure together!
      </h5>
      <hr className="mx-5 my-4" style={{ border: "0.1px solid black" }} />
      <Col>
        <BlogCards
          image={BlogImage1}
          title="Welcome to My World: Blending Art, Code and Curiousity"
          description={ARTCODECURIOUSITY_DESC}
          link={"#" + ARTCODECURIOUSITY_PATH}
          tag1="art"
          tag2="code"
          tag3="other"
        />
      </Col>
      <Col>
        <BlogCards
          image={BlogImage2}
          title="Britain's 'Gem': The T-Level Course - My Experience"
          description={TLEVELEXPERIENCE_DESC}
          link={"#" + TLEVELEXPERIENCE_PATH}
          tag1="code"
          tag2="t-level"
          tag3="pearson"
        />
      </Col>
    </>
  );
}
