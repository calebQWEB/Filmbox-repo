import React, { useEffect, useState } from 'react'
import './trendingseries.css'
import Axios from 'axios'
import SeriesComponent from '../SeriesComponent/SeriesComponent'

// Below I am collecting state from the parent Component HOME as props so I can pass it down to the TRENDING component.
const TrendingSeries = ({ movieDetails, setMovieDetails, watchlist, setWatchlist }) => {
    const [trendingseries, setTrendingSeries] = useState([])

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/tv/popular?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US&page=1')
            .then((response) => {
                setTrendingSeries(response.data.results)
                console.log(response.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section className='filmbox__trending-series'>
            <h1 className='filmbox__trending-series-header'>TRENDING SERIES</h1>
            <div className='filmbox__trending-series-container-main'>
                <div className='filmbox__trending-seriess-container'>
                    {trendingseries.map((trendingseries, index) => {
                        return <SeriesComponent key={index} {...trendingseries}
                            // Passing state down to the SeriesComponent  
                            movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                            watchlist={watchlist} setWatchlist={setWatchlist} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default TrendingSeries