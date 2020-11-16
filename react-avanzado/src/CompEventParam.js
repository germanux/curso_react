import React from 'react';

export default class CompEventParam extends React.Component {
    constructor() {
        super();
    }
    mensaje(id, e) {
        alert("Se ha pulsado " + id);
    }
    render () {
        let variosBotones = [];
        for (let id = 0; id < 10; id++) {
            variosBotones.push(<button onClick={(e) => this.mensaje(id, e)}>Mensaje</button>);
        }
        return (
            <div>
                {variosBotones}
            </div>
        );
    }
}
