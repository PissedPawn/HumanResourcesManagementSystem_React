import React from 'react'
import { useParams } from 'react-router'
import { Card } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import ApplicantService from '../services/applicantService'


export default function ApplicantDetail() {

    const { id } = useParams()
    const [applicant, setapplicant] = useState({})

    useEffect(() => {
        let applicantService = new ApplicantService()

        applicantService.getById(id)
            .then(result => setapplicant((result.data.data)))

    }, [])

    return (
        <div >
            <Card.Group>

                <Card fluid>
                    <Card.Content>
                        <Card.Header>{applicant.firstName}</Card.Header>
                        <Card.Description> Email: {applicant.email}</Card.Description>
                    </Card.Content>

                </Card>

            </Card.Group>
        </div >
    )
}
