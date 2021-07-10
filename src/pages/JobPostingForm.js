import React from 'react'
import { useFormik } from 'formik'
import { Button, Checkbox, Dropdown, DropdownMenu, Grid, GridColumn } from 'semantic-ui-react'
import { DatePicker } from 'react-formik-ui';




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


    const formik = useFormik({

        initialValues: {
            position: '',
            company: '',
            city: '',
            requirements: '',
            deadline: '',
            salary: '',
            workCondition: '',
            partTime:''

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
                            id="position"
                            name="position"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.position} />
                        {/* {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null} */}

                        <label>Company</label>

                        <input
                            id="company"
                            name="company"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.company} />

                        <label>City</label>

                        <input
                            id="city"
                            name="city"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city} />



                        <label>Work Condition</label>

                        <Dropdown className='formDropdown'

                            id="workCondition"
                            name="workCondition"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.workCondition}

                            placeholder='Select Condition'

                            selection
                            options={workConditionOptions}
                        />


                        <label>Part Time</label>

                        <Checkbox className='center'
                       

                            id="partTime"
                            name="partTime"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.partTime}

                            placeholder='Select Condition'
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