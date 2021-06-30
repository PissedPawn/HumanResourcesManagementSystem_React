import axios from 'axios'
import React from 'react'

export default class EmployerService {
    getEmployers() {
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    addEmployer() {
        return axios.post("http://localhost:8080/api/employers/add")
    }
}
