import React from "react";

import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 25px;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
`;

const FavoriteDetails = ({ singlePoke }) => {
  return (
    <ContainerDiv>
      <h1>PokeResults</h1>
      <ContainerDiv>
        <div style={{ fontSize: "40px" }}>Name: {singlePoke.name}</div>
        <div style={{ fontSize: "32px" }}>PokeId: {singlePoke?.id}</div>
        {singlePoke?.stats?.map((stats, i) => {
          return (
            <div key={i}>
              <div>
                {stats.stat.name} : {stats.base_stat}
              </div>
            </div>
          );
        })}

        <ImgDiv>
          <img src={singlePoke?.sprites?.front_default} alt={singlePoke.name} />
          <img src={singlePoke?.sprites?.back_default} alt={singlePoke.name} />

          <img src={singlePoke?.sprites?.front_shiny} alt={singlePoke.name} />
          <img src={singlePoke?.sprites?.back_shiny} alt={singlePoke.name} />
        </ImgDiv>
      </ContainerDiv>
    </ContainerDiv>
  );
};

export default FavoriteDetails;
