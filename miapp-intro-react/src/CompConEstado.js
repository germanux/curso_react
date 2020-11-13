import React from 'react';

class CompConEstado extends React.Component {
    constructor() {
        super();
        this.state = {
            nombre: "Soy comp con estado",
            edad: 30
        };
        // this.cumplirAnios.bind(this);
    }
    cumplirAnios () {
        this.setState({
            edad: this.state.edad + 1
        });
    }
    // Método que renderiza el código de la plantilla JSX
    render() {
        return (    // Como padre una única etiqueta
            <div>
                <p>Nombre: {this.state.nombre}</p>
                Edad: <input value={this.state.edad}/>
                <input type="button" 
                onClick={() => this.cumplirAnios() }
                value="Cumpleaños feliz"/>
            </div>
        );
    }
}
export default CompConEstado;