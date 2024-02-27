import Card from '../components/Card'
import { useMealsContext } from '../contexts/MealsContext'

export default function RecipesContainer() {
  const meals = useMealsContext()

  return (
    <div>
      <div>
        {meals.map((meal) => (
          <Card key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  )
}
