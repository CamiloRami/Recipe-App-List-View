import { Meal } from '../typos'

interface CardProps {
  meal: Meal
}

export default function Card({ meal }: CardProps) {
  return (
    <article className="w-48 bg-slate-100 p-6">
      <img src={meal.mealThumb} />
      <p>{meal.id}</p>
      <p>{meal.name}</p>
      <p>{meal.category}</p>
      <p>{meal.area}</p>
    </article>
  )
}
