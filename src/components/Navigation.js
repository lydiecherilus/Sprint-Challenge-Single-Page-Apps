import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">

        <div>
          <Link to="/" className="nav-link">WelcomePage</Link>
        </div>

        <div>
          <Link to="/CharacterList" className="nav-link">CharacterList</Link>
        </div>

        <div>
          <Link to="/LocationsList" className="nav-link" >LocationsList</Link>
        </div>

      </div>
    </div>
  );
};
export default Navigation;
