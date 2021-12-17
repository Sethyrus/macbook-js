import Screen from "../Screen/Screen";
import styles from "./ScreenFrame.module.scss";

const ScreenFrame = (props: ScreenFrameProps) => (
  <div
    className={[
      styles.screenFrame,
      props.inComputer ? undefined : styles.screenFrameNoComputer,
    ].join(" ")}
  >
    <Screen inComputer={props.inComputer} />
  </div>
);

export default ScreenFrame;
