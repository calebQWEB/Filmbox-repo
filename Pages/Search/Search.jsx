import Axios from 'axios'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import './search.css'

const Search = ({ watchlist, setWatchlist, movieDetails, setMovieDetails }) => {
    const [searching, setSearching] = useState([])

    const [searchInput, setSearchInput] = useState('')

    const searchChange = (e) => {
        setSearchInput(e.target.value)

        Axios.get(`https://api.themoviedb.org/3/search/multi?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US&query=${searchInput}&page=1&include_adult=false`)
            .then((response) => {
                setSearching(response.data.results)
                console.log(response.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }



    return (
        <section className='filmbox__search-main'>

            <div className='filmbox__search-bar-container'>
                <motion.input initial={{ width: 0 }} animate={{ width: '50%', transition: { type: 'tween', duration: 0.5 } }} type='text' placeholder='Search' onChange={searchChange} className='search-bar'></motion.input>
            </div>

            <div className='filmbox__search-container'>

                {searching.map((item, index) => {
                    return <SearchComponent key={index} {...item}
                        watchlist={watchlist}
                        setWatchlist={setWatchlist}
                        movieDetails={movieDetails} setMovieDetails={setMovieDetails} />
                })}
            </div>
        </section>
    )
}

export default Search