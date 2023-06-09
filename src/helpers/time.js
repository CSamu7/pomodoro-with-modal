const milisecondsToMinutes = (miliseconds) => {
  return Math.floor(miliseconds / 1000 / 60);
}

const milisecondsToSeconds = (miliseconds) => {
  return (miliseconds / 1000 % 60).toFixed(0);
}

const formatNumber = (number) => {
  const stringNumber = number.toString()

  return stringNumber.length === 1 ? `0${stringNumber}` : stringNumber
}

const minutesToMiliseconds = (minutes) => {
  return minutes * 60 * 1000
}

export { milisecondsToMinutes, milisecondsToSeconds, formatNumber, minutesToMiliseconds}
