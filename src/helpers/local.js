const saveInLocalStorage = (time) => {
  localStorage.setItem("leftTime", time)
}

const readInLocalStorage = () => {
  return localStorage.getItem("leftTime")
}

const removeInLocalStorage = () => {
  localStorage.removeItem("leftTime")
}

export {saveInLocalStorage, readInLocalStorage, removeInLocalStorage}