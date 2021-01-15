import React from 'react'
import introBgMobile from '../images/image-intro-mobile.jpg'
import introBgDesktop from '../images/image-intro-desktop.jpg'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import introLeftMb from '../images/bg-pattern-intro-left-mobile.svg'
import introRightMb from '../images/bg-pattern-intro-right-mobile.svg'
import introLeftDesktop from '../images/bg-pattern-intro-left-desktop.svg'
import introRightDesktop from '../images/bg-pattern-intro-right-desktop.svg'
function Intro() {
    return (
        <>
            <section id='intro'>
                <img src={introBgMobile} alt='img' className='introBgMobile ' />
                <img src={introBgDesktop} alt='img' className='introBgDesktop  d-none d-lg-block' />
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <img src={introRightDesktop} alt='img' className='introRightDesktop d-lg-block d-none  ' />
                        <Container maxWidth='sm'>
                            <div className='desktop-intro-section '>
                                <div className="intro-text-area-inner">
                                    <h2 className="intro-main">Humanizing <br />your insurance.</h2>
                                    <p className="intro-text">Get your life insurance coverage easier and faster. We blend our expertise
                                    and technology to help you find the plan that’s right for you. Ensure you
                                and your loved ones are protected.</p>

                                    <button className="intro-btn">View Plans</button>
                                </div>
                            </div>

                        </Container>
                        <img src={introLeftDesktop} alt='img' className='introLeftDesktop d-lg-block d-none' />
                        <div className='mobile-intro-section'>
                            <Container>
                                <div className="mb-intro-text-area-inner ">

                                    <h2 className="intro-main">Humanizing <br />your insurance.</h2>
                                    <p className="intro-text">Get your life insurance coverage easier and faster. We blend our expertise
                                    and technology to help you find the plan that’s right for you. Ensure you
                                and your loved ones are protected.</p>

                                    <button className="intro-btn">View Plans</button>

                                </div>
                            </Container>

                        </div>
                    </Grid>
                </Grid>
            </section>

        </>
    )
}

export default Intro
