import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import '../../Styles/event.css'

function Event() {
    return (
        <div>
            <Container className='events-container'>
                <h1 className='event-title'>Upcoming Events </h1>
                <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                    <Card className="event-card">
                        <Card.Body>
                        <Card.Title className='event-title-name'>Birthtithi of Swami Vivekananda</Card.Title>
                        <Card.Text className='event-text'>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button className='event-details-btn'>Details</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default Event
