import React from 'react'
import styled from 'styled-components'
import modeloPrincipal from '../img/modeloPrincipal.jpg'

const Section = () => {

    const Home = styled.section`
    min-height: 100vh;
    width: 100%;
    background: url(${modeloPrincipal});
    background-size: cover;
    background-position: center top;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    background-attachment: fixed;
    `

    const HomeText = styled.section`
    padding: 100px 14%;
    
    p{
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 3rem;
        letter-spacing: .2rem;
    }

    h1{
        font-size: 4.5rem;
        font-weight: 800;
        line-height: 1.2;
        letter-spacing: .6rem;
        margin-bottom: 1.4rem;
        color: black;

        @media (max-width: 670px) {
            font-size: 3rem;
        }

        @media (max-width: 390px) {
            font-size: 3rem;
        }

    }

    span {
        font-size: 3.3rem;

        @media (max-width: 800px) {
            font-size: 2.5rem;
        }
      }

    @media (max-width: 1000px) {
        background-attachment: fixed;
        padding: 80px 4%;
        transition: .1s
      }

    @media (max-width: 390px) {
        overflow-x: hidden;
    }

    button{
        display: inline-block;
        padding: 13px 25px;
        background: #0e37f0;
        color: #f5f5f5;
        font-size: 15px;
        letter-spacing: 1px;
        font-weight: 600;
        border-radius: 10px;
        transition: all .35s ease;
        cursor: pointer;
    
    &:hover{
        transform: translateY(-7px);
        background: #111111;
        color: white;
        }
    }
    `


  return (
    <Home>
        <HomeText>
        <h1>Novas novidades<span><br/>masculinas</span></h1>
        <p>Novas cores, disponíveis para todos os tamanhos!</p>
        <button>Ver coleções</button>
        </HomeText>
    </Home>
    
  )
}

export default Section