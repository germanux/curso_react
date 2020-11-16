
// Lo suyo es un componente por fichero, y que se llamen igual
function CompRepeat(paramProps)
{
    let items = new Array();
    for (let indexArg = 0; indexArg < paramProps.numVeces; indexArg++) {
        items.push(paramProps.children(indexArg));
    }
    return <div>{items}</div>;
}
function CompListaDiez() {
    
    function ElemDiv(index) {
        return <div>Elemento nº {index}.</div>;
    }
    return (
        <div>
            <CompRepeat numVeces={10}>
                {ElemDiv}
            </CompRepeat>
        </div>
    );
}
export default CompListaDiez;