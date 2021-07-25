import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useFormik } from 'formik'
import { Button, Grid, GridColumn, Segment } from 'semantic-ui-react'
import ApplicantService from '../services/applicantService'

import * as Yup from 'yup'

export default function ApplicantLogin() {

    let applicantLoginError = document.getElementById("applicantLoginError")
    const history = useHistory()

    const [applicants, setapplicants] = useState([])

    useEffect(() => {
        let applicantService = new ApplicantService()

        applicantService.getApplicants().then(result => setapplicants(result.data.data))
    })

    function logIn(applicant) {
        const returnVal = false;
        applicants.map(e => {
            if (applicant.email === e.email && applicant.password === e.password) {
                history.push(`/applicants/${e.id}`)
                returnVal = true;
            }
        })

        return returnVal;
    }
    const emails = applicants.map(e => e.email)

    const valid = applicant => {
        if (!emails.includes(applicant.email)) {


            applicantLoginError.innerHTML = "Email is not registered"
        }

        else {
            applicants.map(e => {
                if (applicant.email === e.email && applicant.password !== e.password) {



                    applicantLoginError.innerHTML = "Password is incorrect"
                }
            })
        }
    }






    const formik = useFormik({

        initialValues: {
            email: '',
            password: ''
        },


        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('can not be empty').min(4, "password must be longer than 4 symbols")
        }),

        onSubmit: values => {

            let applicant =
            {
                email: values.email,
                password: values.password
            }

            let returnVal = logIn(applicant)

            if (!returnVal)
                valid(applicant)

        }
    })


    return (
        <div>
            <h1>Log In To Your Profile </h1>
            <Segment inverted>
                <Grid textAlign='center'>
                    <GridColumn>
                        <form onSubmit={formik.handleSubmit}>


                            <label>Email</label>

                            <input
                                id="email"
                                name="email"

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}






                            <label>Password</label>

                            <input
                                id="password"
                                name="password"
                                type="password"

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />
                            {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}




                            <Button type="submit" className="button">Log In</Button>
                            <div id="applicantLoginError"></div>
                        </form>



                    </GridColumn>



                </Grid>
            </Segment>
        </div>
    )
}
