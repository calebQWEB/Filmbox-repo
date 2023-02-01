import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './movieComponent.css'
import { FaPlus } from 'react-icons/fa'

const getImage = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}

// Below I have collected state that was passed down from the parent component which is TrendingMovies and that also collected state that was passed down from the parent which is Home, and then I Imported the useRef Hook and used it to find the width of the parent div below

// and then set then used the setDivWidth to update the state
const MovieComponent = (props) => {

    const { backdrop_path, poster_path, name, title, vote_average, genre_ids, setMovieDetails, overview, id, watchlist } = props

    // Below is every movie genre and we have added it to the array in the genres state below
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
    }
    ])


    // Below we have created an onClick function that first of all clears the movieDetails state array that we passed down to this particular component and collected as prop, Then added all the props(movie details) to the movieDetails array

    const detailsClick = () => {
        setMovieDetails([])
        setMovieDetails(prevState => [...prevState, title, overview, index, backdrop_path, vote_average, id])

        // and then fitering the array in the genres state to get only an array of the objects that has id that matches with any id in the genre_ids array(props), then mapping through that new array of objects to get another new array of the names of the genres and storing everything in the index variable
        const index = genre_ids.map(id => genres.filter(genre => genre.id === id).map(genre => genre.name))
    }

    // Below we have created an onClick function that first of all checks whether any item we are currently pushing into the watchlist array already exists in the watchlist array, if not PUSH
    const addtoWatch = () => {
        if (watchlist.includes(props)) {
            return
        } else {
            watchlist.push(props)
        }
    }

    return (
        <div className='filmbox__trending-main'>
            <Link onClick={detailsClick} to='/MovieDetails' className='filmbox__movie-details-link'>
                <div className='filmbox__trending-image-container'>
                    <img src={getImage(backdrop_path || poster_path)} alt={title} className='filmbox__trending-image' />
                </div>
                <div className='filmbox__trending-title-container'>
                    <p className='filmbox__trending-title'>{title || name}</p>
                    <span className='filmbox-trending-vote'>{vote_average}</span>
                </div>
            </Link>

            <div className='filmbox__watchlist-button-container' onClick={addtoWatch}>
                <button className='watchlist-button' onClick={addtoWatch}><FaPlus /></button>
            </div>
        </div>
    )
}

export default MovieComponent