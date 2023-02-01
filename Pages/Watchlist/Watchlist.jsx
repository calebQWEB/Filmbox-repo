import React from 'react'
import WatchlistComponent from '../../Components/WatchlistComponent/WatchlistComponent'
import './watchlist.css'

// Below We have collected state from a parent componet to either manipulate here or pass down some more to another child component
const Watchlist = ({ watchlist, setWatchlist, movieDetails, setMovieDetails }) => {

    return (
        <section className='filmbox__watchlist-main'>
            <h1 className='filmbox__watchlist-header'>YOUR WATCHLIST</h1>
            <div className='filmbox__watchlist-container'>
                {watchlist.map((list, index) => {
                    return <WatchlistComponent
                        key={index}
                        {...list}
                        watchlist={watchlist}
                        setWatchlist={setWatchlist}
                        movieDetails={movieDetails} setMovieDetails={setMovieDetails}
                    />
                })}
            </div>
        </section>
    )
}

export default Watchlist