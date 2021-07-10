import React from 'react'
import { Button } from 'semantic-ui-react'

export default function AddCV(props) {
    return (
        <div>
            <Button onClick={props.addCV}>
                Add Resume
            </Button>
        </div>
    )
}


