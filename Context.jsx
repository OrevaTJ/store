import React, { useContext, useState, useEffect, useCallback, useReducer } from 'react'
import reducer from './src/components/Reducer'

const url = 'https://fakestoreapi.com/products'
const AppContext = React.createContext()

const initialState = {
    cartItems: [],
    products: []
}

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    // const [products, setProducts] = useState([])
    const [isSidebar, setIsSidebar] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState)

    const toggleSidebar = () => {
        setIsSidebar(!isSidebar);
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
      }

    const remove = (id) => {
      dispatch({type: 'REMOVE', itemId: id})
    }
    
    const addToCart = (id) => {
        // setCartItems([...cartItems, products.filter(item =>
        //     item.id === id
        //     )])
        let check = state.cartItems.find((item) => {
            return item.id === id
        })
        if(check) {
            console.log(true)
            return
        } else {
            dispatch({type: 'ADD_CART', payload: id})
        }
        console.log(state.cartItems)
    }

    const fetchItems = useCallback(async () =>{
        setLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            if(data) {
                dispatch({type: 'PRODUCT_DATA', payload: data})
            } else {
                dispatch({type: 'NO_DATA', payload: []})
            }false
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchItems()
    }, [])

  return (
    <AppContext.Provider
        value={{
            ...state, loading, clearCart, remove,
            isSidebar, toggleSidebar, addToCart
        }}
    >
        { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 

export { AppContext, AppProvider }
