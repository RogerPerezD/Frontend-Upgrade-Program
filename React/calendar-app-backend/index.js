const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// Create server
const app = express();

// DB connection
dbConnection();

// Directory public
app.use( express.static('public') );

// Lectura y parseo del body de la peticion
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'))

// Listen request
app.listen( process.env.PORT, ()=>{
    console.log(`Sevidor corriendo en puerto ${process.env.PORT}`)
});