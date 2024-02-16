import axios from "../../../axios/axios";

export const getBlog = async (id) => {
  const blog = await axios.get(`/blogs/${id}`);
  return blog.data;
};
