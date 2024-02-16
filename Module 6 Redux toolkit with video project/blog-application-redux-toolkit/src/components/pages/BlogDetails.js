import React, { useEffect } from "react";
import BlogDetailsCart from "../blogs/BlogDetailsCart";
import RelatedBlogs from "../blogs/RelatedBlogs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../../redux/features/singleBlog/singleBlogSlice";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, loading, isError } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlog(id));
  }, [id, dispatch]);

  // decide what to render
  let content = null;
  if (loading) content = <div>Loading...</div>;
  if (!loading && isError) content = <div>Error occurs in database!</div>;
  if (!loading && !isError && blog) content = <BlogDetailsCart blog={blog} />;

  return (
    <>
      {/* <!-- Go Home / Go Back --> */}
      <div className="container mt-8">
        <a
          href="index.html"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </a>
      </div>
      <section className="post-page-container">
        {content}
        <RelatedBlogs id={id} tags={blog.tags} />
      </section>
    </>
  );
};

export default BlogDetails;
