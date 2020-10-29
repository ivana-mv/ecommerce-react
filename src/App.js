import React from 'react';
import Titulo from './components/Titulo';
import Menu from './components/Menu';
import Menu2 from './components/Menu2';
import './App.css';
function App() {
  return (
    <>
      <Titulo >
        <Menu vestimenta="Pantalon" talle={37}/>
        <Menu vestimenta="Remera" talle={8}/>
        <Menu vestimenta="Buso" talle={10}/>
      </Titulo>
    </>
  );
}
export default App;