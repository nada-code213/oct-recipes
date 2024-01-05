import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../components/recipeCard";
import { CircularProgress } from "@mui/material";

export default function Drinks() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const app_id = "35842648";
    const app_key = "61e932232dfb391c3b75d5220a4caa6d";
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&q=drinks`
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
        <div className="content">
          {loading ? (
            <CircularProgress />
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
