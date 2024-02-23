import Layout from "./containers/Layout"
import Header from "./components/Header"
import SearchContainer from "./containers/SearchContainer"
import RecipesContainer from "./containers/RecipesContainer"


export default function App() {
  return (
    <Layout>
      <Header />
      <SearchContainer />
      <RecipesContainer />
    </Layout>
  )
}
