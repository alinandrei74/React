import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MouseClicker from './MouseClicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Ejemplo clickeador
      </h1>
        <MouseClicker/>
    </div>
  )
}

export default App
