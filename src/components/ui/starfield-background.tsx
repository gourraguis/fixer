import styles from './starfield-background.module.css';

export function StarfieldBackground() {
  return (
    <div className={styles.starsContainer}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
    </div>
  );
}
