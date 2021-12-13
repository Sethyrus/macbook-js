import styles from "./Keyboard.module.scss";

const Keyboard = () => (
  <div className={styles.keyboardWrap}>
    <div className={styles.keyboardStandLeft}></div>
    <div className={styles.keyboardStandRight}></div>
    <div className={styles.keyboardGandGripWrap}>
      <div className={styles.keyboardGandGripContainer}>
        <div className={styles.keyboardGandGrip}></div>
      </div>
    </div>
  </div>
);
export default Keyboard;
