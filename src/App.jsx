import '@fontsource/gantari';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from "./context/CartContext";
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar onCategorySelect={handleCategorySelect} />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path="/productos" element={<ItemListContainer selectedCategory={selectedCategory} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer selectedCategory={selectedCategory} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
