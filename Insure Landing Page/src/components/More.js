import React from 'react'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function More() {
    return (
        <section className='container'>
            <div className='more-inner'>
                <div className="row inner-more">
                    <div className="col-md-9 col-sm-12">
                        <h2>Find out more <br />about how we work</h2>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <button className="more-btn">How We Work</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default More
