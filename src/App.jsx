import { useState } from 'react'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard></Dashboard>
    </>
  )
}

export default App
