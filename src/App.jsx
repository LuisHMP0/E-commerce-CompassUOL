import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Section01 from '/src/components/Section01/Section01.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Section01 />
    </>
  )
}

export default App
