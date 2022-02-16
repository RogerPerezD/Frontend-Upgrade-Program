const { response } = require('express');
const { validationResult} = require('express-validator');

const createUser = (req , resp = response)=>{
    const  {name, email, password}= req.body;

    //handle errrors
    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    resp.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    });
}

const loginUser = (req, resp = response)=>{
    const  { email, password }= req.body;
    //handle errrors
    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    resp.json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const revalidateToken = (req, resp = response)=>{
    resp.json({
        ok: true,
        msg: 'renewToken'
    });
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken
}