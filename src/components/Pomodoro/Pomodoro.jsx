import { useEffect, useMemo, useState } from "react";
import {
  formatNumber,
  milisecondsToMinutes,
  milisecondsToSeconds,
} from "../../helpers/time";
import styles from "./Pomodoro.module.css";

export default function (props) {
  let { title, initialTime } = props;

  const TIME_IN_MILISECONDS = initialTime * 60 * 1000;

  const [time, setTime] = useState(TIME_IN_MILISECONDS);
  const [referenceTime, setReferenceTime] = useState(Date.now());

  useEffect(() => {
    const interval = 1000;

    const timer = () => {
      setTime((prevTime) => {
        if (prevTime <= 999) return 0;

        const now = Date.now();
        const newInterval = now - referenceTime;
        setReferenceTime(now);
        return prevTime - newInterval;
      });
    };

    const setTimer = setTimeout(timer, interval);
    return () => clearTimeout(setTimer);
  }, [time]);

  const MINUTES = formatNumber(milisecondsToMinutes(time));
  const SECONDS = formatNumber(milisecondsToSeconds(time));

  return (
    <div className={styles.pomodoro}>
      <h1 className={styles.pomodoroTitle}>{title}</h1>
      <p id="time" className={styles.pomodoroTime}>
        {`${MINUTES}:${SECONDS}`}
      </p>
      <div className={styles.pomodoroPanelButtons}>
        <button className={styles.btnPomodoro}>Iniciar</button>
        <button className={styles.btnPomodoro}>Editar</button>
        <button className={styles.btnPomodoro}>Detener</button>
      </div>
    </div>
  );
}
