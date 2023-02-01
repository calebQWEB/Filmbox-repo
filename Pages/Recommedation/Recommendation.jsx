import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Axios from 'axios'
import './recommendation.css'
import MovieComponent from '../../Components/MovieComponent/MovieComponent'
import SeriesComponent from '../../Components/SeriesComponent/SeriesComponent'


// Getting props from the app.jsx file
const Recommendation = ({ movieDetails, setMovieDetails, watchlist, setWatchlist }) => {
  const [recommend, setRecommend] = useState([])
  const [showrecommend, setShowRecommend] = useState([])

  const [active, setActive] = useState(false)
  const [width, setWidth] = useState(0)

  const constraints = useRef(null)

  // Making a get request to the api to collect recommended movies, then udating state to the result we get
  useEffect(() => {
    Axios.get('https://api.themoviedb.org/3/movie/315162/recommendations?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US&page=1')
      .then((response) => {
        console.log(response.data.results)
        setRecommend(response.data.results)
      })

    Axios.get('https://api.themoviedb.org/3/tv/100088/recommendations?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US&page=1')
      .then((response) => {
        console.log(response.data.results)
        setShowRecommend(response.data.results)
      }).catch((err) => {
        console.log(err)
      })


    setWidth(constraints.current.offsetWidth / 2)
  }, [])


  const showClick = () => {
    setActive(true)
  }

  const movieClick = () => {
    setActive(false)
  }

  return (
    <section className='filmbox__recommendation'>
      <div className='filmbox__recommendation-button-container'>
        <div className='filmbox__buttons' ref={constraints}>

          <div className='filmbox__labels'>
            <span onClick={movieClick}>Movie</span>
            <span onClick={showClick}>Tv shows</span>
          </div>

          <motion.div className='filmbox__slide' animate={active ? { x: width, transition: { type: 'tween' } } : { x: 0, transition: { type: 'tween' } }}></motion.div>
        </div>
      </div>

      <div className='filmbox__recommendation-top-picks-main'>
        {/* adding the carousel slider code*/}
        {!active && (
          <div className='filmbox__recommendation-top-picks'>

            {/*mapping the the recommend variable in state and getting each item of the array and passing it as prop to movieComponent */}
            {recommend.map((movie, index) => {
              return <MovieComponent
                key={index}
                {...movie}
                movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                watchlist={watchlist} setWatchlist={setWatchlist}
              />
            })}
          </div>
        )}

        {active && (
          <div className='filmbox__recommendation-top-picks'>

            {/*mapping the the recommend variable in state and getting each item of the array and passing it as prop to movieComponent */}
            {showrecommend.map((show, index) => {
              return <SeriesComponent
                key={index}
                {...show}
                movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                watchlist={watchlist} setWatchlist={setWatchlist}
              />
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default Recommendation