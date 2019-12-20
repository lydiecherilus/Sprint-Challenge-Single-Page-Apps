// import React, { useState, useEffect, Component } from "react";
// import styled from 'styled-components'
// import axios from "axios";



// const SearchForm = props => {

//   const [data, setData] = useState([]);
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     axios
//       .get(
//         `https://rickandmortyapi.com/api/character/`,

//       )
//       .then(response => {
//         console.log(response)
//         const characters = response.data.filter(
//           character =>
//             character.name
//               .toLowerCase()
//               .includes(query.toLowerCase())
//         );

//         setData(characters);
//       });
//   }, [query]);
//   const handleInputChange = event => {
//     setQuery(event.target.value);
//   };


//   return (
//     <section className="search-form">
//       <form className="search">
//         <input
//           type="text"
//           onChange={handleInputChange}
//           value={query}
//           name="name"
//           tabIndex="0"
//           className="prompt search-name"
//           placeholder="search by name"
//           autoComplete="off"
//         />
//       </form>
//       <div className="character-list">
//         <ul>
//           {searchResults.map(character => (
//             <li key={character}>{character}</li>
//           ))}
//         </ul>
//       </div>

//     // Add a search form here
//     </section>
//   );
// }


// export default SearchForm;