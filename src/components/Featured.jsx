import React from 'react'
import styled from 'styled-components'
import roupa2 from '../img/roupa2.jpg'
import roupa3 from '../img/modelo3.jpg'
import roupa4 from '../img/modelo4.jpg'
import roupa5 from '../img/modelo5.1.jpg'
import roupa6 from '../img/modelo6.1.jpg'
import roupa7 from '../img/modelo7.jpg'
import roupa8 from '../img/modelo8.jpg'

import {AiOutlineArrowDown} from 'react-icons/ai'

const Featured = () => {

    const Section = styled.section`
    padding: 100px 14%;
    `

    const CenterText = styled.div`
    text-align: center;

    & h2 {
        font-size: 2rem;
    }
    `

    const FeaturedContent = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    gap: 1.3rem;
    align-items: center;
    margin-top: 4rem;
    `
    
    const Row = styled.div`
    position: relative;
    transition: all .35s ease;

    &:hover{
        transform: scale(0.9) translate(-5px);
        cursor: pointer;
    }

    &:hover i{
        background: #0e3f40;
        cursor: pointer;
    }

    & img{
        width: 90%;
        height: auto;
        border-radius: 20px;
    }
    `

    const FeaText = styled.div`
    position: absolute;
    top: 40px;
    left: 50px;

    & h5{
        font-size: 19px;
        letter-spacing: 2px;
        margin-bottom: 1rem;
    }

    p {
        color: #555;
        font-size: 15px;
        letter-spacing: 1px;
        font-weight: 400px;
    }
    `

    const Arrow = styled.div`
    position: absolute;
    bottom: 40px;
    left: 50px;

    & i {
        height: 35px;
    width: 35px;
    background: #ffffff;
    border-radius: 50px;
    font-size: 20px;
    color: #111111;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all .35s ease;
    }
    `

  return (
    <Section>
        <CenterText>
            <h2>Categorias</h2>
        </CenterText>

        <FeaturedContent>
            <Row>
                <img src={roupa3} alt="Roupa n°1" />
                <FeaText>
                    <h5>Homens</h5>
                    <p>10 itens</p>
                </FeaText>
                <Arrow>
                    <i><AiOutlineArrowDown/></i>
                </Arrow>
            </Row>

            <Row>
                <img src={roupa4} alt="Roupa n°2" />
                <FeaText>
                    <h5>Homens</h5>
                    <p>10 itens</p>
                </FeaText>
                <Arrow>
                    <i><AiOutlineArrowDown/></i>
                </Arrow>
            </Row>
            <Row>
                <img src={roupa5} alt="Roupa n°3" />
                <FeaText>
                    <h5>Homens</h5>
                    <p>10 itens</p>
                </FeaText>
                <Arrow>
                    <i><AiOutlineArrowDown/></i>
                </Arrow>
            </Row>
            <Row>
                <img src={roupa6} alt="Roupa n°4" />
                <FeaText>
                    <h5>Homens</h5>
                    <p>10 itens</p>
                </FeaText>
                <Arrow>
                    <i><AiOutlineArrowDown/></i>
                </Arrow>
            </Row>
            <Row>
                <img src={roupa7} alt="Roupa n°5" />
                <FeaText>
                    <h5>Homens</h5>
                    <p>10 itens</p>
                </FeaText>
                <Arrow>
                    <i><AiOutlineArrowDown/></i>
                </Arrow>
            </Row>
            <Row>
                <img src={roupa8} alt="Roupa n°6" />
                <FeaText>
                    <h5>Homens</h5>
                    <p>10 itens</p>
                </FeaText>
                <Arrow>
                    <i><AiOutlineArrowDown/></i>
                </Arrow>
            </Row>
        </FeaturedContent>

    </Section>
  )
}

export default Featured