interface FilterProps {
  placeholder: string
  list: string
  options: string[]
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
}

export default function Filter({ placeholder, list, options, handleChange, inputValue }: FilterProps) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        list={list}
        value={inputValue}
        onChange={handleChange}
        className="w-full border border-orange-200 bg-orange-100 p-2 focus-visible:outline focus-visible:outline-orange-200"
      />
      <datalist id={list}>
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
    </>
  )
}
