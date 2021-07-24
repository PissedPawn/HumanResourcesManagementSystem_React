import axios from "axios";

export default class ApplicantService {

    getApplicants() {
        return axios.get("http://localhost:8080/api/applicants/getall")
    }

    addApplicant(applicant = {}) {
        return axios.post("http://localhost:8080/api/applicants/add", applicant)
    }

}