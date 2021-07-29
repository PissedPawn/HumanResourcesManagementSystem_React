import React, { useState } from 'react'
import { Grid, Menu, Segment, Button, Card, Icon } from 'semantic-ui-react'
import { useHistory } from 'react-router'
export default function Registration() {



    const [activeItem, setactiveItem] = useState('EMPLOYER')
    const history = useHistory()


    const handleItemClick = (e, { name }) => setactiveItem(name)

    const handleOpenEmployerPage = (e, { name }) => {
        setisEmployer(true)
        handleItemClick(e, { name })
    }

    const handleOpenJobSeekerPage = (e, { name }) => {
        setisEmployer(false)
        handleItemClick(e, { name })
    }


    function goEmployerRegistrationForm() {
        history.push("/employerRegistration/")
    }

    function goApplicantRegistrationForm() {
        history.push("/applicantRegistration/")
    }

    function goEmployerLoginPage() {
        history.push("/employerLogIn/")
    }

    function goApplicantLoginPage() {
        history.push("/applicantLogIn/")
    }





    const [isEmployer, setisEmployer] = useState(true)


    return (
        <Segment inverted>
            <Grid>
                <Grid.Column width={4}>
                    <Menu vertical inverted>
                        <Menu.Item
                            color="violet"
                            name='EMPLOYER'
                            active={activeItem === 'EMPLOYER'}
                            onClick={handleOpenEmployerPage}
                        />
                        <Menu.Item
                            color="violet"
                            name='JOB SEEKER'
                            active={activeItem === 'JOB SEEKER'}
                            onClick={handleOpenJobSeekerPage}
                        />
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    {isEmployer ?
                        <Segment inverted>
                            <div>

                                <Card.Group>

                                    <Card fluid>
                                        <Card.Content>

                                            <Card.Header>Are You Looking For Employees?</Card.Header>
                                            <Card.Meta>In order to add job openings in your company:</Card.Meta>
                                            <Card.Description>
                                                <strong>CLICK REGISTER BELOW </strong>

                                            </Card.Description>
                                            <Icon name="arrow circle down" />
                                        </Card.Content>
                                        <Card.Content>

                                            <Button
                                                onClick={goEmployerRegistrationForm}>
                                                Register
                                            </Button>

                                            <Button
                                                onClick={goEmployerLoginPage}>
                                                Log In
                                            </Button>

                                        </Card.Content>
                                    </Card>

                                </Card.Group>

                            </div>

                        </Segment>
                        :
                        <Segment inverted>
                            <div>
                                <Card.Group>
                                    <Card fluid>
                                        <Card.Content>

                                            <Card.Header>Are You Looking For A Job?</Card.Header>
                                            <Card.Meta>In order to add your CV:</Card.Meta>
                                            <Card.Description>
                                                <strong>CLICK REGISTER BELOW</strong>
                                            </Card.Description>
                                            <Icon name="arrow circle down" />
                                        </Card.Content>
                                        <Card.Content>

                                            <Button
                                                onClick={goApplicantRegistrationForm}>


                                                Register
                                            </Button>

                                            <Button
                                                onClick={goApplicantLoginPage}>
                                                Log In
                                            </Button>

                                        </Card.Content>
                                    </Card>

                                </Card.Group>
                            </div>
                        </Segment>
                    }

                </Grid.Column>
            </Grid>
        </Segment>
    )

}
