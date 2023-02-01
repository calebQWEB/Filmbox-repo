import React from 'react'
import './moviecast.css'

const getCastImage = (profile_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`
}

// Collecting the state that we passed down from the MovieDetails component
const MovieCast = ({ profile_path, name }) => {

    return (
        <div className='filmbox__cast-main'>
            <img src={getCastImage(profile_path)} alt={name} className='filmbox__cast-image' />
            <span className='cast-name'>{name}</span>
        </div>
    )
}

export default MovieCast