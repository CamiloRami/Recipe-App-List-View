import Card from "../components/Card"
import { useMealsContext } from "../contexts/MealsContext"

export default function RecipesContainer () {
  const meals = useMealsContext()

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  )
}