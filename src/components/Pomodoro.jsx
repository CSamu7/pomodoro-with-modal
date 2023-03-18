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
    let expectTime = Date.now() + interval;

    const timer = () => {
      let wasteTime = futureTime.getTime() - actualTime.getTime();
      setTime(wasteTime);

      expectTime += interval;
      setTimeout(timer, Math.max(0, interval - wasteTime));
    };

    const setTimer = setTimeout(timer, interval);
    console.log("NO");
    return () => clearTimeout(setTimer);
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
