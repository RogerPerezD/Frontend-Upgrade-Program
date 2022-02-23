const { Observable} =  require('rxjs');
const { map } =  require('rxjs/operators');


const users = {
    data: [
        {
            status: 'active',
            age: 14
        },
        {
            status: 'active',
            age: 11
        },
        {
            status: 'inactive',
            age: 11
        },
        {
            status: 'inactive',
            age: 22
        },
        {
            status: 'active',
            age: 18
        },
        {
            status: 'active',
            age: 17
        },
        {
            status: 'inactive',
            age: 19
        },
    ]
}

const observable = new Observable(( subscriber )=>{
    subscriber.next(users);
}).pipe( 
    map(( value )=>{ 
        console.log('first operator', value);
        return value.data;
    }),
    map(( value )=>{
        console.log('second operator', value);
        return value.filter((value) =>( value.status === 'active'));
    }),
    map(( value )=>{
        console.log('third operator', value);
        return value.reduce((sum, user) => sum + user.age, 0)/value.length;
    }),
    map(( value )=>{
        console.log('fourth operator', value);
        if (value < 18) {
            throw new Error('Avagare age is too young')
        }
        return value; 
    }),
);

const observer = {
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

observable.subscribe( observer );