import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Button, Grid, GridColumn, Dropdown, Segment } from 'semantic-ui-react'
import EmployerService from '../services/employerService'
import CityService from '../services/cityService'





export default function EmployerRegistration() {





    let employerService = new EmployerService()

    const employerErrorDiv = document.getElementById("employerRegisterError")



    const [cities, setcities] = useState([])



    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities()
            .then(result => setcities(result.data.data))



    }, [])



    const cityOptions = cities.map((city, index) => (
        {
            key: index,
            text: city.cityName,
            value: city.id,
        }
    ))



    const getCity = (e, { value }) => {
        formik.values.city.id = value;

    }




    const formik = useFormik({

        initialValues: {
            companyName: '',
            city: {
                id: ''
            },
            email: '',
            phoneNumber: '',
            website: '',
            password: '',
            passwordRepeat: ''


        },

        onSubmit: values => {
            let employer =
            {
                city: {
                    id: values.city.id,
                },
                companyName: values.companyName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                website: values.website,
                password: values.password,
                passwordRepeat: values.passwordRepeat

            }

            employerService.addEmployer(employer).then(result => employerErrorDiv.innerHTML = result.data.message)
        }


    })




    return (
        <div>
            <h1 >Register As Employer </h1>
            <Segment inverted>
                <Grid textAlign='center'>
                    <GridColumn>
                        <form onSubmit={formik.handleSubmit}>

                            <label>Company Name</label>

                            <input
                                id="companyName"
                                name="companyName"

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.companyName} />

                            <label>Email</label>

                            <input
                                id="email"
                                name="email"

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} />

                            <label>Website</label>

                            <input
                                id="website"
                                name="website"

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.website} />


                            <label>Phone Number</label>

                            <input
                                id="phoneNumber"
                                name="phoneNumber"

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber} />


                            <label>Password</label>

                            <input
                                id="password"
                                name="password"

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />


                            <label>Password Repeat</label>

                            <input
                                id="passwordRepeat"
                                name="passwordRepeat"

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordRepeat} />


                            <label>City</label>

                            <Dropdown className='formDropdown'

                                id="city"
                                name="id"
                                placeholder='Select City'

                                selection
                                options={cityOptions}
                                onChange={getCity}
                            />





                            <Button type="submit"  >Register</Button>
                            <div id="employerRegisterError"></div>

                        </form>
                    </GridColumn>


                </Grid>
            </Segment>

        </div>
    )
}
