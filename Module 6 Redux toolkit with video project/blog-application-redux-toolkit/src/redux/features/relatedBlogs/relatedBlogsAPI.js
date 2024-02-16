import axios from "../../../axios/axios";

// api to fetch blogs from server based on tags
export const getRelatedBlogs = async (tags, id) => {
  const limit = 5;
  const queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const response = await axios.get(`/blogs?${queryString}`);
  return response.data;
};
