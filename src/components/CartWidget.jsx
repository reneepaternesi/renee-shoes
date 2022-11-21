import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const CartWidget = () => {
    const CartBtn = styled(Button)`
        padding: 4px 4px;
        border-color: #bebebe;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 8px #bebebe;
        background-color: transparent;
        cursor: pointer;

        span {
            margin-left: 5px;
        }
    `
    
  return (

        <CartBtn>
            <img src="/assets/cart.png" width="25" alt="cart"/>
            <span>(0)</span>
        </CartBtn>

  )
}

export default CartWidget