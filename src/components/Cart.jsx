import React from 'react'
import { useCart } from '../context/cartContext'
import styled from 'styled-components'
import { getCurrency } from '../utils';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { products, removeProduct } = useCart()

  const CartWrapper = styled.div`
    background-color: #e9ecef;
    width: 100%;
    height: 100vh;
    color: #6c757d;
  `

  const CartTitle = styled.div`
    font-size: 1.2rem;
    line-height: 40px;
    padding-top: 20px;
    margin-bottom: 20px;
    font-family: 'Rock Salt', curave;
  `

  const GridContainer = styled.div`
    background-color: white;
    margin: 1rem 10rem 0 10rem;
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    padding: 0 2rem 20px 2rem;
    font-family: 'Rock Salt', curave;

    span {
      padding: 8px 8px;
      border-bottom: 1px solid  #bebebe;
      display: flex;
      align-content: center;
      align-self: center;
      align-items: center;
      justify-content: center;
      min-height: 107px;
    }

    span {
      img + p {
        align-self: center;
        display: flex;
        margin-left: 10px;
      }
    }

    button {
      background: transparent;
      border: none;
    }
  `
  const TotalWrapper = styled.div`
    font-weight: bold;
    text-align: right;
    margin: 0 10rem 3rem 10rem;
    background-color: white;
    padding: 0 2rem 20px 2rem;
    font-size: 20px
  `

  const EmptyCartWrapper = styled.div`
    margin: 0 10rem 3rem 10rem;
    background-color: white;
    padding: 2rem;
    font-size: 20px
  `

  const Msg = styled.div`
    margin-bottom: 30px;
    font-family: 'Rock Salt', curave;
    font-size: 16px;
  `

  const NavLink = styled(Link)`
      text-decoration: none;
  `

  const NavBtn = styled(Button)`
      display: block;
      margin: 30px auto;
      color: black;
      border-color: #bebebe;
        
        &:hover {
            background-color: #bebebe;
            color: black;
            border-color: black;
        }
  `

  const getTotalPrice = () => {
    return getCurrency(products.reduce((subtotal, product) => subtotal + product.price * product.quantity,0))
  }

  return (
    <CartWrapper>
      <CartTitle>Shopping Cart</CartTitle>
      {products.length === 0 &&
        <EmptyCartWrapper>
          <Msg>Tu carrito está vacío</Msg>
          <img src="/imgs/empty-cart.webp" alt="empty" width="256" height="256"/>
          <NavLink to="/">
            <NavBtn variant="outline-primary" size="sm">
               Volver a la tienda
            </NavBtn>
          </NavLink>
        </EmptyCartWrapper>
      }
      {products.length > 0 &&
      <>
        <GridContainer>
          <span>
            Descripción
          </span>
          <span>
            Talle
          </span>
          <span>
            Cantidad
          </span>
          <span>
            Eliminar
          </span>
          <span>
            Precio
          </span>
          {products.map(product => 
            <>
              <span>
                <img src={product.pictureUrl} alt={product.title} width="60px"/>
                <p>{product.title}</p>
              </span>
              <span>
                {product.size}
              </span>
              <span>
                {product.quantity}
              </span>
              <span>
                <button onClick={() => removeProduct(product.id)}>
                  <img src="/assets/trash.png" alt="Eliminar producto" width="25" height="25"/>
                </button>
              </span>
              <span>
                {getCurrency(product.price)}
              </span>
            </>
          )}
        </GridContainer>
        <TotalWrapper>Total: {getTotalPrice()}</TotalWrapper>
      </>
      }
    </CartWrapper>
  )
}

export default Cart