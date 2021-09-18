import axios from "axios";

export default class JobPostingService {
  getJobPostings() {
    return axios.get(
      "https://hrmsbackendjava.herokuapp.com/api/jobPostings/getAll"
    );
  }

  getJobPostingsByCompanyName(companyName) {
    return axios.get(
      "https://hrmsbackendjava.herokuapp.com/api/jobPostings/getAllByCompanyName?companyName=" +
        companyName
    );
  }

  addJobPosting(jobPosting = {}) {
    return axios.post(
      "https://hrmsbackendjava.herokuapp.com/api/jobPostings/add",
      jobPosting
    );
  }
}
