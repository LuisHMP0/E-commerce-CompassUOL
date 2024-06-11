
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

        </div>

      </section>
    );}

export default Section02