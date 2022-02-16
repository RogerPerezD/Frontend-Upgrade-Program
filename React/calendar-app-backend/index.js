const express = require('express');

// Create server
const app = express();

// Routes
app.get('/',(req, resp)=>{
    
    resp.json({
        ok: true
    })
});

// Listen request
app.listen( 4000, ()=>{
    console.log('Sevidor corriendo en puerto 4000')
});