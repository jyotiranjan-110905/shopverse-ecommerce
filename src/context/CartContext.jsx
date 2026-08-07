import React, { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext()

const loadCart = () => {
  try {
    const saved = localStorage.getItem('shopverse-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find((item) => item.id === action.payload.id)
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }
      return [...state, { ...action.payload, qty: 1 }]
    }
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload)
    case 'INCREMENT':
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      )
    case 'DECREMENT':
      return state
        .map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, undefined, loadCart)

  useEffect(() => {
    localStorage.setItem('shopverse-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) =>
    dispatch({ type: 'ADD', payload: product })
  const removeFromCart = (id) => dispatch({ type: 'REMOVE', payload: id })
  const increment = (id) => dispatch({ type: 'INCREMENT', payload: id })
  const decrement = (id) => dispatch({ type: 'DECREMENT', payload: id })
  const clearCart = () => dispatch({ type: 'CLEAR' })

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const value = {
    cart,
    cartCount,
    subtotal,
    addToCart,
    removeFromCart,
    increment,
    decrement,
    clearCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

