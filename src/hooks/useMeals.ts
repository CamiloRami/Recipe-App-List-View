import { useEffect, useReducer } from 'react'
import { getRandomMeals, searchMealsByName } from '../services/meals'
import type { MealsState } from '../typos'

type MealAction = { 
  type: 'set_random_meals'
  payload: MealsState
} | {
  type: 'search_meals'
  payload: MealsState
} | {
  type: 'clear_meals'
}

function mealsReducer(state: MealsState, action: MealAction) {
  switch (action.type) {
    case 'set_random_meals':
      return action.payload
    
    case 'search_meals':
      return action.payload

    case 'clear_meals':
      return { ...state, meals: [] }
    default:
      return state
  }
}

const INITIAL_STATE: MealsState = {
  meals: [],
  loading: true
}

function useMeals() {
  const [mealsState, dispatch] = useReducer(mealsReducer, INITIAL_STATE)

  useEffect(() => {
    const fetchInitialMeals = async () => {
      try {
        const meals = await getRandomMeals(9)
        dispatch({ type: 'set_random_meals', payload: { meals, loading: false } })
      } catch (error) {
        console.error('Error fetching meals', error)
      }
    }

    fetchInitialMeals()
  }, [])

  const clearMeals = () => dispatch({ type: 'clear_meals' })

  // const searchMeals = async (query: string) => {
  //   const meals = await searchMealsByName(query)
  //   dispatch({ type: 'search_meals', payload: { meals, loading: false } })
  // }

  const searchMeals = async (query: string) => {
    try {
      const meals = await searchMealsByName(query)
      dispatch({ type: 'search_meals', payload: { meals, loading: false } })
    } catch (error) {
      console.error('Error fetching meals', error)
    }
  }

  return {mealsState, clearMeals, searchMeals}
}

export { useMeals }
