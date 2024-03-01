import { useEffect, useReducer } from 'react'
import {
  getRandomMeals,
  searchMealsByName,
  searchMealsByArea,
  searchMealsByCategory,
} from '../services/meals'
import type { MealsState, SearchState } from '../types'

type MealAction =
  | {
      type: 'set_random_meals'
      payload: MealsState
    }
  | {
      type: 'search_meals'
      payload: MealsState
    }
  | {
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
  loading: true,
}

function useMeals() {
  const [mealsState, dispatch] = useReducer(mealsReducer, INITIAL_STATE)

  useEffect(() => {
    const fetchInitialMeals = async () => {
      try {
        const meals = await getRandomMeals(9)
        dispatch({
          type: 'set_random_meals',
          payload: { meals, loading: false },
        })
      } catch (error) {
        console.error('Error fetching meals', error)
      }
    }

    fetchInitialMeals()
  }, [])

  const clearMeals = () => dispatch({ type: 'clear_meals' })

  const searchMeals = async (searchInputs: SearchState) => {
    try {
      const mealsFromApi = await searchMealsByName(searchInputs.inputValue)
      const meals: MealsState['meals'] = []

      if (searchInputs.inputCategory !== '' && searchInputs.inputArea !== '') {
        const mealsByCategory = await searchMealsByCategory(searchInputs.inputCategory)
        const mealsByArea = await searchMealsByArea(searchInputs.inputArea)
        mealsFromApi.forEach(meal => {
          if (
            mealsByCategory.some(m => m.id === meal.id) &&
            mealsByArea.some(m => m.id === meal.id)
          ) {
            meals.push(meal)
          }
        })
        return dispatch({ type: 'search_meals', payload: { meals, loading: false } })
      } else {
        if (searchInputs.inputCategory !== '') {
          const mealsByCategory = await searchMealsByCategory(
            searchInputs.inputCategory,
          )
          mealsFromApi.forEach(meal => {
            if (mealsByCategory.some(m => m.id === meal.id)) {
              meals.push(meal)
            }
          })
          return dispatch({ type: 'search_meals', payload: { meals, loading: false } })
        }
        if (searchInputs.inputArea !== '') {
          const mealsByArea = await searchMealsByArea(searchInputs.inputArea)
          mealsFromApi.forEach(meal => {
            if (mealsByArea.some(m => m.id === meal.id)) {
              meals.push(meal)
            }
          })
          return dispatch({ type: 'search_meals', payload: { meals, loading: false } })
        }
      }
      mealsFromApi.forEach(meal => meals.push(meal))
      return dispatch({ type: 'search_meals', payload: { meals, loading: false } })
    } catch (error) {
      console.error('Error fetching meals', error)
    }
  }

  return { mealsState, clearMeals, searchMeals }
}

export { useMeals }
