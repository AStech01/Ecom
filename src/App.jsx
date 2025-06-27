import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import CardDetail from './pages/CardDetail'
import CardProduct from './pages/CardProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import sampleProduct from './data/sampleProduct'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  
  return (
   
    <Router>
    <Routes>
        <Route path="/" element={<CardProduct product={sampleProduct} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      
    </Routes>
  </Router>
  )
}

export default App
