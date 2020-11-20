import React, { useState, useEffect } from 'react';

export default class ListaArticulos extends React.Component {
    constructor(props) {
        super(props);
        
        this.state =  {
            arrayArticulos: []
        };
    }
    componentDidMount() {

        fetch('http://localhost:4000/api/articulos')
            .then(res => res.json())
            .then(arrayData => {
                // Cuando cambiamos el state, 
                // React renderiza otra vez precisamente para visualizar ese cambio
                this.setState( {
                    arrayArticulos: arrayData
                } );
            });
    }
    render() {
        // No existe this no es una clase
        // [nombre-variable, setter-variable];
        // let [arrayArticulos, setArrayArticulos] = useState(new Array());
        //  En vez del component Did mount, usamos useEffect para componentes funcionales
        
        return (
            <section>
                <h1>Articulos</h1>
                { this.state.arrayArticulos.map((art, index) => {
                    if (art.publico) {

                        return (
                            <article key={index}>
                                <h1>{art.titulo} </h1>
                                <p>{art.descripcion}</p>
                            </article>
                        );
                    }
                })
                }
            </section>);
    }
}