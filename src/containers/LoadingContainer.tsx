import Loading from '../components/Loading'
import { useMealsContext } from '../contexts/MealsContext'

export default function LoadingContainer() {
  const {
    mealsState: { loading },
  } = useMealsContext()
  
  return loading ? (
    <div className="absolute top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-10">
      <Loading />
    </div>
  ) : null
}
