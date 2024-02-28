import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return <img className={css.img} src={image} alt="" />;
}
