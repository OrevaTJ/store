
const reducer = (state, action) => {
    if (action.type === 'PRODUCT_DATA') {
        return {...state, products: action.payload}
    }

    if (action.type === 'ADD_CART') {
        let [newItem] = state.products.filter(item =>
            item.id === action.payload)
        newItem.amount = 1
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

    if (action.type === 'CLEAR_CART') {
        return {...state, cartItems: []};
    }

    if (action.type === 'REMOVE') {
        return {...state, cartItems: state.cartItems.filter(
            items => items.id !== action.payload
            )};
    }

    if (action.type === 'INCREASE') {
        let tempCart = state.cartItems.map((items) => {
            if(items.id === action.payload) {
                return {...items, amount: items.amount + 1}
            }
            return items
        })
        return {...state,  cartItems: tempCart}
    }

    if (action.type === 'DECREASE') {
        let tempCart = state.cartItems.map((items) => {
            if(items.id === action.payload) {
                return {...items, amount: items.amount - 1}
            }
            return items
        }).filter(items => items.amount !== 0)
        return {...state,  cartItems: tempCart}
    }

    if (action.type === 'GET_TOTALS') {
        let { totalPrice, cartAmount } = state.cartItems.reduce(
            (accum, current) => {
                const { price, amount } = current
                const itemTotalPrice = price * amount

                accum.cartAmount += amount
                accum.totalPrice += itemTotalPrice
                return accum
            },
            {
                totalPrice: 0,
                cartAmount: 0
            }
        )

        totalPrice = parseFloat(totalPrice.toFixed(2))
        return { ...state, totalPrice, cartAmount }
    }

}

export default reducer