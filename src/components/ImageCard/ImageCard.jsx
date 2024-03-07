import css from "./ImageCard.module.css";
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";


export default function ImageCard({ image, alt }) {
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
      <img
        onClick={() => openModal(image)}
        className={css.img}
        src={image}
        alt={alt}
      />
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}
