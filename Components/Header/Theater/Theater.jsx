import React, { useState } from 'react'
import './theater.css'
import { Link } from 'react-router-dom'


const getImage = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}

const Theater = ({ backdrop_path, title, genre_ids, movieDetails, setMovieDetails, overview, vote_average, id }) => {

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

    const detailsClick = () => {
        setMovieDetails([])
        setMovieDetails(prevState => [...prevState, title, overview, index, backdrop_path, vote_average, id])
        console.log(movieDetails)

        const index = genre_ids.map(id => genres.filter(genre => genre.id === id).map(genre => genre.name))
    }


    return (
        <Link onClick={detailsClick} className='filmbox__theaters-link' to='/MovieDetails'>
            <div className='filmbox__theaters'>
                <img src={getImage(backdrop_path)} alt='In theaters image' className='filmbox__theaters-image'></img>
                <h1 className='filmbox__theaters-title'>{title}</h1>
            </div>
        </Link>
    )
}

export default Theater