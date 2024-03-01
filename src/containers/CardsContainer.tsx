import Card from '../components/Card'
import { useMealsContext } from '../contexts/MealsContext'

export default function CardsContainer() {
  const {
    mealsState: { meals, loading },
  } = useMealsContext()

  return (
    <>
      <div>
        <h2 className="p-4 text-center text-3xl">
          {(meals.length === 0 && !loading) ? 'No meals found' : null}
        </h2>
      </div>
      <section className="grid grid-cols-2 gap-1 p-2 sm:grid-cols-3">
        {!(meals.length === 0) &&
          meals.map(meal => <Card key={meal.id} meal={meal} />)}
      </section>
    </>
  )
}
