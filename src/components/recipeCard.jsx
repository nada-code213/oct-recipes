export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt="" />
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
}
