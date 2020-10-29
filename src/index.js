import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);


//Componente funcional
//Componente de clases = se usa menos
//Si o si tiene que haber un padre para poner hijos, sino rompe porque no se pueden tener dos padres en un solo componente
//props: Pasan de componentes padres a componentes hijos -- es para pasar

