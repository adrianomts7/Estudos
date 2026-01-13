import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
const controlRecipes = async function() {
  try {

    // const id = window.location.hash.slice(1);
    const id = '664c8f193e7aa067e94e8823';

    if (!id) return;

    recipeView.renderSpinner();
    
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
    
  } catch(err) {
    recipeView.renderError();
  } 
};

const controlSearchResults = async function() {
  try {
    const query = searchView.getQuery();

    if (!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();