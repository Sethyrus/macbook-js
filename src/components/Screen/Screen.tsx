import Dock from "../Dock/Dock";
import styles from "./Screen.module.scss";

const Screen = () => (
  <div className={styles.screenWrap}>
    <Dock />
  </div>
);

export default Screen;
