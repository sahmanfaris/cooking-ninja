import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";

import "./Recipe.css";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);
    var docRef = db.collection("recipes").doc(id);

    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        setRecipe(doc.data());
        setIsPending(false);
      } else {
        setIsPending(false);
        setError("No such recipe");
      }
    });

    return () => unsubscribe();
  }, [id]);

  const handleClick = () => {
    db.collection("recipes").doc(id).update({ title: "Something different" });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  );
}
