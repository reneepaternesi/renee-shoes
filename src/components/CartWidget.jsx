import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { productsTotal } = useCart()

    const LinkWrapper = styled(Link)`
        text-decoration: none;
        color: white;
    `

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

        &:hover {
            background-color: #bebebe;
            border-color: #bebebe;
        }
    `
  return (
        <LinkWrapper to='/cart'>
            <CartBtn>
                <img src="/assets/cart.png" width="25" alt="cart"/>
                <span>({productsTotal})</span>
            </CartBtn>
        </LinkWrapper>

  )
}

export default CartWidget