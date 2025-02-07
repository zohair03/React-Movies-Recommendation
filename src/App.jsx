import { useState } from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import Footer from './components/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Movies Recemmendations</h1>
      <SearchBar/>
      <Card/>
      <Footer/>
    </>
  )
}

export default App


// https://api.themoviedb.org/3/search/movie

// 37dd608b2dc34432e9f5993fb77e2e58