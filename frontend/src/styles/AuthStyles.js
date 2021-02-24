import styled from 'styled-components'
import { device, colors, defaultMargin } from '../utils/definitions'

export const AuthContainer = styled.div`
    width: 500px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
    display: grid;
    place-items: center;
    border-radius: 5px;
    margin-top: 30px;
    padding: 30px 0;
    
    .cards{
        display: flex;
        justify-content: space-between;

        margin: 20px 0;
        .cards__item{
            box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
            border-radius: 5px;
            padding: 15px;
            position: relative;
            display: grid;
            place-items: center;
            cursor: pointer;
            .icon__2x{
                font-size: 2rem;
            }
            p{
                text-transform: uppercase;
                font-size: 0.875rem;
            }

            .MuiSvgIcon-root{
                position: absolute;
                right: -10px;
                bottom: -10px;
                color: ${colors.darkblue};
                font-weight: bold;
                z-index: 3;
                box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
                border-radius: 50%;
                background-color: ${colors.goldish};
            }
        }
        .cards__item:first-child{
            margin-right: 20px;
        }
    }

    .authitems{
        display: flex;
        flex-direction: column;
        .formcontrol{
            width: 400px;
            margin-top: 30px;
        }
        .submitbutton{
            width: 80%;
            margin: 0 auto;
            margin-top: 20px;
        }
    }
`

export const SignInContainer = styled.div`
    margin-top: ${defaultMargin};
    display: grid;
    place-items: center;
`