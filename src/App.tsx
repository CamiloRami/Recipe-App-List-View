import Layout from './containers/Layout'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CardsContainer from './containers/CardsContainer'
import { MealsProvider } from './contexts/MealsContext'

export default function App() {
  return (
    <MealsProvider>
      <Layout>
        <Header />
        <SearchBar />
        <CardsContainer />
      </Layout>
    </MealsProvider>
  )
}
