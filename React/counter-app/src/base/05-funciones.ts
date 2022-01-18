


// const saludar3 = ( nombre:string ) => `Hola, ${ nombre }`;
// const saludar4 = () => `Hola Mundo`;

// console.log( saludar3('Goku') );
// console.log( saludar4() );


const getUser = () => ({
        uid: '123',
        username: 'El_Papi1502'
});


const user = getUser();

// Tarea
const getUsuarioActivo = ( nombre:string ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');

export{
    getUser,
    getUsuarioActivo
}

