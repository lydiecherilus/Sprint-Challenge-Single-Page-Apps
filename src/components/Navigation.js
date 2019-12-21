import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">

        <div>
          <Link to="/" className="nav-link">Welcome Page</Link>
        </div>

        <div>
          <Link to="/CharacterList" className="nav-link">Character List</Link>
        </div>

        <div>
          <Link to="/LocationsList" className="nav-link" >Locations List</Link>
        </div>

      </div>
    </div>
  );
};
export default Navigation;
