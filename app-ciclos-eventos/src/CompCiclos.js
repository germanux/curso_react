import React from 'react';
import CompNaceMuere from './CompNaceMuere';

export default class CompCiclos extends React.Component {
    constructor() {
        super();
        this.state = {
            texto: "Contructor llamado",
            debeNacerHijo: true
        }
        this.contador = 0;
        setTimeout(() => {
            alert("¿Qué es this? " + this);
            this.setState({
                texto: this.state.texto + "<br>Han pasado 8 segundos"
            });
        }, 8000);
        setTimeout(() => {
            delete this.state; 
            //this.setState(null);
            alert("¿forceUpdate?");
            this.forceUpdate();
        }, 10000);
    }
    render() {
        alert("Empieza Render!!" + this.contador);
        this.contador++;
        let objEtiqueta;
        if (this.state.debeNacerHijo) {
            objEtiqueta = <CompNaceMuere></CompNaceMuere>;
            this.state.debeNacerHijo = false;
        } else {
            objEtiqueta = <p>El componente hijo se desmonto</p>
        }
                return (
            <div>
                <p>{this.state.texto}</p> 
                { objEtiqueta } 
            </div>
        );
    }
    componentDidUpdate() {
        alert("Algo ha cambiado!! componentDidUpdate");
    }
    componentDidMount() {
        this.setState( {
            texto: "He nacido :) componentDidMount. Tengo 0.0001 años"
        })
    }
    componentDidCatch() {
        alert("Ha ocurrido un error :( " );
    }
    componentWillUnmount() {
        alert("Voy a morir :(  componentWillUnmount ");
    }
};