import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  const GretingWrapper = styled.div`
    font-family: 'Rock Salt', curave;
    display:block;
    margin: 50px auto;

    span {
      color: #6c757d;
      font-weight: bold;
    }
  `

  return (
    <>
    <GretingWrapper>Bienvend@ <span>{greeting}</span></GretingWrapper>
    <ItemList />
    </>
  )
}

export default ItemListContainer