import { buscarHeroe } from './callbacks.js';


const heroeID = 'capi2';
buscarHeroe( heroeID, (err, heroe) =>{

    if (err) {
        console.error(err)
    }else{
        console.log(heroe);
    }
});
