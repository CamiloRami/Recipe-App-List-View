import { useMealsContext } from '../contexts/MealsContext'
import { useAreas } from '../hooks/useAreas'
import { useCategories } from '../hooks/useCategories'
import { useSearch } from '../hooks/useSearch'
import Filter from './Filter'

export default function Search() {
  const { searchMeals } = useMealsContext()
  const areas = useAreas()
  const categories = useCategories()

  const {
    state: { inputValue, inputCategory, inputArea },
    handleChangeValue,
    handleChangeCategory,
    handleChangeArea,
    handleSubmit,
  } = useSearch()

  return (
    <div className="mb-12 p-4">
      <form
        onSubmit={e => {
          handleSubmit(e, searchMeals)
        }}
        className="relative flex flex-row items-center justify-between"
      >
        <input
          value={inputValue}
          onChange={handleChangeValue}
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
        <ul className="absolute top-20 flex w-full flex-row justify-between">
          <li>
            <Filter
              inputValue={inputCategory}
              handleChange={handleChangeCategory}
              placeholder="Filter by Category"
              list="categories"
              options={categories}
            />
          </li>
          <li>
            <Filter
              inputValue={inputArea}
              handleChange={handleChangeArea}
              placeholder="Filter by Area"
              list="areas"
              options={areas}
            />
          </li>
        </ul>
      </form>
    </div>
  )
}
