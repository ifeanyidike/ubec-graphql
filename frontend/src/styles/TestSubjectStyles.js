import styled from 'styled-components'
import { device, colors, defaultMargin } from '../utils/definitions'

export const SubjectPane = styled.div`
    border-radius: 10px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
    width: 50%;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    
    span{
        text-transform: uppercase;
        font-weight: 600;
        &:hover{
            color: ${colors.gold};
        }
    }
    .MuiSvgIcon-root{
        color: ${colors.sweetRed};
        position: absolute;
        right: 0;
        bottom: 10px;
    }
`

export const SubjectsContainer = styled.div`
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
`

export const TestPaneMainContainer = styled.div`
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

    .time{
        margin-bottom: 20px;
        font-size: 1.5rem;
        color: ${colors.sweetRed};
        font-weight: 800;
        display: flex;
        align-items: center;
        .MuiSvgIcon-root{
            margin-right: 3px;
        }
    }

    .actions{
        margin-top: 20px;
        width: 60%;
        display:flex;
        justify-content: space-around;
    }
`

export const TestPaneContainer = styled.div`
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
    width:60%;
    border-radius: 5px;
    padding: 20px;
    .question{
        margin: 15px 0;
    }
`

export const NameSubjectContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    .subject, .student{
        text-transform: uppercase;
        color: ${colors.darkblue};
    }
    .subject{
        font-weight: 700;
        font-size: 1.5rem;
    }
    .student{
        font-weight: 500;
    }
`

export const ScorePageContainer = styled.div`
    margin-top: calc(${defaultMargin} + 50px);
    display: grid;
    place-items: center;

    .score{
        box-shadow: 0 1px 1px 1px ${colors.darkblue}, 0 0 1px 1px ${colors.darkblue};
        padding: 20px 50px;
        margin: 30px 0;
        border-radius: 10px;
        p{
            font-size: 1.2rem;
            margin-bottom: 20px;
        }
        span{
            font-size: 1.6rem;
            margin-bottom: 20px;

            .scoreValue, .total{
                font-weight: 700;
                font-size: 1.8rem;
            }
            .scoreValue{
                color: ${props => props.scoreColor}
            }
        }
    }
`