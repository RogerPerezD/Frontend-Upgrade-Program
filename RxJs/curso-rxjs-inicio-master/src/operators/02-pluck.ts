import { map, range, Observer, fromEvent, pluck } from 'rxjs';

const observer: Observer<any> = {
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

const keyCodeWithPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

keyCodeWithPluck$.subscribe( observer );

const keyCodeWithMap$ = keyup$.pipe(
    map<KeyboardEvent, string>(( event )=> event.code)
);