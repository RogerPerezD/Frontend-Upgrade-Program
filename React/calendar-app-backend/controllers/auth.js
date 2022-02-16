const { response } = require('express');

const createUser = (req , resp = response)=>{
    const  {name, email, password}= req.body;

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