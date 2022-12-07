import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { product } from '../mocks/product'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    getProduct(productId).then(response => {
     setItem(response)
    }).catch((error) => {
     console.log(error)
    })
   }, [productId])

   const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product)
      }, 2000);
    })
}

  return (
    <ItemDetail product={item} />
  )
}

export default ItemDetailContainer