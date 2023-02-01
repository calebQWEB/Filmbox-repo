import React, { useEffect, useState } from 'react'
import './trendingMovies.css'
import Axios from 'axios'
import MovieComponent from '../MovieComponent/MovieComponent'

// Below I am collecting state from the parent Component HOME as props so I can pass it down to the TRENDING component.
const TrendingMovies = ({ movieDetails, setMovieDetails, watchlist, setWatchlist }) => {
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US&page=1')
            .then((response) => {
                setTrendingMovies(response.data.results)
                console.log(response.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section className='filmbox__trending-movies'>
            <h1 className='filmbox__trending-movies-header'>TRENDING MOVIES</h1>
            <div className='filmbox__trending-movies-container-main'>
                <div
                    className='filmbox__trending-movies-container'>

                    {trendingMovies.map((trendingmovie, index) => {
                        return <MovieComponent key={index} {...trendingmovie}
                            // Passing state down to MovieComponent 
                            movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                            watchlist={watchlist} setWatchlist={setWatchlist} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default TrendingMovies