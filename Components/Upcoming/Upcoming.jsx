import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import './upcoming.css'
import MovieComponent from '../MovieComponent/MovieComponent'

// Below I am collecting state from the parent Component HOME as props so I can pass it down to the TRENDING component.
const Upcoming = ({ movieDetails, setMovieDetails, watchlist, setWatchlist }) => {
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US&page=1')
            .then((response) => {
                setUpcoming(response.data.results)
            }).catch((err) => {
                console.log(console.log(err))
            })
    }, [])
    return (
        <section className='filmbox__upcoming'>
            <h1 className='filmbox__upcoming-header'>UPCOMING</h1>
            <div className='filmbox__upcoming-container-main'>
                <div className='filmbox__upcoming-container'>
                    {upcoming.map((item, index) => {
                        return <MovieComponent key={index} {...item}
                            // Passing state down to the Trending Component 
                            movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                            watchlist={watchlist} setWatchlist={setWatchlist} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Upcoming