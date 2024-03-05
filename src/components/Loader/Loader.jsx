import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Error() {
  return (
    <TailSpin
      visible={true}
      height="40"
      width="40"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass={css.spin}
    />
  );
}
