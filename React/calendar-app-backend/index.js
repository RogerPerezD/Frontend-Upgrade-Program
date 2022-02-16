const express = require('express');
require('dotenv').config();
// Create server
const app = express();

// Directory public
app.use( express.static('public') );

// Routes
app.use('/api/auth', require('./routes/auth'))

// Listen request
app.listen( process.env.PORT, ()=>{
    console.log(`Sevidor corriendo en puerto ${process.env.PORT}`)
});