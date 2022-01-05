( () =>{

    // Para ponerle un valor por defecto a un parametro
    // se hace de la siguiente manaera
    // age: number = 12, name: string = 'Roger'
    const fullName = ( firstName: string, lastName?: string, age :number = 12): string =>{
        return `${ firstName } ${lastName || ''} ${age}`;
    }

    const name = fullName( 'Rogelio' );
    console.log(name);
})();