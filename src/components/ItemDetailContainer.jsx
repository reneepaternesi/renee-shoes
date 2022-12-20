import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [item, setItem] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const db = getFirestore()
    const productRef = doc(db, 'Products', productId)
    getDoc(productRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() })
      setLoaded(true)
    })
   }, [productId])

  return (
    <ItemDetail loaded={loaded} product={item} />
  )
}

export default ItemDetailContainer