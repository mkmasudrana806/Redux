import React from "react";
import git from "../../images/git.webp";
import { Link } from "react-router-dom";
const RelatedBlogItem = ({ blog }) => {
  const { id, title, image, tags, createdAt } = blog;

  // tags to render
  let content = null;
  if (tags?.length !== 0)
    content = tags?.map((tag, index) => {
      if (index === tags.length - 1) return <span key={index}>#{tag}</span>;
      else return <span key={index}>#{tag},</span>;
    });

  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link to={`/blogs/${id}`} className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">{content}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlogItem;
