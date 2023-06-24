import axios  from "axios";

export const getRecipes = async () => {
  const response = await axios.get(`http://localhost:9000/recipes`);
  return response;
};

export const getRecipe = async (id) => {
  const response = await axios.get(`http://localhost:9000/recipe/${id}`);
  return response;
};

export const getRecipeByName = async (name) => {
    const data = {
        name: name
    }
  const response = await axios.get(`http://localhost:9000/recipe/search` , data);
  return response;
};

export const updateRecipe = async (id, data) => {
  const response = await axios.put(
    `http://localhost:9000/recipe/update/${id}`,
    data
  );
  return response;
};

export const addRecipe = async (data) => {
  const response = await axios.post(`http://localhost:9000/recipe/add`, data);
  return response;
};

export const deleteRecipe = async (id) => {
  const response = await axios.delete(
    `http://localhost:9000/recipe/delete/${id}`
  );
  return response;
};