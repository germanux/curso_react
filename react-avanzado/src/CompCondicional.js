export default function(props) {
    
    let elem;
    if (props.mostrar) {
        elem = <p>Pues ale, otra vez</p>
    } else {
        elem = null;
    }
    return (
        <div>
            {props.mostrar && <p>Pues sí se muestra</p>}
            {elem}
        </div>
    );
}