import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import JobPostings from './JobPostings'
import Employers from './Employers'
import EmployerList from '../pages/EmployerList'
import JobPostingList from '../pages/JobPostingList'
import Applicants from './Applicants'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <JobPostings />
                        <Employers />
                        <Applicants />
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <JobPostingList />
                        <Container className="main">
                            <EmployerList />
                        </Container>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </div>
    )
}
