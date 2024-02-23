import Layout from "./containers/Layout"
import Header from "./components/Header"
import SearchContainer from "./containers/SearchContainer"
import RecipesContainer from "./containers/RecipesContainer"
import { MealsProvider } from "./contexts/MealsContext"


export default function App() {
  return (
    <MealsProvider>
      <Layout>
        <Header />
        <SearchContainer />
        <RecipesContainer />
      </Layout>
    </MealsProvider>
  )
}
