import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../Styles/inspiration.css'

function Inspiration() {
    return (
        <div className="inspiration">
            <div className="inspiration-header">
                <h1>Our Inspiration</h1>
            </div>
            <div className="donation-body">
                <Container>
                    <Row>
                    <Col xs={12} md={4} sm={12}>
                        <Card className="inspiration-card">
                            <Card.Img className="inspiration-img" variant="top" src="./images/thakur.jpg" fluid/>
                            <Card.Body>
                                <div>
                                    <Link to="/">
                                        <Button className="inspiration-btn">Sri Ramakrishna</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} sm={12}>
                        <Card className="inspiration-card">
                            <Card.Img className="inspiration-img" variant="top" src="./images/maa.jpg" fluid/>
                            <Card.Body>
                                <div>
                                    <Link to="/">
                                        <Button className="inspiration-btn">Holy Mother Sarada Devi</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} sm={12}>
                        <Card className="inspiration-card">
                            <Card.Img className="inspiration-img" variant="top" src="./images/swami-vivekananda.jpg" fluid/>
                            <Card.Body>
                                <div>
                                    <Link to="/">
                                        <Button className="inspiration-btn">Swami Vivekananda</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default Inspiration
