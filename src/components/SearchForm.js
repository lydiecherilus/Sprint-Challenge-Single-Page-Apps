import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import axios from "axios";

const SearchForm = props => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://rickandmortyapi.com/api/character/`,

            )
            .then(response => {
                const characters = response.data.results.filter(
                    character =>
                        character.name
                            .toLowerCase()
                            .includes(query.toLowerCase())
                );

                setData(characters);
            });
    }, [query]);
    const handleInputChange = event => {
        setQuery(event.target.value);
    };


    return (
        <section className="search-form">
            <form className="search">
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name"
                    placeholder="search by name"
                    autoComplete="off"
                />
            </form>

            <div className="character-list">
                {data.map(data => {
                    return (
                        <div
                            className="character-list"
                            key={data._id}
                        >
                            <h2 className="character-list-name">
                                {data.name}
                            </h2>

                            <h3 className="character_list_name">
                                {/* Gender: {data.gender} */}
                                Gender: {data.gender}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
export default SearchForm;