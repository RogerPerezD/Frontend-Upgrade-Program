import {  asyncScheduler, observeOn, range } from "rxjs";

const observable$ = range(-5, 10).pipe(observeOn(asyncScheduler))

console.log('inicio');
observable$.subscribe((value)=>{ console.log(value)});
console.log('fin');