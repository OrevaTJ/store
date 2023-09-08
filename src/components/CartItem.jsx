import React from 'react'
import { useGlobalContext } from '../../Context'

export const CartItem = ({ title, image, price, id, amount }) => {
    const { remove, increase, decrease } = useGlobalContext()

  return (
    <div className='cart-item'>
      <div>
        <img src={image} alt={title}/>
      </div>
      <div>
        <div>
          <h4>{title}</h4>
          <p className='item-price'>${price}</p>
          {amount}
        </div>
        <div>
          <button onClick={() => decrease(id)}>-</button>
          <input type='number' value={amount} />
          <button onClick={() => increase(id)}>+</button>
        </div>
      </div>
      <div>
        <button className='remove-btn'
          onClick={() => remove(id)}
        >
            remove
        </button>
      </div>
    </div>
  )
}
