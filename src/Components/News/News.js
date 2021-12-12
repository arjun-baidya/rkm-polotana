import React,{useEffect,useState} from 'react'
import { Accordion, Container, Row } from 'react-bootstrap';
import axios from "axios";
import '../../Styles/news.css';

function News() {

    const [newsData, setNewsData] = useState([]);
    console.log(newsData);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/news/")
        .then(res => {
         setNewsData(res.data);
                      
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

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
                                {newsData.map((news,index) => (
                                <Accordion.Item eventKey="0" className='accordian-section' key={index}>
                                <Accordion.Header >
                                    <div className="news-item-title">
                                        <p> {news.title} </p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        {news.description}
                                    </p>
                                </Accordion.Body>
                                </Accordion.Item>
                                ))}
                                <br />
                            </Accordion>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default News;
