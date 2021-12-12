import React,{useEffect,useState} from 'react'
import { Row, Button, Col, Container, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import '../../Styles/pujas.css'

function Pujas() {

    const [allPuja, setAllPuja] = useState(true)
    const [durgaPuja, setDurgaPuja] = useState()
    const [ramakrishna, setRamakrishna] = useState()
    const [maa, setMaa] = useState()
    const [vivekananda, setVivekananda] = useState()

    const [pujasData, setPujasData] = useState([]);
    console.log('puja',pujasData);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/pujas/")
        .then(res => {
         setPujasData(res.data);
                      
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const allPujaHandle =()=>{
        setAllPuja(true)
        setDurgaPuja(false)
        setRamakrishna(false)
        setMaa(false)
        setVivekananda(false)
    }

    const durgaPujaHandle =()=>{
        setAllPuja(false)
        setDurgaPuja(true)
        setRamakrishna(false)
        setMaa(false)
        setVivekananda(false)
    }

    const rkmPujaHandle =()=>{
        setAllPuja(false)
        setDurgaPuja(false)
        setRamakrishna(true)
        setMaa(false)
        setVivekananda(false)
    }

    const maaPujaHandle =()=>{
        setAllPuja(false)
        setDurgaPuja(false)
        setRamakrishna(false)
        setMaa(true)
        setVivekananda(false)
    }

    const swamijiPujaHandle =()=>{
        setAllPuja(false)
        setDurgaPuja(false)
        setRamakrishna(false)
        setMaa(false)
        setVivekananda(true)
    }

    return (
        <div className="pujas-btn-div">
            <h1>Puja</h1>
            <Container>
                <Row >
                <Col md={8}>
                    <Row>
                        <Col sm={4} md={2} >
                        <Button onClick={allPujaHandle} variant='outline' className="puja-btn" >ALL</Button>
                        </Col>
                        <Col sm={4} md={2}>
                        <Button onClick={durgaPujaHandle} variant='outline' className="puja-btn" >Durga-Puja</Button>
                        </Col>
                        <Col sm={4} md={2}>
                        <Button onClick={rkmPujaHandle} variant='outline' className="puja-btn" >Ramakrishna</Button>
                        </Col>
                        <Col sm={4} md={2}>
                        <Button onClick={maaPujaHandle} variant='outline' className="puja-btn" >Maa</Button>
                        </Col>
                        <Col sm={4} md={2}>
                        <Button onClick={swamijiPujaHandle} variant='outline' className="puja-btn" >Swamiji</Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                </Col>
            </Row>
            <Row>
                {
                    allPuja &&(
                        <div>
                            <Row className="puja-pic-row">
                                { pujasData.map((puja,index)=>(
                                <Col sm={6} md={4} className='puja-card-col' key={index}>
                                    <Card className="puja-pic-card">
                                        <Card.Img src={puja.puja_pic} className="puja-pic" variant='top' fluid />
                                        <Card.Body>
                                            <p>{puja.title} <FontAwesomeIcon className='rightArrow' icon={faChevronCircleRight} /></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                ))}
                            </Row>
                        </div>
                    )
                }

                {
                    durgaPuja &&(
                        <div>
                            <Row className="puja-pic-row">
                                <Col sm={6} md={4}>
                                    <Card className="puja-pic-card">
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>Durga Puja <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></p>
                                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>Puja Joggo</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>Puja</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>Puja</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                }

                {
                    ramakrishna &&(
                        <div>
                            <Row className="puja-pic-row">
                                <Col sm={6} md={4}>
                                    <Card className="puja-pic-card">
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></p>
                                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                }

                {
                    maa &&(
                        <div>
                            <Row className="puja-pic-row">
                                <Col sm={6} md={4}>
                                    <Card className="puja-pic-card">
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></p>
                                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                }

                {
                    vivekananda &&(
                        <div>
                            <Row className="puja-pic-row">
                                <Col sm={6} md={4}>
                                    <Card className="puja-pic-card">
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></p>
                                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6} md={4}>
                                    <Card>
                                        <Card.Img className="puja-pic" variant='top' src="./images/oum2.jpeg" fluid />
                                        <Card.Body>
                                            <p>fadjfjadf</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </Row>
            </Container>
        </div>
    )
}

export default Pujas
