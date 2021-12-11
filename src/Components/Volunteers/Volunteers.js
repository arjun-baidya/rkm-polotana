import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import "../../Styles/volunteers.css";


function Volunteers() {
    return (
        <div>
            <Container>
                <Row className='volunteers-row'>
                    <Col sm={12} md={7}>
                        <div className='volunteers-div'>
                            <h1>Volunteers</h1>
                            <p>
                                We are a Hindu that belives in Lord Rama and Vishnu Deva the followers and We are a Hindu that belives in Lord Rama and Vishnu Deva.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <div className='volunteers-image-div'>
                            <Card className='maharaj-card'>
                            <Card.Img variant="top" src="./images/majaraj.jpeg" className='maharaj-image' fluid/>
                            <Card.Body>
                                <p className='maharaj-name'>Br. Bijon Maharaj </p>
                                <p>temple Monk </p>
                            </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Volunteers
