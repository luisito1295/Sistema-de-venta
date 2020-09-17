'use stict'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middleware de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cargar rutas
const user_routes = require('./routes/user');

//Cabeceras o cors HTTP
app.use(cors());

//Rutas base
app.use('/api', user_routes);

module.exports = app;
