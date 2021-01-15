import React from 'react'

function CardDetail(props) {
    return (
        <>
            <div style={{ width: '18rem', margin: '0 auto' }}  >

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
