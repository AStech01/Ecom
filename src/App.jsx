// import React from 'react'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './pages/Home'
// import CardDetail from './pages/CardDetail'
// import CardProduct from './pages/CardProduct'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import sampleProduct from './data/sampleProduct'

// import samp from './data/samp'
// import ProductDetail from './pages/ProductDetail'

// function App() {
//   const [count, setCount] = useState(0)

  
//   return (
   
//     <Router>
//     <Routes>
//         <Route path="/" element={<CardProduct product={sampleProduct} />} />
//         <Route path="/" element={
//   <CardProduct 
//     product={samp.product} 
//     recommendations={samp.recommendations} 
//   />
// } />
//         <Route path="/product/:id" element={<ProductDetail />} />
      
//     </Routes>
//   </Router>
//   )
// }

// export default App


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail" element={<ProductDetail/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
       

      </Routes>
    </Router>
  );
}

export default App;
