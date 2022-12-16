import React, { useState, useContext } from "react"

const CartContext = React.createContext({
    products: [],
    productsTotal: 0,
    addProduct: () => {},
    removeProduct: () => {},
    clear: () => {},
    isInCart: () => {}

})

const useCart = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    
    const addProduct = (product) => {
        if(isInCart(product.id)) {
            const newProducts = products.map(prod => {
                if(prod.id === product.id) {
                    return {
                        ...prod,
                        quantity: prod.quantity+1
                      };
                } else {
                    return prod
                }
            })
            setProducts(newProducts)
        } else {
            setProducts(products => products.concat(product))
        }
    }

    const removeProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId))

    }

    const clear = () => {
        setProducts([])
    }

    const isInCart = (productId) => {
        return products.find(product => product.id === productId) !== undefined
    }

    return <CartContext.Provider value={{products, productsTotal: products.length, addProduct, removeProduct, clear}}>
            {children}
           </CartContext.Provider>
}

export { CartContext, CartContextProvider, useCart }