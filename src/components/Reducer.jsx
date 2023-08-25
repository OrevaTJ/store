
const reducer = (state, action) => {
    if (action.type === 'PRODUCT_DATA') {
        return {...state, products: action.payload}
    }

    if (action.type === 'CLEAR_CART') {
        return {...state, cartItems: []};
    }

    if (action.type === 'REMOVE') {
        return {...state, cartItems: state.cartItems.filter(
            items => items[0].id !== action.itemId
            )};
    }

    if (action.type === 'ADD_CART') {
        let [newItem] = state.products.filter(item =>
            item.id === action.payload)
        console.log(newItem)
        return {...state, cartItems: [...state.cartItems, newItem]}

        // if (state.cartItems.includes(newItem)) {
        //     // console.log(true)
        //     return
        // } else {
        //     // console.log(false)
        //     // console.log(newItem)
        //     return {...state, cartItems: [...state.cartItems, newItem]}
        // }
    }
}

export default reducer