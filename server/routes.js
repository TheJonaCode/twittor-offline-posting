// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [{

        _id: 'XXX',
        user: 'spiderman',
        mensaje: 'Hello World'


    },
    {

        _id: 'XXX',
        user: 'ironman',
        mensaje: 'Hello World'


    },
];




// Get mensajes
router.get('/', function(req, res) {
    // res.json('Obteniendo mensajes');
    res.json(mensajes);
});




module.exports = router;