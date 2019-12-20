import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

const LocationsList = function () {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(response => {
                console.log(response.data.results);
                setLocations(response.data.results);
            })
            .catch(error => {
                console.log("data was not return", error);
            })
    },
        [])
    return (

        <div className="container">
            {locations.map((location, key) => {
                return (
                    <LocationCard
                        location={location}
                        key={key}
                    />
                );
            })}
        </div>

    )
}
export default LocationsList;