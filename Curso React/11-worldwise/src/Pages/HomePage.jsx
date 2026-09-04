import PageNav from "../components/PageNav"

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>Home Peges</h1>
      
      <Link to="/app">Go to the app</Link>
    </div>
  )
}

export default HomePage
