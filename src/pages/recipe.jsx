import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    const app_id = "35842648";
    const app_key = "61e932232dfb391c3b75d5220a4caa6d";
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${app_id}&app_key=${app_key}`
      )
      .then((res) => {
        setRecipe(res.data.recipe);
        console.log(res.data.recipe);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="product-page">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={recipe.image} alt="" />
            </div>
            <div className="single-image">
              <img src={recipe.image} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{recipe.label}</h1>
            <div className="right-item">
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredientLines.map((e) => {
                  return <li key={e}>{e}</li>;
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
