import { useContext, createContext } from 'react'
import { useMeals } from '../hooks/useMeals'

import Meal from '../interfaces'

const MealsContext = createContext<Meal[]>([])

function useMealsContext() {
  const context = useContext(MealsContext)
  if (!context) {
    throw new Error('useMealsContext must be used within a MealsProvider')
  }
  return context
}

function MealsProvider({ children }: { children: React.ReactNode }) {
  const {meals} = useMeals()

  return <MealsContext.Provider value={meals}> {children} </MealsContext.Provider>
}


export { useMealsContext, MealsProvider }