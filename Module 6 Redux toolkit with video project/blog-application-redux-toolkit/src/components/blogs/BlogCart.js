import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incrementlikesCount } from "../../redux/features/likes/likeSlice";
import { updateLikesCountLocally } from "../../redux/features/blogs/blogsSlice";

const BlogCart = ({ blog }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.likes);

  const { id, title, image, tags, likes, isSaved, createdAt } = blog;

  // tags to render
  let content = null;
  if (tags?.length !== 0)
    content = tags?.map((tag, index) => {
      if (index === tags.length - 1) return <span key={index}>#{tag}</span>;
      else return <span key={index}>#{tag},</span>;
    });

  // increment like count
  const handleIncrementLike = async (id, likes) => {
    // update database and redux store
    dispatch(incrementlikesCount({ id, likes }));
    if (!loading) {
      dispatch(updateLikesCountLocally(id));
    }
  };

  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        {" "}
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p
            onClick={() => handleIncrementLike(id, likes)}
            className="lws-likeCount cursor-pointer"
          >
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle">
          {title}{" "}
        </Link>
        <div className="lws-tags">{content}</div>
        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> {isSaved && "Saved"} </span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default BlogCart;
