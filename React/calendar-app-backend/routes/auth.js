/*
    User's routes / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

router.get('/',(req, resp)=>{
    resp.json({
        ok: true
    });
});

module.exports = router;