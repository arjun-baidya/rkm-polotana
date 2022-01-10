import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../Styles/footer.css'
import Dates from '../DateTime/Dates';
import Clock from '../DateTime/Clock';

function FooterSection() {

    // let today = new Date();

    // let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    return (
        <div className='footer-full-div'>
            <Row className="footer-sec">
                <Col xs={12} sm={12} md={4} lg={4}>
                    <div className="footer-section">
                        <h3>Contact US</h3>
                        <p className="footer-rkm-name">Ramakrishna Seba Ashram Polotana</p>
                        <p className="footer-contact-text">Bangladesh,Gopalganj,Kotalipara,Polotana</p>
                        <p className="footer-contact-text">+8801732777132</p>
                        <p className="footer-contact-text">rksapolotana@gmail.com</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                    <div className="footer-section">
                        <h3>Connection Link</h3>
                        <Link to='/' className='about-link'>
                            <p>FaceBook</p>
                        </Link>
                        <Link to='/' className='about-link'>
                            <p>Youtube</p>
                        </Link>
                        <Link to='/' className='about-link'>
                            <p>Instragram</p>
                        </Link>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                    <div>
                        <p className="rkm-timing">Ramakrishna Seba Ashram Polotana Timings</p>
                        <p className="footer-time-text">Morning   : 6.00 to 12.00 am</p>
                        <p className="footer-time-text">Evening   :  4.30 to 10.00 pm</p>
                        <Clock />
                        <Dates />
                    </div>
                </Col>
                <hr />
                <div className="pb-4">
                     &developedBy;{new Date().getFullYear()} | <a href='https://web.facebook.com/ac.baidya/' target='blank'>Arjun Baidya</a> | All Rights Reserved | <span className='polotana-text'>Polotana Ramakrishna Seba-Ashram</span> 
                </div>
            </Row>
        </div>
    )
}

export default FooterSection
