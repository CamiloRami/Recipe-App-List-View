import { useState, useEffect } from 'react'
import { getRandomMeals } from '../services/meals'
import { type Meal } from '../typos'

type MealsState = Meal[]

function useMeals() {
  const [meals, setMeals] = useState<MealsState>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMeals() {
      const meals = await getRandomMeals(9)
      setMeals(meals)
      setLoading(false)
    }

    fetchMeals()
  }, [])

  return { meals, loading }
}

export { useMeals }
