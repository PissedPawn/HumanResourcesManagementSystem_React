import axios from 'axios'

export default class EmployerService {
    getEmployers() {
        return axios.get("https://hrmsbackendjava.herokuapp.com/api/employers/getall")
    }

    addEmployer(employer={}) {
        return axios.post("https://hrmsbackendjava.herokuapp.com/api/employers/add", employer)
    }

    getById(id) {
        return axios.get("https://hrmsbackendjava.herokuapp.com/api/employers/getById?id=" + id)
    }
}
