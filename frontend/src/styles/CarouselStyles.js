import styled from 'styled-components'
import { device, colors } from "../utils/definitions"

export const CarouselContainer = styled.div`
    .awssld{
        --slider-height-percentage: 40%;
    }
    .awssld__content{
        ${'' /* background-color: #292c35; */}
       
        background-size: cover;
        background-blend-mode: lighten;
        .carousel__content.first{
            background-image: url(/images/mallamadamu.jpg);
            
        }
        .carousel__content.second{
            background-image: url(/images/esubec.png);
            background-position-y: -150pt;
            
        }
        
        .carousel__content{
            background-size: cover;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            .carousel__text{
                width: 35%;
                color: ${colors.white};
                margin-right: 100px;
                h3{
                    font-size: 1.5rem;
                    margin-bottom: 20px;
                    width: fit-content;
                    border-bottom: 2px solid ${colors.goldish}
                }
                p{
                    font-size: 1rem;
                    margin-top: 5px;
                }

                @media ${device.tablet}{
                    margin-right: 60px;
                    p{
                        font-weight: 500;
                    }
                   .carousel__message_2{
                       display: none;
                       
                   }
                }
            }
        }
        
    }
`