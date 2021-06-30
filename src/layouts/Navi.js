import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Menu.Item
                    name='home'
                />

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
