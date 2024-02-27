export default function Search() {
  return (
    <div className="p-4">
      <form className="relative flex flex-row justify-between">
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="outline-- w-full border border-orange-200 bg-orange-100 p-4 focus-visible:outline focus-visible:outline-orange-200"
        />
        <button type="submit" className=" absolute right-0 p-4">
          Search
        </button>
      </form>
    </div>
  )
}
