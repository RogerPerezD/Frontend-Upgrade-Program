import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

type HeroListProps = {
    publisher: string
}

export const HeroList = ( { publisher }: HeroListProps) => {
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);;
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map( hero => (
                    <HeroCard 
                    key={ hero.id }
                    {...hero}/>
                ))
            }
        </div>
    );
};
