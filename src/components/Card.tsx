import Meal from "../interfaces"

export default function Card ({meal}: {meal: Meal}) {
  return (
    <article className="w-48 bg-slate-100 p-6">
      <img src={meal.strMealThumb} />
      <p>{meal.idMeal}</p>
      <p>{meal.strMeal}</p>
      <p>{meal.strCategory}</p>
      <p>{meal.strArea}</p>
    </article>
  )
}