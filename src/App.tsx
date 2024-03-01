import Layout from './containers/Layout'
import Header from './components/Header'
import Search from './components/Search'
import LoadingContainer from './containers/LoadingContainer'
import CardsContainer from './containers/CardsContainer'
import { MealsProvider } from './contexts/MealsContext'

export default function App() {
  return (
    <MealsProvider>
      <Layout>
        <LoadingContainer />
        <Header />
        <Search />
        <CardsContainer />
      </Layout>
    </MealsProvider>
  )
}
