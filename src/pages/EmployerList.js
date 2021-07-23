import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'
import { Link } from 'react-router-dom'

export default function EmployerList() {


    const [employers, setemployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers()
            .then(result => setemployers(result.data.data))


          
    }, [])

   

    return (
        <div>
            <Table celled>
                <Table.Header>
                    {console.log("inside render ")}
                    <Table.Row>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row
                                key={employer.id}>
                                <Table.Cell><Link to={`/employers/${employer.id}`}>{employer.companyName}</Link></Table.Cell>
                                <Table.Cell>{employer.website}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.city.cityName}</Table.Cell>
                               
                            </Table.Row>
                        ))
                    }

                </Table.Body>


            </Table>
        </div>
    )
}
