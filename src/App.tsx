import Layout from './containers/Layout'
import Header from './components/Header'
import Search from './components/Search'
import CardsContainer from './containers/CardsContainer'
import { MealsProvider } from './contexts/MealsContext'

export default function App() {
  return (
    <MealsProvider>
      <Layout>
        <Header />
        <Search />
        <CardsContainer />
      </Layout>
    </MealsProvider>
  )
}
