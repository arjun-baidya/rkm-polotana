import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../../Styles/carousel.css'
function BannerCarousel() {
    return (
        <div>
            <Carousel fade className="carousel-section">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/b1.jpg"
                    alt="First slide"
                    title="Ramakrishna Seba Ashram Polotana"
                    fluid
                    />
                    {/* <Carousel.Caption>
                    <div className="carousel-text">
                        <h3>New Product</h3>
                        <p>Durga Puja Collection</p>
                    </div>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/b2.jpg"
                    alt="Second slide"
                    title="Ramakrishna Seba Ashram Polotana"
                    fluid
                    />
                    {/* <Carousel.Caption>
                    <div className="carousel-text">
                        <h3>New Product</h3>
                        <p>Durga Puja Collection</p>
                    </div>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/b3.jpg"
                    alt="Third slide"
                    title="Ramakrishna Seba Ashram Polotana"
                    fluid
                    />
                    {/* <Carousel.Caption>
                    <div className="carousel-text">
                        <h3>New Product</h3>
                        <p>Durga Puja Collection</p>
                    </div>
                    </Carousel.Caption> */}
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default BannerCarousel
