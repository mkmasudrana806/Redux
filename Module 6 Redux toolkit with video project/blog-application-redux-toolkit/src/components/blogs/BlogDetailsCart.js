import React from "react";
import { incrementlikesCount } from "../../redux/features/likes/likeSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateLikesCountLocally } from "../../redux/features/blogs/blogsSlice";

const BlogDetailsCart = ({ blog }) => {
  const { id, title, image, description, tags, likes, isSaved } = blog;
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.likes);

  // increment like count
  const handleIncrementLike = async (id, likes) => {
    // update database and redux store
    dispatch(incrementlikesCount({ id, likes }));
    if (!loading) {
      dispatch(updateLikesCountLocally(id));
    }
  };

  // tags to render
  let content = null;
  if (tags?.length !== 0)
    content = tags?.map((tag, index) => {
      if (index === tags.length - 1) return <span key={index}>#{tag}</span>;
      else return <span key={index}>#{tag}, </span>;
    });
  return (
    // <!-- detailed post  -->
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {content}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button
            onClick={() => handleIncrementLike(id, likes)}
            className="like-btn"
            id="lws-singleLinks"
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          {isSaved && (
            <button className="active save-btn" id="lws-singleSavedBtn">
              <i className="fa-regular fa-bookmark"></i> saved
            </button>
          )}
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogDetailsCart;
