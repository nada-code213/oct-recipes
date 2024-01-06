import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/recipeCard";

export default function SearchResults() {
  const { query } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const app_id = "";
    const app_key = "";
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&q=${query}`
      )
      .then((res) => {
        setRecipes(res.data.hits);
        console.log(res.data);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <section className="recipes">
        <div className="header">
          <div className="line"></div>
          <h2>Our Recipes</h2>
          <div className="line"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quos
          excepturi cum placeat labore quibusdam?
        </p>
        <div className="content">
          {loading ? (
            <p>Loading</p>
          ) : (
            recipes.map((e) => {
              return <RecipeCard key={e.uri} recipe={e.recipe} />;
            })
          )}
        </div>
      </section>
    </div>
  );
}
