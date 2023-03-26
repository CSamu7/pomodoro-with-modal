import { useRef, useState } from 'react'
import {
  formatNumber,
  milisecondsToMinutes,
  milisecondsToSeconds,
  minutesToMiliseconds,
} from '../helpers/time'
import styles from './Pomodoro.module.css'

export default function (props) {
  let { title, initialTime } = props

  const getInitialTime = () => {
    const saveTime = localStorage.getItem('time')

    if (!saveTime) return localStorage.getItem('item')

    return minutesToMiliseconds(initialTime)
  }

  const [time, setTime] = useState(() => getInitialTime())
  let intervalID

  const alarm = useRef(new Audio('./hotel.mp3'))
  alarm.current.loop = false

  const timer = () => {
    const FUTURE_TIME = Date.now() + minutesToMiliseconds(initialTime) //Consigue el tiempo

    intervalID = setInterval(() => {
      const actualTime = FUTURE_TIME - Date.now() //Temporizador

      setTime(actualTime)

      if (actualTime < 999) {
        setTime(0)
        alarm.current.play()
        localStorage.removeItem('time')
        clearInterval(intervalID)
      }
    }, 1000)
  }

  localStorage.setItem('time', time)

  const handleStop = () => {
    clearInterval(intervalID)
    alarm.current.pause()
    alarm.current.currentTime = 0
  }

  const MINUTES = formatNumber(milisecondsToMinutes(time))
  const SECONDS = formatNumber(milisecondsToSeconds(time))

  return (
    <div className={styles.pomodoro}>
      <h1 className={styles.pomodoroTitle}>{title}</h1>
      <p id='time' className={styles.pomodoroTime}>
        {`${MINUTES}:${SECONDS}`}
      </p>
      <div className={styles.panelButtons}>
        <button className={styles.btnPomodoro} onClick={timer}>
          Iniciar
        </button>
        <button className={styles.btnPomodoro}>Editar</button>
        <button className={styles.btnPomodoro} onClick={handleStop}>
          Detener
        </button>
        <button className={styles.btnPomodoro}>Limpiar</button>
      </div>
    </div>
  )
}
