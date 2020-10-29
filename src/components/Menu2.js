import React, {Component} from 'react';

class Menu2 extends Component{
    render(){
      return(
        <ul>
          <li>{this.props.vestimenta} : {this.props.talle}</li>
          <li>Campera gruesa</li>
          <li>Buzo</li>
          <li>Pantalon</li>
        </ul>
      )
    }
  }

export default Menu2;