import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './seriesComponent.css'
import { FaPlus } from 'react-icons/fa'


const getImage = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`
}

const SeriesComponent = (props) => {
    const { poster_path, title, vote_average, name, genre_ids, movieDetails, setMovieDetails, overview, id, watchlist } = props


    // Getting all the objects of all the genres and storing it in the genre state so we can match the various Id of each series with the id in state then get the name of the genre
    const [genres, setGenres] = useState([
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

    // On click function udating movieDetails state to an empty array so as to clear all prior items in the array and then updating it again with all the props we collected from the trendingSeries Components

    // and then fitering the array in the genres state to get only an array of the objects that has id that matches with any id in the genre_ids array(props), then mapping through that new array of objects to get another new array of the names of the genres and storing everything in the index variable

    // Then adding the index variable to the movieDetails state
    const detailsClick = () => {
        setMovieDetails([])
        setMovieDetails(prevState => [...prevState, name, overview, index, poster_path, vote_average, id])

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
        <div className='filmbox__trending-series-main'>
            <Link onClick={detailsClick} to='/SeriesDetails' className='filmbox__series-component-link'>
                <div className='filmbox__trending-series-image-container'>
                    <img src={getImage(poster_path)} alt={title} className='filmbox__trending-series-image' />
                </div>
                <div className='filmbox__trending-series-title-container'>
                    <p className='filmbox__trending-series-title'>{name}</p>
                    <span className='filmbox-trending-series-vote'>{vote_average}</span>
                </div>
            </Link>
            <div className='filmbox__watchlist-button-container' onClick={addtoWatch}>
                <button className='watchlist-button'><FaPlus onClick={addtoWatch} /></button>
            </div>
        </div>

    )
}

export default SeriesComponent