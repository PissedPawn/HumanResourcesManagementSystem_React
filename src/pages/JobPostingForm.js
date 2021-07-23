import React from 'react'
import { useFormik } from 'formik'
import { Button, Checkbox, Dropdown, Grid, GridColumn } from 'semantic-ui-react'

import { useState, useEffect } from 'react'
import JobPostingService from '../services/jobPostingService'
import CityService from '../services/cityService'




export default function JobPostingFrom() {
    // A custom validation function. This must return an object

    // which keys are symmetrical to our values/initialValues

    const workConditionOptions = [
        {
            key: 'remote',
            text: 'Remote',
            value: 'remote',
        },

        {
            key: 'office',
            text: 'Office',
            value: 'office',
        }

    ]

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

    const getWorkCondition = (e, { value }) => {
        formik.values.workCondition = value;

    }

    const [jobPosting, setjobPosting] = useState({})
    let jobPostingService = new JobPostingService();



    const formik = useFormik({

        initialValues: {

            jobPosition:
            {
                title: ''
            },

            employer:
            {
                companyName: '',
            },
            city:
            {
                cityId: ''
            },
            requirements: '',
            deadline: '',
            salary: '',
            workCondition: '',
            partTime: ''

        },

        onSubmit: values => {
            let jobPosting =
            {

                jobPosition:
                {
                    title: ''
                },

                employer:
                {
                    companyName: '',
                },
                city:
                {
                    cityId: ''
                },
                requirements: '',
                deadline: '',
                salary: '',
                workCondition: '',
                partTime: ''
            }


            jobPostingService.addJobPosting(jobPosting).then((result) => console.log(result.data.data))
        }


    })

    return (

        <div>
            <h1>Add Job Opening </h1>
            <Grid textAlign='center'>
                <GridColumn>
                    <form onSubmit={formik.handleSubmit}>

                        <label>Position</label>

                        <input
                            id="title"
                            name="title"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title} />
                        {/* {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null} */}

                        <label>Company</label>

                        <input
                            id="company"
                            name="company"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.company} />

                        <label>City</label>

                        <Dropdown className='formDropdown'

                            id="city"
                            name="id"
                            placeholder='Select City'

                            selection
                            options={cityOptions}
                            onChange={getCity}



                        />


                        <label>Work Condition</label>

                        <Dropdown className='formDropdown'

                            id="workCondition"
                            name="workCondition"
                            placeholder='Remote or Office'

                            selection
                            options={workConditionOptions}
                            onChange={getWorkCondition}



                        />


                        <label>Part Time</label>

                        <Checkbox className='center'


                            id="partTime"
                            name="partTime"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.partTime}

                        />



                        <label>Requirements</label>



                        <textarea
                            id="requirements"
                            name="requirements"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.requirements} />

                        <label>Application Deadline</label>

                        <input
                            id="deadline"
                            name="deadline"
                            placeholder="Date"
                            iconPosition="left"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.deadline} />

                        <label>Salary</label>

                        <input
                            id="salary"
                            name="salary"
                            placeholder="ex: 5000 $"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.salary} />


                        <Button type="submit" className="button">Add</Button>

                    </form>
                </GridColumn>


            </Grid>

        </div>
    )
}