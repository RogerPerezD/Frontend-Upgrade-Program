const { response } = require('express');

const index = (req, resp = response) =>{
    return resp.status(200).json({
        ok: true,
        msg: 'getEvents'
    })
}

const store = ( req, resp = response ) =>{
    return resp.status(201).json({
        ok: true,
        msg: 'createEvents'
    })
}

const update = ( req, resp = response ) =>{
    return resp.status(201).json({
        ok: true,
        msg: 'update'
    })
}

const drop = ( req, resp = response ) =>{
    return resp.status(201).json({
        ok: true,
        msg: 'delete'
    })
}


module.exports = {
    index,
    store,
    update,
    drop
}
