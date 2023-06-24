function recipeDetails(){
    return (
      <div>
        <header>
          <h1>Update Recipe</h1>
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

            <button type="submit">Update Recipe</button>
            <button type="submit">Delete Recipe</button>
          </form>
        </body>
      </div>
    );
}