import  { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Error from "./components/Error";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchArticlesWithTopic } from "./articles-api.js";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (topic) {
      const fetchImages = async () => {
        try {
          setLoading(true);
          setError(false);

          const data = await fetchArticlesWithTopic(topic, page);
          setImages((prevImages) => [...prevImages, ...data.results]);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchImages();
    }
  }, [topic, page]);

  const handleSearch = (searchTerm) => {
    setTopic(searchTerm);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {images.length > 0 && <ImageGallery articles={images} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}

export default App;
