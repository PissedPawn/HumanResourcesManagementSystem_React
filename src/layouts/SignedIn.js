import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://scontent.fgyd6-1.fna.fbcdn.net/v/t1.6435-9/70004461_2103806006595043_7832564646048432128_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QdJgtOwwzIkAX868-3e&tn=TYV4LQwsNiXtwaLy&_nc_ht=scontent.fgyd6-1.fna&oh=00bbbc0294992b2889d151bd031b54b7&oe=60EB571E" />
                <Dropdown pointing="top left" text="Vuqar">
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/users/:id" text="My Info" icon="info"></Dropdown.Item>
                        <Dropdown.Item onClick={props.signOut} text="Log Out" icon="sign-out"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
