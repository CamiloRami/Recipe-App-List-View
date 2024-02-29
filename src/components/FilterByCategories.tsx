import Filter from './Filter'
import { useCategories } from '../hooks/useCategories'

export default function FilterByCategories() {
  const categories = useCategories()
  return (
    <Filter 
      placeholder="Filter by Category" 
      list="categories" 
      options={categories}
    />
  )
}
