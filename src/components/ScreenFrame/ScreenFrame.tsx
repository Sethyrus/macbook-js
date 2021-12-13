import Camera from "../Camera/Camera";
import Keyboard from "../Keyboard/Keyboard";
import styles from "./ScreenFrame.module.css";

const ScreenFrame = () => (
  <div className={styles.screenFrameWrap}>
    <div className={styles.screenFrame}>
      <div className={styles.screenWrap}>
        <Camera />
      </div>
    </div>
    <Keyboard />
  </div>
);
export default ScreenFrame;
