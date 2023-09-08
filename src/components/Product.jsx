import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context'
import { useUser } from '../hooks/useUser'

export const Product = ({ id, title, price, image, category }) => {
    const {addToCart} = useGlobalContext()
    const { user } = useUser();

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
            <button onClick={user ? () => addToCart(id) : null}>
                add
            </button>
        </div>
    </article>
  )
}
