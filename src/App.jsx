import { useState } from 'react'
import Header from '/src/components/header'
import Body from '/src/components/body'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Body/>
    </>
  )
}

export default App
