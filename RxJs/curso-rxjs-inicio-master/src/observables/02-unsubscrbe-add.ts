import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
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

const intervalo$ = new Observable<number>(( subscriber ) =>{
    let contador = 0;
    const interval = setInterval(()=>{
        contador++;
        if (contador <= 6 ) {
            subscriber.next( contador );
        }else{
            subscriber.complete();
        }
        console.log('-----')
    }, 1000)

    return ()=>{
        clearInterval( interval );
        console.log('Se limpo el interval')
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs1.add( subs3 );

setTimeout(()=>{
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Terminaron las subs')
}, 4000);
