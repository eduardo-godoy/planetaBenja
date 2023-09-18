import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }else{
           alert('El producto ya fue agregado')
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const removeItem = (id) => {
        const updateList = cart.filter(product => product.id !== id)
        setCart(updateList)
    }

    const totalQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0)
    }
    
    return(
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, totalQuantity, totalPrice }}>
            { children }
        </CartContext.Provider>
    )
}