import { useState } from 'react'
import {
  formatNumber,
  milisecondsToMinutes,
  milisecondsToSeconds,
  minutesToMiliseconds,
} from '../../helpers/time.js'
import styles from './Pomodoro.module.css'

export default function (props) {
  const getInitialTime = () => {
    const isTimeInLocalStorage = localStorage.getItem('time')

    if (isTimeInLocalStorage) return parseInt(isTimeInLocalStorage)

    let { initialTime } = props

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
    const FUTURE_TIME = Date.now() + time // FUTURE_TIME = Date.now() + 2971

    console.log(time)
    console.log(Date.now())
    console.log(FUTURE_TIME)

    setTimeout(() => {
      // 2971
      timer(FUTURE_TIME)
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
        <button className={styles.btnPomodoro} onClick={handleStart}>
          Iniciar
        </button>
        <button className={styles.btnPomodoro}>Editar</button>
        <button className={styles.btnPomodoro}>Detener</button>
      </div>
    </div>
  )
}
