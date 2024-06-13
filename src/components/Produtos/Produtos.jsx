import { useState } from 'react'
import React from 'react'
import './Produtos.css'
import Produto from '../Produto/Produto'
import SytherineIMG from './img/Syltherine.png'
import LeviosaIMG from './img/Leviosa.png'
import LolitoIMG from './img/Lolito.png'
import RespiraIMG from './img/Respira.png'
import Botoes from '../Botoes/Botoes'
import Section02 from '../Section02/Section02'


const Produtos = () => {
    return (
        <>
        <div className='produtos'>
            <Produto
                src={SytherineIMG}
                titulo={'Syltherine'}
                subtitulo={'Stylish cafe chair'}
                preco={'2.500.000'}
                precoRiscado={'Rp 3.500.000'}
                desconto={'-30%'}
            />
            <Produto
                src={LeviosaIMG}
                titulo={'Leviosa'}
                subtitulo={'Stylish cafe chair'}
                preco={'2.500.000'}
            />
            <Produto 
                src={LolitoIMG}
                titulo={'Lolito'}
                subtitulo={'Luxury big sofa'}
                preco={'7.000.000'}
                precoRiscado={'Rp 14.000.000'}
                desconto={'-50%'}
            />
            <Produto 
                src={RespiraIMG}
                titulo={'Respira'}
                subtitulo={'Outdoor bar table and stool'}
                preco={'500.000'}
                novoProduto={true}
            />
                        <Produto
                src={SytherineIMG}
                titulo={'Syltherine'}
                subtitulo={'Stylish cafe chair'}
                preco={'2.500.000'}
                precoRiscado={'Rp 3.500.000'}
                desconto={'-30%'}
            />
            <Produto
                src={LeviosaIMG}
                titulo={'Leviosa'}
                subtitulo={'Stylish cafe chair'}
                preco={'2.500.000'}
            />
            <Produto 
                src={LolitoIMG}
                titulo={'Lolito'}
                subtitulo={'Luxury big sofa'}
                preco={'7.000.000'}
                precoRiscado={'Rp 14.000.000'}
                desconto={'-50%'}
            />
            <Produto 
                src={RespiraIMG}
                titulo={'Respira'}
                subtitulo={'Outdoor bar table and stool'}
                preco={'500.000'}
                novoProduto={true}
            />
                        <Produto
                src={SytherineIMG}
                titulo={'Syltherine'}
                subtitulo={'Stylish cafe chair'}
                preco={'2.500.000'}
                precoRiscado={'Rp 3.500.000'}
                desconto={'-30%'}
            />
            <Produto
                src={LeviosaIMG}
                titulo={'Leviosa'}
                subtitulo={'Stylish cafe chair'}
                preco={'2.500.000'}
            />
            <Produto 
                src={LolitoIMG}
                titulo={'Lolito'}
                subtitulo={'Luxury big sofa'}
                preco={'7.000.000'}
                precoRiscado={'Rp 14.000.000'}
                desconto={'-50%'}
            />
            <Produto 
                src={RespiraIMG}
                titulo={'Respira'}
                subtitulo={'Outdoor bar table and stool'}
                preco={'500.000'}
                novoProduto={true}
            />
                        <Produto
                src={SytherineIMG}
                titulo={'Syltherine'}
                subtitulo={'Stylish cafe chair'}
                preco={'2.500.000'}
                precoRiscado={'Rp 3.500.000'}
                desconto={'-30%'}
            />
            <Produto
                src={LeviosaIMG}
                titulo={'Leviosa'}
                subtitulo={'Stylish cafe chair'}
                preco={'2.500.000'}
            />
            <Produto 
                src={LolitoIMG}
                titulo={'Lolito'}
                subtitulo={'Luxury big sofa'}
                preco={'7.000.000'}
                precoRiscado={'Rp 14.000.000'}
                desconto={'-50%'}
            />
            <Produto 
                src={RespiraIMG}
                titulo={'Respira'}
                subtitulo={'Outdoor bar table and stool'}
                preco={'500.000'}
                novoProduto={true}
            />
            <Botoes />
        </div>
    </>

    

    
  )
}

export default Produtos