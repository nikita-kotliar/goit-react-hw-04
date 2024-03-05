import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
export default function SearchBar({ onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (topic.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSubmit(topic);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <Toaster position="top-center" reverseOrder={false} />
        <input
          className={css.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}