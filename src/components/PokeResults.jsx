import React from "react";

const PokeResults = ({ searchResults, setFavPoke, favPoke }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFavPoke((favPoke) => [...favPoke, searchResults]);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setFavPoke(favPoke.filter((pokes) => pokes.id !== searchResults.id));
  };
  return (
    <div>
      <h1>PokeResults</h1>

      <div>Name: {searchResults?.name}</div>
      <div>PokeId: {searchResults?.id}</div>
      {searchResults?.stats?.map((stats, i) => {
        return (
          <div key={i}>
            <div>
              {stats.stat.name} : {stats.base_stat}
            </div>
          </div>
        );
      })}

      <img src={searchResults?.sprites?.front_default} alt={favPoke.name} />
      <img src={searchResults?.sprites?.back_default} alt={favPoke.name} />
      <br></br>
      <img src={searchResults?.sprites?.front_shiny} alt={favPoke.name} />
      <img src={searchResults?.sprites?.back_shiny} alt={favPoke.name} />

      {favPoke?.includes(searchResults) ? (
        <button onClick={handleRemove}>Remove from favorites ❌</button>
      ) : (
        <button onClick={handleClick}>Favorite ❤️</button>
      )}
    </div>
  );
};

export default PokeResults;
