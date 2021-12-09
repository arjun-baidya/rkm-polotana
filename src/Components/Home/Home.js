import React from 'react'
import AboutShort from '../AboutShort/AboutShort'
import Bani from '../Bani/Bani'
import BannerCarousel from '../Carousel/BannerCarousel'
import Donation from '../Donate/Donation'
import Inspiration from '../Inspiration/Inspiration'
import News from '../News/News'
import Pujas from '../Pujas/Pujas'
import Volunteers from '../Volunteers/Volunteers'

function Home() {
    return (
        <div>
            <Bani />
            <BannerCarousel />
            <News />
            <Inspiration />
            <AboutShort />
            <Donation />
            <Pujas />
            <Volunteers />
        </div>
    )
}

export default Home
