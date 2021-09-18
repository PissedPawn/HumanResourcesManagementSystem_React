import axios from 'axios'

export default class CityService {
    getCities() {
        return axios.get("https://hrmsbackendjava.herokuapp.com/api/cities/getAll")
    }

    addCity(city={}) {
        return axios.post("https://hrmsbackendjava.herokuapp.com/api/cities/add", city)
    }

}
