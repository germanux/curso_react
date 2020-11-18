let  express = require('express'),
  router = express.Router();

// Student Model
let Articulo = require('../modelos/Articulo');
let articulos = [
  new Articulo("Ingenio caido", "Un cohete lo tumbó"),
  new Articulo("Suceso extraño", "La aplicación compiló a la primera")
];

// CREATE articulo
router.route('/').post((req, res, next) => {
  articulos.push(req.body);
  res.json(req.body);
});

// READ articulos
router.route('/').get((req, res) => {
  console.log("Pidiendo lista articulos...");
    res.json(articulos);
})

// Get Single articulo
router.route('/:id').get((req, res) => {
  res.json(articulos[req.params.id]);
})

module.exports = router;
console.log("Articulos route OK");