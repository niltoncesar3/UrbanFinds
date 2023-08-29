import React from 'react'
import styled from 'styled-components'
import moletom from '../img/moletom.jpg'
import moletom1 from '../img/moletom1.jpg'
import moletom2 from '../img/moletom2.jpg'
import moletom3 from '../img/moletom3.jpg'

const New = () => {

    const New = styled.section`
    padding: 100px 14%;
    
    `

    const CenterText = styled.div`
    text-align: center;
    
    h2 {
        font-size: 3.3rem;
    }
    
    `

    const NewContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 1.3rem;
    align-items: center;
    margin-top: 4rem;
    text-align: center;
    `

    const Box = styled.div`
    position: relative;
    transition: all .35s ease;

    img {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        border-radius: 10px;
        transition: all .35s ease;
    }

    h5 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    h6 {
        font-size: 16px;
        font-weight: 700;
    }

    &:hover{
        transform: scale(0.9) translateY(-5px);
        cursor: pointer;
    }
    `

    const Sale = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 30px;
    background: #0e37f0;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    `


  return (
    <New>
        <CenterText>
            <h2>Novidades</h2>
        </CenterText>

        <NewContent>
            <Box>
                <img src={moletom}/>
                <h5>Lorem ipsum dolor.</h5>
                <h6>$188.99</h6>
                <Sale>
                    <h4>Promoção</h4>
                </Sale>
            </Box>

            <Box>
                <img src={moletom1}/>
                <h5>Lorem ipsum dolor.</h5>
                <h6>$188.99</h6>
                <Sale>
                    <h4>Promoção</h4>
                </Sale>
            </Box>

            <Box>
                <img src={moletom2} alt="" />
                <h5>Lorem ipsum dolor.</h5>
                <h6>$188.99</h6>
                <Sale>
                    <h4>Promoção</h4>
                </Sale>
            </Box>

            <Box>
                <img src={moletom3} alt="" />
                <h5>Lorem ipsum dolor.</h5>
                <h6>$188.99</h6>
                <Sale>
                    <h4>Promoção</h4>
                </Sale>
            </Box>


        </NewContent>


    </New>
  )
}

export default New