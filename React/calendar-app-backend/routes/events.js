const { Router } = require('express');
const { index, store, update, drop } = require('../controllers/EventsController');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const router = Router();

// Hacer que todas las rutas usen el middleware para autenticar el jwt
router.use( validateJWT );

router.get('/',index);

router.post('/store',[
    check('title','Title is required').not().isEmpty(),
    check('start','Date start is required').custom( isDate ),
    check('end','Date end is required').custom( isDate ),
    validateFields
],store);

router.put('/:id',update);

router.delete('/:id',drop);


module.exports = router;