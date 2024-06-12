import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <section className='parteDeCima'>
            <div className='footerDiv'>
                <h1>footer.</h1>
                <p> Rua Alexandre Dumas, 1711 - 6º <br/> andar - Chácara Santo Antônio, <br/> São Paulo - SP, 04717-004 </p>
            </div>
            <div className='links'>
                <h2>Links</h2>
                <ul> 
                    <li> <a href="#home">Home</a> </li>
                    <li> <a href="#shop">Shop</a> </li>
                    <li> <a href="#about">About</a> </li>
                    <li> <a href="#contact">Contact</a> </li>
                </ul>
            </div>
            <div className='help'>
                <h2>Help</h2>
                <ul>
                    <li> <a href="#paymentOptions">Payment Options</a> </li>
                    <li> <a href="#returns">Returns</a> </li>
                    <li> <a href="#privacyPolicies">Privacy Policies</a> </li>
                </ul>
            </div>
            <div className='newsletter'>
                <h2>Newsletter</h2>
                <div className='inputEmail'>
                    <input type='email' name='email' id='email' className='email' placeholder='Enter Your Email Address'/>
                    <button type='submit' className='submit'>SUBSCRIBE</button>
                </div>
            </div>
        </section>
        <p className='compass'> 2024 Compass UOL </p>
    </footer>
    
    
  )
}

export default Footer