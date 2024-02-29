import { useMealsContext } from '../contexts/MealsContext'
import { useSearch } from '../hooks/useSearch'

export default function SearchBar() {
  const { searchMeals } = useMealsContext()
  const { state: { inputValue }, handleChange, handleSubmit } = useSearch()

  return (
    <div className="p-4">
      <form
        onSubmit={e => {
          handleSubmit(e, searchMeals)
        }}
        className="relative flex flex-row justify-between items-center"
      >
        <input
          value={inputValue}
          onChange={handleChange}
          required
          type="text"
          placeholder="Search for a recipe..."
          className="w-full border border-orange-200 bg-orange-100 p-4 pr-24 focus-visible:outline focus-visible:outline-orange-200"
        />
        <button
          type="submit"
          className="absolute right-0 p-4 before:mr-4 before:border-l before:border-orange-200 before:py-3 before:content-['']"
        >
          Search
        </button>
      </form>
    </div>
  )
}
