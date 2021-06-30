import React, { useState, useEffect } from 'react'
import { Table, Menu, Icon, Label } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function JobPostingList() {

    const [jobPostings, setjobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings()
            .then(result => setjobPostings(result.data.data))
    })


    return (



        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Requirements</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Salary</Table.HeaderCell>
                        <Table.HeaderCell>Number of Openings</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.jobPosition.title}</Table.Cell>
                                <Table.Cell>{jobPosting.jobRequirements}</Table.Cell>
                                <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobPosting.city.cityName}</Table.Cell>
                                <Table.Cell>{jobPosting.salaryMax}</Table.Cell>
                                <Table.Cell>{jobPosting.numberOfOpenings}</Table.Cell>
                                <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                            </Table.Row>

                        ))}

                </Table.Body>


            </Table>
        </div >
    )
}
