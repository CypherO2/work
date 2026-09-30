"use client";

import { withBase } from "@/lib/basePath";
import BlogCards from "../components/Cards/BlogCard";
import { BLOG_INFO } from "../constants/blog_desc";
import { masonry, page, pageTitle } from "@/lib/ui";

export default function MainBlogpage() {
  return (
    <div className={page}>
      <h1 className={pageTitle}>My Blog</h1>
      <div className={masonry}>
        {BLOG_INFO.map((blog) => (
          <BlogCards
            key={blog.blogLink}
            image={withBase(blog.blogImage)}
            title={blog.blogTitle}
            description={blog.blogDesc}
            link={withBase(blog.blogLink)}
            tags={blog.blogTags}
          />
        ))}
      </div>
    </div>
  );
}
