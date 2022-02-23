import { Observable, Observer } from 'rxjs';


const observable$ = new Observable<string>(( subscriber ) =>{
    subscriber.next('Hola');
    subscriber.complete();
    subscriber.next('Mundo');
});

const observer: Observer<string> = {
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

observable$.subscribe(observer);







