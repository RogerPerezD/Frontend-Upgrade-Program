import { Link } from "react-router-dom";
const heroImages = require.context('../../assets/images', true);
type HeroCardProps = {
  id: string,
  superhero: string,
  publisher: string,
  alter_ego: string,
  first_appearance: string,
  characters: string,
}
 
export const HeroCard = ({  
      id,
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters
  }:HeroCardProps) => {

    // const imagePath = `/assets/images/${id}.jpg`;

    return (
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImages(`./${id}.jpg`)} alt={ superhero } className="card-img"/>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>
                {
                  (alter_ego !== characters) &&
                  <p className="text-muted">{ characters}</p>
                }

                <p className="card-text">
                  <small className="text-muted">{ first_appearance }</small>
                </p>

                <Link to={ `/hero/${ id }`}>
                  Mas.....
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
