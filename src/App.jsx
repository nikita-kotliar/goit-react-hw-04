import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Error from "./components/Error";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchArticlesWithTopic } from "./articles-api.js";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); // Added state for selected image

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
    setSelectedImage(null); // Reset selected image on new search
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Update selected image on click
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onRequestClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

export default App;
