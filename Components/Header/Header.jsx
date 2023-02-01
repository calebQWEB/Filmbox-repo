import React, { useEffect, useState } from 'react'
import './header.css'
import { motion } from 'framer-motion'
import Axios from 'axios'
import Theater from './Theater/Theater'

const Header = ({ movieDetails, setMovieDetails }) => {
    const [image, setImage] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a69eafdf8b6066459d68fd6cc1fa8986&language=en-US&page=1')
            .then((response) => {
                setMovies(response.data.results.slice(0, 4))
                setImage(`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${response.data.results[5].backdrop_path}`)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const variant = {
        initial: {
            opacity: 0
        },

        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2
            }
        }
    }

    const child = {
        initial: {
            opacity: 0
        },

        animate: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    }

    return (
        <div className='filmbox__header'>
            <motion.img src={image} className='filmbox__header-image' variants={child}></motion.img>
            <motion.div className='filmbox__header-desktop' variants={variant} initial='initial' animate='animate'>
                <motion.h1 className='filmbox__header-desktop-h1' variants={child}>In Theaters</motion.h1>
                <motion.div className='filmbox__header-desktop-container' variants={child}>
                    {movies.map((movie, index) => {
                        return <Theater key={index} {...movie} movieDetails={movieDetails} setMovieDetails={setMovieDetails} />
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Header