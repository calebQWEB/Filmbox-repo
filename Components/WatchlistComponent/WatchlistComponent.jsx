import React, { useState } from 'react'
import './watchlistComponent.css'
import { Link } from 'react-router-dom'

const getImage = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}

// Collecting props from the watchlist.jsx file
const WatchlistComponent = (props) => {
    // Then we destructure the object below to get each of the prop individualy
    const { backdrop_path, poster_path, overview, title, id, watchlist, setWatchlist, name, genre_ids, vote_average, movieDetails, setMovieDetails } = props

    // Below is all the genre of all the movie and tv shows
    const [genres, setGenres] = useState([{
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    },
    {
        "id": 10759,
        "name": "Action & Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 10762,
        "name": "Kids"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10763,
        "name": "News"
    },
    {
        "id": 10764,
        "name": "Reality"
    },
    {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
    },
    {
        "id": 10766,
        "name": "Soap"
    },
    {
        "id": 10767,
        "name": "Talk"
    },
    {
        "id": 10768,
        "name": "War & Politics"
    },
    {
        "id": 37,
        "name": "Western"
    }
    ])

    const detailsClick = () => {
        setMovieDetails([])
        setMovieDetails(prevState => [...prevState, title, overview, index, backdrop_path, vote_average, id])

        const index = genre_ids.map(id => genres.filter(genre => genre.id === id).map(genre => genre.name))
    }

    // Below we have created an onClick function that collects the id of the movie clicked
    // We filter the watchlist array to get a new array of any item that has ID not equal to the id of the movie clicked we then store that array into the filtered array
    // Then we update the watchlist array with the filtered variable 
    const removeProp = (id) => {
        const filtered = watchlist.filter((item) => item.id !== id)
        setWatchlist([...filtered])
    }
    return (
        <div className='filmbox__watchlist'>
            <Link onClick={detailsClick} to='/MovieDetails' className='watchlist-link'>
                <div className='filmbox__watch-list'>
                    <picture>
                        <img src={getImage(backdrop_path || poster_path)} alt={title} className='filmbox__watchlist-image' />
                    </picture>
                    <article>
                        <h2 className='filmbox__watchlist-title'>{title || name}</h2>
                        <p className='filmbox__watchlist-overview'>{overview}</p>
                    </article>
                </div>
            </Link>

            <div className='cancel' onClick={() => removeProp(id)}>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default WatchlistComponent