import styled from 'styled-components'
import { device, colors, defaultMargin } from "../utils/definitions"

export const MainAreaContainer = styled.div`
    margin-top: calc(${defaultMargin} + 50px);
    display: grid;
    place-items: center;
    
    
    &:before{
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.1;
        background-image: url(/images/ubeclogo.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 0;

    }

    h2{
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
`

export const MainDashboardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media ${device.tablet}{
        grid-template-columns: repeat(3, 1fr)
    }
    grid-gap: 40px;
    margin-top: 30px;
`

export const OptionCardContainer = styled.div`
    width: 230px;
    height: 130px;
    border-radius: 10px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .faicon{
        font-size: 2.5rem;
        color: ${props => props.iconColor}
    };
    p{
        text-transform: uppercase;
        font-size: 0.9rem;
        margin-top: 10px;
        font-weight: 500
    }

`