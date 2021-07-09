import React from 'react'
import PostJob from './PostJob'
import AddCV from './AddCV'
import { Menu } from 'semantic-ui-react'

export default function PostJobAndAddCV() {


    function handlePostingJob() {


    }

    function handleAddingCV() {

    }
    return (
        <div>
            <Menu.Item>
                <PostJob primary postJob={handlePostingJob} />
                <AddCV primary style={{ marginLeft: '0.5em' }} addCV={handleAddingCV} />
            </Menu.Item>

        </div>
    )
}
