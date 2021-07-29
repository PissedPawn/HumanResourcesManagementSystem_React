import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useFormik } from 'formik'
import { Button, Grid, GridColumn, Segment } from 'semantic-ui-react'
import EmployerService from '../services/employerService'
import * as Yup from 'yup'



export default function EmployerLogin() {

    const [employers, setemployers] = useState([])
    const history = useHistory()



    useEffect(() => {
        let employerService = new EmployerService()

        employerService.getEmployers().then(result => setemployers(result.data.data))
    }, [])

    let errorDiv = document.getElementById("employerLoginError")
    function logIn(employer) {
        const returnVal = false;
        employers.map(e => {
            if (employer.email === e.email && employer.password === e.password) {
                errorDiv.innerHTML = ""
                returnVal = true;
            }
        })

        return returnVal;
    }

    const emails = employers.map(e => e.email)
   

    const valid = employer => {
        if (!emails.includes(employer.email)) {


            errorDiv.innerHTML = "Email is not registered"
        }

        else {
            employers.map(e => {
                if (employer.email === e.email && employer.password !== e.password) {



                    errorDiv.innerHTML = "Password is incorrect"
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

            let employer =
            {
                email: values.email,
                password: values.password,
            }

            const returnVal = logIn(employer)

            if (!returnVal)
                valid(employer)

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
                            <div id="employerLoginError"></div>
                        </form>



                    </GridColumn>



                </Grid>
            </Segment>

        </div>
    )
}
