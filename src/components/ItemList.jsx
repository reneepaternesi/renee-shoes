import React, { useEffect, useState } from 'react'
import Item from './Item'
import { products } from '../mocks/products'

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
   getProducts().then(response => {
    setItems(response)
   }).catch((error) => {
    console.log(error)
   })
  }, [])

  const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products)
        }, 2000);
      })
  }

  return (
    <div>
      Products
      <ul>
        {items.map(product => 
            <Item product={product} key={product.id}/>
        )}
      </ul>
    </div>
  )
}

export default ItemList