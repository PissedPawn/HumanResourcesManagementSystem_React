import React, { useState, useEffect } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Button } from './Button'
import { useHistory, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { GiGamepad } from 'react-icons/gi'

import './Navi.css'

import PostJobAndAddCV from './PostJobAndAddCV'

export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(false)

    const history = useHistory()

    function handleSignOut() {
        setisAuthenticated(false)
        history.push("/")
        closeMobileMenu()
    }

    function goMainMenu() {
        history.push("/")
        setisAuthenticated(false)
        closeMobileMenu()
    }


    function goSearchEmployersPage() {
        history.push("/searchEmployers/")
        closeMobileMenu()
    }

    function goJobSeekersList() {
        history.push("/applicants/")
        closeMobileMenu()
    }

    function handleSignIn() {
        setisAuthenticated(true)
    }

    function goEmployerRegistrationForm() {
        history.push("/employerRegistration/")
    }

    function goEmployersList() {
        history.push("/employers/")
        closeMobileMenu()
    }

    function goRegistrationPage() {
        history.push("/Registration/")
        setisAuthenticated(true)
        closeMobileMenu()
    }

    function goEmployerLoginPage() {
        history.push("/employerLogIn/")
    }

    function goJobPostingsList() {
        history.push("/jobListings")
        closeMobileMenu()
    }

    const [click, setclick] = useState(false)
    const [button, setbutton] = useState(true)

    const handleClick = () => setclick(!click)
    const closeMobileMenu = () => setclick(false)

    const showButton = () => {
        if (window.innerWidth <= 960)
            setbutton(false)
        else
            setbutton(true)
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <div className='navbar'>
                <div className="navbar-contain contain">

                    <div className="navbar-logo" onClick={goMainMenu}>
                        <GiGamepad className='navbar-icon'></GiGamepad>
                        You are Hired
                    </div>

                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}

                    </div>


                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className="nav-item" >

                            <div onClick={goSearchEmployersPage} className='nav-links'>
                                <Icon name="search" />
                                Search Employers
                            </div>

                        </li>

                        <li className="nav-item">
                            <div onClick={goEmployersList} className='nav-links'>
                                <Icon name="building" />
                                Companies
                            </div>
                        </li>

                        <li className="nav-item">
                            <div onClick={goJobSeekersList} className='nav-links'>

                                <Icon name="pen square" />

                                Applicants

                            </div>
                        </li>

                        <li className="nav-item">
                            <div onClick={goJobPostingsList} className='nav-links' >

                                <Icon name="suitcase" />

                                Job Opportunities

                            </div>
                        </li>

                        <li className='nav-btn'>
                            {button ?
                                (<div className='btn-link'>
                                    <Button buttonStyle='btn-outline'
                                    onClick={goRegistrationPage}>
                                        Sign Up
                                    </Button>
                                </div>) :
                                (
                                    <div className='btn-link'
                                        onClick={goRegistrationPage}>
                                        <Button buttonStyle='btn-outline'
                                            buttonSize='btn--mobile'>
                                            Sign Up
                                        </Button>
                                    </div>
                                )}

                        </li>

                        {/* <li >
                            {isAuthenticated ? null :
                                <Menu.Item
                                    onClick={goRegistrationPage}

                                >
                                    <Icon name="question circle outline" />
                                    Why Are You Here
                                </Menu.Item>
                            }
                        </li> */}









                        {/* <Menu.Item
                    onClick={goEmployerRegistrationForm}
                    name='Employer Registration'
                /> */}

                        {/* <Menu.Menu position='left' >

                    {isAuthenticated ?
                        < PostJobAndAddCV />
                        : null
                    }
                </Menu.Menu>


                <Menu.Menu position="right">

                    {isAuthenticated ?
                        <SignedIn signOut={handleSignOut} /> :
                        <SignedOut signIn={handleSignIn} />}

                </Menu.Menu> */}


                    </ul>
                </div>

            </div>
        </>
    )
}
