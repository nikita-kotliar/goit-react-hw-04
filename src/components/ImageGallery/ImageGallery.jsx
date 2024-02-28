import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";
import css from "./ImageGallery.module.css";


export default function ImageGallery({ articles }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ul className={css.ul}>
        {articles.map((article, index) => (
          <div
            key={index}
            onClick={() => openModal(article.urls.raw + "&w=1500&dpr=2")}
          >
            <li className={css.li}>
              <ImageCard image={article.urls.raw + "&w=1500&dpr=2"} />
            </li>
          </div>
        ))}
      </ul>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}
