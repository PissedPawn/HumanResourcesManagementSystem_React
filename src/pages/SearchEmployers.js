import React from 'react'
import SearchBar from '../layouts/SearchBar'
import { useState, useEffect } from 'react'
import EmployerService from '../services/employerService'

export default function SearchEmployers() {


    const [employers, setemployers] = useState([])


    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers()
            .then(result => setemployers(result.data.data))

    }, [])
    return (
        <div>
            <SearchBar placeholer="Enter company name.." data={employers} />
        </div>
    )
}
