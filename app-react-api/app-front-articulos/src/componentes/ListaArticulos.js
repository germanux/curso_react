import React, { useState, useEffect } from 'react';

export default props => {
    // No existe this no es una clase
    // [nombre-variable, setter-variable];
    let [arrayArticulos, setArrayArticulos] = useState(new Array());
    //  En vez del component Did mount, usamos useEffect para componentes funcionales
    useEffect(() => {
            fetch('http://localhost:4000/api/articulos')    
            .then(res => res.json())
            .then(arrayData => {
                // Cuando cambiamos el state, 
                // React renderiza otra vez precisamente para visualizar ese cambio
                setArrayArticulos (arrayData);  
            } );
    });
    return (
    <section>
        <h1>Articulos</h1>
        { arrayArticulos.map( (art) => { return (
<article > { art.titulo }  </article>
            );
        }) } 
    </section>);
};