import css from "./ImageCard.module.css";


export default function ImageCard({ image, alt, onImageClick }) {
  return (
    <img
      onClick={() => onImageClick(image)}
      className={css.img}
      src={image}
      alt={alt}
    />
  );
}