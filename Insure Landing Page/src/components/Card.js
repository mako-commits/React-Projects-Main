import React from 'react'
import cardDetail from '../data'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import GridListTile from '@material-ui/core/GridListTile';
import Card from 'react-bootstrap/Card'
import { GridList } from '@material-ui/core';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import CardDetail from './CardDetail'
import snappyImg from '../images/icon-snappy-process.svg'
import affordableImg from '../images/icon-affordable-prices.svg'
import peopleImg from '../images/icon-people-first.svg'

function Carrd() {
    return (
        <>
            <section className='about'>
                <Container>

                    <h3 className="about-heading">We're different</h3>
                    <Row className='card'>
                        <Col>
                            <CardDetail
                                img={snappyImg}
                                title='snappy process'
                                text='Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.'
                            >

                            </CardDetail>
                        </Col>
                        <Col>
                            <CardDetail
                                img={affordableImg}
                                title='affordable prices'
                                text='We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.'
                            >

                            </CardDetail>
                        </Col>

                        <Col>
                            <CardDetail
                                img={peopleImg}
                                title='people first'
                                text='Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.'
                            >

                            </CardDetail>
                        </Col>




                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Carrd
