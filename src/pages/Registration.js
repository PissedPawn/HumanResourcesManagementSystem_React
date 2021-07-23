import React, { useState } from 'react'
import { Grid, Menu, Segment, Button, Card, Image } from 'semantic-ui-react'
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





    const [isEmployer, setisEmployer] = useState(true)


    return (
        <Grid>
            <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                    <Menu.Item
                        name='EMPLOYER'
                        active={activeItem === 'EMPLOYER'}
                        onClick={handleOpenEmployerPage}

                    />
                    <Menu.Item
                        name='JOB SEEKER'
                        active={activeItem === 'JOB SEEKER'}
                        onClick={handleOpenJobSeekerPage}

                    />
                </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
                {isEmployer ?
                    <Segment>
                        <div>
                            <Card.Group fluid>
                                <Card fluid>
                                    <Card.Content>

                                        <Card.Header>Are You a Company?</Card.Header>
                                        <Card.Meta>In order to add job openings in your company:</Card.Meta>
                                        <Card.Description>
                                            <strong>CLICK REGISTER BELOW </strong>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                            <Button basic color='red'
                                                onClick={goEmployerRegistrationForm}
                                            >
                                                Register
                                            </Button>

                                            <Button basic color='green'>
                                                Log In
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>

                            </Card.Group>
                        </div>
                    </Segment>
                    :
                    <Segment>
                        <div>
                            <Card.Group fluid>
                                <Card fluid>
                                    <Card.Content>

                                        <Card.Header>Are You Looking For A Job?</Card.Header>
                                        <Card.Meta>In order to add your CV:</Card.Meta>
                                        <Card.Description>
                                            <strong>CLICK REGISTER BELOW</strong>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                            <Button basic color='red'>
                                                Register
                                            </Button>

                                            <Button basic color='green'>
                                                Log In
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>

                            </Card.Group>
                        </div>
                    </Segment>
                }

            </Grid.Column>
        </Grid>
    )

}
