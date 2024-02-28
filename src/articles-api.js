import axios from "axios";

const apiKey = "brwRlfJZXL4C5WglKHQJcCd1YBJXLJV4c9ZzO5Jhsmk";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchArticlesWithTopic = async (topic, page) => {
  try {
    const response = await axios.get(
      `search/photos?client_id=${apiKey}&page=${page}&query=${topic}&per_page=15`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
};
