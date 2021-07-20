import axios from 'axios'

export default class CityService {
    getCities() {
        return axios.get("http://localhost:8080/api/cities/getAll")
    }

    addCity(city={}) {
        return axios.post("http://localhost:8080/api/cities/add", city)
    }

}