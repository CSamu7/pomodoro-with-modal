import { useEffect, useState } from "react";
import {
  formatNumber,
  getFutureTime,
  milisecondsToMinutes,
  milisecondsToSeconds,
} from "../helpers/time";
import styles from "./Pomodoro.module.css";

export default function (props) {
  let { title, initialTime } = props;
  const [time, setTime] = useState();
  const [futureTime, setFutureTime] = useState(() => {
    return getFutureTime(initialTime);
  });

  const actualTime = new Date();

  useEffect(() => {
    const interval = 1000;

    const timer = setInterval(() => {
      const timeLeft = futureTime.getTime() - actualTime.getTime();

      if (timeLeft <= 0) clearInterval(timer);

      setTime(timeLeft);
    }, interval);

    return () => clearInterval(timer);
  });

  const MINUTES = formatNumber(milisecondsToMinutes(time));
  const SECONDS = formatNumber(milisecondsToSeconds(time));

  return (
    <div className={styles.pomodoro}>
      <h1 className={styles.pomodoroTitle}>{title}</h1>
      <p id="time" className={styles.pomodoroTime}>
        {isNaN(MINUTES) || isNaN(SECONDS)
          ? `Cargando contador...`
          : `${MINUTES} : ${SECONDS}`}
      </p>
      <button>Iniciar</button>
      <button>Editar</button>
      <button>Detener</button>
    </div>
  );
}
