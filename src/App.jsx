//import { useState } from 'react'
import '@fontsource/gantari';
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Yummy Sensei!"}/>
    </>
  )
}

export default App
