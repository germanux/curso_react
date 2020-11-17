console.log("Servidor Node iniciado...");
// alert("sddsf"); Falla por que no tenemos navegador
// Cargarmos los módulos express/body-parser de node_modules 
const express = require("express");
const bodyParser = require("body-parser");
//y creamos un  objeto que corresponde al servidor http
const app = express(); // En el fondo el módulo es una función que crea un obj de tipo express
const port = process.env.PORT || 5000;
app.use(bodyParser.json()); // Para JSON
// app.use(express.urlencoded()); // Para formularions

// HTTP: Es un conjunto de métodos para conexión cliente-servidor. Los métodos los hace siempre el cliente
// que se llaman peticiones HTTP. Metodos: GET, POST, PUT, DELETE, OPTIONS, HEAD...
// En el que se pueden enviar o recibir datos/documentos/contenidos-ficheros
// En las peticiones van unas cabeceras que son información extra a la petición
// Estas peticiones se realizan sobre una o varias URLs: 
// http://subdom.dominio.com/ruta/dir/recurso

app.get("/texto",
    function(req, res) {
        console.log("Acceso GET a recurso tipo texto");
        // Indicamos que el código de estado HTTP es el 200 (OK)
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        return res.end("Acceso GET a recurso tipo texto");
    });
app.post("/articulos/", function(req, res) {
    console.log(req.body);
	
    res.send("Hecho");
});
app.get("/articulos/", function(req, res) {
    console.log( req.body);
    res.send("Lista articulo");
});

app.use("/", express.static('../front-end'));

app.listen(port, function() {
    console.log("Escuchando en puerto " + port);
});