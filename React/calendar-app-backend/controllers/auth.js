const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../helpers/jwt');

const createUser = async (req , resp = response)=>{
    const  { email, password}= req.body;

    try {
        let user = await User.findOne({email});
        if (user) {
            return resp.status(400).json({
                ok: false,
                msg: 'The email is already taken'
            });
        }
        user = new User( req.body );
        //Encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );

        await user.save();

        // Generate JWT
        const token = await generateJWT( user.id, user.name);
    
        resp.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Please contact the admin'
        });
    }

}

const loginUser = async(req, resp = response)=>{
    const  { email, password }= req.body;

    try {
        
        // Validate email
        let user = await User.findOne({email});
        if (!user) {
            return resp.status(400).json({
                ok: false,
                msg: 'The email doesnt exist'
            });
        }

        // Validate password
        const validPassword = bcrypt.compareSync( password, user.password );
        if (!validPassword) {
            return resp.status(400).json({
                ok: false,
                msg: 'The password is incorrect'
            });
        }

        // Generate JWT
        const token = await generateJWT( user.id, user.name);

        
        resp.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Please contact the admin'
        });
    }
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