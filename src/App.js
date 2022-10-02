import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/Cart';
import "./App.css";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
