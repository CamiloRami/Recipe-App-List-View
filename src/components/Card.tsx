import { type Meal } from '../typos'

interface CardProps {
  meal: Meal
}

export default function Card({ meal }: CardProps) {
  return (
    <article className="bg-orange-100 p-1 border border-orange-200 rounded-md">
      <img src={meal.mealThumb} className="aspect-square rounded-t-md" />
      <p>{meal.id}</p>
      <p>{meal.name}</p>
      <p>{meal.category}</p>
      <p>{meal.area}</p>
    </article>
  )
}
