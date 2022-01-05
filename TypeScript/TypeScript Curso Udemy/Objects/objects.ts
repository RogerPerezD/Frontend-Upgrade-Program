(()=>{

    // Hacer que una propiedad sea opcional
    // En este caso es una funcion
    let flash: { name: string, age: number, powers: string[], getNombre?: () => void} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        age: 12,
        powers: ['Corre rapido'],
        getNombre(){
            return this.name;
        }
    };

    console.log(flash);

})();