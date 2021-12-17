import { useState } from "react";
import ScreenFrameWrap from "../ScreenFrameWrap/ScreenFrameWrap";
import ToggleFullScreenButton from "../ToggleFullScreenButton/ToggleFullScreenButton";
import styles from "./Scaffold.module.scss";

const Scaffold = () => {
  const [fullScreenMode, setFullScreenMode] = useState(false);

  return (
    <div
      className={[
        styles.scaffold,
        fullScreenMode ? styles.fullScreen : undefined,
      ].join(" ")}
    >
      <ScreenFrameWrap fullscreen={fullScreenMode} />

      <ToggleFullScreenButton
        onClick={() => setFullScreenMode(!fullScreenMode)}
        fullscreen={fullScreenMode}
      />
    </div>
  );
};

export default Scaffold;
