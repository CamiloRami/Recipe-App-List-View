import Card from '../components/Card'
import { useMealsContext } from '../contexts/MealsContext'

export default function CardsContainer() {
  const {
    mealsState: { meals },
  } = useMealsContext()

  console.log(meals)

  return (
    <>
      <div>
        <h2 className="p-4 text-center text-3xl">
          {meals.length === 0 ? 'No meals found' : 'Meals'}
        </h2>
      </div>
      <section className="grid grid-cols-3 gap-1 p-2">
        {!(meals.length === 0) &&
          meals.map(meal => <Card key={meal.id} meal={meal} />)}
      </section>
    </>
  )
}
