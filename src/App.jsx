import './App.css'
import Header from './components/Header'
import Pomodoro from './components/Pomodoro/Pomodoro'

function App() {
  return (
    <div className='App'>
      <Header title='Pomodoro v. 1.0'></Header>
      <main className='wrapper'>
        <Pomodoro initialTime={0.1}></Pomodoro>
      </main>
    </div>
  )
}

export default App
