//import { useState } from 'react'
import '@fontsource/gantari';
import './App.css'
import NavBarContainer from './components/NavBarContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBarContainer/>
      <ItemListContainer greeting={"Bienvenidos a Yummy Sensei!"}/>
    </>
  )
}

export default App
