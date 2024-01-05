import { useEffect, useState } from "react";
import HeroSwiper from "../components/heroSwiper";
import axios from "axios";
import RecipeCard from "../components/recipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const app_id = "35842648";
    const app_key = "61e932232dfb391c3b75d5220a4caa6d";
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&q=meals%20and%20drinks`
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
      <HeroSwiper />
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
