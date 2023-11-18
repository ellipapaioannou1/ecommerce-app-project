import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Categories from './pages/Categories';
import  './App.css';
import Homepage from './pages/Homepage';



const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>

      

     
      <Footer />
      </Router>
      
    </div>
  );
};

export default App;
