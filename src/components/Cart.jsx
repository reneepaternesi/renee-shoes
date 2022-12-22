import React, {useState} from 'react'
import { useCart } from '../context/cartContext'
import styled from 'styled-components'
import { getCurrency } from '../utils';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, updateDoc, doc, getDoc } from 'firebase/firestore'
import Toast from 'react-bootstrap/Toast';

const Cart = () => {
  const { products, removeProduct, clear } = useCart()
  const [orderId, setOrderId] = useState('')
  const [showToast, setShowToast] = useState(false);

  const CartWrapper = styled.div`
    background-color: #e9ecef;
    width: 100%;
    height: 100vh;
    color: #6c757d;
    position: relative;
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

  const CheckoutBtn = styled(Button)`
    background-color: #6c757d;
    color: white;
    border: 1px solid #bebebe;
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 4px;
    font-size: 18px;

    &:hover {
      color: white;
      background-color: #bebebe;
    }
  `

  const OrderToast = styled(Toast) `
    position: absolute;
    top: 20px;
    right: 20px;
  `

  const getTotalPrice = () => {
    return getCurrency(products.reduce((subtotal, product) => subtotal + product.price * product.quantity,0))
  }

  const isShoe = (product) => {
    return product.categoryId === 1
  }

  const createOrder = () => {
    const user = {
      email: "renee@test.com",
      name: "Renee",
      phone: "1234"
    }

    const order = {
      buyer: user,
      items: products.map(product => {
        return {id: product.id, title: product.title, price: product.price, quiantity: product.quantity}
      }),
      total: products.reduce((subtotal, p)=> subtotal + (p.price * p.quantity), 0)
    }

    const db = getFirestore()
    const ordersCollection = collection(db, 'Orders')

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id)
      setShowToast(true)
      updateStocks()
      clear()
    })
  }

  const updateStocks = () => {
    const db = getFirestore()
    let productItem
    products.forEach((product) => {
      const productRef = doc(db, 'Products', product.id)
      getDoc(productRef).then((snapshot) => {
        productItem = { id: snapshot.id, ...snapshot.data()}
        updateDoc(productRef, {stock: Number(productItem.stock - product.quantity)})
      })
    })
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
                {isShoe(product) ? product.size : '-'}
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
      {products.length > 0 &&
        <CheckoutBtn onClick={createOrder}>Terminar mi compra</CheckoutBtn>
      }
      <OrderToast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
            <Toast.Header>
              <img
                src="/imgs/success-order.png"
                className="rounded"
                width={25}
                height={20}
                alt=""
              />
              <strong className="me-auto">Compra realizada!</strong>
            </Toast.Header>
            <Toast.Body>Tu orden <strong>${orderId}</strong> ha sido registrada!</Toast.Body>
      </OrderToast>
    </CartWrapper>
  )
}

export default Cart