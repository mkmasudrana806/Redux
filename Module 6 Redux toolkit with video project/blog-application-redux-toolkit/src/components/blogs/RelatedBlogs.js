import React, { useEffect } from "react";
import RelatedBlogItem from "./RelatedBlogItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../redux/features/relatedBlogs/relatedBlogsSlice";

const RelatedBlogs = ({ id, tags }) => {
  const dispatch = useDispatch();
  const { relatedBlogs, loading, isError } = useSelector(
    (state) => state.relatedBlogs
  );

  // fetch related blogs
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }));
  }, [dispatch, id, tags]);

  // decide what to render as related blogs
  let content;
  if (loading) content = <div>Loading... </div>;
  if (!loading && isError)
    content = <div className="col-span-12">some error happened</div>;
  if (!isError && !loading && relatedBlogs?.length === 0)
    content = <div className="col-span-12">No Blogs found!</div>;
  if (!isError && !loading && relatedBlogs?.length > 0) {
    content = relatedBlogs?.map((blog) => (
      <RelatedBlogItem key={blog.id} blog={blog} />
    ));
  }

  return (
    // <!-- related posts -->
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

export default RelatedBlogs;
