import React,{useEffect,useState} from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from "axios";
import '../../Styles/event.css'

function Event() {
    const [eventsData, setEventsData] = useState([]);
    console.log('event',eventsData);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/events/")
        .then(res => {
         setEventsData(res.data);
                      
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <Container className='events-container'>
                <h1 className='event-title'>Upcoming Events </h1>
                <Row xs={1} md={3} className="g-4">
                {eventsData.slice(0,4).reverse().map((event,index) => (
                    <Col key={index}>
                    <Card className="event-card">
                        <Card.Body>
                        <Card.Title className='event-title-name'>{event.title}</Card.Title>
                        <Card.Text className='event-text'>
                            {event.description}
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
