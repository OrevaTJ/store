import React from 'react'
import { Product } from './Product'
import { Loading } from './Loading'
import { useGlobalContext } from '../../Context'

export const ProductList = () => {
    const { products, loading } = useGlobalContext()

    if(loading) {
        return <Loading />
    }

    if(products.length < 1) {
        return (
            <h2 className='section-title'>
                no products to display
            </h2>
        )
    }

  return (
    <section className='section'>
        <h2 className='section-title'>products</h2>
        <div className='products-center'>
            {
                products.map(item => {
                    return <Product key={item.id} {...item} />
                })
            }
        </div>
    </section>
  )
}
