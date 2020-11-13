import React from 'react';

export default class CompCiclos extends React.Component {
    constructor() {
        this.state = {
            texto: "Contructor llamado"
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.texto}</p>
            </div>
        );
    }
};