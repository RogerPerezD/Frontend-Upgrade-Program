
import { useForm } from '../../hooks/useForm';
import { FormEvent, useState } from 'react';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { Heroes } from '../../data/heroes';

export const SearchScreen = () => {
    
    const [ {searchText}, handleInput] = useForm({
        searchText: ''
    });

    const [heroesFiltered, setHeroesFiltered] = useState<Heroes[]>( [] as Heroes[]);

    const handleSearch = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setHeroesFiltered(getHeroesByName( searchText ));
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr />
                    <form onSubmit={ handleSearch }> 
                        <input 
                        type="text" 
                        placeholder='Search Hero'
                        className='form-control'
                        name='searchText'
                        autoComplete='off'
                        value={ searchText }
                        onChange={ handleInput }/>

                        <button
                        className='btn btn-outline-primary mt-2'
                        type='submit'>
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        heroesFiltered?.map(
                            (hero: any) => ( 
                                <HeroCard 
                                key={ hero.id }
                                { ...hero }/>
                            )
                        )
                    }
                </div>
            </div>
        </div>
        );
};
