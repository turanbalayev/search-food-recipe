import { useEffect, useState } from "react"
import Recipe from './Recipe'
import './App.css';


function App() {
  const APP_ID = "f9066140";
  const APP_KEY = "5455a314b443fba9d95d4b92575d88cd";
  // const example_req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recepies, setRecepies] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("chicken")


  useEffect(() => {
    console.log("Effect has been running...")
    getRecepies();
  }, [query])

  const getRecepies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecepies(data.hits)
  }

  const updateSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
    setSearchInput('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="search-bar" value={searchInput} onChange={updateSearchInput} />
        <button type="submit" className="search-button">Search</button>
      </form>
      {recepies.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>
  );
}

export default App;
