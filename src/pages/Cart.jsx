import React from 'react'
import { CartItem } from '../components/CartItem'
import { useGlobalContext } from '../../Context'

export const Cart = () => {
    const { cartItems } = useGlobalContext()
    console.log(cartItems)

    if(cartItems.length === 0) {
        return (
            <section>
                <header>
                    <h2>Cart items</h2>
                    <h4>your cart is empty</h4>
                </header>
            </section>
        )
    }

    if(!cartItems) {
        return <h2 className='section-title'>no product to display</h2>
      }

    return (
      <section className='cart'>
          <header>
              <h2>cart items</h2>
          </header>
          <div>
            {
                cartItems.map((item) => {
                    const {id} = item[0]
                    return <CartItem key={id} {...item[0]}/>
                })
            }
          </div>
          <footer>
            <hr />
            <div>
                <h4>
                    total <span>$</span>
                </h4>
            </div>
            <button className='btn clear-btn'

            >
                clear cart
            </button>
          </footer>
      </section>
    )
}
