import React from 'react'
import styled from 'styled-components'

const LastText = () => {

    const LastText = styled.div`
    text-align: center;
    padding: 20px;
    background: rgb(36,35,48);

    p{
        color: #555;
        font-size: 14px;
        letter-spacing: 1px;
    }
    
    `

  return (
    <LastText>
        <p>Website feito por Nilton César</p>

    </LastText>
  )
}

export default LastText