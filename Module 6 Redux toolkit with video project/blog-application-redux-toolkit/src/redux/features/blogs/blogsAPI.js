import axios from "../../../axios/axios";

// api to fetch blogs from server
export const getBlogs = async () => {
  const blogs = await axios.get("/blogs");
  // axios return data inside data property
  return blogs.data;
};
