import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/Mobile/Logo.svg'
import Search from '../../assets/Search.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Navbar = ({ watchlist }) => {

    const [menu, setMenu] = useState(false)

    const showMenu = () => {
        setMenu(prevState => !prevState)
    }

    const variant = {
        initial: {
            x: -100,
            opacity: 0
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                staggerChildren: 0.2
            }
        }
    }

    const child = {
        initial: {
            x: -100,
            opacity: 0
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
            }
        }
    }


    return (
        <nav>
            <div className='filmbox__navbar'>
                <Link to='/' className='filmbox-logo-link'><img src={Logo} alt='Logo' className='filmbox-logo'></img></Link>
                {menu && (
                    <motion.ul className='filmbox__pages' variants={variant} initial='initial' animate='animate'>
                        <motion.li variants={child}><Link to='/watchlist'>Watchlist</Link></motion.li>
                        <motion.li variants={child}><Link to='/recommendation'>Recommendation</Link></motion.li>
                        <motion.li variants={child}><Link to='/about'>About</Link></motion.li>
                    </motion.ul>
                )}

                <Link to='search'>
                    <img src={Search} alt='Search Icon' className='filmbox-search'></img>
                </Link>

                {/* Hamburger Menu */}
                {menu ? <div className='filmbox-hamburger' onClick={showMenu}>
                    <motion.span animate={{ x: 8 }}></motion.span>
                    <motion.span></motion.span>
                    <motion.span animate={{ x: -8 }}></motion.span>

                </div> : <div className='filmbox-hamburger' onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}

                {/* Desktop version of the nav links*/}
                <div>
                    <ul className='filmbox__pages-desktop'>
                        <li><Link to='/watchlist'>Watchlist</Link><span className={watchlist.length > 0 ? 'watchlist-count' : 'watchlist-none'}>{watchlist.length}</span></li>
                        <li><Link to='/recommendation'>Recommendation</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar