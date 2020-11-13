import React from 'react';

export default class CompEventos extends React.Component {
    constructor() {
        super();
        this.state = {
            datos: "Hay datos"
        }  
    }    
    componentDidMount() {
        this.alHacerClickBind.bind(this);  
    }    
    alHacerClickLambda = () => {
        alert("onClick(), como Lambda: " + this.state.datos);
    }
    alHacerClick() {
        alert("onClick(), como atributo: " + this.state.datos);
    }
    alHacerClickBind() {
        alert("onClick(), como Bind: " + this.state.datos);
    }
    render() {
        return (
            <div>
                <p><input type="button" value="Pulsame!" 
                onClick={() => this.alHacerClick() }/> </p> 
                <p><input type="button" value="Pulsame!" 
                onClick={this.alHacerClickBind }/> </p> 
                <p><input type="button" value="Pulsame!" 
                onClick={this.alHacerClickLambda }/> </p> 
            </div>
        );
    }
    componentDidCatch() {
        alert("Ha ocurrido un error :( " );
    }
}