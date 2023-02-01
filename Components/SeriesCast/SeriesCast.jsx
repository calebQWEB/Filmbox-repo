import React from 'react'
import './seriesCast.css'

const getCastImage = (profile_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`
}

const SeriesCast = ({ profile_path, name }) => {

    return (
        <div className='filmbox__series-cast-main'>
            <img src={getCastImage(profile_path)} alt={name} className='filmbox__series-cast-image' />
            <span className='series-cast-name'>{name}</span>
        </div>
    )
}

export default SeriesCast