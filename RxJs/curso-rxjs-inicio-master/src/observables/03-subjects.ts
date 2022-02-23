import { Observable, Observer, Subject } from 'rxjs';

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
    const intervalID = setInterval(()=>{
        subscriber.next( Math.random())
        console.log('oa')
    }, 1000);
   

    return ()=>{
        clearInterval(intervalID);
    }
});

const subject$ = new Subject<number>();
const subMayor = intervalo$.subscribe( subject$ );

const sub1 = subject$.subscribe( observer );
const sub2 = subject$.subscribe( observer );

setTimeout(()=>{
    subject$.next(0);
    subject$.complete();
    subMayor.unsubscribe();
}, 3000);

