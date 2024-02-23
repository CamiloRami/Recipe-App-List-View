import Card from "../components/Card"

export default function RecipesContainer () {
  const recipe = {
    idMeal: "1",
    strMeal: "Spaghetti",
    strCategory: "Pasta",
    strArea: "Italy",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1544384070.jpg"
  }

  return (
    <div>
      <h1>Recipes</h1>
      <Card recipe={recipe}/>
    </div>
  )
}