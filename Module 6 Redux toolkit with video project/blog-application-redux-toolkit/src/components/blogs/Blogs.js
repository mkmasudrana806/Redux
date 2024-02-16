import React, { useEffect } from "react";
import BlogCart from "./BlogCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs, loading, isError } = useSelector((state) => state.blogs);

  // fetch all blogs from server
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (loading) content = <div>Loading...</div>;

  if (!loading && isError) content = <div>Error occurs </div>;

  if (!isError && !loading && blogs?.length === 0)
    content = <div>No Blogs found!</div>;

  if (!isError && !loading && blogs?.length > 0) {
    content = blogs.map((blog) => <BlogCart key={blog.id} blog={blog} />);
  }

  return (
    <>
      {/* <!-- Blogs container  --> */}
      <main className="post-container" id="lws-postContainer">
        {content}
      </main>
    </>
  );
};

export default Blogs;
