import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SeriesCast from '../../Components/SeriesCast/SeriesCast'
import './seriesDetail.css'

const getImage = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`
}

const SeriesDetails = ({ movieDetails }) => {

    const [casts, setCasts] = useState([])

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/tv/${movieDetails[5]}/credits?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US`)
            .then((response) => {
                setCasts(response.data.cast)

            }).catch((err) => {
                console.log(err)
            })
    })
    return (
        <section className='filmbox__series-details-main'>
            <div className='filmbox__series-details-container'>
                <div className='filmbox__series-details-title-container'>
                    <h1 className='filmbox__series-details-name'>{movieDetails[0]}</h1>
                    <picture>
                        <img src={getImage(movieDetails[3])} alt={movieDetails[0]} className='filmbox__series-details-image' />
                    </picture>
                </div>

                <div className='filmbox-series-details'>
                    <span className='filmbox_series-details-vote'>{movieDetails[4]}</span>
                    <div className='filmbox_series-details-genre-container'>
                        {movieDetails[2].map(genre => {
                            return (<div className='filmbox__series-genre' key={genre[0]}>{genre}</div>)
                        })}
                    </div>
                    <p className='filmbox__series-details-overview'>{movieDetails[1]}</p>

                    <div className='filmbox__series-details-link-container'>
                        <Link>Rate</Link>
                        <Link>Review</Link>
                    </div>
                </div>
            </div>

            <div className='filmbox__series-cast-container'>
                <h2 className='filmbox__series-cast-header'>CAST</h2>
                <div className='filmbox__series-cast-main'>
                    <div className='filmbox__series-cast' >
                        {casts.map((cast, index) => {
                            return <SeriesCast key={index} {...cast} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeriesDetails