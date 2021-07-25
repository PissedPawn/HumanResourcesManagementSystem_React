import React, { useState } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
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

    function goJobPostingsList() {
        history.push("/jobListings")
    }



    return (
        <div>
            <Segment inverted>

                <Menu icon="labeled" inverted pointing secondary>
                    <Menu.Item onClick={goMainMenu} >
                        <Icon name='world' color="red" />
                        <p style={{ color: 'red' }}>
                            You Are Hired
                        </p>
                    </Menu.Item>


                    <Menu.Item onClick={goSearchEmployersPage}>
                        <Icon name="search" />
                        Search Employers
                    </Menu.Item>

                    <Menu.Item onClick={goEmployersList}>
                        <Icon name="building" />
                        Companies
                    </Menu.Item>

                    <Menu.Item onClick={goJobSeekersList}>

                        <Icon name="pen square" />

                        Applicants

                    </Menu.Item>

                    <Menu.Item onClick={goJobPostingsList}>

                        <Icon name="suitcase" />

                        Job Opportunities

                    </Menu.Item>

                    {isAuthenticated ? null :
                        <Menu.Item position="right"
                            onClick={goRegistrationPage}

                        >
                            <Icon name="question circle outline" />
                            Why Are You Here
                        </Menu.Item>
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
            </Segment>
        </div>
    )
}
