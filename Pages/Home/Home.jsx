import React from 'react'
import Header from '../../Components/Header/Header'
import TrendingMovies from '../../Components/TrendingMovies/TrendingMovies'
import TrendingSeries from '../../Components/TrendingSeries/TrendingSeries'
import Upcoming from '../../Components/Upcoming/Upcoming'
import './home.css'

// Below we have collected all the needed state and passed it down to each of the component that needs it
const Home = ({ movieDetails, setMovieDetails, watchlist, setWatchlist }) => {



    return (
        <div className='filmbox__home'>
            <Header movieDetails={movieDetails} setMovieDetails={setMovieDetails} />
            <main>
                <TrendingMovies
                    movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                    watchlist={watchlist} setWatchlist={setWatchlist} />

                <TrendingSeries
                    movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                    watchlist={watchlist} setWatchlist={setWatchlist} />

                <Upcoming
                    movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                    watchlist={watchlist} setWatchlist={setWatchlist} />
            </main>
        </div>
    )
}

export default Home