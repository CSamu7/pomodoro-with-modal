import { useState } from 'react'
import {
  formatNumber,
  milisecondsToMinutes,
  milisecondsToSeconds,
  minutesToMiliseconds,
} from '../../helpers/time.js'
import styles from './Pomodoro.module.css'

export default function (props) {
  let { initialTime } = props

  const getInitialTime = () => {
    const isTimeInLocalStorage = localStorage.getItem('item')

    if (isTimeInLocalStorage) return isTimeInLocalStorage

    return minutesToMiliseconds(initialTime)
  }

  const [time, setTime] = useState(() => getInitialTime())

  const timer = () => {
    const FUTURE_TIME = Date.now() + initialTime

    setInterval(() => {
      const actualTime = FUTURE_TIME - Date.now()

      setTime(actualTime)
    }, 1000)
  }

  const MINUTES = formatNumber(milisecondsToMinutes(time))
  const SECONDS = formatNumber(milisecondsToSeconds(time))

  return (
    <div className={styles.pomodoro}>
      <p id='time' className={styles.pomodoroTime}>
        {`${MINUTES}:${SECONDS}`}
      </p>
      <div className={styles.panelButtons}>
        <button className={styles.btnPomodoro}>Iniciar</button>
        <button className={styles.btnPomodoro}>Editar</button>
        <button className={styles.btnPomodoro}>Detener</button>
      </div>
    </div>
  )
}
