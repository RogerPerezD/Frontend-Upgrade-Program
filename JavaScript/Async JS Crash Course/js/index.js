import { buscarHeroe } from './callbacks.js';


const heroeID = 'capi';
buscarHeroe( heroeID, (err, heroe) =>{

    if (err) {
        console.error(err)
    }else{
        console.log(heroe);
    }
});
