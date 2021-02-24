import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from "../styles/HeaderStyles"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/userActions'
import { useHistory } from 'react-router-dom'
import Hamburger from './Hamburger'

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { userInfo } = useSelector(state => state.userLogin)
    console.log(userInfo)

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/')
    }
    return (
        <HeaderContainer>
            <Hamburger />
            <div className='header__left'>
                <div className='label menuitem'>
                    <Link to='/' className='logo'>
                        <img src='/images/ubeclogo.png' alt='ubeclogo' /></Link>
                </div>
                <div className='menuitem'>
                    <Link to='/'>Features</Link>
                </div>
                <div className='megamenu menuitem'>
                    <Link to='/'>Directors</Link>
                    <div className="megamenuitem">
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>

                    </div>
                </div>
                <div className='menuitem'>
                    <Link to='/mainarea'>Options</Link>
                </div>
                <div className='menuitem'>
                    <Link to='/'>About</Link>
                </div>

            </div>
            <div className='header__right'>
                <div className='menuitem'>
                    {
                        userInfo ? <Link onClick={logoutHandler}>Log out</Link>
                            :
                            <Link to='/signin'>sign in</Link>
                    }
                </div>

            </div>

        </HeaderContainer>
    )
}

export default Header
