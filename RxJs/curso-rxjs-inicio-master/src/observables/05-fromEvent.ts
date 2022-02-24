import { fromEvent, Observer } from 'rxjs';

const observer: Observer<PointerEvent> = {
    next: ( value ) =>{ 
        console.log('Observer got a value: ', value.x);
    },
    error: ( error )=>{
        console.error('Observer got a error: ', error);
    },
    complete: ()=>{
        console.log('Observer got a complete notification');
    }
}

// const btn = document.querySelector('#btn') as HTMLButtonElement;
// const observable$ = fromEvent( btn, 'click' );
// observable$.subscribe( observer );

const src1$ = fromEvent<PointerEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document,  'keyup' );


src1$.subscribe( observer );
src2$.subscribe( (event) => {
    console.log(event.key )
});
