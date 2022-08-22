import React from "react";
import PokeResults from "../components/PokeResults";
import SearchBar from "../components/SearchBar";

const HomePage = ({ setFavPoke, favPoke, searchResults, setSearchResults }) => {
  return (
    <div>
      <SearchBar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />

      <PokeResults
        setFavPoke={setFavPoke}
        favPoke={favPoke}
        searchResults={searchResults}
      />
    </div>
  );
};

export default HomePage;
