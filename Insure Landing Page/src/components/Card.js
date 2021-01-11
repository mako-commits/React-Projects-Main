import React from 'react'
import cardDetail from '../data'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import GridListTile from '@material-ui/core/GridListTile';
import { GridList } from '@material-ui/core';
function Card() {
    return (
        <>
            <Container>
                <GridListTile item xs={3} col={2.5}>
                    {cardDetail.map((detail) => {
                        const { id, img, title, text } = detail;
                        return (
                            <div className='card'>


                                <div className='about-info'>
                                    <img src={img} />
                                    <h4 className='about-info-heading'>{title}</h4>
                                    <p>{text}</p>
                                </div>



                            </div>


                        )
                    })}
                </GridListTile>
            </Container>
        </>
    )
}

export default Card
