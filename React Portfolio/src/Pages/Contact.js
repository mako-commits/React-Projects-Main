import React from 'react'
import * as FaIcons from 'react-icons/fa'

function Contact() {
    return (
        <>
            <section className="contactsection" id="contact">
                <div className='title'>
                    <h2>Get in touch</h2>
                    <div className='underline'></div>
                </div>

                <div className="contact-info">
                    <div className="card">
                        <FaIcons.FaEnvelope className='card-icon' />
                        <p>pythagoras.dev15@gmail.com</p>
                    </div>

                    <div className="card">
                        <FaIcons.FaPhone className='card-icon' />
                        <p>+234 807-245-5154</p>
                    </div>

                    <div className="card">
                        <FaIcons.FaMapPin className='card-icon' />
                        <p>Pegi Estate,Kuje,Abuja</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
