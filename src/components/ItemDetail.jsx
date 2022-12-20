import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { getCurrency, getSizes } from '../utils';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown';
import ItemCount from './ItemCount'
import { DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import Loader from './Loader';

const ItemDetail = ({loaded, product}) => {
  const [size, setSize] = useState(0)
  const { addProduct, products } = useCart()

  const ContainerWrapper = styled(Container)`
    padding: 3rem 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `

  const ColContainer = styled.div`
    flex-basis: 30rem;
    margin: 0 20px;

    img {
      max-height: 960px;
    }
  `

  const ProductName = styled.div`
    font-family: 'Rock Salt', curave;
    color: #6c757d;
    font-size: 2rem;
    line-height: 40px;
    padding: 0;
    text-decoration: none;
    margin-bottom: 3rem;
  `

  const ProductDescription = styled.div`
    color: #6c757d;
    font-size: 1rem;
    text-align: justify;
    margin-bottom: 3rem;
  `

  const ProductStock = styled.div`
    color: #6c757d;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
  `

  const ProductPrice = styled.div`
    color: #6c757d;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
  `

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 290px max-content;
    margin-top: 3rem;
    margin-bottom: 3rem;

    span {
      padding: 8px 8px;
    }
  `

  const SizesDropdownButton= styled(DropdownButton)`
    text-align: left;
    margin-bottom: 3rem;

    button {
      background-color: #e9ecef;
      color: black;
      border-color: #bebebe;
      min-width: 155px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background-color: #bebebe;
        color: black;
        border-color: black;
      }
    }
  `

  const CheckoutBtn = styled(Link)`
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

  const sizes= [
    { talle: 35, largo: 22.8 },
    { talle: 36, largo: 23.5 },
    { talle: 37, largo: 24.2 },
    { talle: 38, largo: 24.8 },
    { talle: 39, largo: 25.5 },
    { talle: 40, largo: 26.2 },
    { talle: 41, largo: 27 },
  ]

  const dropdownSizes = getSizes(sizes)

  const handleAddProduct = (qty) => {
    const cartProduct = {
      id: product.id,
      price: product.price,
      title: product.title,
      quantity: qty,
      pictureUrl: product.pictureUrl,
      size: size
    }
    addProduct(cartProduct)
  }

  const isShoe = () => {
    return product.categoryId === 1
  }

  return (
    <>
    {!loaded && 
      <Loader />
    }
    {loaded && 
      <ContainerWrapper>
        <ColContainer>
          <img src={product.pictureUrl} alt={product.name}/>
        </ColContainer>
        <ColContainer>
            <ProductName>{product.title}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            {isShoe() &&
              <Table striped bordered>
                      <thead>
                        <tr>
                          <th>Talle</th>
                          <th>Largo</th>
                        </tr>
                      </thead>
                      <tbody>
                          {sizes.map(size => 
                          <tr>
                            <td>
                              {size.talle}
                            </td>
                            <td>
                              {size.largo}
                            </td>
                          </tr>
                          )}
                      </tbody>
              </Table>
            }
            <GridContainer>
              <span>
                <ProductPrice >Precio: {getCurrency(product.price)}</ProductPrice>
                <ProductStock>Cantidad Disponible: {product.stock} </ProductStock>
                {isShoe() &&
                <SizesDropdownButton id="size-selector" title={size || dropdownSizes[0].name}>
                  {dropdownSizes.map(size => 
                    <Dropdown.Item value={size.value} onClick={() => setSize(size.value)}>{size.name}</Dropdown.Item>
                  )}
                </SizesDropdownButton>
              }
              </span>
              <span>
                <ItemCount isShoe={isShoe()} maxValue={product.stock} onAdd={handleAddProduct} sizeSelected={size>0}/>
              </span>
            </GridContainer>
            {products.length > 0 && 
              <CheckoutBtn to='/cart'>Terminar mi compra</CheckoutBtn>
            }
        </ColContainer>
      </ContainerWrapper>
    }
    </>
  )
}

export default ItemDetail