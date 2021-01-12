import React from 'react'
import Card from 'react-bootstrap/Card'
function CardDetail(props) {
    return (
        <>
            <div style={{ width: '18rem' }}  >

                <div>
                    <img src={props.img} />
                    <h4 className='about-title'>{props.title}</h4>

                    <p className='about-paragraph'>{props.text}</p>


                </div>
            </div>
        </>
    )
}

export default CardDetail
