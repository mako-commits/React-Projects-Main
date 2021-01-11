import React, { useState, Component } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links } from '../data'
import logo from '../images/logo.svg'
import bgNav from '../images/bg-pattern-mobile-nav.svg'



const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)


    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' />
                    {/* <Logo /> */}

                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>

                <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`} >
                    <div className='inner'>
                        <ul className='links' >
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                            <li><button className='nav-btn'>view plans</button></li>
                        </ul>
                        <img src={bgNav} alt="bgNav" className='bg-nav-mobile' />
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar
