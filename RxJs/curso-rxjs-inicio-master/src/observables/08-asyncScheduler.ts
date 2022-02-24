import { asyncScheduler } from 'rxjs';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';

// const saludar = ()=>{ console.log('Hola mundo')}
const saludar = (state)=>{
    console.log(`Hola ${state.name} ${state.lastName}`);
}

// asyncScheduler.schedule( saludar, 2000, {name: 'Roger', lastName: 'Perez'} );


const subscription = asyncScheduler.schedule( function(state: number) {
    console.log('state', state);
    this.schedule( state + 1, 1000);
}, 3000, 0);

// setTimeout(()=>{
//     subscription.unsubscribe();
// },5000)
asyncScheduler.schedule( () => {subscription.unsubscribe()}, 5000);