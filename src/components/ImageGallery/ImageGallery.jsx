import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <>
      <ul className={css.ul}>
        {images.map((image, index) => (
          <li key={index} className={css.li}>
            <ImageCard
              alt={image.alt_description}
              image={image.urls.raw + "&w=1500&dpr=2"}
              onImageClick={onImageClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
