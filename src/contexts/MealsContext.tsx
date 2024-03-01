import { useContext, createContext } from 'react'
import { useMeals } from '../hooks/useMeals'
import { type MealsState } from '../types'

interface MealsContext {
  mealsState: MealsState
  clearMeals: () => void
  searchMeals: (query: string) => void
}

const MealsContext = createContext<MealsContext>({} as MealsContext)

function useMealsContext() {
  const context = useContext(MealsContext)
  if (!context) {
    throw new Error('useMealsContext must be used within a MealsProvider')
  }
  return context
}

function MealsProvider({ children }: { children: React.ReactNode }) {
  const { mealsState, clearMeals, searchMeals } = useMeals()

  return <MealsContext.Provider value={{mealsState, clearMeals, searchMeals}}> {children} </MealsContext.Provider>
}

export { useMealsContext, MealsProvider }
