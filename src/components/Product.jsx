import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context'

export const Product = ({ id, title, price, image, category }) => {
    const {addToCart} = useGlobalContext()

  return (
    <article className='product'>
        <div className='img-container'>
            <img src={image} alt={title}/>
        </div>
        <div className='product-footer'>
            <h4>${price}</h4>
            <h4>{category}</h4>
            <Link to={`/singleItem/${id}`}
                className='btn btn-primary btn-details'
            >
                details
            </Link>
            <button onClick={() => addToCart(id)}>
                add
            </button>
        </div>
    </article>
  )
}
