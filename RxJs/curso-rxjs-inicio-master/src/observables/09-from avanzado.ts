import { from, Observer } from 'rxjs';

// const observer: Observer<Response> = {
//     next: async ( resp ) =>{ 
//         const data = await resp.json();
//         console.log(data);
//     },
//     error: ( error )=>{
//         console.error('Observer got a error: ', error);
//     },
//     complete: ()=>{
//         console.log('Observer got a complete notification');
//     }
// }

// const obs1$ = from(fetch('https://api.github.com/users/klerith'));

// obs1$.subscribe( observer );

const observer: Observer<number> = {
    next: ( value ) =>{ 
        console.log(value)
    },
    error: ( error )=>{
        console.error('Observer got a error: ', error);
    },
    complete: ()=>{
        console.log('Observer got a complete notification');
    }
}


const myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterator = myGenerator();

const obs1$ = from( iterator );

obs1$.subscribe( observer );



