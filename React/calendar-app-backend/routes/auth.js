/*
    User's routes / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { createUser, loginUser, revalidateToken } = require('../controllers/AuthController');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post(
    '/new', 
    [//middlewares
        check('name', 'name is required').not().isEmpty(),
        check('email', 'email is required').isEmail(),
        check('password', 'password must have at least 6 characters').isLength({min: 6}),
        validateFields
    ],
    createUser);

router.post(
    '/', 
    [//middlewares
        check('email', 'email is required').isEmail(),
        check('password', 'password must have at least 6 characters').isLength({min: 6}),
        validateFields
    ],
    loginUser);

router.get(
    '/renew',
    [   //middlewares
        validateJWT
    ], 
    revalidateToken);

module.exports = router;