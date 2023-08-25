import React from 'react'
import { useGlobalContext } from '../../Context'

export const CartItem = ({ title, image, price }) => {
    const { remove } = useGlobalContext()

  return (
    <div className='cart-item'>
        <img src={image} alt={title}/>
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className='remove-btn'
              onClick={remove}
            >
                remove
            </button>
        </div>
    </div>
  )
}
