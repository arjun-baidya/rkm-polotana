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
                                শান্তির খোজে কখনো নিজের দায়ত্ব নিজের কর্ম কে ত্যাগ করা হল মুর্খামি” -স্বামী বিবেকানন্দ
                                </p>
                                <div>
                                    <Button className="donation-btn">Donate</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="donation-card">
                            <Card.Img className="donation-img" variant="top" src="./images/food.jpg" fluid/>
                            <Card.Title>
                                <p className="donation-title">Food Donation</p>
                            </Card.Title>
                            <Card.Body>
                                <p className="card-text">
                                “জীবনে পাপ পুণ্য হিসাব না করে, নিষ্কাম কর্ম করার প্রতি একনিষ্ঠ হওয়া প্রয়োজন।”
                                -স্বামী বিবেকানন্দ
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
                                "ওঠো, জাগো থেমনা যতক্ষণ না নিজের লক্ষ্যে পৌছছ”-স্বামী বিবেকানন্দ
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
