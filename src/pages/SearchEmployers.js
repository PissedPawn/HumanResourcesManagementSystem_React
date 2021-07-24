import React from 'react'
import SearchBar from '../layouts/SearchBar'
import { useState, useEffect } from 'react'
import EmployerService from '../services/employerService'
import BookData from "./Data.json"

export default function SearchEmployers() {


    const [employers, setemployers] = useState([])


    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers()
            .then(result => setemployers(result.data.data))
    }, [])


    return (
        <div>
            <SearchBar placeholder="Enter company name.." data={employers} />
        </div>
    )
}
