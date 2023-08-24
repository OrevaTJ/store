
const reducer = (state, action) => {
    if (action.type === 'PRODUCT_DATA') {
        return {...state, products: action.payload}
    }

    if (action.type === 'ADD_CART') {
        let newItem = state.products.filter(item =>
            item.id === action.payload)

        if (state.cartItems.includes(newItem)) {
            console.log(true)
            return
        } else {
            console.log(false)
            return {...state, cartItems: [...state.cartItems, newItem]}
        }
    }
}

export default reducer