import React from "react";
import styled from "styled-components";
import pokeDex from "../assets/pokedex.gif";
import pokeErr from "../assets/pokedexerror.gif";

const PokeImg = styled.img`
  height: 500px;
  width: auto;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

// const ErrContainerDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #f2f2f2;
// `;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
`;

const PokeResults = ({ searchResults, setFavPoke, favPoke, searchErr }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFavPoke((favPoke) => [...favPoke, searchResults]);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setFavPoke(favPoke.filter((pokes) => pokes.id !== searchResults.id));
  };
  return (
    <ContainerDiv>
      {searchResults && (
        <ContainerDiv>
          <h1>PokeResults</h1>
          <ContainerDiv>
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

            <ImgDiv>
              <img
                src={searchResults?.sprites?.front_default}
                alt={favPoke.name}
              />
              <img
                src={searchResults?.sprites?.back_default}
                alt={favPoke.name}
              />

              <img
                src={searchResults?.sprites?.front_shiny}
                alt={favPoke.name}
              />
              <img
                src={searchResults?.sprites?.back_shiny}
                alt={favPoke.name}
              />
            </ImgDiv>
            {favPoke.includes(searchResults) ? (
              <button onClick={handleRemove}>Remove from favorites ❌</button>
            ) : (
              <button onClick={handleClick}>Favorite ❤️</button>
            )}
          </ContainerDiv>
        </ContainerDiv>
      )}

      {searchErr !== true ? (
        <div>
          <PokeImg src={pokeDex} alt="pokedex" />
        </div>
      ) : (
        <div>
          <PokeImg src={pokeErr} alt="pokedex" />
        </div>
      )}
    </ContainerDiv>
  );
};

export default PokeResults;
