import { interval, Observer, timer } from 'rxjs';


const observer: Observer<number> = {
    next: ( value ) =>{ 
        console.log('Observer got a value: ', value);
    },
    error: ( error )=>{
        console.error('Observer got a error: ', error);
    },
    complete: ()=>{
        console.log('Observer got a complete notification');
    }
}

const todayIn5Seconds = new Date();
todayIn5Seconds.setSeconds( todayIn5Seconds.getSeconds() + 5);
// const observable$ = interval(1000);
const timer$ = timer(todayIn5Seconds);

timer$.subscribe( observer );
