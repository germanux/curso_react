import React from 'react';

export default class CompNaceMuere extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <p>Component que nace y muere</p>
            </div>
        );
    }
    componentWillUnmount() {
        alert("Voy a morir :(  componentWillUnmount ");
    }
};