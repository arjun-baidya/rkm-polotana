import React from 'react'
import { Col, Container, Image, Row , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../Styles/aboutShort.css'

function AboutShort() {
    return (
        <div>
            <Container>
                <Row className="mt-5 short-about-row">
                <Col xs={12} md={6} className="short-about-left-col">
                    <Image className="about-image" src="./images/Swamiji.jpg" fluid />
                </Col>
                <Col xs={12} md={6}>
                    <div className="short-about-right-col-f-div">
                        <Image className="about-image-right" src="./images/oum1.jpeg" fluid />
                    </div>
                    <div className="about-paragrapg">
                        <p>
                            We are a Hindu that 
                            <br />
                            <span>believe in Ram</span>
                        </p>
                    </div>
                    <div className="about-para-two" >
                        <p>
                            We are a Hindu that belives in Lord Rama and Vishnu Deva the followers and We are a Hindu that belives in Lord Rama and Vishnu Deva.
                        </p>
                    </div>
                    <Link to='/details' >
                        <Button className="about-btn"  variant="outline-success">About Ourself</Button>
                    </Link>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default AboutShort
