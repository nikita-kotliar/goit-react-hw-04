import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, topic }) {
  const handleClick = async () => {
    onClick(topic, "loadMore");
  };

  return (
    <div className={css.div}>
      <button onClick={handleClick}>Load More</button>
    </div>
  );
}
