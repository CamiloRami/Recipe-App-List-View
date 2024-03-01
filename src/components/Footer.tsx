import { useMealsContext } from '../contexts/MealsContext'
const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function Footer() {
  const { searchMealsByFirstLetter } = useMealsContext()

  const handleClick = (letter: string) => {
    searchMealsByFirstLetter(letter)
  }

  return (
    <footer className="bg-gray-800 p-4 text-center text-white w-full max-w-3xl mt-auto">
      <p>Browse By Name</p>
      <div className="flex justify-center space-x-2">
        {ABC.map(letter => (
          <button
            key={letter}
            onClick={() => handleClick(letter)}
            className="hover:underline"
          >
            {letter}
          </button>
        ))}
      </div>
    </footer>
  )
}
