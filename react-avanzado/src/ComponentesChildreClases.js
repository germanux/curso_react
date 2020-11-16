import React from 'react';

// Lo suyo es un componente por fichero, y que se llamen igual
class CompRepeat extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        this.items = new Array();
        for (let indexArg = 0; indexArg < this.props.numVeces; indexArg++) {
            this.items.push(this.props.children(indexArg));
        }
        return <div>{this.items}</div>;
    }
}

class CompListaDiez extends React.Component {
    constructor() {
        super();
        this.vecesRepeat = 5;
        this.valorArepetir = "Repiteme";
    }
    render() {
        function ElemDiv(index) {
           // alert(this);
            return <div>Elemento nº {index}. {this.valorArepetir}.</div>;
        }
        return (
            <div>
                <CompRepeat numVeces={this.vecesRepeat}>
                    {ElemDiv.bind(this)}
                </CompRepeat>
            </div>
        );
    }
}
export default CompListaDiez;