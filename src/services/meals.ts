import type { MealsAPIResponse, Meal, APIMeal } from '../typos'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

async function getRandomMeal() {
  return fetch(`${BASE_URL}/random.php`)
    .then(response => response.json() as Promise<MealsAPIResponse>)
    .then(data => data.meals)
    .catch((error: Error) => {
      console.error('Error fetching meal', error.message)
      throw error
    })
}

const mapFromApiToMeal = (mealFromApi: APIMeal): Meal => {
  const {
    idMeal: id,
    strMeal: name,
    strCategory: category,
    strArea: area,
    strMealThumb: mealThumb,
  } = mealFromApi

  return { id, name, category, area, mealThumb }
}

async function getRandomMeals(quantity: number) {
  return Promise.all(
    Array.from({ length: quantity }, async () => {
      return getRandomMeal().then((meals) => {
        if (!meals) throw new Error('No meals found')
        return mapFromApiToMeal(meals?.[0])
      })
    }),
  )
}

async function getMealById(id: number) {
  return fetch(`${BASE_URL}/lookup.php?i=${id}`)
    .then(response => response.json() as Promise<MealsAPIResponse>)
    .then(data => data.meals)
    .then(meals => meals?.map(mapFromApiToMeal) ?? [])
    .catch((error: Error) => {
      console.error('Error fetching meal', error.message)
      throw error
    })
}

async function searchMealsByName(query: string) {
  return fetch(`${BASE_URL}/search.php?s=${query}`)
    .then(response => response.json() as Promise<MealsAPIResponse>)
    .then(data => data.meals?.map(mapFromApiToMeal) ?? [])
    .catch((error: Error) => {
      console.error('Error fetching meal', error.message)
      throw error
    })
}

type MealCategoriesResponse = { meals: {strCategory: string}[] }

async function getMealCategories() {
  return fetch(`${BASE_URL}/list.php?c=list`)
    .then(response => response.json() as Promise<MealCategoriesResponse>)
    .then(data => data.meals.map(meal => meal.strCategory))
    .catch((error: Error) => {
      console.error('Error fetching meal categories', error.message)
      throw error
    })
}

type MealAreasResponse = { meals: {strArea: string}[] }

async function getMealAreas() {
  return fetch(`${BASE_URL}/list.php?a=list`)
    .then(response => response.json() as Promise<MealAreasResponse>)
    .then(data => data.meals.map(meal => meal.strArea))
    .catch((error: Error) => {
      console.error('Error fetching meal categories', error.message)
      throw error
    })
}



export { getRandomMeals, getMealById, searchMealsByName, getMealCategories, getMealAreas }
