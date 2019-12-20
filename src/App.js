import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <div>
        <Navigation />

        <Route path="/CharacterList">
          <CharacterList />
        </Route>

        <Route path="/LocationsList">
          <LocationsList />
        </Route>
      </div>
      <SearchForm />
    </main>
  );
}