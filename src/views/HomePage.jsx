import React, { useEffect } from "react";
import PokeResults from "../components/PokeResults";
import SearchBar from "../components/SearchBar";

const HomePage = ({
  setFavPoke,
  favPoke,
  searchResults,
  setSearchResults,
  searchErr,
  setSearchErr,
}) => {
  // useEffect(() => {
  //   setSearchResults("");
  // }, []);

  return (
    <div>
      <SearchBar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setSearchErr={setSearchErr}
      />

      <PokeResults
        setFavPoke={setFavPoke}
        favPoke={favPoke}
        searchResults={searchResults}
        searchErr={searchErr}
      />
    </div>
  );
};

export default HomePage;
