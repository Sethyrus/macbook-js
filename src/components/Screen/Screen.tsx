import Camera from "../Camera/Camera";
import Dock from "../Dock/Dock";
import styles from "./Screen.module.scss";

const Screen = (props: ScreenProps) => (
  <>
    <div
      className={[
        styles.screenWrap,
        props.inComputer ? undefined : styles.screenWrapNoComputer,
      ].join(" ")}
    >
      <Camera />
      <div className={styles.screenContainer}>
        <Dock />
      </div>
    </div>
  </>
);

export default Screen;
