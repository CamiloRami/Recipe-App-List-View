import Filter from './Filter'
import { useAreas } from '../hooks/useAreas'

export default function FilterByArea() {
  const areas = useAreas()
  return (
    <Filter 
      placeholder="Filter by Area" 
      list="areas" 
      options={areas}
    />
  )
}
