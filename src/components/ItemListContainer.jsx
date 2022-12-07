import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { products } from '../mocks/products'

const ItemListContainer = ({greeting}) => {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
   getProducts().then(response => {
    setItems(response)
    if(categoryId) {
      const filteredResponse = response.filter((item => item.category === Number(categoryId)))
      setItems(filteredResponse)
    }
   }).catch((error) => {
    console.log(error)
   })
  }, [categoryId, items])

  const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products)
        }, 2000);
      })
  }


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
    <ItemList items={items}/>
    </>
  )
}

export default ItemListContainer