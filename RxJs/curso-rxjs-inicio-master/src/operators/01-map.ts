import { map, range, Observer, fromEvent, pluck } from 'rxjs';

// const observer: Observer<number> = {
//     next: ( value ) =>{ 
//         console.log('Observer got a value: ', value);
//     },
//     error: ( error )=>{
//         console.error('Observer got a error: ', error);
//     },
//     complete: ()=>{
//         console.log('Observer got a complete notification');
//     }
// }

// const observable$ = range(1,5).pipe(
//     map<number, number>( (value) => value * 10)
// );

const observer: Observer<string> = {
    next: ( code ) =>{ 
        console.log('Observer got a value: ', code);
    },
    error: ( error )=>{
        console.error('Observer got a error: ', error);
    },
    complete: ()=>{
        console.log('Observer got a complete notification');
    }
}

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyCodeWithMap$ = keyup$.pipe(
    map<KeyboardEvent, string>(( event )=> event.code)
);

keyCodeWithMap$.subscribe( observer );