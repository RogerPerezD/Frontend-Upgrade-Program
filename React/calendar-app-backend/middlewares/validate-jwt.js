const {response} = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, resp = response, next) =>{

    //x-token headers
    const token = req.header('x-token');

    // console.log(token)
    if (!token) {
        return resp.status(401).json({
            ok: false,
            msg: 'There is no token for the request'
        });
    }

    try {
        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );
        // console.log(payload);
        req.id = payload.uid;
        req.name = payload.name;

    } catch (error) {
        return resp.status(401).json({
            ok: false,
            msg: 'Token invalid'
        });
    }

    next();
}

module.exports = {
    validateJWT
}