import { useEffect, useState } from "react";

export default function () {
  const [futureTime, setFutureTime] = useState(new Date());
  const [timestamp, setTimeStamp] = useState();

  const getFutureDate = (minutes) => {
    const fTime = new Date();
    fTime.setMinutes(fTime.getMinutes() + minutes);
    return fTime;
  };

  useEffect(() => {
    const CHOOSE_TIME = 1;
    const future = getFutureDate(CHOOSE_TIME);

    setFutureTime(future);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const timeLeft = futureTime.getTime() - today.getTime();

      if (timeLeft < 0) return;

      setTimeStamp((prevTimeLeft) => timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  });

  const minutes = Math.floor(timestamp / 1000 / 60);
  const seconds = Math.floor((timestamp / 1000) % 60);

  return (
    <>
      <h1>Pomodoro</h1>
      <p>
        {isNaN(timestamp)
          ? "Cargando"
          : minutes.toString().length === 1
          ? `0${minutes}`
          : minutes}
        {seconds.toString().length === 1 ? `0${seconds}` : seconds}
      </p>
      <button>Iniciar</button>
      <button>Editar</button>
      <button>Detener</button>
    </>
  );
}
