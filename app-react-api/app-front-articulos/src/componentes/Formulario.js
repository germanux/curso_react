import LibreriaReact from 'react';

export default class Formulario extends LibreriaReact.Component{
    constructor()
    {
        super();
    }
    // Debéis usar state, pero objArticulo no puede ser state, tiene que ser un obj nuevo. 
    enviarArticulo(objArticulo) {
        console.log(JSON.articulo); 
        /* {
            "titulo": "Se ha perdido un perro",
            "descripcion": "Se perdión en el Retiro y nunca apareción" 
        } */
    }
    render() {
        return (
            <div>
                <form action="#">
                        <div>
                            <label>Titulo:</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Descripcion:</label>
                            <textarea></textarea>   
                        </div>
                        <div><input type="submit" value="Enviar!"/></div>
                    </form>
            </div>
        );
    }
}