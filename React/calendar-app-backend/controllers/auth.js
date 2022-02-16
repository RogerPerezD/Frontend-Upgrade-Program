const { response } = require('express');

const createUser = (req, resp = response)=>{
    resp.json({
        ok: true,
        msg: 'register'
    });
}

const loginUser = (req, resp = response)=>{
    resp.json({
        ok: true,
        msg: 'login'
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