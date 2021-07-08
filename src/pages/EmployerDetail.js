import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import EmployerService from '../services/employerService'


export default function EmployerDetail() {

    const { id } = useParams()
    const [employer, setemployer] = useState({})

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getById(id)
            .then(result => setemployer(result.data.data))
    }, [])
    return (


        <div >
            <Card.Group>

                <Card fluid>
                    <Card.Content>

                        <Card.Header>{employer.companyName}</Card.Header>

                        <Card.Description> Website: {employer.website}</Card.Description>
                        <Card.Description> Email: {employer.email}</Card.Description>
                        <Card.Description> Phone Number: {employer.phoneNumber}</Card.Description>
                    </Card.Content>
                    {/* <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content> */}
                </Card>
            </Card.Group>
        </div >
    )
}
