import styled from 'styled-components'
import { device, colors } from "../utils/definitions"

export const PartnerContainer = styled.div`
    margin: 20px 0;
    h4{
        margin: 10px 0 10px 45px;
        font-weight: 400;
        font-size: 2rem;
        border-bottom: 2px solid ${colors.goldish};
        width: fit-content;
    }
    .content{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        img{
            height: 70px;  
        }
    }
`