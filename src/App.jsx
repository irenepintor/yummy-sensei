import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import SignUp from './components/LogIn/SignUp';
import Login from './components/LogIn/LogIn';
import Logout from './components/LogIn/LogOut';
import NavBar from './components/NavBar';
import Home from './components/pages/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConatiner/ItemDetailContainer';
import Cart from './components/CartContainer/Cart';
import Checkout from './components/Checkout/Checkout';
import Menu from './components/pages/Menu'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import ProtectedRoute from './components/LogIn/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <ToastContainer theme='dark' />
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
            <Footer />
          </CartProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App