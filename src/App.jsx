import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Error from "./components/Error";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import ImageModal from "./components/ImageModal/ImageModal";
import { fetchArticlesWithTopic } from "./articles-api.js";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (topic, gg) => {
    try {
      setTheme(topic);
      setLoading(true);
      setError(false);

      let nextPage = page;
      if (gg === "jj") {
        nextPage = page + 1;
      } else {
        setArticles([]);
        nextPage = 1;
      }

      const data = await fetchArticlesWithTopic(topic, nextPage);
      setArticles((prevArticles) => [...prevArticles, ...data.results]);
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <ImageModal/> */}
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length != [] && <ImageGallery articles={articles} />}
      <LoadMoreBtn onClick={handleSearch} topic={theme} />
    </>
  );
}

export default App;
