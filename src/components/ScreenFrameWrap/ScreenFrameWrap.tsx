import Keyboard from "../Keyboard/Keyboard";
import ScreenFrame from "../ScreenFrame/ScreenFrame";
import styles from "./ScreenFrameWrap.module.scss";

const ScreenFrameWrap = (props: ScreenFrameWrapProps) => (
  <div
    className={[
      styles.screenFrameWrap,
      !props.fullscreen ? undefined : styles.screenFrameWrapNoComputer,
    ].join(" ")}
  >
    <ScreenFrame inComputer={!props.fullscreen} />
    {!props.fullscreen && <Keyboard />}
  </div>
);
export default ScreenFrameWrap;
