import React from 'react'
import PostJob from './PostJob'
import AddCV from './AddCV'
import { Menu } from 'semantic-ui-react'

export default function PostJobAndAddCV() {
    return (
        <div>
            <Menu.Item>
                <PostJob primary />
                <AddCV primary style={{ marginLeft: '0.5em' }} />
            </Menu.Item>

        </div>
    )
}
