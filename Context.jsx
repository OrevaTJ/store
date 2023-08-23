import React, { useContext, useState, useEffect, useCallback } from 'react'

const url = 'https://fakestoreapi.com/products'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [searchItem, setSearchItem] = useState('') 
    const [products, setProducts] = useState([])

    const fetchItems = useCallback(async () =>{
        setLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            console.log(data[0])
            if(data) {
                setProducts(data)
            } else {
                setProducts([])
            }false
            setLoading()
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    })

    useEffect(() => {
        fetchItems()
    }, [searchItem])

  return (
    <AppContext.Provider
        value={{products, loading}}
    >
        { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 

export { AppContext, AppProvider }
