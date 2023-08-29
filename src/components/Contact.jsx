import React from 'react'
import styled from 'styled-components'
import {CiFacebook} from 'react-icons/ci'
import {CiInstagram} from 'react-icons/ci'
import {CiTwitter} from 'react-icons/ci'

const Contact = () => {

    const Contact = styled.div`
    padding: 100px 14%;
    background: rgb(36,35,48);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 2rem;
    `

    const MainContact = styled.div`
    h3{
         font-size: 23px;
         margin-bottom: 1.6rem;
         color: #ffffff
    }

    h5 {
        font-size: 15px;
        font-weight: 600;
        color: #555;
    }

    li {
        margin-bottom: 15px;
    }

    a {
        display: block;
        color: #555;
        font-size: 1rem;
        font-weight: 600;
        transition: all .36s ease;
        cursor: pointer;
    }

    a:hover{
        transform: translateX(-8px);
        color: #ffffff
    }
    `

    const Icons = styled.div`
    display: flex;
    margin-top: 2rem;

    i{
        font-size: 25px;
        margin-right: 1rem;
        color: #555;
        transition: all .35s ease;
        cursor: pointer;
    }

    & i:hover{
        color: #ffffff;
        transform: scale(1.1) translateY(-5px);
    }
    `
  return (
    <Contact>
        <MainContact>
            <h3>UrbanFinds</h3>
            <h5>Venha conectar com a gente!</h5>
            <Icons>
                <i><CiFacebook/></i>
                <i><CiInstagram/></i>
                <i><CiTwitter/></i>
            </Icons>
        </MainContact>

        <MainContact>
            <h3>Explore</h3>
            <li><a>Inicio</a></li>
            <li><a>Detalhes</a></li>
            <li><a>Novo</a></li>
            <li><a>Contato</a></li>
        </MainContact>

        <MainContact>
            <h3>Nossos serviços</h3>
            <li><a>Preço</a></li>
            <li><a>Frete Grátis</a></li>
            <li><a>Gift Cards</a></li>
        </MainContact>

        <MainContact>
            <h3>Shopping</h3>
            <li><a>Loja de roupas</a></li>
            <li><a>Tênis mais vendidos</a></li>
            <li><a>Acessórios</a></li>
            <li><a>Promoção</a></li>
        </MainContact>
    </Contact>
  )
}

export default Contact