
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";


export default function ImageGallery( images ) {
  return (
    <>
      <ul className={css.ul}>
        {images.articles.map((image, index) => (
            <li
              key={index}
              className={css.li}
              
            >
              <ImageCard image={image.urls.raw + "&w=1500&dpr=2"} />
            </li>
        ))}
      </ul>
      
    </>
  );
}
