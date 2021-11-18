import React from 'react'
import { Card, Col, Container, Row,Button } from 'react-bootstrap'
import '../../Styles/donation.css'

function Donation() {
    return (
        <div className="donation">
            <div className="donation-header">
                <p> Make a Donation </p>
                <h1>Donation Us to Help</h1>
            </div>
            <div className="donation-body">
                <Container>
                    <Row>
                    <Col xs={12} md={4}>
                        <Card className="donation-card">
                            <Card.Img className="donation-img" variant="top" src="./images/mondir.jpg" fluid/>
                            <Card.Title>
                                <p className="donation-title">Mondir</p>
                            </Card.Title>
                            <Card.Body>
                                <p className="card-text">
                                    Temple is place where hindu worship consectetur adipisicing elit, sed do
                                </p>
                                <div>
                                    <Button className="donation-btn">Donate</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="donation-card">
                            <Card.Img className="donation-img" variant="top" src="./images/foodHelp.jpg" fluid/>
                            <Card.Title>
                                <p className="donation-title">Food Donation</p>
                            </Card.Title>
                            <Card.Body>
                                <p className="card-text">
                                    Temple is place where hindu worship consectetur adipisicing elit, sed do
                                </p>
                                <div>
                                    <Button className="donation-btn">Donate</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="donation-card">
                            <Card.Img className="donation-img" variant="top" src="./images/education.jpg" fluid/>
                            <Card.Title>
                                <p className="donation-title">Education Donation</p>
                            </Card.Title>
                            <Card.Body>
                                <p className="card-text">
                                    Temple is place where hindu worship consectetur adipisicing elit, sed do
                                </p>
                                <div>
                                    <Button className="donation-btn">Donate</Button>
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

export default Donation
