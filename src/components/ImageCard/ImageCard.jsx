import css from "./ImageCard.module.css";
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";


export default function ImageCard({ image }) {
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
        onClick={() => openModal(image.urls.raw + "&w=1500&dpr=2")}
        className={css.img}
        src={image}
      />
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}
