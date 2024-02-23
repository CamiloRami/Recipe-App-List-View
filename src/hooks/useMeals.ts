import { useState, useEffect } from 'react'
import { getMeal } from '../services/meals'
import Meal from '../interfaces'

function useMeals() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMeals() {
      const meals = await Promise.all([getMeal(), getMeal(), getMeal()])
      setMeals(meals)
      setLoading(false)
    }

    fetchMeals()
  }, [])

  return { meals, loading }
}

export { useMeals }