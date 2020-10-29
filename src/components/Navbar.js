import React from 'react';

const Menu = ({vestimenta, talle}) => {  
    return (
    <ul>
    <li>{vestimenta}- {talle}</li> 
      <li>Campera</li>
      <li>Buzo</li>
      <li>Pantalon</li>
    </ul>
      )
    }

export default Menu;