import React from 'react'
import styled from 'styled-components'
import praia from '../img/praia1.jpg'

const CTA = () => {

    const CTA = styled.section`
    background: url(${praia});
    height: 60vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    padding: 100px 14%;
    `

    const CtaText = styled.div`
    h6 {
        font-size: 17px;
        font-weight: 500;
        letter-spacing: .6px;
        margin-bottom: 14px;
    }

    h4{
        font-size: 3.3rem;
        line-height: 1.2;
        letter-spacing: .6rem;
        margin-bottom: 30px;
        color: #fff
    }
    `

    const BTN = styled.button`
    display: inline-block;
    padding: 13px 25px;
    background: #0e37f0;
    color: #ffffff;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 600;
    border-radius: 7px;
    transition: all .35s ease;
    cursor: pointer;

    &:hover{
        transform: translateY(-7px);
        background: #111111;
    }
    
    `
  return (
    <CTA>
        <CtaText>
            <h6>VERÃO EM PROMOÇÃO</h6>
            <h4>20% OFF <br />NOVIDADES DE VERÃO</h4>
            <BTN>Compre agora</BTN>
        </CtaText>

    </CTA>
  )
}

export default CTA