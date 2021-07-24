import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import ApplicantService from '../services/applicantService'

export default function ApplicantList() {

  const [applicants, setapplicants] = useState([])



  useEffect(() => {
    let applicantService = new ApplicantService()

    applicantService.getApplicants().then(result => setapplicants(result.data.data))
  })



  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>BirthYear</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
            applicants.map(applicant => (
              <Table.Row key={applicant.id}>
                <Table.Cell>{applicant.firstName}</Table.Cell>
                <Table.Cell>{applicant.lastName}</Table.Cell>
                <Table.Cell>{applicant.email}</Table.Cell>
                <Table.Cell>{applicant.birthYear}</Table.Cell>

              </Table.Row>
            ))

          }

        </Table.Body>
      </Table>
    </div>
  )
}
