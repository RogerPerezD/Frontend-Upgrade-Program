/*
    User's routes / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator')
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');

router.post(
    '/new', 
    [//middlewares
        check('name', 'name is required').not().isEmpty(),
        check('email', 'email is required').isEmail(),
        check('password', 'password must have at least 6 characters').isLength({min: 6})
    ],
    createUser);

router.post(
    '/', 
    [//middlewares
        check('email', 'email is required').isEmail(),
        check('password', 'password must have at least 6 characters').isLength({min: 6})
    ],
    loginUser);

router.get('/renew', revalidateToken);

module.exports = router;