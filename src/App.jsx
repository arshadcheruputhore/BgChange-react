import { useState } from 'react'
import './App.css'
import BtnContainer from './BtnContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BtnContainer />
    </>
  )
}

export default App
