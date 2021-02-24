import React from 'react'
import { OptionCardContainer } from '../styles/MainDashboardStyles'
import { useHistory } from 'react-router-dom'

const OptionCard = ({ iconColor, FaItemElement, text, href }) => {
    const history = useHistory()

    return (
        <OptionCardContainer iconColor={iconColor} onClick={() => history.push(href)}>
            {FaItemElement}
            <p>{text}</p>
        </OptionCardContainer>
    )
}

export default OptionCard
