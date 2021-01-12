import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
function Footer() {
    return (
        <section id='footer'>
            <div class='container'>
                <div className="row footer-top">
                    <div className="col-md-10 col-sm-12">
                        <img src={logo} alt="img" class="col-md-1 col-sm-1 footer-logo" />
                    </div>
                    <div className="col-md-2 col-sm-4 social">
                        <ul className="social-links">
                            <li><a href="#"><img src={facebook} alt="img" /></a></li>
                            <li><a href="#"><img src={twitter} alt="img" /></a></li>
                            <li><a href="#"><img src={pinterest} alt="img" /></a></li>
                            <li><a href="#"><img src={instagram} alt="img" /></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div class="row footer-bottom">
                    <div class="col-md-3 col-sm-12 ">
                        <ul>
                            <li class="mb-3  list-head">Our Company</li>
                            <li><a href="#">How we work</a></li>
                            <li><a href="#">Why Insure</a></li>
                            <li><a href="#">View Plans</a></li>
                            <li><a href="#">Review</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <ul>
                            <li class="mb-3  list-head">Help me</li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Cookies</a></li>

                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <ul>
                            <li class="mb-3  list-head">Contact</li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Live chat</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-12">

                        <ul>
                            <li class="mb-3 list-head">Others</li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Licenses</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Footer
