import React, { useEffect, useState } from 'react';
import './App.css';
import { Recipes } from './component/Recipes';


const App = () => {
   
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const APP_ID = "43cf674a";
  const APP_KEY = "920b15c9ac00cdc6d294084147eb27cc";
  useEffect(() => {
    getRecipies();
  }, [query])
  
  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch = e => {
    setSearch(e.target.value);
   
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" type="text" name="" id="" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipes
          key = {recipe.recipe.label}
          title = {recipe.recipe.label}
          calorie = {recipe.recipe.calorie}
          image={recipe.recipe.image} 
          ingredients = {recipe.recipe.ingredients} 
        />
      ))}
      </div>
    </div>
  )
}


export default App;
