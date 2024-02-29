import { useEffect, useState } from 'react'
import { getMealCategories } from '../services/meals'

type CategoryState = string[]

function useCategories() {
  const [categories, setCategories] = useState<CategoryState>([])
  useEffect(() => {
    getMealCategories()
      .then(setCategories)
  }, [])

  return categories
}

export { useCategories }
