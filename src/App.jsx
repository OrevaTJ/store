import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Components
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
 
// Import Pages
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { SingleItem } from './pages/SingleItem'
import { Error } from './pages/Error'
import { Cart } from './pages/Cart'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleItem/:id' element={<SingleItem />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
