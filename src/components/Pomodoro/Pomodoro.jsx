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
    const isTimeInLocalStorage = localStorage.getItem('time')

    if (isTimeInLocalStorage) return isTimeInLocalStorage

    return minutesToMiliseconds(initialTime)
  }

  const [time, setTime] = useState(() => getInitialTime())

  const timer = (futureTime) => {
    const actualTime = futureTime - Date.now()

    setTime(actualTime)

    localStorage.setItem('time', actualTime)

    if (actualTime < 0) {
      localStorage.removeItem('time')
      return setTime(0)
    }

    setTimeout(() => {
      timer(futureTime)
    }, 1000)
  }

  const handleStart = () => {
    const FUTURE_TIME = Date.now() + time

    setTimeout(() => {
      timer(FUTURE_TIME)
    }, 1000)
  }

  console.log(time)

  const MINUTES = formatNumber(milisecondsToMinutes(time))
  const SECONDS = formatNumber(milisecondsToSeconds(time))

  return (
    <div className={styles.pomodoro}>
      <p id='time' className={styles.pomodoroTime}>
        {`${MINUTES}:${SECONDS}`}
      </p>
      <div className={styles.panelButtons}>
        <button className={styles.btnPomodoro} onClick={handleStart}>
          Iniciar
        </button>
        <button className={styles.btnPomodoro}>Editar</button>
        <button className={styles.btnPomodoro}>Detener</button>
      </div>
    </div>
  )
}
