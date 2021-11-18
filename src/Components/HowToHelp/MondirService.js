import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import '../../Styles/mondirservice.css'

function MondirService() {
    return (
        <div>
            <Row className="mondir-service-row">
                    <Col xs={12} md={4} className="mondir-service-left-col1">
                        <Card className="mondir-service-card1">
                            <h1>hjf</h1>
                        </Card>
                    </Col> 
                    <Col xs={12} md={4} className="mondir-service-left-col2">
                        <Card className="mondir-service-card2">
                            <h1>hjf</h1>
                        </Card>
                    </Col> 
                    <Col xs={12} md={4} className="mondir-service-left-col3">
                        <Card className="mondir-service-card3">
                            <h1>hjf</h1>
                            <i class="fas fa-arrow-right"></i>
                        </Card>
                    </Col> 
                    <div className="mondir-service-link">
                        <a href="/"> Get Start</a>
                    </div>
            </Row>
        </div>
    )
}

export default MondirService
