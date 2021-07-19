import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import CityService from '../services/cityService'

export default function CityList() {

    const [cities, setcities] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities()
            .then(result => setcities(result.data.data))

    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>City</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cities.map(city => (
                            <Table.Row>
                                <Table.Cell>{city.cityName}</Table.Cell>
                            </Table.Row>

                        ))

                    }

                </Table.Body>


            </Table>
        </div>
    )
}
