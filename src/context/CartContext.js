import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart'))||[]

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(init)
    console.log(cart)

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
       
    }

    const removerItem = (id) => {
        setCart(cart.filter(item => item.id === id))
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const emptycart = () => {
        setCart([])
    }
    const totalCart = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }
    const totalCantidad  = () => {
        return cart.reduce((acc, item) => acc + item.cantidad , 0)
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

return (
    <CartContext.Provider value={{
        cart,
        agregarAlCarrito,
        isInCart,
        emptycart,
        totalCart,
        removerItem,
        totalCantidad
    }}>
        {children}

    </CartContext.Provider>
)
}