import { of, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: ( value ) =>{ 
        console.log('Observer got a value: ' + value);
    },
    error: ( error )=>{
        console.error('Observer got a error: ' + error);
    },
    complete: ()=>{
        console.log('Observer got a complete notification');
    }
}

const observable$ = of(1,2,3,4,5,6);
// const observable$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

observable$.subscribe( observer );



