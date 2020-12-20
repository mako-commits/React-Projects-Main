import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <p className="footer__title">Pythagoras-Dev</p>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/mubarak-mustapha-b839091a7/" target="_blank" className="footer__icon">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/pythagoras-dev" target="_blank" className="footer__icon">
                    <FaGithub /> </a>
                <a href="#" className="footer__icon"><FaTwitter /></a>
            </div>
            <p>&#169; 2020 copyright all right reserved</p>
        </footer>
    )
}

export default Footer
