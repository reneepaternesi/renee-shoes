import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {
    const db = getFirestore()
    let collectionRef
    if(categoryId) {
      collectionRef = query(collection(db, 'Products'), where("categoryId", "==",  Number(categoryId)))
    } else {
      collectionRef = collection(db, 'Products')
    }
    getDocs(collectionRef).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
      setLoaded(true)
    })
  }, [categoryId])

  return (
    <>
    {!loaded && 
      <Loader />
    }
    {loaded && 
      <ItemList items={items}/>
    }
    </>
  )
}

export default ItemListContainer