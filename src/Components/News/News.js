import React from 'react'
import { Accordion, Container, Row } from 'react-bootstrap';
import '../../Styles/news.css';

function News() {
    return (
        <div>
            <Container>
                <Row className="news-row">
                    <div className="news-container">
                        <div className="news-title">
                            <h1> Latest News</h1>
                        </div>
                        <div className="news-content">
                            <Accordion defaultActiveKey="1" className='accordian-section'>
                                <Accordion.Item eventKey="0" className='accordian-section'>
                                <Accordion.Header >
                                    <div className="news-item-title">
                                        <p>Short report of Sadhu Bhandara and memorial meeting of the passing away of Rev. Sw. Ameyanandaji Maharaj</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                                <br />
                            <Accordion.Item eventKey="1" className='accordian-section'>
                                <Accordion.Header >
                                    <div className="news-item-title">
                                        <p>Short report of Sadhu Bhandara and memorial meeting of the passing away of Rev. Sw. Ameyanandaji Maharaj</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default News
