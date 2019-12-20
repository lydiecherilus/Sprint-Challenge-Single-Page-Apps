import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";


const CharacterList = function () {
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("data was not return", error);
      })


  }, []);

  return (

    <section className="character-list">

      {characters.map((character, key) => {
        return (
          <CharacterCard
            character={character}
            key={key}
          />
        );
      })}

      <h2></h2>
    </section>
  );
}
export default CharacterList;