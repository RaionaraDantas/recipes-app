import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import Recipes from './pages/Recipes';

function App() {
  return (
    <section className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Recipes } />
        <Route exact path="/drinks" component={ Recipes } />
        <Route exact path="/meals/:id-da-receita" component={ RecipeDetails } />
        <Route exact path="/drinks/:id-da-receita" component={ RecipeDetails } />
        <Route
          exact
          path="/meals/:id-da-receita/in-progress"
          component={ RecipeInProgress }
        />
        <Route
          exact
          path="/drinks/:id-da-receita/in-progress"
          component={ RecipeInProgress }
        />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/profile" component={ Profile } />
      </Switch>
    </section>
  );
}

export default App;
// primeiro commit
