import axios from 'axios'
import React from 'react'

export default class JobPostingService {
    getJobPostings() {
        return axios.get("http://localhost:8080/api/jobPostings/getAll")
    }

    getJobPostingsByCompanyName(companyName) {
        return axios.get("http://localhost:8080/api/jobPostings/getAllByCompanyName?companyName=" + companyName)
    }


    addJobPosting(jobPosting = {}) {
        return axios.post("http://localhost:8080/api/jobPostings/add", jobPosting)
    }
}
