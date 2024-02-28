import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, topic }) {
  const handleClick = async () => {
    console.log(topic);
    const gg = "jj";
    onClick(topic, gg);
  };

  return (
    <div className={css.div}>
      <button onClick={handleClick}>Load More</button>
    </div>
  );
}
