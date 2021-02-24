import React from 'react'
import Carousel from "../components/HomeCarousel"
import Partners from "../components/Partners"
import { HomeContainer } from '../styles/HomeStyles'

const HomePage = () => {
    return (
        <HomeContainer>
            <Carousel />
            <Partners />
        </HomeContainer>
    )
}

export default HomePage
