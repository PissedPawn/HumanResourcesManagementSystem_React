import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { Route } from 'react-router'
import 'semantic-ui-css/semantic.min.css'
import JobPostings from './JobPostings'
import Employers from './Employers'
import JobPostingList from '../pages/JobPostingList'
import EmployerDetail from '../pages/EmployerDetail'
import UserDetail from '../pages/UserDetail'
import JobPostingForm from '../pages/JobPostingForm'
import CityList from '../pages/CityList'
import AddCity from '../pages/AddCity'
import EmployerRegistration from '../pages/EmployerRegistration'
import EmployerList from '../pages/EmployerList'
import SearchEmployers from '../pages/SearchEmployers'


export default function Dashboard() {
    return (
        <div>

            <Grid>

                <Grid.Row>
                    <Grid.Column width={4}>

                        <Container className="main">
                            <Route exact path="/" component={JobPostings} />
                            <Route exact path="/jobPostings" component={JobPostings} />
                            <Route exact path="/employers/:id" component={Employers} />
                            <Route exact path="/employers" component={Employers} />
                        </Container>



                    </Grid.Column>

                    <Grid.Column width={12}>


                        <Container className="main">
                            <Route exact path="/" component={JobPostingList} />
                            <Route exact path="/jobListings" component={JobPostingList} />
                            <Route exact path="/cities" component={CityList} />
                            <Route exact path="/users/:id" component={UserDetail} />
                            <Route exact path="/employers/:id" component={EmployerDetail} />
                            <Route exact path="/employers" component={EmployerList} />
                            <Route exact path="/employerRegistration" component={EmployerRegistration} />
                            <Route exact path="/addJobPosting/" component={JobPostingForm} />
                            <Route exact path="/addCity/" component={AddCity} />
                            <Route exact path="/searchEmployers/" component={SearchEmployers} />
                        </Container>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </div>
    )
}
