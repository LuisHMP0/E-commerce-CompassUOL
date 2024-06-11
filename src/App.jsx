import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Section01 from '/src/components/Section01/Section01.jsx'
import Section02 from './components/Section02/Section02'
import Produto from './components/Produto/Produto'
import imagem from './components/Produto/img/Syltherine.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Section01 />
    <Section02 />
    <div className='produtos'> 
    <Produto />
    <Produto />
    <Produto />
    <Produto />

    </div>
    </>
  )
}

export default App
