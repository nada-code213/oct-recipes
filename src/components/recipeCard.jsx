import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/` + recipe.uri.split("_").pop()}>
      <div className="recipe-card">
        <img src={recipe.image} alt="" />
        <h2>{recipe.label}</h2>
        <p>{recipe.cuisineType}</p>
      </div>
    </Link>
  );
}
