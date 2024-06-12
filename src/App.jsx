import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Section01 from '/src/components/Section01/Section01.jsx'
import Section02 from './components/Section02/Section02'
import Produtos from './components/Produtos/Produtos'
import Section03 from './components/Section03/Section03'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Section01 />
    <Section02 />
    <Produtos />
    <Section03 />
    <Footer />
    </>
  )
}

export default App
