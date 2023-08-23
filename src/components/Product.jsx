import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ id, title, price, image, category }) => {
  return (
    <article className='product'>
        <div className='img-container'>
            <img src={image} alt={title}/>
        </div>
        <div className='product-footer'>
            <h4>{price}</h4>
            <h4>{category}</h4>
            <Link to={`/singleItem/${id}`}
                className='btn btn-primary btn-details'
            >
                details
            </Link>
        </div>
    </article>
  )
}
