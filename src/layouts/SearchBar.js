import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { Link } from 'react-router-dom'

export default function SearchBar({ placeholder, data }) {


    const [filteredData, setfilteredData] = useState([])

    const handleFilter = (event) => {
        const keyword = event.target.value
        const newFilter = data.filter(e => {
            return e.companyName.toLowerCase().includes(keyword.toLowerCase())
        })
        if (keyword === "")
            setfilteredData([])
        else
            setfilteredData(newFilter)
    }


    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter}></input>
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>

            {filteredData.length !== 0 && (
                <div className="dataResult">

                    {filteredData.slice(0, 5).map((value, key) => {
                        return <a key={key} className="dataItem" target='_blank'>
                            <Link to={`/employers/${value.id}`}>
                                <p key={key}>{value.companyName}</p>
                            </Link>
                        </a>
                    })}
                </div>
            )}
        </div>
    )
}
