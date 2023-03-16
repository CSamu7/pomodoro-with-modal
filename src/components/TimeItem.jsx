import styles from "./TimeItem.module.css";

export default function (props) {
  let { time } = props;

  return (
    <div className={styles.timeItem}>
      <p className={styles.timeItemText}>{time}</p>
    </div>
  );
}
