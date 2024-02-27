import { type MealsAPIResponse, type Meal } from '../typos'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

async function getRandomMeal() {
  return fetch(`${BASE_URL}/random.php`)
    .then(response => response.json() as Promise<MealsAPIResponse>)
    .then(data => data.meals[0])
    .catch(error => {
      console.error('Error fetching meal', error)
      throw error
    })
}

async function getRandomMeals(quantity: number) {
  return Promise.all(
    Array.from({ length: quantity }, async () => {
      return getRandomMeal().then(mapFromApiToMeal)
    }),
  )
}

const mapFromApiToMeal = (mealFromApi: MealsAPIResponse['meals'][0]): Meal => {
  const {
    idMeal: id,
    strMeal: name,
    strCategory: category,
    strArea: area,
    strMealThumb: mealThumb,
  } = mealFromApi

  return { id, name, category, area, mealThumb }
}

export { getRandomMeals }
