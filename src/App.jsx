import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Error from "./components/Error";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import ImageModal from "./components/ImageModal/ImageModal";
import { fetchArticlesWithTopic } from "./articles-api.js";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (topic, load) => {
    try {
      setTheme(topic);
      setLoading(true);
      setError(false);

      let nextPage = page;
      if (load === "loadMore") {
        nextPage = page + 1;
      } else {
        setImages([]);
        nextPage = 1;
      }

      const data = await fetchArticlesWithTopic(topic, nextPage);
      setImages((prevArticles) => [...prevArticles, ...data.results]);
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {images.length != [] && <ImageGallery articles={images} />}
      <LoadMoreBtn onClick={handleSearch} topic={theme} />
    </>
  );
}

export default App;
