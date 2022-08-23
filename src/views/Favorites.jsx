import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  align-items: center;
  margin-top: 20px;
  max-height: 75vh;
  font-size: 40px;
  img {
    width: 200px;
  }
`;

const Favorites = ({ favPoke, user, setSinglePoke, setFavPoke }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      {favPoke.map((poke) => {
        return (
          <ContainerDiv style={{ flexDirection: "row" }}>
            <ContainerDiv>
              <Link
                to={`/favorites/${poke.name}`}
                onClick={() => setSinglePoke(poke)}
              >
                {poke.name}
              </Link>
              <img src={poke.sprites.front_default} alt={poke.name} />
              <button
                style={{ fontSize: "18px" }}
                onClick={() =>
                  setFavPoke(favPoke.filter((pokes) => pokes.id !== poke.id))
                }
              >
                Remove
              </button>
            </ContainerDiv>
          </ContainerDiv>
        );
      })}
    </div>
  );
};

export default Favorites;
