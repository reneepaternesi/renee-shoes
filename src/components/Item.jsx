import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import { getCurrency } from '../utils';

const Item = ({product}) => {

  const ItemContainer = styled(Card)`
    flex-basis: 20rem;
    margin: 0 20px 50px 20px;
    
    img {
      cursor: pointer;
      position: relative;
      z-index: 0;
    }

    a.unavailable::after {
      content: "No Disponible";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 78%;
      background-color: #d0dede;
      opacity: .7;
      z-index: 1;
      font-size: 20px;
      color: grey;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `

  const CardBtn = styled(Button)`
    background-color: #d0dede;
    outline: none;
    border: none;
    color: black;

    &:hover {
      background-color: #bebebe;
    }

    a {
      text-decoration: none;
      color: black;
    }
  `

  return (
      <ItemContainer style={{ width: '18rem' }}>
        <Link to={`/product/${product.id}`} className={`${product.stock === 0 ? "unavailable" : ""}`}>
          <Card.Img variant="top" src={product.pictureUrl} />
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {getCurrency(product.price)}
          </Card.Text>
          <CardBtn variant="primary">
            <Link to={`/product/${product.id}`}>Ver Producto</Link>
          </CardBtn>
        </Card.Body>
      </ItemContainer>

  )
}

export default Item