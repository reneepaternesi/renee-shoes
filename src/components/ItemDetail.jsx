import React from 'react'
import Container from 'react-bootstrap/Container';
import { getCurrency, getSizes } from '../utils';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown';

const ItemDetail = ({product}) => {

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
    margin-bottom: 2rem;
  `

  const ProductStock = styled.div`
    color: #6c757d;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  `

  const ProductPrice = styled.div`
    color: #6c757d;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 2rem;
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
  return (
    <ContainerWrapper>
      <ColContainer>
        <img src={product.pictureUrl} alt={product.name}/>
      </ColContainer>
      <ColContainer>
          <ProductName>{product.title}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ContainerWrapper>
            <ColContainer>
                <ProductStock>Cantidad Disponible: {product.stock} </ProductStock>
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
            </ColContainer>
            <ColContainer>
              <ProductPrice>Precio: {getCurrency(product.price)}</ProductPrice>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Seleccione Talle
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {getSizes(sizes).map(size => 
                      <Dropdown.Item>{size.text}</Dropdown.Item>
                    )}
                    </Dropdown.Menu>
                </Dropdown>
            </ColContainer>
        </ContainerWrapper>
      </ColContainer>
    </ContainerWrapper>
  )
}

export default ItemDetail