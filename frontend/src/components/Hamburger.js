import React from 'react'
import { HamburgerContainer } from '../styles/HeaderStyles'
import { useDispatch } from 'react-redux'
import { DRAWER_OPEN } from '../redux/constants/utilConstants'

const Hamburger = () => {

    const animateDrawer = () => {
        const navLinks = document.querySelectorAll("nav ul li.item");
        navLinks.forEach((link, ind) => {
            link.style.animation = `navlinkfade 1s ease forwards ${ind / 2 + 0.8}s`
        })
    }
    const dispatch = useDispatch()
    const handleHamburgerClick = () => {
        animateDrawer()
        dispatch({ type: DRAWER_OPEN })
    }

    return (
        <HamburgerContainer onClick={handleHamburgerClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </HamburgerContainer>
    )
}

export default Hamburger
