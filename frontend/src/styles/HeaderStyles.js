import styled from 'styled-components'
import { device, colors, defaultMargin } from '../utils/definitions'


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    height: ${defaultMargin};
    border-bottom: 1px solid ${colors.headerBorder};
    background-color: ${colors.white};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;

    .logo{

        img{
            width: 100%;
        }
    }

    @media ${device.tablet}{
        align-items: center;
        
    }
    
    a{
        text-transform: uppercase;
        text-decoration: none;
        color: ${colors.black};
        font-size: 0.9rem;
       
    }
    
    .header__left{
        display: flex;
        flex: 0.6;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        div.menuitem{
            height: 100%;
            width: 100%;
            border-right: 1px solid ${colors.headerBorder};
            display: grid;
            place-items: center;
            &:hover{
                border-bottom: 2px solid ${colors.white}
            }
            
        }
        
        div.megamenu{
            &:hover .megamenuitem{
                display: flex;
            }

            .megamenuitem{
                position: fixed;
                top: 70px;
                left: 0;
                display: none;
                background-color: ${colors.white};
                flex-wrap: nowrap;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                box-shadow: 0 1px 1px 1px rgba(255, 215, 20, 0.2), 0 0 1px 1px rgba(255, 215, 20, 0.2);
                
                div{
                    display: flex;
                    flex: 0 0 auto;
                    flex-direction: column;
                    padding: 20px;
                   
                    img{
                        width: 120px;
                    }
                    span{
                        text-transform: uppercase;
                        font-size: 0.9rem;
                        font-weight: 400;
                    }
                }
            }
        }
        @media ${device.tablet}{
            display:none;
        }
    }
    .header__right{
        display: flex;
        flex: 0.4;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        
        div{
            height: 100%;
            border-right: 1px solid ${colors.headerBorder};
            display: grid;
            place-items: center;
            &:hover{
                border-bottom: 2px solid ${colors.white}
            }
            a{
                padding-right: 25px;
            }
            a.header__rightEnd{
                border-right: none;
                padding-left: 25px;
            }
        }
        @media ${device.tablet}{
            display:none;
        }
        
    }
`

export const HamburgerContainer = styled.div`
    position: relative;
    width: 40px;    
    background-color: black;
    padding-left: 30px;
    margin-bottom: 30px;
    div{
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: ${colors.black};                
    }
    .line1{
        top: 5px;
    }
    .line2{
        top: 15px;
    }
    .line3{
        top: 25px
    }
    @media ${device.desktop}{
        display:none;
    }
    
    @media ${device.tablet}{
        display:block;
    }    
`