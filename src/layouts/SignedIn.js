import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right"/>
                <Dropdown pointing="top left" text={props.name}>
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/users/:id" text="My Info" icon="info"></Dropdown.Item>
                        <Dropdown.Item onClick={props.signOut} text="Log Out" icon="sign-out"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
