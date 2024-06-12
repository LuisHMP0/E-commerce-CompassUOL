import React from 'react'
import './Produto.css'

const Produto = (props) => {
  return (
    <div className='produto'>
        <img src={props.src} alt={props.alt} />
        <div className='descricao'>
            <h1> {props.titulo || 'TituloUndefined'} </h1>
            <p className='subtitulo'> {props.subtitulo || 'SubtituloUndefined'} </p>
            <div className='preco'>
                <p className='p1'>Rp {props.preco || '0'} </p>
                <p className='p2'>{props.precoRiscado} </p>
            </div>
        </div>
    </div>
  )
}

export default Produto