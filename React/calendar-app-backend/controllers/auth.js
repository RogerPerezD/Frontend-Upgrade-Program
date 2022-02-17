const { response } = require('express');
const User = require('../models/User');

const createUser = async (req , resp = response)=>{
    // const  {name, email, password}= req.body;

    try {
        const user = new User( req.body );

        await user.save();
    
        resp.status(201).json({
            ok: true,
            msg: 'register'
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Please contact the admin'
        });
    }

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