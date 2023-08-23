import React from 'react'
import { ProductList } from '../components/ProductList'
import { Searchbar } from '../components/Searchbar';

export const Home = () => {
  return (
    <main>
      <Searchbar />
      <ProductList />
    </main>
  )
}
