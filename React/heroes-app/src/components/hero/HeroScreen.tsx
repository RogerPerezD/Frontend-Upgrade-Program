import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { heroes } from "../../data/heroes";
import { getHeroByID } from '../../selectors/getHeroByID';

export const HeroScreen = () => {

    const { heroeID } = useParams();
    const heroe = useMemo(() => getHeroByID((heroeID as string)),[ heroeID ]);;
    const navigate = useNavigate();

    if( !heroe ){
        return <Navigate to="/"/>
    }

    const {
        alter_ego,
        characters,
        first_appearance,
        id,
        publisher,
        superhero
    } = heroe;

    const imagePath = `/assets/images/${id}.jpg`;

    const handleReturn = ()=>{
        navigate(-1);
    }
    

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={imagePath} alt={ superhero }  
                className="img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero }</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First Appearence: </b>
                        { first_appearance }
                    </li>
                </ul>
                <h5 className='mt-3'>Characters</h5>
                <p> { characters } </p>

                <button 
                className="btn btn-outline-info"
                onClick={ handleReturn }>
                    Return
                </button>
            </div>
        </div>
    );
};
