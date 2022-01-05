( () =>{

    // Poniendole un signo de interrogacion ? al parametro
    // Logramos que el parametro sea opcional
    const fullName = ( firstName: string, lastName?: string): string =>{
        return `${ firstName } ${lastName || ''}`;
    }

    const name = fullName( 'Rogelio' );
    console.log(name);
})();