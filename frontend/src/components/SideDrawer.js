import React, { useEffect } from 'react'
import { Backdrop, Drawer, DrawerContent } from "../styles/DrawerStyle"
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { Link, useLocation, useHistory } from "react-router-dom"
import { DRAWER_CLOSE } from "../redux/constants/utilConstants"
import { useDispatch, useSelector } from "react-redux"
import { colors } from "../utils/definitions"
import { logout } from '../redux/actions/userActions'
import { Avatar } from '@material-ui/core'
import { FaCogs, FaFileSignature } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));

const SideDrawer = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const path = location.pathname

    useEffect(() => {
        dispatch({ type: DRAWER_CLOSE })
    }, [dispatch])

    const drawerToggle = useSelector(state => state.drawerToggle)
    const { drawerState } = drawerToggle

    const animateDrawer = () => {
        const navLinks = document.querySelectorAll("nav ul li.item");
        navLinks.forEach((link, ind) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
        })
    }

    const handleCancelClick = () => {
        animateDrawer()
        dispatch({ type: DRAWER_CLOSE })
    }

    const handleBackDropClose = () => {
        dispatch({ type: DRAWER_CLOSE })
    }

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/auth')
    }

    const classes = useStyles();


    return (

        <>
            {drawerState && (
                <Backdrop
                    onClick={handleBackDropClose}
                />
            )}
            <Drawer

                style={{ transform: drawerState ? "translateX(0)" : "translateX(-100%)" }}
            >
                <DrawerContent>
                    <ul>
                        <li className="sidedrawer__firstchild">
                            <CloseIcon
                                fontSize='large'
                                className='closeIcon'
                                onClick={handleCancelClick}
                            />
                            <Link to='/' className="logo">
                                <img src='/images/ubeclogo.png' alt='ubec logo' />
                            </Link>

                            {/* <span>Welcome to Ubec</span> */}
                        </li>
                        <div className='drawercontent'>
                            <Link
                                onClick={() => dispatch({ type: DRAWER_CLOSE })}
                                to='/signin'
                                className="drawer__link first">
                                <li
                                    style={{
                                        fontWeight: path === '/signin' && 'bold',
                                        backgroundColor: path === '/signin' && colors.lightBrown
                                    }}
                                    className='item' >
                                    <BiLogIn className='icon' />
                                    <span>Sign In</span>
                                </li>
                            </Link>
                            <Link
                                onClick={() => dispatch({ type: DRAWER_CLOSE })}
                                to='/mainarea'
                                className="drawer__link"
                                style={{
                                    fontWeight: path === '/mainarea' && 'bold',
                                    color: path === '/mainarea' && colors.dye
                                }}
                            >
                                <li className='item' >
                                    <FaCogs className='icon' />
                                    <span>Features</span>
                                </li>
                            </Link>

                            <Link
                                onClick={() => dispatch({ type: DRAWER_CLOSE })}
                                to='/directors'
                                style={{
                                    fontWeight: path === '/directors' && 'bold',
                                    color: path === '/directors' && colors.dye
                                }}
                                className="drawer__link">
                                <li className='item' >
                                    <FaFileSignature className='icon' />
                                    <span>Directors</span>
                                </li>
                            </Link>
                        </div>
                    </ul>
                </DrawerContent>
            </Drawer>
        </>


    )
}

export default SideDrawer