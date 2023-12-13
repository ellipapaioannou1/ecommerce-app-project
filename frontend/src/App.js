import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

const queryClient = new QueryClient();

const CartProvider = () => {
  //Store cart id
  const [cartId, setCartId] = useState(null);
   //fetch/create cart when component mounts
  useEffect(() => {
    if (!cartId) {    
      //Fetch to create new cart. Set cart id to the state  
      fetch('http://localhost:5000/carts', { method: 'POST'})
        .then(res => res.json())
        .then(res => setCartId(res.id));
    }
  }, [cartId, setCartId]);

  //Router setup for navigation
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/cart' element={<Cart cartId={cartId} />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<ProductDetails cartId={cartId} />} />
    </Routes>
    <Footer />
  </Router>
  );
};


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider />
    </QueryClientProvider>
  );
};


export default App;
