import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

// import '../css/CardDetail.css';
function CardDetail({ dataDetails, route, recomendations }) {
  const NUMBER = 13;
  const styleImage = {
    width: '250px',
    height: '250px',
    border: '1px solid black',
  };
  const history = useHistory();
  const { id } = useParams();
  const handleClickMealDrink = () => {
    if (route === 'drink') {
      console.log('drink');
      history.push(`/drinks/${id}/in-progress`);
    }
    if (route === 'meal') {
      history.push(`/meals/${id}/in-progress`);
    }
  };

  return (
    <>
      <section>
        <div>
          { route === 'meal' && (
            <>
              <img
                src={ dataDetails.strMealThumb }
                alt={ dataDetails.strMeal }
                data-testid="recipe-photo"
                style={ styleImage }
              />
              <h1 data-testid="recipe-title">{ dataDetails.strMeal }</h1>
              <h2 data-testid="recipe-category">{ dataDetails.strCategory }</h2>
            </>
          )}
          { route === 'drink' && (
            <>
              <img
                data-testid="recipe-photo"
                src={ dataDetails.strDrinkThumb }
                alt={ dataDetails.strDrink }
                style={ styleImage }
              />
              <h1 data-testid="recipe-title">{ dataDetails.strDrink }</h1>
              <h2 data-testid="recipe-category">{ dataDetails.strAlcoholic }</h2>
            </>
          )}
          <h3>Ingredients</h3>
          <ul>
            { Object.entries(dataDetails)
              .filter((key) => key[0].includes('strIngredient'))
              .map(([key, value], index) => {
                if (value !== '' && value !== null) {
                  return (
                    <li
                      key={ value }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      { `${value} - ${dataDetails[`strMeasure${key.slice(NUMBER)}`]}` }
                    </li>
                  );
                }
                return null;
              })}
          </ul>
          <h3>Instructions</h3>
          <p data-testid="instructions">{ dataDetails.strInstructions }</p>
          { dataDetails.strYoutube && (<iframe
            data-testid="video"
            title="video"
            width="300"
            height="200"
            src={ dataDetails.strYoutube.replace('watch?v=', 'embed/') }
          />)}
        </div>
        <div>
          <h3>Recomendations</h3>
          <div className="carousel">
            { route === 'drink' && (
              recomendations.map((recipe, index) => (
                <div key={ index } data-testid={ `${index}-recommendation-card` }>
                  <img
                    src={ recipe.strMealThumb }
                    alt={ recipe.strMeal }
                    className="image-recomendation"
                  />
                  <p
                    data-testid={ `${index}-recommendation-title` }
                  >
                    { recipe.strMeal }
                  </p>
                </div>
              ))
            )}
            { route === 'meal' && (
              recomendations.map((recipe, index) => (
                <div key={ index } data-testid={ `${index}-recommendation-card` }>
                  <img
                    src={ recipe.strDrinkThumb }
                    alt={ recipe.strDrink }
                    className="image-recomendation"
                  />
                  <p
                    data-testid={ `${index}-recommendation-title` }
                  >
                    { recipe.strDrink }
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <footer>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="btn-start"
          onClick={ () => handleClickMealDrink() }
        >
          Start Recipe
        </button>
      </footer>
    </>
  );
}
CardDetail.propTypes = {
//   dataDetails: PropTypes.objectOf(PropTypes.string).isRequired,
  route: PropTypes.string.isRequired,
  dataDetails: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
  }).isRequired,
  recomendations: PropTypes.shape.isRequired,
};
export default CardDetail;
