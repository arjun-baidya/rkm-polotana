import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import "../../Styles/volunteers.css";


function Volunteers() {
    return (
        <div>
            <Container>
                <Row className='volunteers-row'>
                    <Col sm={12} md={8}>
                        <div className='volunteers-div'>
                            <h1>Monk</h1>
                            <p>
                                Br. Bijon Maharaj is the main monk in this ashram and Maharaj is in charge of this ashram.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='volunteers-image-div'>
                            <Card className='maharaj-card'>
                            <Card.Img variant="top" src="./images/maharaj.png" className='maharaj-image' fluid/>
                            <Card.Body>
                                <p className='maharaj-name'>Br. Bijon Maharaj </p>
                                <p>Temple Monk </p>
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
