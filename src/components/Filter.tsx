interface FilterProps {
  placeholder: string
  list: string
  options: string[]
}

export default function Filter({ placeholder, list, options }: FilterProps) {
  return (
    <form className="relative flex flex-row items-center">
      
      <input
        type="text"
        placeholder={placeholder}
        required
        list={list}
        className="w-full border border-orange-200 bg-orange-100 p-2 focus-visible:outline focus-visible:outline-orange-200"
      />
      <datalist id={list}>
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
      {/* <button
        type="submit"
        className="absolute right-0 before:mr-3 before:border-l before:border-orange-200 before:py-2 before:content-[''] p-2"
      > 
        Filter
      </button>  */}
    </form>
  )
}
