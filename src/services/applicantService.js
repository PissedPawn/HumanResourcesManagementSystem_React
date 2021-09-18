import axios from "axios";

export default class ApplicantService {
  getApplicants() {
    return axios.get(
      "https://hrmsbackendjava.herokuapp.com/api/applicants/getall"
    );
  }

  addApplicant(applicant = {}) {
    return axios.post(
      "https://hrmsbackendjava.herokuapp.com/api/applicants/add",
      applicant
    );
  }

  getById(id) {
    return axios.get(
      "https://hrmsbackendjava.herokuapp.com/api/applicants/getbyId?id=" + id
    );
  }
}
