import React from 'react'
import { useParams } from 'react-router'
import { Card } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import EmployerService from '../services/employerService'


export default function EmployerDetail() {

    const { id } = useParams()
    const [employer, setemployer] = useState({city: {cityName: ''}})

    useEffect(() => {
        let employerService = new EmployerService()

        employerService.getById(id)
            .then(result => setemployer((result.data.data)))

    }, [])



   


    return (
        <div >
            <Card.Group>

                <Card fluid>
                    <Card.Content>
                     

                        <Card.Header>{employer.companyName}</Card.Header>

                        <Card.Description> Website: a {employer.website}</Card.Description>
                        <Card.Description> Email: {employer.email}</Card.Description>
                        <Card.Description> Phone Number: {employer.phoneNumber}</Card.Description>
                        <Card.Description> City: { employer.city.cityName}</Card.Description>


                    </Card.Content>

                </Card>

            </Card.Group>
        </div >
    )
}
