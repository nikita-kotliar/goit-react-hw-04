import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root"); 

export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.modal}
    >
      <button onClick={onRequestClose}>Close Modal</button>
      <img className={css.img} src={image} alt="Selected" />
    </Modal>
  );
}
