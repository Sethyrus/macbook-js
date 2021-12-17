import styles from "./ToggleFullScreenButton.module.scss";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";

const ToggleFullScreenButton = (props: ToggleFullScreenButtonProps) => (
  <div className={styles.toggleFullScreenButton} onClick={props.onClick}>
    {props.fullscreen ? (
      <AiOutlineFullscreenExit className={styles.toggleFullScreenButtonIcon} />
    ) : (
      <AiOutlineFullscreen className={styles.toggleFullScreenButtonIcon} />
    )}
  </div>
);

export default ToggleFullScreenButton;
