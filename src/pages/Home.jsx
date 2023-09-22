import { ProductList } from '../components/ProductList'
import { Sidebar } from '../components/Sidebar'
import { Hero } from '../components/Hero'
// import { NewsLetter } from '../components/NewsLetter'

export const Home = () => {
  return (
    <main style={{margin: '0', padding: '0',
      display: 'flex', flexDirection: 'column',
      backgroundColor: '#ff8f00', height: '100%', width: '100%'}}>
      <Hero />
      <ProductList />
      {/* <NewsLetter /> */}
      <Sidebar/>
    </main>
  )
}
