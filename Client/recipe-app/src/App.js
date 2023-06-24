import axios from 'axios'
import React from 'react'
import { getRecipes , getRecipe , getRecipeByName , updateRecipe , deleteRecipe , addRecipe } from './controllers/controller';
import { useEffect , useState } from 'react';

function App() {
  const [recipes, setRecipes] = React.useState([]);

  useEffect(() => {
    if (recipes.length === 0) {
      getRecipes().then((r) => setRecipes(r));
    }
  }, []);

  console.log(getRecipes())
  return (
    <div>
      <header>
        <h1>My Recipe App</h1>
      </header>
      <body>
        <form method="post" enctype="multipart/form-data">
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title"
            />
          </div>

          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter Description"
            />
          </div>

          <div>
            <label>Ingredients</label>
            <input
              type="text"
              name="ingredients"
              id="ingrdients"
              placeholder="Enter Ingredients"
            />
          </div>

          <div>
            <label>Instructions</label>
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Enter Instructions"
            />
          </div>

          <div>
            <label>Select Image</label>
            <input type="file" name="image" id="image" />
          </div>

          <button type="submit">Add Recipe</button>
        </form>

        <div>
          <h1>All Recipes</h1>
          <div>
            {recipes?.map((recipe) => {
                  return (
                    <tr key={recipe._id}>
                      <td>{recipe.title}</td>
                      <td>{recipe.description}</td>
                      <td>{recipe.ingredients}</td>
                      <td>{recipe.instructions}</td>
                      <td>{recipe.image}</td>
                    </tr>
                  );
                })
              }
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
