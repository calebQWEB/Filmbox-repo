import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from '../src/Pages/Home/Home'
import Recommendation from '../src/Pages/Recommedation/Recommendation'
import About from '../src/Pages/About/About'
import Watchlist from '../src/Pages/Watchlist/Watchlist'

import MovieDetails from './Pages/movieDetails/MovieDetails'
import SeriesDetails from './Pages/seriesDetails/SeriesDetails'
import { useState } from 'react'
import Search from './Pages/Search/Search'

function App() {
  // The array we pass down to all the component so we can be able to manipulate and get all the details of the movie
  const [movieDetails, setMovieDetails] = useState([])

  // After we get all the details of the movie we make an Api get request to get the total number of cast of a particular movie and then update state below
  const [castwidth, setCastWidth] = useState(0)

  // When you click add to watchlist it gets pushed to this array
  const [watchlist, setWatchlist] = useState([])



  // Below we have passed all the above state to each of the components below that needs it

  return (
    <div className="App">
      <Navbar watchlist={watchlist} setWatchlist={setWatchlist} />

      <Routes>
        <Route path='/' element={<Home movieDetails={movieDetails}
          setMovieDetails={setMovieDetails}
          watchlist={watchlist}
          setWatchlist={setWatchlist} />} />

        <Route path='recommendation' element={<Recommendation
          movieDetails={movieDetails}
          setMovieDetails={setMovieDetails}
          watchlist={watchlist}
          setWatchlist={setWatchlist} />} />

        <Route path='/watchlist' element={<Watchlist watchlist={watchlist}
          setWatchlist={setWatchlist}
          movieDetails={movieDetails}
          setMovieDetails={setMovieDetails} />} />

        <Route path='About' element={<About />} />

        <Route path='moviedetails' element={<MovieDetails movieDetails={movieDetails}
          setMovieDetails={setMovieDetails}
          castwidth={castwidth}
          setCastWidth={setCastWidth} />} />

        <Route path='seriesdetails' element={<SeriesDetails movieDetails={movieDetails}
          setMovieDetails={setMovieDetails}
          castwidth={castwidth}
          setCastWidth={setCastWidth} />} />

        <Route path='search' element={<Search watchlist={watchlist}
          setWatchlist={setWatchlist}
          movieDetails={movieDetails}
          setMovieDetails={setMovieDetails} />} />

      </Routes>
    </div>
  )
}

export default App
