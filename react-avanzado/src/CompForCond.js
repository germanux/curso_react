function miMap(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++)
     {
         newArray[i] = callback(array[i]);
     }
     return newArray;
}

export default function(props) {
    /* La idea es recibir un array, y mostrar el cuadrado de los elementos, como DIV en <P> párrafos:
    [4, 2, 8]   
    [<p>4 * 4 = 16</p>, 
     <p>2 * 2 = 4</p>,
     <p>8 * 8 = 64</p>
    ]*/
    function potencia(x) {
        return <p> {x} · {x} = {x ** 2} </p>;
    }
    return (
        <div>
            { props.array.map(potencia)}
        </div>
    );
}