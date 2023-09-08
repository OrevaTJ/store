import React from 'react'
import { ProductList } from '../components/ProductList'
import { Sidebar } from '../components/Sidebar'

export const Home = () => {
  return (
    <main>
      <ProductList />
      <Sidebar/>
    </main>
  )
}
