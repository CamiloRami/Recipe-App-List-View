import Card from '../components/Card'
import { useMealsContext } from '../contexts/MealsContext'

export default function CardsContainer() {
  const meals = useMealsContext()

  return (
    <section className="grid grid-cols-3 p-2 gap-1">
      {meals.map(meal => (
        <Card key={meal.id} meal={meal} />
      ))}
    </section>
  )
}
