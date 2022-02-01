import { heroes } from "../data/heroes"

export const getHeroesByName = ( name: string) => {
    return heroes.filter( 
        heroe => 
        (heroe.superhero.toLowerCase().includes( name.toLowerCase() ))
        );
}