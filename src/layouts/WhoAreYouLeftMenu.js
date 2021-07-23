import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function WhoAreYouLeftMenu() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Employer'
                />

                <Menu.Item
                    name='Employee'
                />

            </Menu>
        </div>
    )
}
