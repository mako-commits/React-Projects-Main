import React from 'react'
import Card from 'react-bootstrap/Card'
function CardDetail(props) {
    return (
        <>
            <Card style={{ width: '18rem' }} >

                <Card.Body>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Title><h4>{props.title}</h4></Card.Title>
                    <Card.Text>
                        <p>{props.text}</p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default CardDetail
