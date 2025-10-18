"use client"

import { createContext, useContext, useReducer, useEffect } from "react"

// Cart actions
const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  LOAD_CART: "LOAD_CART"
}

// Cart reducer
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const existingItem = state.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      return [...state, { ...action.payload, quantity: 1 }]
    }
    
    case CART_ACTIONS.REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload)
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload
      
      if (quantity <= 0) {
        return state.filter(item => item.id !== id)
      }
      
      return state.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    }
    
    case CART_ACTIONS.CLEAR_CART:
      return []
    
    case CART_ACTIONS.LOAD_CART:
      return action.payload || []
    
    default:
      return state
  }
}

// Create context
const CartContext = createContext()

// Cart provider component
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart })
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Cart actions
  const addToCart = (course) => {
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: course })
  }

  const removeFromCart = (courseId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: courseId })
  }

  const updateQuantity = (courseId, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: courseId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART })
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const isInCart = (courseId) => {
    return cart.some(item => item.id === courseId)
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isInCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext)
  
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  
  return context
}