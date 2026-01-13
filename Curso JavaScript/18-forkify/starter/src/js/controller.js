import * as model from './model.js';
import recipeView from './views/recipeView.js';

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
    alert(err)
  } 
};

// controlRecipes();
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);