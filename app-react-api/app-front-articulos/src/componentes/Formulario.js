import LibreriaReact from 'react';

export default class Formulario extends LibreriaReact.Component {
    constructor() {
        super();
        this.state = {
            otrasEstados: "",
            objArticulo: {
                titulo: '',
                descripcion: ''
            }
        };
    }
    gestionarInput = (objEvento) => {
        let inputEvento = objEvento.target;
        let valorInput = inputEvento.value;
        let objArt = this.state.objArticulo;
        objArt[inputEvento.name] = valorInput;
        this.setState({
            objArticulo: objArt
        });
        console.log(valorInput);
    }
    gestionarAntesDeEnviarForm = (objEvento) => {
        objEvento.preventDefault();
        //alert('A name was submitted: ' + this.state.titulo);
        /*let objArticulo = new Object();
        objArticulo.titulo = this.state.titulo;
        objArticulo.descripcion = this.state.descripcion;*/
        this.enviarArticulo(this.state.objArticulo);
    }
    // Debéis usar state, pero objArticulo no puede ser state, tiene que ser un obj nuevo, diferente a state. 
    enviarArticulo(objArticulo) {
        console.log(JSON.stringify(objArticulo));
        let promesaEnvio = fetch("http://localhost:4000/api/articulos", {
            method: "POST",
            body: JSON.stringify(objArticulo),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        promesaEnvio
        .then(res => res.json())
        .then(data => alert("Se envio " + data.json));;
        /* {
            "titulo": "Se ha perdido un perro",
            "descripcion": "Se perdió en el Retiro y nunca apareción" 
        } */
        // Que objArticulo es lo que se envía con fetch();
    }
    render() {
        let labelTitulo = <label>Titulo:</label>;
        return (
            <div>
                <form action="#" onSubmit={this.gestionarAntesDeEnviarForm}>
                    <div>
                        {labelTitulo}
                        <input name="titulo" type="text" onChange={this.gestionarInput} />
                    </div>
                    <div>
                        <label>Descripcion:</label>
                        <textarea name="descripcion" onChange={this.gestionarInput}></textarea>
                    </div>
                    <div><input type="submit" value="Enviar!" /></div>
                </form>
            </div>
        );
    }
}