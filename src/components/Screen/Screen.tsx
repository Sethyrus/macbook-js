import Camera from "../Camera/Camera";
import styles from "./Screen.module.css";

const Screen = () => {
  return (
    <div className={styles.screenWrap}>
      <div className={styles.screenFrame}>
        <Camera />
        <div className={styles.screen}></div>
      </div>
    </div>
  );
};

export default Screen;
