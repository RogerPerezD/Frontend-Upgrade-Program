const { Router } = require('express');
const { index, store, update, drop } = require('../controllers/EventsController');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

// Hacer que todas las rutas usen el middleware para autenticar el jwt
router.use( validateJWT );

router.get('/',index);

router.post('/store',store);

router.put('/:id',update);

router.delete('/:id',drop);


module.exports = router;