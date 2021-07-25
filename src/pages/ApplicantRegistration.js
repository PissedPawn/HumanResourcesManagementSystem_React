import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Button, Grid, GridColumn, Segment} from 'semantic-ui-react'
import ApplicantService from '../services/applicantService'

export default function ApplicantRegistration() {

    let applicantService = new ApplicantService()

    const applicantErrorDiv = document.getElementById("applicantRegisterError");



    const formik = useFormik({

        initialValues: {
            firstName: '',
            lastName: '',
            birthYear: '',
            email: '',
            nationalId: '',
            password: '',
            passwordRepeat: ''
        },

        onSubmit: values => {
            let applicant =
            {
                firstName: values.firstName,
                lastName: values.lastName,
                birthYear: values.birthYear,
                email: values.email,
                nationalId: values.nationalId,
                password: values.password,
                passwordRepeat: values.passwordRepeat

            }


            applicantService.addApplicant(applicant).then(result => applicantErrorDiv.innerHTML = result.data.message)
        }


    })


    return (
        <div>
            <h1>Register as A Job Searcher </h1>
            <Segment inverted>
            <Grid textAlign='center'>
                <GridColumn>
                    <form onSubmit={formik.handleSubmit}>

                        <label>Name</label>

                        <input
                            id="firstName"
                            name="firstName"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName} />


                        <label>Surname</label>

                        <input
                            id="lastName"
                            name="lastName"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName} />

                        <label>Email</label>

                        <input
                            id="email"
                            name="email"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email} />

                        <label>Birth Year</label>

                        <input
                            id="birthYear"
                            name="birthYear"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.birthYear} />


                        <label>National ID</label>

                        <input
                            id="nationalId"
                            name="nationalId"

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nationalId} />

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



                        <Button type="submit" className="button">Register</Button>
                        <div id="applicantRegisterError"></div>

                    </form>
                </GridColumn>


            </Grid>
          </Segment>
        </div>
    )
}
