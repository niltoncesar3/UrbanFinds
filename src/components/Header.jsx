import React from 'react'
import styled from 'styled-components'
import {AiOutlineShopping} from 'react-icons/ai'

const Header = () => {


    const Header = styled.header`
    width: 100%;
    top:0;
    right:0;
    z-index: 1000;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    padding: 20px 14%;
    transition: all .35s ease;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);



    @media(max-width:1000px){
        padding: 7px 4%;
        transition: .2s;
    }
    `

    const Logo = styled.a`
        margin-left: 10rem;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #111111;
        cursor: pointer;
    `

    const Icon = styled.i`
    font-size: 32px;
    color: #111111;
    margin-right: 20px;
    transition: all .35s ease;

    :hover{
        color: #0e37f0;
        cursor: pointer;
    }

    @media (max-width: 670px) {
        display: inline-flex;
        width: 35px;
    }
    `

  return (
    <Header>
            <Logo>Urban Finds</Logo>
            <Icon>
                <a><AiOutlineShopping/></a>
            </Icon>  
    </Header>
  )
}

export default Header