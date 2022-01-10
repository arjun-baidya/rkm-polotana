import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../../Styles/carousel.css'
function BannerCarousel() {
    return (
        <div>
            <Carousel controls={false} fade className="carousel-section">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/b4.jpg"
                    alt="First slide"
                    title="Ramakrishna Seba Ashram Polotana"
                    fluid
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/b5.jpg"
                    alt="Second slide"
                    title="Ramakrishna Seba Ashram Polotana"
                    fluid
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/b6.jpg"
                    alt="Third slide"
                    title="Ramakrishna Seba Ashram Polotana"
                    fluid
                    />
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default BannerCarousel
