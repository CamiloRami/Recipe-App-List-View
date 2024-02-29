import Layout from './containers/Layout'
import Header from './components/Header'
import SearchContainer from './containers/SearchContainer'
import CardsContainer from './containers/CardsContainer'
import { MealsProvider } from './contexts/MealsContext'

export default function App() {
  return (
    <MealsProvider>
      <Layout>
        <Header />
        <SearchContainer />
        <CardsContainer />
      </Layout>
    </MealsProvider>
  )
}
