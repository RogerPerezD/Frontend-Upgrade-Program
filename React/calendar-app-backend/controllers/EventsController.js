const { response } = require('express');
const Event = require('../models/Event');

const index = async (req, resp = response) =>{
    
    const events = await Event.find().populate('user', 'name');
    return resp.status(200).json({
        ok: true,
        events
    })
}

const store = async ( req, resp = response ) =>{
    // console.log(req.body);

    const event = new Event( req.body );
    try {
        event.user = req.uid;
        const eventSaved = await event.save();
        return resp.status(201).json({
            ok: true,
            event: eventSaved
        })
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg: 'Server side error'
        })
    }
    
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
