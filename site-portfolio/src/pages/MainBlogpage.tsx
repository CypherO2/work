import { useEffect } from "react";
import BlogCards from "../components/Cards/BlogCard";
import { Row } from "react-bootstrap";
import { BLOG_INFO } from "../constants/blog_desc";
import Thumbnail from "../assets/SiteIcon.png";
import { MDBContainer } from "mdb-react-ui-kit";

export default function MainBlogpage() {
  useEffect(() => {
    document.title = "CJ Presley | Blogs";
  });
  return (
    <>
      <MDBContainer>
        <div className="thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <h1
          className="text-center text-light fw-bold pt-4 pb-2"
          style={{ fontFamily: "monospace" }}
        >
          My Blog
        </h1>
        <hr className="mx-5 my-4" style={{ border: "0.1px solid black" }} />
        {BLOG_INFO.map((blog, index) => (
          <Row>
            <BlogCards
              image={blog.blogImage}
              title={blog.blogTitle}
              description={blog.blogDesc}
              link={"#" + blog.blogLink}
              tags={blog.blogTags}
              key={index}
            />
          </Row>
        ))}
      </MDBContainer>
    </>
  );
}
