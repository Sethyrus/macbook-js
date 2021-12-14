import Camera from "../Camera/Camera";
import Keyboard from "../Keyboard/Keyboard";
import Screen from "../Screen/Screen";
import styles from "./ScreenFrame.module.scss";

const ScreenFrame = () => (
  <div className={styles.screenFrameWrap}>
    <div className={styles.screenFrame}>
      <div className={styles.screenWrap}>
        <Camera />
        <div className={styles.screenContainer}>
          <Screen />
        </div>
      </div>
    </div>
    <Keyboard />
  </div>
);
export default ScreenFrame;
