import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import singleBlogReducer from "../features/singleBlog/singleBlogSlice";
import likesReducer from "../features/likes/likeSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: singleBlogReducer,
    likes: likesReducer,
    relatedBlogs: relatedBlogsReducer,
  },
});
