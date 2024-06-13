import { useEffect } from "react";
import BlogCards from "../components/BlogCard";
import TestImage from "../assets/BannerSgathach(1).png";
import { Col } from "react-bootstrap";
import { ARTCODECURIOUSITY_DESC } from "../constants/blog_desc";
import { ARTCODECURIOUSITY_PATH } from "../constants/paths";
import Thumbnail from "../assets/SiteIcon.png";

export default function MainBlogpage() {
  useEffect(() => {
    document.title = "CJ Presley | Blogs";
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
          image={TestImage}
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
          image={TestImage}
          title="placeholder"
          description="placeholder"
          link="#/placeholder"
          tag1="placeholder"
          tag2="placeholder"
          tag3="placeholder"
        />
      </Col>
    </>
  );
}
