import React, { useEffect, useState } from 'react'
import './moviedetails.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import MovieCast from '../../Components/MovieCast/MovieCast'


const getImage = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}

const MovieDetails = ({ movieDetails }) => {
    const [castImage, setCastImage] = useState([])

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/${movieDetails[5]}/credits?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US`)
            .then((response) => {
                setCastImage(response.data.cast)

            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section className='filmbox__movie-details-main'>
            <div className='filmbox__movie-details-container'>
                <div className='filmbox__movie-details-title-container'>
                    <h1 className='filmbox__movie-details-title'>{movieDetails[0]}</h1>
                    <picture>
                        <img src={getImage(movieDetails[3])} alt={movieDetails[0]} className='filmbox__movie-details-image' />
                    </picture>
                </div>

                <div className='filmbox__movie-details'>
                    <span className='filmbox_movie-details-vote'>{movieDetails[4]}</span>
                    <div className='filmbox_movie-details-genre-container'>

                        {/* If you check the the movieComponent you will find that the item at index position two that we passed to the movieDetails array in state is the index variable and it has all the genres of the movie, So below we have mapped the array to get every individual genre then returning the jsx and styling it*/}
                        {movieDetails[2].map(genre => {
                            return (<div className='filmbox__genre' key={genre[0]}>{genre}</div>)
                        })}
                    </div>
                    <p className='filmbox__movie-details-overview'>{movieDetails[1]}</p>

                    <div className='filmbox__movie-details-link-container'>
                        <Link>Rate</Link>
                        <Link>Review</Link>
                    </div>
                </div>
            </div>

            <div className='filmbox__movie-cast-container'>
                <h2 className='filmbox__movie-cast-header'>CAST</h2>
                <div className='filmbox__movie-cast-main'>
                    <div className='filmbox__movie-cast'>
                        {castImage.map((cast, index) => {
                            return <MovieCast key={index} {...cast} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails