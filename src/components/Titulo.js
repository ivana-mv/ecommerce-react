import React from 'react';
const Titulo = ({children}) => {
    return(
        <>
            <h1>Tienda</h1>
            <ul>
                {children}
            </ul>
        </>
    )
}
export default Titulo;

//Children
//Componentes hijos de componentes