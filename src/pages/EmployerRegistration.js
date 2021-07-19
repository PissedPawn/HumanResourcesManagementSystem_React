import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Button, Grid, GridColumn, Dropdown } from 'semantic-ui-react'
import EmployerService from '../services/employerService'
import CityService from '../services/cityService'





export default function EmployerRegistration() {





    let employerService = new EmployerService()



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
                password: 'aaaaaaaaa456',
                passwordRepeat: 'aaaaaaaaa456'

            }

            console.log(employer)


            employerService.addEmployer(employer).then(result => console.log(result))
        }


    })




    return (
        <div>
            <h1>Register As Employer </h1>
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


                        <label>City</label>

                        <Dropdown className='formDropdown'

                            id="city"
                            name="id"
                            placeholder='Select City'

                            selection
                            options={cityOptions}
                            onChange={getCity}



                        />





                        <Button type="submit" className="button">Add</Button>

                    </form>
                </GridColumn>


            </Grid>

        </div>
    )
}
