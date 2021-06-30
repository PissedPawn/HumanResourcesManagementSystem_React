import axios from 'axios'
import React from 'react'

export default class JobPostingService {
    getJobPostings() {
        return axios.get("http://localhost:8080/api/jobPostings/getAll")
    }


    addJobPosting() {
        return axios.post("http://localhost:8080/api/jobPostings/add")
    }
}
