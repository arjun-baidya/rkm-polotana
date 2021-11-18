import React from 'react'
import AboutShort from '../AboutShort/AboutShort'
import BannerCarousel from '../Carousel/BannerCarousel'
import Donation from '../Donate/Donation'
import MondirService from '../HowToHelp/MondirService'
import Inspiration from '../Inspiration/Inspiration'
import News from '../News/News'
import Pujas from '../Pujas/Pujas'

function Home() {
    return (
        <div>
            <BannerCarousel />
            <News />
            <Inspiration />
            <AboutShort />
            <MondirService />
            <Donation />
            <Pujas />
        </div>
    )
}

export default Home
