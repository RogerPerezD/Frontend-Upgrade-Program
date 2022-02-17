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
        });
    }
    
}

const update = async ( req, resp = response ) =>{

    const eventId = req.params.id;
    const uid = req.uid;
    try {
        const event = await  Event.findById(eventId);
        // Validate if the event exist
        if (!event) {
            return resp.status(404).json({
                ok: false,
                msg: 'Event doesnt exists'
            });
        }

        // Validte if the user is enable, to modified the event
        if (event.user.toString() !== uid) {
            return resp.status(401).json({
                ok: false,
                msg: 'Privileges insufficient'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent,{ new: true});

        return resp.status(201).json({
            ok: true,
            event: eventUpdated
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg: 'Server side error'
        });
    }
    
}

const drop = async ( req, resp = response ) =>{
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await  Event.findById(eventId);
        // Validate if the event exist
        if (!event) {
            return resp.status(404).json({
                ok: false,
                msg: 'Event doesnt exists'
            });
        }

        // Validte if the user is enable, to modified the event
        if (event.user.toString() !== uid) {
            return resp.status(401).json({
                ok: false,
                msg: 'Privileges insufficient'
            });
        }

        await Event.findByIdAndDelete(eventId);

        return resp.status(203).json({
            ok: true,
            status: 'Deleted successfully'
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg: 'Server side error'
        });
    }
}


module.exports = {
    index,
    store,
    update,
    drop
}
