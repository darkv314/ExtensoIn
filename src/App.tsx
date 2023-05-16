import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainButton from './components/buttons/MainButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainButton txtButton="Click me!" />
    </>
  )
}

export default App
