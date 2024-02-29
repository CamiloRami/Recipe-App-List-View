import SearchBar from '../components/SearchBar'
import FilterByArea from '../components/FilterByArea'
import FilterByCategories from '../components/FilterByCategories'

export default function SearchContainer() {
  return (
    <>
      <SearchBar />
      <ul className="flex flex-row w-full justify-between px-4">
        <li>
          <FilterByCategories />
        </li>
        <li>
          <FilterByArea />
        </li>
      </ul>
    </>
  )
}
