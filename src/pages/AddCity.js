import React from 'react'
import { useFormik } from 'formik'
import { Button,  Grid, GridColumn } from 'semantic-ui-react'
import { useState} from 'react'
import CityService from '../services/cityService'




export default function AddCity() {

   
    let cityService = new CityService();



    const formik = useFormik({

        initialValues: {

            cityName: ''

        },

        onSubmit: values => {
            let city =
            {
                cityName: values.cityName
            }


            cityService.addCity(city).then((result) => console.log(result.data.data))
        }


    })


    return (
        <div>
            <h1>Add City </h1>
            <Grid textAlign='center'>
                <GridColumn>
                    <form onSubmit={formik.handleSubmit}>

                        <label>City</label>

                        <input
                            id="city"
                            name="cityName"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cityName} />
                      

                        <Button type="submit" className="button">Add</Button>

                    </form>
                </GridColumn>


            </Grid>

        </div>
    )
}
