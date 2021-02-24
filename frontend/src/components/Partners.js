import React from 'react'
import { PartnerContainer } from '../styles/PartnerStyles'

const Partners = () => {
    return (
        <PartnerContainer>
            <h4>Our Partners</h4>
            <div className='content'>
                <img src="/images/esspin.png" alt="esspin" />
                <img src="/images/unicef.png" alt="unicef" />
                <img src="/images/jollyphonics.png" alt="jollyphonics" />
                <img src="/images/koica.jpg" alt="koica" />
            </div>
        </PartnerContainer>
    )
}

export default Partners
