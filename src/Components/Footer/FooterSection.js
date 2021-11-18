import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../Styles/footer.css'

function FooterSection() {


    return (
        <div>
            <Row className="footer-sec">
                <Col xs={12} sm={12} md={4} lg={4}>
                    <div className="footer-section">
                        <h3>About US</h3>
                        <Link to='/' className='about-link'>
                            <p>About Us</p>
                        </Link>
                        <Link to='/' className='about-link'>
                            <p>About Us</p>
                        </Link>
                        <Link to='/' className='about-link'>
                            <p>About Us</p>
                        </Link>
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
                </Col>
                <hr />
                <div>
                     &developedBy;{new Date().getFullYear()} | Baidya IT | All Rights Reserved | <span className='polotana-text'>Polotana Ramakrishna Seba-Ashram</span> 
                </div>
            </Row>
        </div>
    )
}

export default FooterSection
