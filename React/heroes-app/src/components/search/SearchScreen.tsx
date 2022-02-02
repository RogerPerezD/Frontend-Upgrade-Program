
import { useForm } from '../../hooks/useForm';
import { FormEvent, useMemo } from 'react';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString  from 'query-string';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    
    const [ {searchText}, handleInput] = useForm({
        searchText: (q as string)
    });

    const heroesFiltered = useMemo(() => getHeroesByName((q as string)), [q]);

    const handleSearch = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        navigate(`?q=${ searchText }`);
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
                        (q === '') ? 
                        <div className="alert alert-info">Search a hero</div>
                        : ( heroesFiltered.length === 0) && <div className="alert alert-danger">There aren't results for: { q }</div>
                    }

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
