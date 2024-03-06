
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";


export default function ImageGallery( images ) {
  return (
    <>
      <ul className={css.ul}>
        {images.articles.map(
          (image, index) => (
            console.log(image),
            (
              <li key={index} className={css.li}>
                <ImageCard
                  alt={image.alt_description}
                  image={image.urls.raw + "&w=1500&dpr=2"}
                />
              </li>
            )
          )
        )}
      </ul>
    </>
  );
}
