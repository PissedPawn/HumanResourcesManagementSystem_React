import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router-dom'

import PostJobAndAddCV from './PostJobAndAddCV'

export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(false)

    const history = useHistory()

    function handleSignOut() {
        setisAuthenticated(false)
        history.push("/")
    }

    function goMainMenu() {
        history.push("/")
        setisAuthenticated(false)
    }


    function goSearchEmployersPage() {
        history.push("/searchEmployers/")
    }

    function goJobSeekersList() {
        history.push("/applicants/")
    }

    function handleSignIn() {
        setisAuthenticated(true)
    }

    function goEmployerRegistrationForm() {
        history.push("/employerRegistration/")
    }

    function goEmployersList() {
        history.push("/employers/")
    }

    function goRegistrationPage() {
        history.push("/Registration/")
        setisAuthenticated(true)
    }

    function goEmployerLoginPage() {
        history.push("/employerLogIn/")
    }



    return (
        <div>
            <Menu inverted fixed="top">
                <Menu.Item
                    onClick={goMainMenu}
                    name='You Are HIRED !'
                />


                <Menu.Item
                    onClick={goSearchEmployersPage}
                    name='Search Employers !'
                />

                <Menu.Item
                    onClick={goJobSeekersList}
                    name='Applicants'
                />
                <Menu.Item
                    onClick={goEmployersList}
                    name='Companies'
                />

                {isAuthenticated ? null :
                    <Menu.Item position="right"
                        onClick={goRegistrationPage}
                        name='Who are you'
                    />
                }








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
            </Menu>
        </div>
    )
}
