
// Lo suyo es un componente por fichero, y que se llamen igual
let CompRepeat = (paramProps) =>
{
    let items = new Array();
    for (let indexArg = 0; indexArg < paramProps.numVeces; indexArg++) {
        items.push(paramProps.children(indexArg));
    }
    return <div>{items}</div>;
}
let CompListaDiez = () => {
    
    return (
        <div>
            <CompRepeat numVeces={10}>
                {(index) => { return <div>Elemento nº {index}.</div>; }}
            </CompRepeat>
        </div>
    );
}
export default CompListaDiez;