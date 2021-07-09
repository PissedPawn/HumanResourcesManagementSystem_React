import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router-dom'
import PostJob from './PostJob'
import AddCV from './AddCV'
import PostJobAndAddCV from './PostJobAndAddCV'

export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(true)

    const history = useHistory()

    function handleSignOut() {
        setisAuthenticated(false)
        history.push("/")
    }

    function goMainMenu() {
        history.push("/")
    }

    function handleSignIn() {
        setisAuthenticated(true)
    }



    return (
        <div>
            <Menu inverted fixed="top">
                <Menu.Item
                    onClick={goMainMenu}
                    name='You Are HIRED !'
                />

                <Menu.Menu position='left' >

                    {isAuthenticated ?
                        < PostJobAndAddCV />
                        : null
                    }
                </Menu.Menu>


                <Menu.Menu position="right">

                    {isAuthenticated ?
                        <SignedIn signOut={handleSignOut} /> :
                        <SignedOut signIn={handleSignIn} />}

                </Menu.Menu>





            </Menu>
        </div>
    )
}
