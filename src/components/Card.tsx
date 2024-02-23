interface Recipe {
  idMeal: string,
  strMeal: string,
  strCategory: string,
  strArea: string,
  strMealThumb: string
}

export default function Card ({recipe}: {recipe: Recipe}) {
  return (
    <article className="w-48 bg-slate-100 p-6">
      <img src={recipe.strMealThumb} />
      <p>{recipe.idMeal}</p>
      <p>{recipe.strMeal}</p>
      <p>{recipe.strCategory}</p>
      <p>{recipe.strArea}</p>
    </article>
  )
}