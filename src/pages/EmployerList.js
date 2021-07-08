import React, { useState, useEffect } from 'react'
import { Table, Menu, Icon } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {


    const [employers, setemployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers()
            .then(result => setemployers(result.data.data))

    },[])



    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.website}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>


            </Table>
        </div>
    )
}
