const { response } = require('express');
const { validationResult} = require('express-validator');

const validateFields = (req, resp = response, next) =>{
     //handle errrors
    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    // deja pasar la peticion
    next();
}

module.exports = {
    validateFields
}