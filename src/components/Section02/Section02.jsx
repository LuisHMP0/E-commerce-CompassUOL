import React, { useState } from 'react';
import './Section02.css'

const Section02 = () => {
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

    const toggleOpcoes = () => {
      setMostrarOpcoes(!mostrarOpcoes);
    };
  
    return (
      <section className='sec02'>

        <div className="filtro-container">

            <div className='filter'>
                <img className='imgFilter' src="src/components/Section02/img/filter.png" alt="Filtro" onClick={toggleOpcoes} />
                <p> Filter </p>
            </div>
        
            {mostrarOpcoes && (
            <div className="opcoes-container">
                <select id="ordenacao">
                        <option value="nomeAZ">Nome (A - Z)</option>
                        <option value="precoDesc">Preço (Maior - Menor)</option>
                </select>
            </div>
          )}

            <div className='results'> 
                <img className='lineImg' src="src/components/Section02/img/Line.png" alt="Line" />
                <p> Showing 1–16 of 32 results </p>
            </div>

        </div>

        
        <div className='input'> 
            <p> Show </p>
            <input type='number' id='inputResult' className='inputResult'/> 
        </div>
      </section>
    );}

export default Section02