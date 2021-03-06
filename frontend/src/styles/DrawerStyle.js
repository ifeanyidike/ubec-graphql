import styled from 'styled-components'
import { device, colors } from "../utils/definitions"


export const Backdrop = styled.div`
    
    @media ${device.tablet}{
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;    
    }
    
`

export const Drawer = styled.nav`
  
    @media ${device.desktopL}{
        display:none
    }
    
    @media ${device.tablet}{            
        display: block;
        font-family: "Jost";        
        background: white;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        top: 0;
        left: 0;
        width: 70%;
        height: 100%;
        z-index: 999;
        margin: 0 !important;
        padding: 0 !important;
        position: fixed;    
        transform: translateX(-100%);
        transition: transform 0.3s ease-out;
        
                
        .open{
            transform: translateX(0);
        }                
    }               
    @media ${device.mobile_lg}{  
        width: 80%;
    }
`;


export const DrawerContent = styled.div`
    height: 100%;    
    .closeIcon{
            background-color: transparent !important;            
            color: ${colors.black};
            margin-bottom: 20px !important;
            &:hover{
                background-color: rgba(219, 219, 219, 0.5) !important;
            }
        }                
    
    ul{
        height: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;        
        font-size: 1.2rem;

        .drawercontent{
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
            background-position: 50%;

    }
        }
        li{            
            padding: 40px 20px 40px 20px;
            @media ${device.mobile_lg}{  
                padding: 30px 20px 20px 20px;
            }
            @media ${device.mobile_md}{  
                padding: 20px 20px 10px 20px;
            }
        }
        li.item{
            display: flex;
            align-items: center;    
            font-weight: 500;
            border-bottom: 1px solid ${colors.dye};
            
            
            .icon, .MuiAvatar-root{
                margin-right: 20px;
                color: ${colors.lightBrown};
                &:hover{
                    color: ${colors.white};
                }
            }
            span{
                font-size: 1.2rem;
                color: ${colors.darkblue}
            }                                 
        }
        
        li.sidedrawer__firstchild {
            margin: 0 !important;       
            background-color: ${colors.dye};
            
            
            .logo{
                img{
                   width: 100%;
                }
            } 
            
            span{
                color: ${colors.white};

            }
            
        }  
        li:last-child{
            
            margin-top: auto;
        }   
        
        a.drawer__link.first:hover{
            border-top: 4px solid ${colors.dye}
        } 
        
        a.drawer__link:hover{
            background: ${colors.black};            
            span{
                color: ${colors.white}
            }
            .icon{
                color: ${colors.white}
            }            
        }
        
          
    }
    
    a {
        color: #521751;
        text-decoration: none;
        font-size: 1.2rem;
    }
    a:hover, a:active{
        color: #fa923f;
    }    
`;

export const CloseIconElem = styled.div`
    position: relative;
    margin: 20px 0;    
    width: 50px;
    height: 50px;
    
    div{
        position: absolute;
        top: 20px;
        left: 0;
        background: #000;
        width: 90%;
        height: 2px;
        
    }
    
    &:hover{
        border-radius: 10px;
        background: #DBDBDB;
    }
`