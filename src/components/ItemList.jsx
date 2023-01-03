import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const ItemList = ({items}) => {

  const ItemListContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
  `

  return (
    <ItemListContainer>
        {items.map(product => 
            <Item product={product} key={product.id}/>
        )}
    </ItemListContainer>
  )
}

export default ItemList