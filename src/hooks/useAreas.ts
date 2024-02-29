import { useEffect, useState } from 'react'
import { getMealAreas } from '../services/meals'

type AreaState = string[]

function useAreas() {
  const [areas, setAreas] = useState<AreaState>([])
  useEffect(() => {
    getMealAreas()
      .then(setAreas)
  }, [])

  return areas
}

export { useAreas }
