import '@fontsource/gantari';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
// import { CartProvider } from './context/cartContext';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <CartProvider> */}
          <NavBar/>
          <Routes>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        {/* </CartProvider> */}
      </BrowserRouter>
    </>
  )
}

export default App
