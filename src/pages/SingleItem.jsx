import React, { useState, useEffect } from 'react'
import { Loading } from '../components/Loading'
import { useParams } from 'react-router-dom'

const url = 'https://fakestoreapi.com/products/'

export const SingleItem = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null)

  const fetchProduct = async () => {
    setLoading(true)
    try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data)
        if(data) {
            setProduct(data)
        } else {
            setProduct(null)
        }false
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

  useEffect(() => {
    fetchProduct()
  }, [id])

  if(loading) {
    return <Loading />
  }

  if(!product) {
    return <h2 className='section-title'>no product to display</h2>
  }

  const { title, category, description, image, price } = product

  return (
    <section className='section product-section'>
      <h2 className='section-title'>{title}</h2>
      <div className="item">
        <img src={image} alt={title}/>
        <div className="item-info">
          <p>
            <span className='item-data'>title :</span>
            {title}
          </p>
          <p>
            <span className='item-data'>price :</span>
            {price}
          </p>
          <p>
            <span className='item-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='item-data'>description :</span>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
