export default function(props) {
    
    let elem;
    if (props.mostrar) {
        elem = <p>Pues ale, otra vez</p>
    } else {
        elem = <p>No queremos que se muestra</p>;
    }
    return (
        <div>
            {props.mostrar && <p>Pues sí se muestra</p>}
            {elem}
        </div>
    );
}