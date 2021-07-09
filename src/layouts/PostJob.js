import React from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function PostJob(props) {
    return (
        <div>
            <Button as={NavLink} to="/addJobPosting/"onClick={props.postJob}>
                Post a Job
            </Button>
        </div>
    )
}
