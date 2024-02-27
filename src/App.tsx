import Layout from './containers/Layout'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import RecipesContainer from './containers/RecipesContainer'
import { MealsProvider } from './contexts/MealsContext'

export default function App() {
  return (
    <MealsProvider>
      <Layout>
        <Header />
        <SearchBar />
        <RecipesContainer />
      </Layout>
    </MealsProvider>
  )
}
