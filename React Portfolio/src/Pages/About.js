import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import experience from '../components/Data/experienceData'
import { FaAngleDoubleRight } from 'react-icons/fa'
import styles from '../components/About.css'
import { red } from '@material-ui/core/colors';




function About() {
    const [jobs, setJobs] = useState(experience);
    const [value, setValue] = useState(0)

    console.log(jobs)


    const { company, dates, duties, title } = jobs[value];

    return (
        <Container  >

            <Grid container spacing={2}>

                <Grid item xs={12} lg={5} >
                    <div >

                        {/* <img
                            src="../../public/item-2.jpeg"
                            alt="avatar"
                            style={{ height: '200px' }}
                        /> */}
                        <div className='title' style={{ marginBottom: '3rem', marginTop: '3rem' }}>
                            <h2>About me</h2>
                            <div className='underline'></div>
                        </div>
                        <h2 style={{ paddingTop: '0em' }}>Mustapha Mubarak</h2>
                        <h4 style={{ color: 'grey' }}>Frontend Developer</h4>
                        <hr style={{ borderTop: '3px solid hsl(205, 86%, 17%)', width: '50%' }} />
                        <p>My main area of expertise is Frontend Development.</p>
                        <p>I use HTML, CSS & JS (React) for responsive, interactive webpages and web apps.</p>
                        <p>I also have experience with backend development using NodeJS, database development with MySql and Git version Control.</p>
                        <hr style={{ borderTop: '3px solid hsl(205, 86%, 17%)', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Kuje,Abuja,Nigeria</p>
                        <h5>Phone</h5>
                        <p>(+234) 807 245 5154</p>
                        <h5>Email</h5>
                        <p>pythagoras.dev15@gmail.com</p>

                    </div>
                </Grid>
                <Grid item xs={12} lg={7} style={{ marginTop: '8px', backgroundColor: 'hsl(205, 86%, 17%)' }} >
                    <section className='section' >
                        <div className='title'>
                            <h2>experience</h2>
                            <div className='underline'></div>
                        </div>
                        <div className='jobs-center'>


                            <div className='btn-container'>
                                {
                                    jobs.map((item, index) => {

                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => setValue(index)}
                                                // if the index of the button matches the current setValue,then add active-btn property
                                                className={`job-btn ${index === value && 'active-btn'}`}
                                            >
                                                {item.company}
                                            </button>
                                        )
                                    })
                                }
                            </div>

                            <article className='job-info'>
                                <h3>{title}</h3>
                                <h4>{company}</h4>
                                <p className='job-date'>{dates}</p>

                                {duties.map((duty, id) => {


                                    return (<div key={id} className='job-desc'>
                                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                                        <p>{duty}</p>
                                    </div>
                                    )
                                })}
                                <a className='job-btn btn' href="./cv/Mustapha Mubarak Frontend CV.pdf" download="Mustapha Mubarak Frontend CV">Download CV</a>
                            </article>

                        </div>
                    </section>
                </Grid>
            </Grid>
        </Container >
    )
}

export default About
